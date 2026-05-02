const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const message = process.env.GREETING || 'Hello from Node.js!';
  res.send(`<h1>${message}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});