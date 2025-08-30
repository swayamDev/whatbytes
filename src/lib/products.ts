export type Product = {
  id: string;
  title: string;
  price: number;
  category: "electronics" | "clothing" | "home";
  brand?: string;
  rating?: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "running-shoes",
    title: "Running Shoes",
    price: 99,
    category: "clothing",
    brand: "Whatbytes",
    rating: 4.5,
    image: "/products/shoes.jpg",
    description: "Lightweight runners with breathable mesh and cushioned sole.",
  },
  {
    id: "wireless-headphones",
    title: "Wireless Headphones",
    price: 249,
    category: "electronics",
    brand: "Whatbytes",
    rating: 4.2,
    image: "/products/headphones.jpg",
    description: "Over-ear ANC with 30h battery life and quick charge.",
  },
  {
    id: "backpack",
    title: "Backpack",
    price: 129,
    category: "home",
    brand: "Whatbytes",
    rating: 4.0,
    image: "/products/backpack.jpg",
    description: "Everyday backpack with padded laptop sleeve.",
  },
  {
    id: "smartwatch",
    title: "Smartwatch",
    price: 249,
    category: "electronics",
    brand: "Whatbytes",
    rating: 4.1,
    image: "/products/watch.jpeg",
    description: "Fitness tracking, notifications, GPS and heart-rate.",
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    price: 149,
    category: "clothing",
    brand: "Whatbytes",
    rating: 4.3,
    image: "/products/sunglasses.jpeg",
    description: "UV400 polarized lenses with lightweight frame.",
  },
  {
    id: "digital-camera",
    title: "Digital Camera",
    price: 499,
    category: "electronics",
    brand: "Whatbytes",
    rating: 4.4,
    image: "/products/camera.jpeg",
    description: "24MP APS-C sensor, 4K video, flip screen.",
  },
  {
    id: "t-shirt",
    title: "T-shirt",
    price: 29,
    category: "clothing",
    brand: "Whatbytes",
    rating: 4.2,
    image: "/products/tshirt.jpeg",
    description: "100% cotton tee, regular fit.",
  },
  {
    id: "smartphone",
    title: "Smartphone",
    price: 699,
    category: "electronics",
    brand: "Whatbytes",
    rating: 4.6,
    image: "/products/phone.jpeg",
    description: "6.5” OLED, 120Hz, 5000mAh, triple camera.",
  },
];

export const suggestions = [
  "Running Shoes",
  "Wireless Headphones",
  "Backpack",
  "Smartwatch",
  "Sunglasses",
  "Digital Camera",
  "T-shirt",
  "Smartphone",
];
