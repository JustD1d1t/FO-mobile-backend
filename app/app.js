import express from "express";
import { htmlRouter } from "./routes/html.js";

export const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use("/html", htmlRouter);

app.get("*", function (req, res) {
  res.json({ message: "Request failed" });
});
