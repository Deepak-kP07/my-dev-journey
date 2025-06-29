try {
    const ejs = require('ejs');
    console.log('EJS loaded successfully!');
    console.log('EJS version:', ejs.VERSION);
} catch (error) {
    console.error('EJS loading failed:', error.message);
    console.error('Full error:', error);
}

// Add this to test.js or create another test file
try {
    const ejsPath = require.resolve('ejs');
    console.log('EJS resolved to:', ejsPath);
} catch (error) {
    console.error('Cannot resolve EJS path:', error.message);
}