import express from 'express';
import path, { resolve } from "path";
// import dotenv from 'dotenv';
//
// dotenv.config();
const app = express();
const port = 8000;
const filePath = path.dirname('index.html');
console.log(filePath);
app.get('/', (req, res) => {
    // res.sendFile(filePath, {root: path.dirname("")})
    let x = path.dirname("./dist/index.html");
    const absolutePath = resolve('./dist/index.html');
    res.sendFile(absolutePath);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
