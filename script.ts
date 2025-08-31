import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'deepika@test.com'
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