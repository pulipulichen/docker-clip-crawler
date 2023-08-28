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

// Read the input file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  const lines = data.trim().split('\n');

  lines.forEach((line) => {
    const [url, outputPath] = line.split(',').map((field) => field.trim());

    // Extract directory from output path
    const outputDir = path.dirname(outputPath);

    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Download the URL and save to the output path
    // const file = fs.createWriteStream(outputPath);
    // https.get(url, (response) => {
      // response.pipe(file);
      // file.on('finish', () => {
        // file.close();

        // Run the Docker command
        const dockerCommand = `docker run singlefile "${url}" > "${outputPath}"`;
        exec(dockerCommand, (error) => {
          if (error) {
            console.error('Error running Docker command:', error);
          } else {
            console.log(`Downloaded ${url} and saved to ${outputPath}`);
          }
        });
      // });
    // }).on('error', (error) => {
    //   console.error('Error downloading URL:', error);
    // });
  });
});
