let express = require('express');
let app = express();
const project_folder = __dirname + '/dist/sigma-internship-frontend';
app.use(express.static(project_folder));
app.get('/*', (req, res) => {
  res.sendFile(project_folder + '/index.html');
});
const port = process.env.PORT || 4200;
app.listen(port);
console.log(`Application started on port: ${port}`)
