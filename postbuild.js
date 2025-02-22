import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const sourceDir = path.join(__dirname, 'dist', 'public');
const destDir = path.join(__dirname, 'dist');

// Function to move files recursively
function moveFiles(source, dest) {
  // Read source directory
  const files = fs.readdirSync(source);

  // Process each file/directory
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(dest, file);

    // Get file stats
    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // If it's a directory, create it in destination and recurse
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      moveFiles(sourcePath, destPath);
      // Remove source directory after moving all contents
      fs.rmdirSync(sourcePath);
    } else {
      // If it's a file, move it to destination
      fs.renameSync(sourcePath, destPath);
    }
  });
}

try {
  // Move files from dist/public to dist
  moveFiles(sourceDir, destDir);
  // Remove the now-empty public directory
  fs.rmdirSync(sourceDir);
  console.log('Successfully moved build files to dist directory');
} catch (error) {
  console.error('Error moving build files:', error);
  process.exit(1);
}
