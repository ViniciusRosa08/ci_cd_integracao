const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors());
app.get('/getData', (_req, res) => {
  res.send('Lucas Christian Freitas de Oliveira - DSM - CI/CD');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});