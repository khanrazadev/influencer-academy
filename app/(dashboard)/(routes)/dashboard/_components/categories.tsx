"use client";

import { Category } from "@prisma/client";
import {
  FcCloth,
  FcEditImage,
  FcMultipleDevices,
  FcOldTimeCamera,
} from "react-icons/fc";
import { IoFitnessSharp } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";

import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Photography: FcOldTimeCamera,
  Filming: FcOldTimeCamera,
  Editing: FcEditImage,
  Fitness: IoFitnessSharp,
  "Story Telling": FcMultipleDevices,
  Travel: SiYourtraveldottv,
  Fashion: FcCloth,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
