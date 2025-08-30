/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'BASIC');

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "isAdmin",
ADD COLUMN     "role" "public"."Role" NOT NULL DEFAULT 'BASIC';
