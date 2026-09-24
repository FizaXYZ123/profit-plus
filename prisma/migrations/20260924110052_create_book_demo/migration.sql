/*
  Warnings:

  - You are about to drop the `contactUs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "contactUs";

-- CreateTable
CREATE TABLE "bookDemo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookDemo_pkey" PRIMARY KEY ("id")
);
