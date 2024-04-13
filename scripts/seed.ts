const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    // Check if categories already exist in the database
    const existingCategories = await database.category.findMany();

    // Extract existing category names
    const existingCategoryNames = new Set(
      existingCategories.map((category) => category.name)
    );

    // Define the categories you want to seed
    const categoriesToSeed = [
      { name: "Photography" },
      { name: "Filming" },
      { name: "Story Telling" },
      { name: "Editing" },
      { name: "Fitness" },
      { name: "Travel" },
      { name: "Fashion" },
    ];

    // Filter out categories that already exist in the database
    const newCategories = categoriesToSeed.filter(
      (category) => !existingCategoryNames.has(category.name)
    );

    // Create only the new categories
    await database.category.createMany({
      data: newCategories,
    });

    console.log("Categories seeded successfully.");
  } catch (error) {
    console.log("Error seeding the database categories.", error);
  } finally {
    await database.$disconnect();
  }
}

main();
