/*
  Warnings:

  - You are about to drop the `Term` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Term" DROP CONSTRAINT "Term_subscriptionId_fkey";

-- DropTable
DROP TABLE "Term";
