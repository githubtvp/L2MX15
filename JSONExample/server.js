const express = require('express');
const app = express();
const port = 3000;

// Determine the root directory of your project
const rootDir = process.cwd();

// Serve the HTML and JSON files
app.use(express.static(rootDir));
app.use('/data', express.static(rootDir + '/data.json'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
