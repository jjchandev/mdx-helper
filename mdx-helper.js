const fs = require('fs').promises;  // Use promises for async/await
const path = require('path');

/**
 * Conversion: Replace newline characters with #NEWLINE# for single line formatting.
 * @param {string} text - The raw MDX content with newline characters.
 * @returns {string} - The single-line formatted text.
 */
function multilineToSingleLine(text) {
  return text.replace(/\n/g, '#NEWLINE#');
}

/**
 * Process the input MDX file, converting multi-line content to single-line format.
 * @param {string} inputFilePath - The path to the MDX input file.
 * @param {string} outputFilePath - The path to save the processed MDX file.
 * @returns {Promise<void>}
 */
async function processMDXFile(inputFilePath, outputFilePath) {
  try {
    // Read the input file content
    const mdxContent = await fs.readFile(inputFilePath, 'utf8');

    // Convert the content to single-line format
    const singleLineContent = multilineToSingleLine(mdxContent);

    // Save the processed content to the output file
    await fs.writeFile(outputFilePath, singleLineContent, 'utf8');
    console.log(`MDX file has been processed and saved to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error processing the MDX file: ${error.message}`);
  }
}

// Example usage: Adjust the file paths as needed
const inputFilePath = path.join(__dirname, 'input-file.mdx');  // Replace with actual input file
const outputFilePath = path.join(__dirname, 'output-file.mdx');  // Replace with desired output file

processMDXFile(inputFilePath, outputFilePath);
