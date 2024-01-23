const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Photography" },
        { name: "Filming" },
        { name: "Story Telling" },
        { name: "Editing" },
        { name: "Fitness" },
        { name: "Travel" },
        { name: "Fashion" },
      ],
    });
  } catch (error) {
    console.log("Error seeding the database categories.", error);
  } finally {
    await database.$disconnect();
  }
}

main();
