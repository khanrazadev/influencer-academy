"use client";

import { Category } from "@prisma/client";
import {
  FcBusinessman,
  FcEditImage,
  FcFilmReel,
  FcHome,
  FcOldTimeCamera,
  FcSportsMode,
  FcVoicePresentation,
} from "react-icons/fc";

import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Fashion: FcBusinessman,
  Photography: FcOldTimeCamera,
  Fitness: FcSportsMode,
  Editing: FcEditImage,
  "Story Telling": FcVoicePresentation,
  Filming: FcFilmReel,
  Travel: FcHome,
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
