import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

const bandNameGenerator = (req, res, next) => {
  bandName = req.body.street.concat(req.body.pet)
  next();
};

app.use(bandNameGenerator);

app.post("/submit", (req, res) => {
  res.send(`
    <h1>O Nome da sua banda é:</h1>
    <h2>${bandName} ✌️</h2>
    `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
