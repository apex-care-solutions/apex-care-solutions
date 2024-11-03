/*
  Warnings:

  - You are about to drop the column `location` on the `JobRequest` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `JobRequest` table. All the data in the column will be lost.
  - You are about to drop the column `service` on the `JobRequest` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `JobRequest` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `flatRate` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `validFrom` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `validTo` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `dateSubscribed` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `termId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `preferredContact` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `relevantRate` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `term` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `preferredContact` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `RequestMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TechnicianSkill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[staffId]` on the table `Technician` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subscriptionId]` on the table `Term` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `JobRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validUntil` to the `PackagePromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `staffId` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Term` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionId` to the `Term` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "contactMethod" AS ENUM ('EMAIL', 'PHONE', 'SMS', 'NONE');

-- CreateEnum
CREATE TYPE "userType" AS ENUM ('ADMIN', 'TECHNICIAN', 'HELPDESK_MANAGER', 'CUSTOMER');

-- DropForeignKey
ALTER TABLE "JobStatus" DROP CONSTRAINT "JobStatus_jobId_fkey";

-- DropForeignKey
ALTER TABLE "RequestMessage" DROP CONSTRAINT "RequestMessage_jobRequestId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_jobId_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_termId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_technicianId_fkey";

-- DropIndex
DROP INDEX "Job_jobRequestId_idx";

-- DropIndex
DROP INDEX "Job_technicianId_idx";

-- DropIndex
DROP INDEX "JobRequest_userId_idx";

-- DropIndex
DROP INDEX "JobStatus_jobId_idx";

-- DropIndex
DROP INDEX "PackagePromotion_packageId_idx";

-- DropIndex
DROP INDEX "PackageService_packageId_idx";

-- DropIndex
DROP INDEX "PackageService_serviceId_idx";

-- DropIndex
DROP INDEX "Subscription_packageId_idx";

-- DropIndex
DROP INDEX "Subscription_termId_idx";

-- DropIndex
DROP INDEX "Subscription_userId_idx";

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "JobRequest" DROP COLUMN "location",
DROP COLUMN "priority",
DROP COLUMN "service",
DROP COLUMN "type",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "JobStatus" DROP COLUMN "jobId",
DROP COLUMN "message",
DROP COLUMN "timestamp",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Package" DROP COLUMN "flatRate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PackagePromotion" DROP COLUMN "validFrom",
DROP COLUMN "validTo",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "validUntil" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PackageService" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "dateSubscribed",
DROP COLUMN "termId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Technician" DROP COLUMN "company",
DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "location",
DROP COLUMN "phone",
DROP COLUMN "preferredContact",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "specialty" TEXT NOT NULL,
ADD COLUMN     "staffId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Term" DROP COLUMN "relevantRate",
DROP COLUMN "term",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "subscriptionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "preferredContact",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "preferredContactMethod" "contactMethod" NOT NULL DEFAULT 'NONE',
ADD COLUMN     "userType" "userType" NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "RequestMessage";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "TechnicianSkill";

-- DropEnum
DROP TYPE "ContactMethod";

-- CreateTable
CREATE TABLE "JobStatusUpdate" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "jobStatusId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobStatusUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Helpdesk" (
    "id" SERIAL NOT NULL,
    "staffId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Helpdesk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_userId_key" ON "Staff"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Technician_staffId_key" ON "Technician"("staffId");

-- CreateIndex
CREATE UNIQUE INDEX "Term_subscriptionId_key" ON "Term"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Term" ADD CONSTRAINT "Term_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobStatusUpdate" ADD CONSTRAINT "JobStatusUpdate_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobStatusUpdate" ADD CONSTRAINT "JobStatusUpdate_jobStatusId_fkey" FOREIGN KEY ("jobStatusId") REFERENCES "JobStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technician" ADD CONSTRAINT "Technician_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Helpdesk" ADD CONSTRAINT "Helpdesk_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
