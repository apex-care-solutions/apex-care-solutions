/*
  Warnings:

  - You are about to drop the `ServiceSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TechnicianSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_userId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSkill" DROP CONSTRAINT "ServiceSkill_serviceName_fkey";

-- DropForeignKey
ALTER TABLE "ServiceSkill" DROP CONSTRAINT "ServiceSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "Technician" DROP CONSTRAINT "Technician_userId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicianSkill" DROP CONSTRAINT "TechnicianSkill_technicianId_fkey";

-- DropTable
DROP TABLE "ServiceSkill";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "TechnicianSkill";

-- CreateTable
CREATE TABLE "TechnicianService" (
    "technicianId" INTEGER NOT NULL,
    "serviceName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TechnicianService_pkey" PRIMARY KEY ("technicianId","serviceName")
);

-- CreateIndex
CREATE INDEX "TechnicianService_technicianId_idx" ON "TechnicianService"("technicianId");

-- CreateIndex
CREATE INDEX "TechnicianService_serviceName_idx" ON "TechnicianService"("serviceName");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianService" ADD CONSTRAINT "TechnicianService_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianService" ADD CONSTRAINT "TechnicianService_serviceName_fkey" FOREIGN KEY ("serviceName") REFERENCES "Service"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technician" ADD CONSTRAINT "Technician_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
