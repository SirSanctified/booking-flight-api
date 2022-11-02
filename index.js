import express from "express"
import routes from "./routes/flightRoute.js"

const app = express();

app.use(express.json());

app.use("/", routes)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});