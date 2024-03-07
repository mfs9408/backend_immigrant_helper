import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use((req, res, next) => {
    res.send({foo: 'foo'})
});

app.listen(PORT, () => console.log(`server started on ${PORT}`));
