"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category, validCategories } from "../data";

function useCategory({ category }: { category: Category }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleCategoryChange(category: string) {
    /**
     * Event handlers are always executed on the client side
     * so we can read the window object here.
     */
    const url = new URL(pathname, window.location.origin);

    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }

    router.replace(url.toString());
  }

  const selectedCategory = searchParams.get("category");

  const isValidCategory = validCategories.includes(
    selectedCategory as Category
  );

  const isSelected =
    selectedCategory === category || (!isValidCategory && category === "all");

  return { isSelected, handleCategoryChange };
}

interface CategoryButtonProps {
  category: Category;
}

export function CategoryButton({ category }: CategoryButtonProps) {
  const { isSelected, handleCategoryChange } = useCategory({ category });

  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      onClick={(event) => {
        event.preventDefault();
        handleCategoryChange(category);
      }}
      className="capitalize"
    >
      {category}
    </Button>
  );
}

export function CategoryMenuItem({ category }: CategoryButtonProps) {
  const { isSelected, handleCategoryChange } = useCategory({ category });

  return (
    <DropdownMenuItem
      onClick={(event) => {
        event.preventDefault();
        handleCategoryChange(category);
      }}
      className={cn("capitalize", isSelected ? "bg-muted" : "")}
    >
      All
    </DropdownMenuItem>
  );
}
