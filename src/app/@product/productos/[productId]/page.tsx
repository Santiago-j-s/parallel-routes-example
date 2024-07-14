import { products } from "@/app/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default async function Product({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <Sheet open>
      <SheetContent goBackInsteadOfClosing>
        <SheetHeader>
          <SheetTitle>Product {params.productId}</SheetTitle>
          <SheetDescription>Product description:</SheetDescription>
        </SheetHeader>
        <p className="text-base">
          {
            products.find(
              (product) => product.id.toString() === params.productId
            )?.description
          }
        </p>
      </SheetContent>
    </Sheet>
  );
}
