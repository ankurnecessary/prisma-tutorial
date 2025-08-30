import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: 'Ankur',
      age: 40,
      email: 'ankur@test.com'
    }
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(() => {
    // This is not actually necessary because Prisma disconnects itself after query finished running but still safe
    prisma.$disconnect();
  })