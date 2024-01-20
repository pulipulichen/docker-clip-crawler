const fs = require('fs');
const https = require('https');
const path = require('path');
const { exec } = require('child_process');

// Get the absolute path of the directory where the script is located
const scriptDir = __dirname;

// Change the current working directory to the script's directory
process.chdir(scriptDir);


// Input file containing URLs and output paths
const inputFilePath = './output/input.txt';

if (fs.existsSync(inputFilePath) === false) {
  process.exit(0)
}

const HTMLtoDOCX = require('html-to-docx');

function runDocker (url, outputPath) {
  return new Promise((resolve, reject) => {
    const dockerCommand = `docker run singlefile "${url}" > "${outputPath}"`;
    console.log(`[RUN] ${dockerCommand}`)
    exec(dockerCommand, async (error) => {
      if (error) {
        console.error('Error running Docker command:', error);
        reject(error)
      } else {
        console.log(`Downloaded ${url} and saved to ${outputPath}`);

        let htmlString = await fs.readFileSync(outputPath, 'utf8')
        const fileBuffer = await HTMLtoDOCX(htmlString, null, {
          table: { row: { cantSplit: true } },
          footer: true,
          pageNumber: true,
        });
      
        fs.writeFileSync(outputPath + '.docx', fileBuffer)

        resolve(true)
      }
    });
  })
}

// Read the input file
fs.readFile(inputFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  const lines = data.trim().split('\n');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    const [url, outputPath] = line.split(',').map((field) => field.trim());

    // Extract directory from output path
    const outputDir = path.dirname(outputPath);

    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await runDocker(url, outputPath)

    // Download the URL and save to the output path
    // const file = fs.createWriteStream(outputPath);
    // https.get(url, (response) => {
      // response.pipe(file);
      // file.on('finish', () => {
        // file.close();

        // Run the Docker command
        
      // });
    // }).on('error', (error) => {
    //   console.error('Error downloading URL:', error);
    // });
  }
});
