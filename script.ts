import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany({});
//    const user = await prisma.user.create({
//         data:{
//             name: "Erika",
//             email: "erika@gmal.com",
//             age: 24,
//             UserPreference: {
//                 create: {
//                     emailUpdates: true,
//                  },
//              },
//         },
//         // include: {
//         //     UserPreference: true,
//         // },
//         select: {
//             name: true,
//             UserPreference: {
//                 select: {
//                     id: true,
//                 },
//             }

            
//         },
// });
    const user = await prisma.user.createMany({
        data: [{
            name: "Erika",
            email: "erika@gmail.com",
            age: 24,
        },{
            name: "Cristina",
            email: "cristina@gmail.com",
            age: 25,
        }]
    });
    console.log(user);
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })    
  