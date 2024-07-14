import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CategoryButton, CategoryMenuItem } from "./components/CategoryButton";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Products App",
  description: "Generated by Santiago Santana",
};

export default function RootLayout({
  product,
  productos,
}: Readonly<{
  product: React.ReactNode;
  productos: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col">
            <header className="bg-background shadow-sm">
              <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                <Link href="#" className="text-lg font-bold" prefetch={false}>
                  Product Gallery
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                  <CategoryButton category="all" />
                  <CategoryButton category="Accessories" />
                  <CategoryButton category="Electronics" />
                  <CategoryButton category="Shoes" />
                </nav>
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MenuIcon className="h-6 w-6" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <CategoryMenuItem category="all" />
                      <CategoryMenuItem category="Accessories" />
                      <CategoryMenuItem category="Electronics" />
                      <CategoryMenuItem category="Shoes" />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>
            {productos}
            <footer className="bg-muted py-6 mt-8">
              <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
                &copy; 2023 Product Gallery. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
        {product}
      </body>
    </html>
  );
}
