import { prisma } from '../lib/prisma.js'
import { hash } from 'bcryptjs';

interface CreateUserDTO {
    name: string,
    email: string,
    password: string,
    nr_cpf: string,
    nr_cnpj: string,
    phone: string,
    nr_cep: string,
    razao_social: string,
    nome_fantasia: string
}

export class UserService {
    async create({ name, email, password, nr_cpf, nr_cnpj, phone, nr_cep, razao_social, nome_fantasia }: CreateUserDTO) {
        const userAlreadyExists = await prisma.user.findUnique({ where: {email} });

        if (userAlreadyExists) {
        throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    return await prisma.user.create({
        data: { name, email, password: passwordHash, nr_cpf, nr_cnpj, phone, nr_cep, razao_social, nome_fantasia }
    });

    }
    async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id: string) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CreateUserDTO>) {
    return await prisma.user.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return await prisma.user.delete({ where: { id } });
  }
}