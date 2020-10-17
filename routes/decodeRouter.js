import express from "express";
import decodeController from "../controller/decodeController.js"

const app = express();
app.get('/decode/:code',decodeController.decode);

export  { app as decodeRouter };