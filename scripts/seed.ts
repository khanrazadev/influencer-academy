const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    // Find all categories in the database
    const existingCategories = await database.category.findMany();

    // Create a set to store unique category names
    const uniqueCategoryNames = new Set();

    // Filter out duplicates and add unique category names to the set
    existingCategories.forEach((category: any) => {
      uniqueCategoryNames.add(category.name);
    });

    // Delete all existing categories
    await database.category.deleteMany();

    // Create categories from unique category names
    const categoriesToCreate = Array.from(uniqueCategoryNames).map((name) => ({
      name,
    }));
    await database.category.createMany({ data: categoriesToCreate });

    console.log("Categories cleaned up and reseeded successfully.");
  } catch (error) {
    console.log("Error cleaning up and reseeding categories.", error);
  } finally {
    await database.$disconnect();
  }
}

main();
