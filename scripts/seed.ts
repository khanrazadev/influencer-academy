import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const database = new PrismaClient();

interface CategoryInput {
  name: string;
}

async function main(): Promise<void> {
  try {
    const categories: CategoryInput[] = [
      { name: "Photography" },
      { name: "Filming" },
      { name: "Story Telling" },
      { name: "Editing" },
      { name: "Fitness" },
      { name: "Travel" },
      { name: "Fashion" },
    ];

    // Check if categories already exist
    const existingCategories = await database.category.findMany({
      where: {
        OR: categories.map((category) => ({
          name: category.name,
        })),
      },
    });

    const existingCategoryNames = existingCategories.map(
      (category) => category.name
    );

    // Filter out categories that don't already exist
    const categoriesToCreate = categories.filter(
      (category) => !existingCategoryNames.includes(category.name)
    );

    // Create only non-existing categories
    await database.category.createMany({
      data: categoriesToCreate,
    });
  } catch (error) {
    console.error("Error seeding the database categories:", error);
  } finally {
    await database.$disconnect();
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  try {
    await main();
    res.status(200).json({ message: "Categories seeded successfully" });
  } catch (error) {
    console.error("Error seeding categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
