import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const sourceDir = path.join(__dirname, 'dist', 'public');
const destDir = path.join(__dirname, 'dist');

// Function to ensure directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to copy files recursively
function copyFiles(source, dest) {
  // Skip if source and dest are the same
  if (source === dest) return;

  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(dest, file);

    const stats = fs.statSync(sourcePath);
    if (stats.isDirectory()) {
      // For directories, recursively copy
      ensureDirectoryExists(destPath);
      copyFiles(sourcePath, destPath);
    } else {
      // For files, copy to destination
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

// Function to remove directory recursively
function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

try {
  // If the source directory exists and contains files
  if (fs.existsSync(sourceDir) && fs.readdirSync(sourceDir).length > 0) {
    console.log('Moving files from dist/public to dist...');

    // Copy all files from dist/public to dist
    copyFiles(sourceDir, destDir);

    // Remove the public directory after copying
    removeDirectory(sourceDir);

    // Additional cleanup - remove any empty directories
    const dirs = fs.readdirSync(destDir);
    dirs.forEach(dir => {
      const fullPath = path.join(destDir, dir);
      if (fs.statSync(fullPath).isDirectory() && fs.readdirSync(fullPath).length === 0) {
        removeDirectory(fullPath);
      }
    });

    console.log('Successfully moved build files to dist directory');
  } else {
    console.log('dist/public directory not found or empty, assuming files are already in correct location');
  }
} catch (error) {
  console.error('Error processing build files:', error);
  process.exit(1);
}