import { Request, response, Response } from "express";
import { userCase } from "./userCase";

export class userController {
    async handle(req: Request, res: Response) {
        const { username, password, name } = req.body

        const createUser = new userCase();

        const result = await createUser.execute({ username, password, name });

        return res.status(201).json(result);
    }
}