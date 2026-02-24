/*
  Warnings:

  - Added the required column `nome_fantasia` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nr_cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nr_cnpj` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nr_cpf` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `razao_social` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Role" ADD VALUE 'MANAGER';
ALTER TYPE "Role" ADD VALUE 'OPERATOR';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "nome_fantasia" TEXT NOT NULL,
ADD COLUMN     "nr_cep" TEXT NOT NULL,
ADD COLUMN     "nr_cnpj" TEXT NOT NULL,
ADD COLUMN     "nr_cpf" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "razao_social" TEXT NOT NULL;
