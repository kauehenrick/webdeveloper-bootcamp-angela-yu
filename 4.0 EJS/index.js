import express from "express";

const app = express();

const day = new Date();
export const weekday = day.getDay();

app.get("/", (req, res) => {
  res.render("index.ejs",
    weekday === 0 || weekday === 6
      ? { day: "the weekend", advice: "have fun" }
      : { day: "a weeday", advice: "workhard" }
  );
});

app.listen(3000, () => {
  console.log("Server listen on port 3000!");
});