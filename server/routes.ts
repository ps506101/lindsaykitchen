import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const menuData = [
  // Breakfast Items
  {
    name: "Breakfast Burrito",
    description: "Eggs, cheese, potatoes with choice of bacon, sausage or chorizo",
    price: "$4.99",
    category: "Breakfast",
    image: "breakfast-burrito.jpg"
  },
  {
    name: "Breakfast Sandwich",
    description: "Eggs and cheese with choice of bacon, sausage or ham",
    price: "$3.99",
    category: "Breakfast",
    image: "breakfast-sandwich.jpg"
  },
  {
    name: "Pancake Platter",
    description: "3 fluffy pancakes served with butter and syrup",
    price: "$4.99",
    category: "Breakfast",
    image: "pancakes.jpg"
  },
  {
    name: "Biscuits & Gravy",
    description: "Fresh baked biscuits topped with savory sausage gravy",
    price: "$4.99",
    category: "Breakfast",
    image: "biscuits-gravy.jpg"
  },
  // Special Cuisine (Indian Food)
  // Veg Appetizers
  {
    name: "Samosa (2 pcs)",
    description: "Golden-brown pastry filled with spiced potatoes and peas",
    price: "$4.99",
    category: "Special Cuisine",
    image: "samosa.jpg"
  },
  {
    name: "Mix Veg Pakora",
    description: "Assorted vegetable fritters with Indian spices",
    price: "$5.99",
    category: "Special Cuisine",
    image: "pakora.jpg"
  },
  {
    name: "Aloo Tikki (3 pcs)",
    description: "Spiced potato patties served with chutney",
    price: "$5.99",
    category: "Special Cuisine",
    image: "aloo-tikki.jpg"
  },
  // Non-Veg Appetizers
  {
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken with curry leaves",
    price: "$8.99",
    category: "Special Cuisine",
    image: "chicken-65.jpg"
  },
  {
    name: "Chicken Lollipop (5 pcs)",
    description: "Spiced and crispy chicken winglets",
    price: "$9.99",
    category: "Special Cuisine",
    image: "chicken-lollipop.jpg"
  },
  // Veg Entries
  {
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach sauce",
    price: "$12.99",
    category: "Special Cuisine",
    image: "palak-paneer.jpg"
  },
  {
    name: "Channa Masala",
    description: "Chickpeas in spiced tomato gravy",
    price: "$11.99",
    category: "Special Cuisine",
    image: "channa-masala.jpg"
  },
  {
    name: "Malai Kofta",
    description: "Vegetable and cheese dumplings in rich cream sauce",
    price: "$13.99",
    category: "Special Cuisine",
    image: "malai-kofta.jpg"
  },
  // Non-Veg Entries
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: "$14.99",
    category: "Special Cuisine",
    image: "butter-chicken.jpg"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken in spiced tomato gravy",
    price: "$14.99",
    category: "Special Cuisine",
    image: "chicken-tikka-masala.jpg"
  },
  {
    name: "Lamb Curry",
    description: "Tender lamb pieces in aromatic curry sauce",
    price: "$15.99",
    category: "Special Cuisine",
    image: "lamb-curry.jpg"
  },
  {
    name: "Tandoori Chicken",
    description: "Clay oven roasted chicken with Indian spices",
    price: "$13.99",
    category: "Special Cuisine",
    image: "tandoori-chicken.jpg"
  },
  // Lunch Items
  {
    name: "Hamburger",
    description: "1/3 lb patty with lettuce, tomato, onion, pickles, and mayo",
    price: "$6.99",
    category: "Lunch",
    image: "hamburger.jpg"
  },
  {
    name: "Cheeseburger",
    description: "1/3 lb patty with American cheese and fresh toppings",
    price: "$7.49",
    category: "Lunch",
    image: "cheeseburger.jpg"
  },
  {
    name: "Double Meat Burger",
    description: "Two 1/3 lb patties with fresh toppings",
    price: "$8.99",
    category: "Lunch",
    image: "double-burger.jpg"
  },
  {
    name: "Double Cheese Burger",
    description: "Two 1/3 lb patties with double cheese and fresh toppings",
    price: "$9.49",
    category: "Lunch",
    image: "double-cheeseburger.jpg"
  },
  {
    name: "Chicken Sandwich",
    description: "Grilled or crispy chicken with lettuce, tomato, and mayo",
    price: "$6.99",
    category: "Lunch",
    image: "chicken-sandwich.jpg"
  },
  {
    name: "Chicken Strip Basket",
    description: "4 crispy chicken strips served with fries and gravy",
    price: "$7.99",
    category: "Lunch",
    image: "chicken-strips.jpg"
  },
  {
    name: "BLT Sandwich",
    description: "Bacon, lettuce, and tomato with mayo on Texas toast",
    price: "$5.99",
    category: "Lunch",
    image: "blt.jpg"
  },
  {
    name: "Grilled Cheese",
    description: "Melted American cheese on Texas toast",
    price: "$3.99",
    category: "Lunch",
    image: "grilled-cheese.jpg"
  },
  // Sides
  {
    name: "French Fries",
    description: "Crispy golden fries",
    price: "$2.99",
    category: "Sides",
    image: "fries.jpg"
  },
  {
    name: "Tater Tots",
    description: "Crispy potato tots",
    price: "$2.99",
    category: "Sides",
    image: "tots.jpg"
  },
  {
    name: "Onion Rings",
    description: "Breaded and fried onion rings",
    price: "$3.49",
    category: "Sides",
    image: "onion-rings.jpg"
  },
  {
    name: "Side Salad",
    description: "Fresh lettuce, tomato, and cheese",
    price: "$2.99",
    category: "Sides",
    image: "side-salad.jpg"
  },
  // Drinks
  {
    name: "Fountain Drink",
    description: "Various sodas and beverages",
    price: "$1.99",
    category: "Drinks",
    image: "drink.jpg"
  },
  {
    name: "Coffee",
    description: "Fresh brewed coffee",
    price: "$1.49",
    category: "Drinks",
    image: "coffee.jpg"
  },
  {
    name: "Iced Tea",
    description: "Sweet or unsweet tea",
    price: "$1.99",
    category: "Drinks",
    image: "tea.jpg"
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/menu", (_req, res) => {
    res.json(menuData);
  });

  const httpServer = createServer(app);
  return httpServer;
}