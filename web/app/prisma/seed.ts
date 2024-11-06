import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedDb(){
  await prisma.service.deleteMany();
  await prisma.service.createMany({
    data: [
      { name: 'Electrical Repair', description: 'Handling electrical repairs.' },
      { name: 'Plumbing', description: 'Fixing plumbing issues.' },
      { name: 'HVAC', description: 'Heating, ventilation, and air conditioning.' },
      { name: 'IT Support', description: 'Handling IT-related support tasks.' },
      { name: 'Carpentry', description: 'Building and repairing wooden structures.' },
      { name: 'Painting', description: 'Applying paint and finishes to surfaces.' },
      { name: 'Landscaping', description: 'Maintaining and designing outdoor spaces.' },
      { name: 'Masonry', description: 'Construction and repair using bricks and stones.' },
      { name: 'Pest Control', description: 'Removing pests and preventing infestations.' },
      { name: 'Roof Repair', description: 'Maintaining and repairing roof structures.' },
      { name: 'Appliance Repair', description: 'Fixing household appliances.' },
      { name: 'Flooring', description: 'Installing and repairing floor coverings.' },
      { name: 'Glass Installation', description: 'Installing and repairing windows and glass panels.' },
      { name: 'Furniture Assembly', description: 'Assembling and setting up furniture.' },
      { name: 'Locksmithing', description: 'Handling locks, keys, and security systems.' },
      { name: 'Welding', description: 'Joining metal parts through welding techniques.' },
      { name: 'Tree Trimming', description: 'Maintaining and pruning trees and large plants.' },
      { name: 'Water Heater Repair', description: 'Repairing and maintaining water heaters.' },
      { name: 'Gutter Cleaning', description: 'Cleaning and maintaining roof gutters.' },
      { name: 'Pool Maintenance', description: 'Maintaining and cleaning swimming pools.' }
    ],
    skipDuplicates: true,
  });

    const gptGerrie = await prisma.user.findFirst({
        where: {
            id: 101
        }
    })
    if(!gptGerrie){
        let gerrieThen = await prisma.user.create({
            data:{
                id: 101,
                firstName: "Gerrie",
                lastName: "GPT",
                email: "gerrieseemonster21@hotmail.com",
                password: "UNINCRYPTED NO CHANCE@@@####!!!!2345235asddfsdf",
                username: "GPT Gerrie",
                phone: "0981712121",
                userType: "HELPDESK_MANAGER",
            }
        })
    }

  await prisma.jobStatus.deleteMany();
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
}

async function main() {
  await prisma.service.deleteMany();
  await prisma.service.createMany({
    data: [
      { name: 'Electrical Repair', description: 'Handling electrical repairs.' },
      { name: 'Plumbing', description: 'Fixing plumbing issues.' },
      { name: 'HVAC', description: 'Heating, ventilation, and air conditioning.' },
      { name: 'IT Support', description: 'Handling IT-related support tasks.' },
      { name: 'Carpentry', description: 'Building and repairing wooden structures.' },
      { name: 'Painting', description: 'Applying paint and finishes to surfaces.' },
      { name: 'Landscaping', description: 'Maintaining and designing outdoor spaces.' },
      { name: 'Masonry', description: 'Construction and repair using bricks and stones.' },
      { name: 'Pest Control', description: 'Removing pests and preventing infestations.' },
      { name: 'Roof Repair', description: 'Maintaining and repairing roof structures.' },
      { name: 'Appliance Repair', description: 'Fixing household appliances.' },
      { name: 'Flooring', description: 'Installing and repairing floor coverings.' },
      { name: 'Glass Installation', description: 'Installing and repairing windows and glass panels.' },
      { name: 'Furniture Assembly', description: 'Assembling and setting up furniture.' },
      { name: 'Locksmithing', description: 'Handling locks, keys, and security systems.' },
      { name: 'Welding', description: 'Joining metal parts through welding techniques.' },
      { name: 'Tree Trimming', description: 'Maintaining and pruning trees and large plants.' },
      { name: 'Water Heater Repair', description: 'Repairing and maintaining water heaters.' },
      { name: 'Gutter Cleaning', description: 'Cleaning and maintaining roof gutters.' },
      { name: 'Pool Maintenance', description: 'Maintaining and cleaning swimming pools.' }
    ],
    skipDuplicates: true,
  });

  await prisma.user.deleteMany();

    const gptGerrie = await prisma.user.findFirst({
        where: {
            id: 101
        }
    })
    if(!gptGerrie){
        let gerrieThen = await prisma.user.create({
            data:{
                id: 101,
                firstName: "Gerrie",
                lastName: "GPT",
                email: "gerrieseemonster21@hotmail.com",
                password: "UNINCRYPTED NO CHANCE@@@####!!!!2345235asddfsdf",
                username: "GPT Gerrie",
                phone: "0981712121",
                userType: "HELPDESK_MANAGER",
            }
        })
    }

  await prisma.jobStatus.deleteMany();
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
