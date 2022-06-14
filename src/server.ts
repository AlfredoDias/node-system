import "express-async-errors";
import express, { NextFunction, request, Response } from "express";
import { routes } from "./routes";
import { appError } from "./errors/appError";

const app = express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request:request, response: Response, next: NextFunction) => {
    if (err instanceof appError) {
        return response.status(err.statusCode).json({
            status: "Error",
            message: err.message
        });
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error - ${err.message}`
    });
});

app.listen(1010, () => console.log("Server is running in port 1010 🚀"));