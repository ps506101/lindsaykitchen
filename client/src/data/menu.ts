import { MenuItem } from "@shared/schema";

export const menuData: MenuItem[] = [
  // Breakfast Items
  {
    name: "Tex-Mex Tacos",
    description: "Egg, Cheese & Choice of Meat (Chorizo, Bacon, Ham, Sausage). Side of Salsa included",
    price: "$10.99",
    category: "Breakfast",
    customizations: ["Add Potatoes +$1"]
  },
  {
    name: "Omelette",
    description: "2 Farm Eggs (Any Style) with Choice of Cheese (American, Cheddar, Swiss, Pepper Jack)",
    price: "$9.99",
    category: "Breakfast",
    customizations: [
      "Add Onions, Tomatoes, Bell Peppers +$1",
      "Add Mushrooms, Spinach +$1.50",
      "Add Bacon, Sausage, Ham +$2",
      "Add Avocado +$2"
    ]
  },
  {
    name: "Single Pancake",
    description: "One fluffy pancake",
    price: "$3.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ]
  },
  // Special Cuisine
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: "$14.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken in spiced tomato gravy",
    price: "$14.99",
    category: "Special Cuisine"
  },
  {
    name: "Tandoori Chicken",
    description: "Clay oven roasted chicken with Indian spices",
    price: "$13.99",
    category: "Special Cuisine"
  },
  // Lunch Items
  {
    name: "Hamburger",
    description: "1/3 lb patty with lettuce, tomato, onion, pickles, and mayo",
    price: "$6.99",
    category: "Lunch"
  },
  {
    name: "Cheeseburger",
    description: "1/3 lb patty with American cheese and fresh toppings",
    price: "$7.49",
    category: "Lunch"
  },
  {
    name: "Chicken Strip Basket",
    description: "4 crispy chicken strips served with fries and gravy",
    price: "$7.99",
    category: "Lunch"
  },
  // Sides
  {
    name: "French Fries",
    description: "Crispy golden fries",
    price: "$2.99",
    category: "Sides"
  },
  {
    name: "Onion Rings",
    description: "Breaded and fried onion rings",
    price: "$3.49",
    category: "Sides"
  },
  {
    name: "Side Salad",
    description: "Fresh lettuce, tomato, and cheese",
    price: "$2.99",
    category: "Sides"
  },
  // Drinks
  {
    name: "Fountain Drink",
    description: "Various sodas and beverages",
    price: "$1.99",
    category: "Drinks"
  },
  {
    name: "Coffee",
    description: "Fresh brewed coffee",
    price: "$1.49",
    category: "Drinks"
  },
  {
    name: "Iced Tea",
    description: "Sweet or unsweet tea",
    price: "$1.99",
    category: "Drinks"
  }
];