export const validCategories = [
  "all",
  "Accessories",
  "Electronics",
  "Shoes",
] as const;

export type Category = (typeof validCategories)[number];

export const products = [
  {
    id: 1,
    name: "Stylish Sunglasses",
    description: "UV protection",
    price: 29.99,
    category: "Accessories",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    description: "Stylish and practical",
    price: 49.99,
    category: "Accessories",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "High-quality sound",
    price: 79.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Classic Wristwatch",
    description: "Timeless design",
    price: 59.99,
    category: "Accessories",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Classic Leather Shoes",
    description: "Elegant and comfortable",
    price: 59.99,
    category: "Shoes",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Designer Handbag",
    description: "Fashion statement",
    price: 89.99,
    category: "Accessories",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    description: "Crystal clear audio",
    price: 69.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Vintage Pocket Watch",
    description: "Antique charm",
    price: 79.99,
    category: "Accessories",
    image: "/placeholder.svg",
  },
];
