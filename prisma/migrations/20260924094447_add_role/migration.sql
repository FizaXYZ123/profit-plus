-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('ADMIN', 'USER', 'ACCOUNTANT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "userRole" NOT NULL DEFAULT 'USER';
