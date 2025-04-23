const express = require('express');
const app = express();
const port = 3000;

const myMiddleware = (req, res, next) => {
  console.log('middleware');
  next();
};

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('სერვერი მუშაობს და middleware გაეშვა!');
});

app.listen(port, () => {
  console.log(`სერვერი  ${port}`);
});
