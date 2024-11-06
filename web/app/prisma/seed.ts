// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export async function seedDb(){
//   await prisma.service.deleteMany();
//   await prisma.service.createMany({
//     data: [
//       { name: 'Electrical Repair', description: 'Handling electrical repairs.' },
//       { name: 'Plumbing', description: 'Fixing plumbing issues.' },
//       { name: 'HVAC', description: 'Heating, ventilation, and air conditioning.' },
//       { name: 'IT Support', description: 'Handling IT-related support tasks.' },
//       { name: 'Carpentry', description: 'Building and repairing wooden structures.' },
//       { name: 'Painting', description: 'Applying paint and finishes to surfaces.' },
//       { name: 'Landscaping', description: 'Maintaining and designing outdoor spaces.' },
//       { name: 'Masonry', description: 'Construction and repair using bricks and stones.' },
//       { name: 'Pest Control', description: 'Removing pests and preventing infestations.' },
//       { name: 'Roof Repair', description: 'Maintaining and repairing roof structures.' },
//       { name: 'Appliance Repair', description: 'Fixing household appliances.' },
//       { name: 'Flooring', description: 'Installing and repairing floor coverings.' },
//       { name: 'Glass Installation', description: 'Installing and repairing windows and glass panels.' },
//       { name: 'Furniture Assembly', description: 'Assembling and setting up furniture.' },
//       { name: 'Locksmithing', description: 'Handling locks, keys, and security systems.' },
//       { name: 'Welding', description: 'Joining metal parts through welding techniques.' },
//       { name: 'Tree Trimming', description: 'Maintaining and pruning trees and large plants.' },
//       { name: 'Water Heater Repair', description: 'Repairing and maintaining water heaters.' },
//       { name: 'Gutter Cleaning', description: 'Cleaning and maintaining roof gutters.' },
//       { name: 'Pool Maintenance', description: 'Maintaining and cleaning swimming pools.' }
//     ],
//     skipDuplicates: true,
//   });

//   await prisma.user.deleteMany();
//   await prisma.user.create({
//     data:{
//         id: 101,
//         firstName: "Gerrie",
//         lastName: "GPT",
//         email: "gerrieseemonster21@hotmail.com",
//         password: "UNINCRYPTED NO CHANCE@@@####!!!!2345235asddfsdf",
//         username: "GPT Gerrie",
//         phone: "0981712121",
//         userType: "HELPDESK_MANAGER",
//     }
//   })

//   await prisma.jobStatus.deleteMany();
//   await prisma.jobStatus.createMany({
//     data: [
//       {id: 1, status: 'Request'},
//       {id: 2, status: 'Technician Notified'},
//       {id: 3, status: 'Technician Assigned'},
//       {id: 4, status: 'On Their Way' },
//       {id: 5, status: 'Taking Care' },
//       {id: 6, status: 'Complete' },
//     ],
//     skipDuplicates: true,
//   });
// }

// async function main() {
//   seedDb();
// }



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
 
  await prisma.user.deleteMany();
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

      {
        id: 102,
        username: "alice9",
        firstName: "Alice",
        lastName: "Anderson",
        email: "alice.anderson@example.com",
        password: "SecurePassword123!",
        phone: "1234567890",
        address: "123 Main St, Cityville",
        preferredContactMethod: "EMAIL",
        userType: "CUSTOMER",
      },
      {
        id: 103,
        username: "bobby",
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        password: "SecurePassword456!",
        phone: "0987654321",
        address: "456 Oak St, Townsville",
        preferredContactMethod: "PHONE",
        userType: "TECHNICIAN",
      },
      {
        id: 104,
        username: "charlie88",
        firstName: "Charlie",
        lastName: "Clark",
        email: "charlie.clark@example.com",
        password: "SecurePassword789!",
        phone: "1122334455",
        address: "789 Pine St, Metropolis",
        preferredContactMethod: "EMAIL",
        userType: "HELPDESK_MANAGER",
      },
      {
        id: 105,
        username: "DanaSupervisor",
        firstName: "Dana",
        lastName: "Davis",
        email: "dana.davis@example.com",
        password: "SecurePassword101!",
        phone: "2233445566",
        address: "101 Elm St, Springfield",
        preferredContactMethod: "SMS",
        userType: "CUSTOMER",
      },
      {
        id: 106,
        username: "EveAdmin",
        firstName: "Eve",
        lastName: "Evans",
        email: "eve.evans@example.com",
        password: "SecurePassword202!",
        phone: "3344556677",
        address: "202 Cedar St, Capital City",
        preferredContactMethod: "PHONE",
        userType: "ADMIN",
      },
    ],
    skipDuplicates: true,
  });

 
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

  await prisma.subscription.deleteMany(); 
  await prisma.subscription.createMany({
    data: [
      {
        id: 1,
        userId: 101,
        packageId: 1,
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-12-31'),
      },
      {
        id: 2,
        userId: 102,
        packageId: 2,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2025-01-31'),
      },
      {
        id: 3,
        userId: 103,
        packageId: 3,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-08-31'),
      },
      {
        id: 4,
        userId: 104,
        packageId: 4,
        startDate: new Date('2024-04-01'),
        endDate: new Date('2025-03-31'),
      },
      {
        id: 5,
        userId: 105,
        packageId: 5,
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-11-30'),
      },
    ],
  });
 
  await prisma.term.deleteMany();
  await prisma.term.createMany({
    data: [
      {
        subscriptionId: 1,
        duration: 12, 
      },
      {
        subscriptionId: 2,
        duration: 12, 
      },
      {
        subscriptionId: 3,
        duration: 6, 
      },
      {
        subscriptionId: 4,
        duration: 12, 
      },
      {
        subscriptionId: 5,
        duration: 6, 
      },
    ],
  });
  await prisma.package.deleteMany();
  await prisma.package.createMany({
  data: [
    {
      id : 1, 
      name: 'Basic Home Support',
      description: 'Includes: house keeping, window cleaning, lawn mowing, gardening.',
      price: 1500.0,
    },
    {
      id : 2,
      name: 'Home Maintenance',
      description: 'Includes: deep cleaning, repainting of entire home, premium gardening services, pool cleaning.',
      price: 4000.0,
    },
    {
      id : 3,
      name: 'Home & Health Care',
      description: 'Includes: house keeping, lawn mowing, gardening, routine health checks, medication management, basic nursing services.',
      price: 2200.0,
    },
    {
      id : 4,
      name: 'Specialized Health Care',
      description: 'Includes: skilled nursing services, chronic disease management, post-surgical care, physical therapy sessions.',
      price: 2600.0,
    },
    {
      id : 5,
      name: '24/7 Home & Health',
      description: 'Includes: on-call emergency healthcare services, daily cleaning, laundry services, basic nursing services.',
      price: 5000.0,
    },
    {
      id : 6,
      name: 'Core Home Maintenance',
      description: 'Includes: electrical, plumbing and mechanical support.',
      price: 5000.0,
    },
    {
      id : 7,
      name: '24/7 Core Home Maintenance',
      description: 'Includes: on-call electrical, plumbing and mechanical support.',
      price: 7200.0,
    },
    {
      id : 8,
      name: 'Lifestyle Wellness',
      description: 'Includes: grocery shopping, meal planning, meal prepping, nutritional planning.',
      price: 3000.0,
    },
    {
      id : 9,
      name: 'Deep Clean & Fumigation',
      description: 'Includes: house keeping, window cleaning, laundry services, and a fumigation.',
      price: 3500.0,
    },
  ],
  skipDuplicates: true,
});
  await prisma.technician.deleteMany();
  await prisma.technician.createMany({
    data: [
      {
        id: 1,
        userId: 2, 
      },
      {
        id: 2,
        userId: 3, 
      },
      {
        id: 3,
        userId: 4, 
      },
    ],
    skipDuplicates: true,
  });

  await prisma.technicianService.deleteMany();
  await prisma.technicianService.createMany({
    data: [
      {
        technicianId: 1,
        serviceName: 'Electrical Repair',
      },
      {
        technicianId: 1,
        serviceName: 'Plumbing',
      },
      {
        technicianId: 2,
        serviceName: 'HVAC',
      },
      {
        technicianId: 2,
        serviceName: 'Carpentry',
      },
      {
        technicianId: 2,
        serviceName: 'Painting',
      },
      {
        technicianId: 3,
        serviceName: 'Landscaping',
      },
      {
        technicianId: 3,
        serviceName: 'Pest Control',
      },
      {
        technicianId: 3,
        serviceName: 'Roof Repair',
      },
    ],
    skipDuplicates: true,
  });



  await prisma.job.deleteMany();
  await prisma.job.createMany({
    data: [
      {
        id: 1,
        userId: 1,
        technicianId: 1,
        description: "Fixing electrical wiring in the living room",
        urgency: 3,
        serviceName: "Electrical Repair",
        chatId: 1,
      },
      {
        id: 2,
        userId: 2,
        technicianId: 2,
        description: "HVAC maintenance for the office",
        urgency: 2,
        serviceName: "HVAC",
        chatId: 2,
      },
      {
        id: 3,
        userId: 3,
        technicianId: null, // No technician assigned yet
        description: "Plumbing issue in the kitchen",
        urgency: 4,
        serviceName: "Plumbing",
        chatId: 3,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.jobStatusUpdate.deleteMany();
  await prisma.jobStatusUpdate.createMany({
    data: [
      {
        id: 1,
        jobId: 1,
        jobStatusId: 6, 
        updatedAt: new Date("2024-01-01T09:00:00Z"),
      },
      {
        id: 2,
        jobId: 1,
        jobStatusId: 2, 
        updatedAt: new Date("2024-01-01T10:00:00Z"),
      },
      {
        id: 3,
        jobId: 2,
        jobStatusId: 4, 
        updatedAt: new Date("2024-02-01T09:30:00Z"),
      },
      {
        id: 4,
        jobId: 3,
        jobStatusId: 5,
        updatedAt: new Date("2024-03-01T08:45:00Z"),
      },
    ],
    skipDuplicates: true,
  });

  await prisma.packageService.deleteMany();
  await prisma.packageService.createMany({
    data: [
      { packageId: 1, serviceName: 'Landscaping' },
      { packageId: 2, serviceName: 'Painting' },
      { packageId: 3, serviceName: 'Appliance Repair' },
      { packageId: 4, serviceName: 'Pest Control' },
      { packageId: 5, serviceName: 'HVAC' },
      { packageId: 6, serviceName: 'Electrical Repair' },
      { packageId: 7, serviceName: 'Plumbing' },
      { packageId: 8, serviceName: 'Flooring' },
      { packageId: 9, serviceName: 'Gutter Cleaning' },
    ],
    skipDuplicates: true,
  });

  await prisma.packagePromotion.deleteMany();
  await prisma.packagePromotion.createMany({
    data: [
      { packageId: 1, discount: 10.0, validUntil: new Date('2024-12-31') },
      { packageId: 2, discount: 15.0, validUntil: new Date('2024-12-31') },
      { packageId: 3, discount: 5.0, validUntil: new Date('2024-11-30') },
      { packageId: 4, discount: 20.0, validUntil: new Date('2025-01-15') },
      { packageId: 5, discount: 10.0, validUntil: new Date('2025-01-31') },
      { packageId: 6, discount: 8.0, validUntil: new Date('2024-12-15') },
      { packageId: 7, discount: 12.0, validUntil: new Date('2025-02-28') },
      { packageId: 8, discount: 5.0, validUntil: new Date('2024-11-30') },
      { packageId: 9, discount: 15.0, validUntil: new Date('2024-12-31') },
    ],
    skipDuplicates: true,
  });



//===========================================Chatbot goed==================================================

await prisma.chat.deleteMany();
await prisma.chat.createMany({
  data: [
    {
      id: 1,
      createdAt: new Date("2024-01-01T10:00:00Z"),
      active: true,
    },
    {
      id: 2,
      createdAt: new Date("2024-02-01T11:30:00Z"),
      active: true,
    },
    {
      id: 3,
      createdAt: new Date("2024-03-15T09:00:00Z"),
      active: false,  
    },
  ],
  skipDuplicates: true,
});


await prisma.chatParticipant.deleteMany();
await prisma.chatParticipant.createMany({
  data: [
    {
      chatId: 1,
      userId: 1,
    },
    {
      chatId: 1,
      userId: 2,
    },
    {
      chatId: 2,
      userId: 2,
    },
    {
      chatId: 2,
      userId: 3,
    },
    {
      chatId: 3,
      userId: 1,
    },
    {
      chatId: 3,
      userId: 3,
    },
  ],
  skipDuplicates: true,
});

await prisma.chatMessage.deleteMany();
await prisma.chatMessage.createMany({
  data: [
    {
      userId: 1,
      chatId: 1,
      message: "Hello, I need assistance with my HVAC system.",
      createdAt: new Date("2024-01-01T10:15:00Z"),
    },
    {
      userId: 2,
      chatId: 1,
      message: "Sure, I’ll be happy to help. What seems to be the problem?",
      createdAt: new Date("2024-01-01T10:30:00Z"),
    },
    {
      userId: 2,
      chatId: 2,
      message: "We’re looking into your plumbing issue, please hold on.",
      createdAt: new Date("2024-02-01T11:45:00Z"),
    },
    {
      userId: 3,
      chatId: 2,
      message: "Thank you for your assistance, I appreciate it.",
      createdAt: new Date("2024-02-01T12:00:00Z"),
    },
    {
      userId: 1,
      chatId: 3,
      message: "Hello, I have an urgent issue with the kitchen plumbing.",
      createdAt: new Date("2024-03-15T09:10:00Z"),
    },
    {
      userId: 3,
      chatId: 3,
      message: "We’ll be there shortly to inspect the issue.",
      createdAt: new Date("2024-03-15T09:20:00Z"),
    },
  ],
  skipDuplicates: true,
});
}

 
async function main() {
  await seedDb();
}