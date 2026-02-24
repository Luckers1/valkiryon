/*
  Warnings:

  - You are about to drop the `OlxToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OlxToken";

-- CreateTable
CREATE TABLE "olxtoken" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "olxtoken_pkey" PRIMARY KEY ("id")
);
