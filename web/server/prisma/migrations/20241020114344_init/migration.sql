-- CreateTable
CREATE TABLE "Client" (
    "ClientID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("ClientID")
);

-- CreateTable
CREATE TABLE "Request" (
    "RequestID" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "Service" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Priority" TEXT NOT NULL,
    "ClientID" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("RequestID")
);

-- CreateTable
CREATE TABLE "RequestMessage" (
    "RequestMessageID" SERIAL NOT NULL,
    "Content" TEXT NOT NULL,
    "RequestID" INTEGER NOT NULL,

    CONSTRAINT "RequestMessage_pkey" PRIMARY KEY ("RequestMessageID")
);

-- CreateTable
CREATE TABLE "Job" (
    "JobID" SERIAL NOT NULL,
    "RequestID" INTEGER NOT NULL,
    "TechnicianID" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("JobID")
);

-- CreateTable
CREATE TABLE "JobStatus" (
    "JobStatusID" SERIAL NOT NULL,
    "Message" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "JobID" INTEGER NOT NULL,

    CONSTRAINT "JobStatus_pkey" PRIMARY KEY ("JobStatusID")
);

-- CreateTable
CREATE TABLE "Review" (
    "ReviewID" SERIAL NOT NULL,
    "Feedback" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL,
    "JobID" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("ReviewID")
);

-- CreateTable
CREATE TABLE "Technician" (
    "TechnicianID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Company" TEXT NOT NULL,

    CONSTRAINT "Technician_pkey" PRIMARY KEY ("TechnicianID")
);

-- CreateTable
CREATE TABLE "TechnicianSkill" (
    "TechnicianSkillID" SERIAL NOT NULL,
    "TechnicianID" INTEGER NOT NULL,
    "SkillID" INTEGER NOT NULL,

    CONSTRAINT "TechnicianSkill_pkey" PRIMARY KEY ("TechnicianSkillID")
);

-- CreateTable
CREATE TABLE "Skill" (
    "SkillID" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("SkillID")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "SubscriptionID" SERIAL NOT NULL,
    "DateSubscribed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ClientID" INTEGER NOT NULL,
    "TermID" INTEGER NOT NULL,
    "PackageID" INTEGER NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("SubscriptionID")
);

-- CreateTable
CREATE TABLE "Term" (
    "TermID" SERIAL NOT NULL,
    "Term" TEXT NOT NULL,
    "RelevantRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Term_pkey" PRIMARY KEY ("TermID")
);

-- CreateTable
CREATE TABLE "Package" (
    "PackageID" SERIAL NOT NULL,
    "Description" TEXT NOT NULL,
    "FlatRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("PackageID")
);

-- CreateTable
CREATE TABLE "PackageService" (
    "PackageServiceID" SERIAL NOT NULL,
    "PackageID" INTEGER NOT NULL,
    "ServiceID" INTEGER NOT NULL,

    CONSTRAINT "PackageService_pkey" PRIMARY KEY ("PackageServiceID")
);

-- CreateTable
CREATE TABLE "PackagePromotion" (
    "PackagePromotionID" SERIAL NOT NULL,
    "Discount" DOUBLE PRECISION NOT NULL,
    "ValidFrom" TIMESTAMP(3) NOT NULL,
    "ValidTo" TIMESTAMP(3) NOT NULL,
    "PackageID" INTEGER NOT NULL,

    CONSTRAINT "PackagePromotion_pkey" PRIMARY KEY ("PackagePromotionID")
);

-- CreateTable
CREATE TABLE "Service" (
    "ServiceID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("ServiceID")
);

-- CreateIndex
CREATE INDEX "Request_ClientID_idx" ON "Request"("ClientID");

-- CreateIndex
CREATE INDEX "RequestMessage_RequestID_idx" ON "RequestMessage"("RequestID");

-- CreateIndex
CREATE INDEX "Job_RequestID_idx" ON "Job"("RequestID");

-- CreateIndex
CREATE INDEX "Job_TechnicianID_idx" ON "Job"("TechnicianID");

-- CreateIndex
CREATE INDEX "JobStatus_JobID_idx" ON "JobStatus"("JobID");

-- CreateIndex
CREATE INDEX "Review_JobID_idx" ON "Review"("JobID");

-- CreateIndex
CREATE INDEX "TechnicianSkill_TechnicianID_idx" ON "TechnicianSkill"("TechnicianID");

-- CreateIndex
CREATE INDEX "TechnicianSkill_SkillID_idx" ON "TechnicianSkill"("SkillID");

-- CreateIndex
CREATE INDEX "Subscription_ClientID_idx" ON "Subscription"("ClientID");

-- CreateIndex
CREATE INDEX "Subscription_TermID_idx" ON "Subscription"("TermID");

-- CreateIndex
CREATE INDEX "Subscription_PackageID_idx" ON "Subscription"("PackageID");

-- CreateIndex
CREATE INDEX "PackageService_PackageID_idx" ON "PackageService"("PackageID");

-- CreateIndex
CREATE INDEX "PackageService_ServiceID_idx" ON "PackageService"("ServiceID");

-- CreateIndex
CREATE INDEX "PackagePromotion_PackageID_idx" ON "PackagePromotion"("PackageID");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_ClientID_fkey" FOREIGN KEY ("ClientID") REFERENCES "Client"("ClientID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestMessage" ADD CONSTRAINT "RequestMessage_RequestID_fkey" FOREIGN KEY ("RequestID") REFERENCES "Request"("RequestID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_TechnicianID_fkey" FOREIGN KEY ("TechnicianID") REFERENCES "Technician"("TechnicianID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_RequestID_fkey" FOREIGN KEY ("RequestID") REFERENCES "Request"("RequestID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobStatus" ADD CONSTRAINT "JobStatus_JobID_fkey" FOREIGN KEY ("JobID") REFERENCES "Job"("JobID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_JobID_fkey" FOREIGN KEY ("JobID") REFERENCES "Job"("JobID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianSkill" ADD CONSTRAINT "TechnicianSkill_TechnicianID_fkey" FOREIGN KEY ("TechnicianID") REFERENCES "Technician"("TechnicianID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicianSkill" ADD CONSTRAINT "TechnicianSkill_SkillID_fkey" FOREIGN KEY ("SkillID") REFERENCES "Skill"("SkillID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_ClientID_fkey" FOREIGN KEY ("ClientID") REFERENCES "Client"("ClientID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_TermID_fkey" FOREIGN KEY ("TermID") REFERENCES "Term"("TermID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_PackageID_fkey" FOREIGN KEY ("PackageID") REFERENCES "Package"("PackageID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageService" ADD CONSTRAINT "PackageService_PackageID_fkey" FOREIGN KEY ("PackageID") REFERENCES "Package"("PackageID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageService" ADD CONSTRAINT "PackageService_ServiceID_fkey" FOREIGN KEY ("ServiceID") REFERENCES "Service"("ServiceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackagePromotion" ADD CONSTRAINT "PackagePromotion_PackageID_fkey" FOREIGN KEY ("PackageID") REFERENCES "Package"("PackageID") ON DELETE RESTRICT ON UPDATE CASCADE;
