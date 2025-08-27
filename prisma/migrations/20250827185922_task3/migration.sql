/*
  Warnings:

  - Added the required column `favouritedById` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Post" ADD COLUMN     "favouritedById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_favouritedById_fkey" FOREIGN KEY ("favouritedById") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
