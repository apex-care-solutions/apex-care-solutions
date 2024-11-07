import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 
export async function seedDb(){
  await prisma.packageService.deleteMany();
  await prisma.packagePromotion.deleteMany();
  await prisma.package.deleteMany();
  await prisma.jobStatusUpdate.deleteMany();
  await prisma.technicianService.deleteMany();
  await prisma.technician.deleteMany();
  await prisma.jobStatus.deleteMany();
  await prisma.subscription.deleteMany(); 
  await prisma.job.deleteMany();
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  await prisma.service.createMany({
    data: [
      { name: 'Janitorial Services', description: 'Routine cleaning and upkeep of facilities.' },
      { name: 'General Maintenance', description: 'General Maintainance covering basics.' },
      { name: 'Lighting Maintenance', description: 'Replacing and repairing light fixtures and bulbs.' },
      { name: 'Basic IT Support', description: 'Handling basic IT-related support tasks.' },
      { name: 'Plumbing', description: 'Fixing plumbing issues, leaks, and routine inspections.' },
      { name: 'Pest Control', description: 'Preventing and removing pests to maintain a safe environment.' },
      { name: 'HVAC Maintenance', description: 'Maintaining heating, ventilation, and air conditioning systems.' },
      { name: 'Electrical Systems', description: 'Inspecting, repairing, and upgrading electrical wiring and fixtures.' },
      { name: 'Network Management', description: 'Managing network connectivity, troubleshooting, and system optimization.' },
      { name: 'Fire Safety and Compliance', description: 'Ensuring fire extinguishers, detectors, and exits meet safety standards.' },
      { name: 'Vibration Analysis', description: 'Monitoring equipment vibrations to predict and prevent failures.' },
      { name: 'Calibration Services', description: 'Ensuring equipment operates accurately by recalibrating as needed.' },
      { name: 'Real-time Monitoring', description: 'Using sensors and diagnostics for continuous equipment monitoring.' },
      { name: 'Disaster Recovery Planning', description: 'Developing strategies for data and system recovery in emergencies.' },
      { name: 'Energy Efficiency Audits', description: 'Assessing and optimizing energy usage in facilities.' },
      { name: 'Advanced IT Support', description: 'Providing advanced cybersecurity and infrastructure management.' },
      { name: 'Specialized Machinery Maintenance', description: 'Advanced diagnostics and preventive maintenance for critical machinery.' },
      { name: 'Structural Inspections', description: 'Assessing the integrity and safety of building structures.' },
      { name: 'Emergency Power Systems', description: 'Maintaining and testing backup power systems for emergencies.' },
      { name: 'Water Treatment', description: 'Managing water quality and treatment for safe usage.' }
  ]
  ,
    skipDuplicates: true,
  });

  await prisma.user.createMany({
    data: [
      {
        id: 101,
        firstName: "Gerrie",
        lastName: "GPT",
        email: "gerrieseemonster21@hotmail.com",
        password: "UNINCRYPTED NO CHANCE@@@####!!!!2345235asddfsdf",
        username: "GPT Gerrie",
        phone: "0981712121",
        userType: "HELPDESK_MANAGER",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.jobStatus.createMany({
    data: [
      {id: 1, status: 'Request'},
      {id: 2, status: 'Technician Notified'},
      {id: 3, status: 'Technician Assigned'},
      {id: 4, status: 'On Their Way' },
      {id: 5, status: 'Taking Care' },
      {id: 6, status: 'Complete' },
    ],
    skipDuplicates: true,
  });

  await prisma.package.createMany({
  data: [
    {
      id : 1, 
      name: 'Basic',
      description: 'Essential maintenance covering routine inspections and minor adjustments to keep equipment operational.',
      price: 999.0,
    },
    {
      id : 2,
      name: 'Essentials',
      description: 'Comprehensive preventive maintenance, including diagnostics to prevent issues and improve reliability.',
      price: 1399.0,
    },
    {
      id : 3,
      name: 'Premium',
      description: 'Extensive maintenance with full equipment overhauls and compliance checks, ensuring top-tier performance and longevity.',
      price: 1999.0,
    },
  ],
  skipDuplicates: true,
});


  await prisma.packageService.createMany({
    data: [
      { packageId: 1, serviceName: 'Janitorial Services' },
      { packageId: 1, serviceName: 'General Maintenance' },
      { packageId: 1, serviceName: 'Lighting Maintenance' },
      { packageId: 1, serviceName: 'Basic IT Support' },
      { packageId: 1, serviceName: 'Plumbing' },
  
      { packageId: 2, serviceName: 'Janitorial Services' },
      { packageId: 2, serviceName: 'General Maintenance' },
      { packageId: 2, serviceName: 'Lighting Maintenance' },
      { packageId: 2, serviceName: 'Basic IT Support' },
      { packageId: 2, serviceName: 'Plumbing' },
      { packageId: 2, serviceName: 'HVAC Maintenance' },
      { packageId: 2, serviceName: 'Electrical Systems' },
      { packageId: 2, serviceName: 'Network Management' },
      { packageId: 2, serviceName: 'Fire Safety and Compliance' },
      { packageId: 2, serviceName: 'Vibration Analysis' },
      { packageId: 2, serviceName: 'Calibration Services' },
  
      { packageId: 3, serviceName: 'Janitorial Services' },
      { packageId: 3, serviceName: 'General Maintenance' },
      { packageId: 3, serviceName: 'Lighting Maintenance' },
      { packageId: 3, serviceName: 'Basic IT Support' },
      { packageId: 3, serviceName: 'Plumbing' },
      { packageId: 3, serviceName: 'HVAC Maintenance' },
      { packageId: 3, serviceName: 'Electrical Systems' },
      { packageId: 3, serviceName: 'Network Management' },
      { packageId: 3, serviceName: 'Fire Safety and Compliance' },
      { packageId: 3, serviceName: 'Vibration Analysis' },
      { packageId: 3, serviceName: 'Calibration Services' },
      { packageId: 3, serviceName: 'Real-time Monitoring' },
      { packageId: 3, serviceName: 'Disaster Recovery Planning' },
      { packageId: 3, serviceName: 'Energy Efficiency Audits' },
      { packageId: 3, serviceName: 'Advanced IT Support' },
      { packageId: 3, serviceName: 'Specialized Machinery Maintenance' },
      { packageId: 3, serviceName: 'Structural Inspections' },
      { packageId: 3, serviceName: 'Emergency Power Systems' },
      { packageId: 3, serviceName: 'Water Treatment' }
  ],
  
    skipDuplicates: true,
  });


 
async function main() {
  await seedDb();
}
}