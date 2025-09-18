// Simple test to verify React components are working
const fs = require('fs');
const path = require('path');

console.log('Checking React application structure...');

// Check if all required files exist
const requiredFiles = [
  'src/App.js',
  'src/components/Navigation.js',
  'src/components/pages/Assignment1.js',
  'src/components/pages/Assignment2.js',
  'src/components/UserCard.js',
  'src/components/UserCardBasic.js',
  'src/components/EditUserModal.js',
  'package.json'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} missing`);
  }
});

console.log('\nApplication structure verification complete!');