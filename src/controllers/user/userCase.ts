import { User } from "@prisma/client";
import { userCaseDto } from "../../dtos/userCaseDto";
import { appError } from "../../errors/appError";
import { prisma } from "../../prisma/client";

export class userCase {
    async execute({username, password, name}: userCaseDto): Promise<User> {
        
        // Verificar se o usuário existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                username
            }
        });

        if (userAlreadyExists) {
            // Erro
            throw new appError("User already exists");
            
        }

        // Criar o usuário
        const user = await prisma.user.create({
            data: {
                username,
                password,
                name
            }
        });

        return user;
    }
}