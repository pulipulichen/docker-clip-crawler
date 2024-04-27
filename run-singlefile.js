const fs = require('fs');
const https = require('https');
const path = require('path');
const { exec } = require('child_process');

const PROXY = `https://script.google.com/macros/s/AKfycbzvvbn-FepcAJl1Ro3tgo0P4dXotOl81d4hcp4n4fNu_2RASYtO1idg6uxi0m7SXWtOMw/exec?proxy=`

// Get the absolute path of the directory where the script is located
const scriptDir = __dirname;

// Change the current working directory to the script's directory
process.chdir(scriptDir);


// Input file containing URLs and output paths
const inputFilePath = '/output/input.txt';

if (fs.existsSync(inputFilePath) === false) {
  console.log(`${inputFilePath} does not exists`)
  process.exit(0)
}

const HTMLtoDOCX = require('html-to-docx');

function runDocker (url, outputPath) {
  if (fs.existsSync(outputPath + '.docx')) {
    return true
  }

  return new Promise((resolve, reject) => {

    let tmpFile = `/tmp/file.html`
    if (fs.existsSync(tmpFile)) {
      fs.unlinkSync(tmpFile)
    }
    if (fs.existsSync(tmpFile + '.docx')) {
      fs.unlinkSync(tmpFile + '.docx')
    } 

    const dockerCommand = `docker run singlefile "${url}" > "${outputPath}"`;
//     const dockerCommandProxy = `docker run singlefile "${url}" > "${tmpFile}"`;
    const dockerCommandProxy = `single-file "${url}" > "${tmpFile}"`;
    console.log(`[RUN] ${dockerCommand}`)
    exec(dockerCommandProxy, async (error) => {
      if (error) {
        console.error('Error running Docker command:', error);
        reject(error)
      } else {
        console.log(`Downloaded ${url} and saved to ${tmpFile}`);

        if (!fs.existsSync(outputPath)) {
          fs.copyFileSync(tmpFile, outputPath)
        }

        if (fs.existsSync(outputPath + '.docx') === false) {
          let htmlString = await fs.readFileSync(tmpFile, 'utf8')
          const fileBuffer = await HTMLtoDOCX(htmlString, null, {
            table: { row: { cantSplit: true } },
            footer: true,
            pageNumber: true,
          });
        
          fs.writeFileSync(tmpFile + '.docx', fileBuffer)
          fs.copyFileSync(tmpFile + '.docx', outputPath + '.docx')
        }
          

        
        

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

  console.log(data)

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
