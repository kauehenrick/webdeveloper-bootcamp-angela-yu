import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

const passCheck = (req, res, next) => {
  userIsAuthorised = req.body.password === "ILoveProgramming" ? true : false;
  next();
};

app.use(passCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  userIsAuthorised
    ? res.sendFile(__dirname + "/public/secret.html")
    : res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
