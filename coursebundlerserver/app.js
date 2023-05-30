// for use ES6 import
import express from "express";
import dotenv from 'dotenv';
// connect env
dotenv.config(
    { path: "./coursebundlerserver/config/.env" }
);

const app = express();


export default app;
