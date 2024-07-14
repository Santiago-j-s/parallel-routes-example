import { Category, products } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface ProductosProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

function getFilteredProducts(
  selectedCategory: Category | (string & {}) | undefined | string[]
) {
  if (selectedCategory === "all" || !selectedCategory) {
    return products;
  }

  if (Array.isArray(selectedCategory)) {
    return products.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }

  return products.filter((product) => product.category === selectedCategory);
}

export async function generateMetadata(
  { searchParams }: ProductosProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = searchParams.category as Category | undefined;

  if (category && !getFilteredProducts(category).length) {
    return {
      description: `No products found in the ${category} category`,
    };
  }

  return {
    description: `Products in the ${category || "all"} category`,
  };
}

export default function Productos({ searchParams }: ProductosProps) {
  const selectedCategory = searchParams.category;
  const filteredProducts = getFilteredProducts(selectedCategory);

  return (
    <main className="container mx-auto px-4 md:px-6 py-8 flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={`https://prd.place/400/600?id={${index + 1}}`}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                <Button asChild size="sm">
                  <Link
                    href={`/productos/${product.id}?category=${
                      selectedCategory ?? "all"
                    }`}
                  >
                    View
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
