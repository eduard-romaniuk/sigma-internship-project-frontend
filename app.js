let express = require('express');
let app = express();
const project_folder = __dirname + '/dist/sigma-internship-frontend';
app.use(express.static(project_folder));
app.get('/*', (req, res) => {
  res.sendFile(project_folder + '/index.html');
});
app.listen(process.env.PORT || 8080);
