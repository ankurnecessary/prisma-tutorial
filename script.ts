import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: "Deepika",
    },
    orderBy: { age: "desc" }, // Ordering
    take: 2, // How many records to show?
    skip: 1, // How many records to skip?
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
  });
