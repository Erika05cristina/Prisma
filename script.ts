import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
// await prisma.user.deleteMany({});
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
    // const users = await prisma.user.createMany({
    //     data: [{
    //         name: "Erika",
    //         email: "erika4@gmail1.com",
    //         age: 14,
    //     },{
    //         name: "Erika",
    //         email: "erika5@gmaile.com",
    //         age: 28,
    //     }]
    // });

    // const user = await prisma.user.findUnique({
    //     where:{
    //         // email:"erika@gmail.com"
    //         age_name:{
    //             age: 24,
    //             name: "Erika",
    //         }
    //     },
    // }); 
    const user = await prisma.user.findMany({
        where: {
            name: "Erika", 

        },
        // distinct: ['name'],
        orderBy: {
            age: 'desc',
        },
        take: 2,
        skip: 1,
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
  