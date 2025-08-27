-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_favouritedById_fkey";

-- AlterTable
ALTER TABLE "public"."Post" ALTER COLUMN "favouritedById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_favouritedById_fkey" FOREIGN KEY ("favouritedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
