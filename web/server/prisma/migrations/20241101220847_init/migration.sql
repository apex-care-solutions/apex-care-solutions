/*
  Warnings:

  - The primary key for the `Job` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JobID` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `RequestID` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `TechnicianID` on the `Job` table. All the data in the column will be lost.
  - The primary key for the `JobStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `JobID` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `JobStatusID` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `Message` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `JobStatus` table. All the data in the column will be lost.
  - You are about to drop the column `Timestamp` on the `JobStatus` table. All the data in the column will be lost.
  - The primary key for the `Package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `FlatRate` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `PackageID` on the `Package` table. All the data in the column will be lost.
  - The primary key for the `PackagePromotion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Discount` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `PackageID` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `PackagePromotionID` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `ValidFrom` on the `PackagePromotion` table. All the data in the column will be lost.
  - You are about to drop the column `ValidTo` on the `PackagePromotion` table. All the data in the column will be lost.
  - The primary key for the `PackageService` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `PackageID` on the `PackageService` table. All the data in the column will be lost.
  - You are about to drop the column `PackageServiceID` on the `PackageService` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceID` on the `PackageService` table. All the data in the column will be lost.
  - The primary key for the `RequestMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Content` on the `RequestMessage` table. All the data in the column will be lost.
  - You are about to drop the column `RequestID` on the `RequestMessage` table. All the data in the column will be lost.
  - You are about to drop the column `RequestMessageID` on the `RequestMessage` table. All the data in the column will be lost.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Feedback` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `JobID` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `ReviewID` on the `Review` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `ServiceID` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Description` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `SkillID` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Skill` table. All the data in the column will be lost.
  - The primary key for the `Subscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ClientID` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `DateSubscribed` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `PackageID` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `SubscriptionID` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `TermID` on the `Subscription` table. All the data in the column will be lost.
  - The primary key for the `Technician` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Company` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Technician` table. All the data in the column will be lost.
  - You are about to drop the column `TechnicianID` on the `Technician` table. All the data in the column will be lost.
  - The primary key for the `TechnicianSkill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `SkillID` on the `TechnicianSkill` table. All the data in the column will be lost.
  - You are about to drop the column `TechnicianID` on the `TechnicianSkill` table. All the data in the column will be lost.
  - You are about to drop the column `TechnicianSkillID` on the `TechnicianSkill` table. All the data in the column will be lost.
  - The primary key for the `Term` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `RelevantRate` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `Term` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the column `TermID` on the `Term` table. All the data in the column will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jobRequestId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technicianId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `JobStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `JobStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `JobStatus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flatRate` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `PackagePromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageId` to the `PackagePromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validFrom` to the `PackagePromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validTo` to the `PackagePromotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageId` to the `PackageService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `PackageService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `RequestMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobRequestId` to the `RequestMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedback` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Technician` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillId` to the `TechnicianSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technicianId` to the `TechnicianSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relevantRate` to the `Term` table without a default value. This is not possible if the table is not empty.
  - Added the required column `term` to the `Term` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ContactMethod" AS ENUM ('EMAIL', 'PHONE', 'SMS', 'NONE');

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_RequestID_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_TechnicianID_fkey";

-- DropForeignKey
ALTER TABLE "JobStatus" DROP CONSTRAINT "JobStatus_JobID_fkey";

-- DropForeignKey
ALTER TABLE "PackagePromotion" DROP CONSTRAINT "PackagePromotion_PackageID_fkey";

-- DropForeignKey
ALTER TABLE "PackageService" DROP CONSTRAINT "PackageService_PackageID_fkey";

-- DropForeignKey
ALTER TABLE "PackageService" DROP CONSTRAINT "PackageService_ServiceID_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_ClientID_fkey";

-- DropForeignKey
ALTER TABLE "RequestMessage" DROP CONSTRAINT "RequestMessage_RequestID_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_JobID_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_ClientID_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_PackageID_fkey";

-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_TermID_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_SkillID_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_TechnicianID_fkey";

-- DropIndex
DROP INDEX "Job_RequestID_idx";

-- DropIndex
DROP INDEX "Job_TechnicianID_idx";

-- DropIndex
DROP INDEX "JobStatus_JobID_idx";

-- DropIndex
DROP INDEX "PackagePromotion_PackageID_idx";

-- DropIndex
DROP INDEX "PackageService_PackageID_idx";

-- DropIndex
DROP INDEX "PackageService_ServiceID_idx";

-- DropIndex
DROP INDEX "RequestMessage_RequestID_idx";

-- DropIndex
DROP INDEX "Review_JobID_idx";

-- DropIndex
DROP INDEX "Subscription_ClientID_idx";

-- DropIndex
DROP INDEX "Subscription_PackageID_idx";

-- DropIndex
DROP INDEX "Subscription_TermID_idx";

-- DropIndex
DROP INDEX "TechnicianSkill_SkillID_idx";

-- DropIndex
DROP INDEX "TechnicianSkill_TechnicianID_idx";

-- AlterTable
ALTER TABLE "Job" DROP CONSTRAINT "Job_pkey",
DROP COLUMN "JobID",
DROP COLUMN "RequestID",
DROP COLUMN "TechnicianID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "jobRequestId" INTEGER NOT NULL,
ADD COLUMN     "technicianId" INTEGER NOT NULL,
ADD CONSTRAINT "Job_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "JobStatus" DROP CONSTRAINT "JobStatus_pkey",
DROP COLUMN "JobID",
DROP COLUMN "JobStatusID",
DROP COLUMN "Message",
DROP COLUMN "Status",
DROP COLUMN "Timestamp",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "jobId" INTEGER NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "JobStatus_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Package" DROP CONSTRAINT "Package_pkey",
DROP COLUMN "Description",
DROP COLUMN "FlatRate",
DROP COLUMN "PackageID",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "flatRate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Package_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PackagePromotion" DROP CONSTRAINT "PackagePromotion_pkey",
DROP COLUMN "Discount",
DROP COLUMN "PackageID",
DROP COLUMN "PackagePromotionID",
DROP COLUMN "ValidFrom",
DROP COLUMN "ValidTo",
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "packageId" INTEGER NOT NULL,
ADD COLUMN     "validFrom" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "validTo" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "PackagePromotion_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PackageService" DROP CONSTRAINT "PackageService_pkey",
DROP COLUMN "PackageID",
DROP COLUMN "PackageServiceID",
DROP COLUMN "ServiceID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "packageId" INTEGER NOT NULL,
ADD COLUMN     "serviceId" INTEGER NOT NULL,
ADD CONSTRAINT "PackageService_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RequestMessage" DROP CONSTRAINT "RequestMessage_pkey",
DROP COLUMN "Content",
DROP COLUMN "RequestID",
DROP COLUMN "RequestMessageID",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "jobRequestId" INTEGER NOT NULL,
ADD CONSTRAINT "RequestMessage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "Feedback",
DROP COLUMN "JobID",
DROP COLUMN "Rating",
DROP COLUMN "ReviewID",
ADD COLUMN     "feedback" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "jobId" INTEGER NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "Description",
DROP COLUMN "Name",
DROP COLUMN "ServiceID",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
DROP COLUMN "Description",
DROP COLUMN "SkillID",
DROP COLUMN "Type",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_pkey",
DROP COLUMN "ClientID",
DROP COLUMN "DateSubscribed",
DROP COLUMN "PackageID",
DROP COLUMN "SubscriptionID",
DROP COLUMN "TermID",
ADD COLUMN     "dateSubscribed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "packageId" INTEGER NOT NULL,
ADD COLUMN     "termId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Technician" DROP CONSTRAINT "Technician_pkey",
DROP COLUMN "Company",
DROP COLUMN "Email",
DROP COLUMN "FirstName",
DROP COLUMN "LastName",
DROP COLUMN "Location",
DROP COLUMN "Phone",
DROP COLUMN "TechnicianID",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "preferredContact" "ContactMethod" NOT NULL DEFAULT 'EMAIL',
ADD CONSTRAINT "Technician_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_pkey",
DROP COLUMN "SkillID",
DROP COLUMN "TechnicianID",
DROP COLUMN "TechnicianSkillID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "skillId" INTEGER NOT NULL,
ADD COLUMN     "technicianId" INTEGER NOT NULL,
ADD CONSTRAINT "TechnicianSkill_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Term" DROP CONSTRAINT "Term_pkey",
DROP COLUMN "RelevantRate",
DROP COLUMN "Term",
DROP COLUMN "TermID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "relevantRate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "term" TEXT NOT NULL,
ADD CONSTRAINT "Term_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "preferredContact" "ContactMethod" NOT NULL DEFAULT 'EMAIL',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobRequest" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "JobRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JobRequest_userId_idx" ON "JobRequest"("userId");

-- CreateIndex
CREATE INDEX "Job_jobRequestId_idx" ON "Job"("jobRequestId");

-- CreateIndex
CREATE INDEX "Job_technicianId_idx" ON "Job"("technicianId");

-- CreateIndex
CREATE INDEX "JobStatus_jobId_idx" ON "JobStatus"("jobId");

-- CreateIndex
CREATE INDEX "PackagePromotion_packageId_idx" ON "PackagePromotion"("packageId");

-- CreateIndex
CREATE INDEX "PackageService_packageId_idx" ON "PackageService"("packageId");

-- CreateIndex
CREATE INDEX "PackageService_serviceId_idx" ON "PackageService"("serviceId");

-- CreateIndex
CREATE INDEX "RequestMessage_jobRequestId_idx" ON "RequestMessage"("jobRequestId");

-- CreateIndex
CREATE INDEX "Review_jobId_idx" ON "Review"("jobId");

-- CreateIndex
CREATE INDEX "Subscription_userId_idx" ON "Subscription"("userId");

-- CreateIndex
CREATE INDEX "Subscription_termId_idx" ON "Subscription"("termId");

-- CreateIndex
CREATE INDEX "Subscription_packageId_idx" ON "Subscription"("packageId");

-- CreateIndex
CREATE INDEX "TechnicianSkill_technicianId_idx" ON "TechnicianSkill"("technicianId");

-- CreateIndex
CREATE INDEX "TechnicianSkill_skillId_idx" ON "TechnicianSkill"("skillId");

-- AddForeignKey
ALTER TABLE "JobRequest" ADD CONSTRAINT "JobRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestMessage" ADD CONSTRAINT "RequestMessage_jobRequestId_fkey" FOREIGN KEY ("jobRequestId") REFERENCES "JobRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobRequestId_fkey" FOREIGN KEY ("jobRequestId") REFERENCES "JobRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobStatus" ADD CONSTRAINT "JobStatus_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianSkill" ADD CONSTRAINT "TechnicianSkill_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianSkill" ADD CONSTRAINT "TechnicianSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageService" ADD CONSTRAINT "PackageService_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageService" ADD CONSTRAINT "PackageService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagePromotion" ADD CONSTRAINT "PackagePromotion_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
