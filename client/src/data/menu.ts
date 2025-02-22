// Static menu data definition
export interface MenuItem {
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly category: string;
  readonly customizations?: readonly string[];
}

// Export as a readonly constant array to ensure static analysis
export const menuData = [
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
  {
    name: "Double Pancakes",
    description: "Two fluffy pancakes",
    price: "$6.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ]
  },
  {
    name: "Triple Pancakes",
    description: "Three fluffy pancakes",
    price: "$8.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ]
  },
  {
    name: "Waffle",
    description: "One fresh waffle",
    price: "$4.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ]
  },
  {
    name: "French Toast",
    description: "2 Pieces of French Toast",
    price: "$7.99",
    category: "Breakfast",
    customizations: [
      "Add Chocolate Chips or Blueberries +$1",
      "Add Banana & Whip Cream +$2"
    ]
  },
  // Breakfast Sides
  {
    name: "Two Eggs Any Style",
    description: "Fresh farm eggs cooked to your preference",
    price: "$3.99",
    category: "Breakfast"
  },
  {
    name: "Bacon",
    description: "3 pieces of crispy bacon",
    price: "$4.99",
    category: "Breakfast"
  },
  {
    name: "Sausage",
    description: "2 pieces of breakfast sausage",
    price: "$4.99",
    category: "Breakfast"
  },
  {
    name: "Breakfast Potatoes",
    description: "Seasoned breakfast potatoes",
    price: "$3.99",
    category: "Breakfast"
  },
  {
    name: "Toast",
    description: "Choice of White, Wheat, or Sourdough",
    price: "$2.99",
    category: "Breakfast"
  },
  // Special Cuisine (Indian Food)
  // Veg Appetizers
  {
    name: "Samosa (2 pcs)",
    description: "Golden-brown pastry filled with spiced potatoes and peas",
    price: "$4.99",
    category: "Special Cuisine"
  },
  {
    name: "Mix Veg Pakora",
    description: "Assorted vegetable fritters with Indian spices",
    price: "$5.99",
    category: "Special Cuisine"
  },
  {
    name: "Aloo Tikki (3 pcs)",
    description: "Spiced potato patties served with chutney",
    price: "$5.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced chicken",
    price: "$5.99",
    category: "Special Cuisine"
  },
  {
    name: "Beef Samosa (2 pcs)",
    description: "Crispy pastry filled with spiced beef",
    price: "$5.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken with curry leaves",
    price: "$8.99",
    category: "Special Cuisine"
  },
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
    name: "Chicken Saag",
    description: "Chicken cooked with creamy spinach",
    price: "$14.99",
    category: "Special Cuisine"
  },
  {
    name: "Tandoori Chicken",
    description: "Clay oven roasted chicken with Indian spices",
    price: "$13.99",
    category: "Special Cuisine"
  },
  {
    name: "Sabudana Vada (3 pcs)",
    description: "Crispy sago pearls patties, traditional fasting food",
    price: "$5.99",
    category: "Special Cuisine"
  },
  {
    name: "Batata Vada (2 pcs)",
    description: "Spiced potato fritters served with chutney",
    price: "$4.99",
    category: "Special Cuisine"
  },
  {
    name: "Veg Manchuria",
    description: "Vegetable balls in Indo-Chinese sauce",
    price: "$7.99",
    category: "Special Cuisine"
  },
  {
    name: "Gobi Manchuria",
    description: "Crispy cauliflower in Indo-Chinese sauce",
    price: "$7.99",
    category: "Special Cuisine"
  },
  {
    name: "Honey Chilli Cauliflower",
    description: "Crispy cauliflower in sweet and spicy sauce",
    price: "$7.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken Lollipop (5 pcs)",
    description: "Spiced and crispy chicken winglets",
    price: "$9.99",
    category: "Special Cuisine"
  },
  {
    name: "Fish 65",
    description: "Spicy, deep-fried fish with Indian spices",
    price: "$9.99",
    category: "Special Cuisine"
  },
  {
    name: "Shrimp 65",
    description: "Spicy, deep-fried shrimp with Indian spices",
    price: "$10.99",
    category: "Special Cuisine"
  },
  {
    name: "Meatballs (6 pcs)",
    description: "Spiced meatballs in rich sauce",
    price: "$8.99",
    category: "Special Cuisine"
  },
  {
    name: "Channa Masala",
    description: "Chickpeas in spiced tomato gravy",
    price: "$11.99",
    category: "Special Cuisine"
  },
  {
    name: "Bendi Masala",
    description: "Okra cooked with onions and Indian spices",
    price: "$11.99",
    category: "Special Cuisine"
  },
  {
    name: "Baigan Bartha",
    description: "Smoky mashed eggplant with spices",
    price: "$11.99",
    category: "Special Cuisine"
  },
  {
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach sauce",
    price: "$12.99",
    category: "Special Cuisine"
  },
  {
    name: "Navarathan Kurma",
    description: "Mixed vegetables in rich cream sauce",
    price: "$12.99",
    category: "Special Cuisine"
  },
  {
    name: "Malai Kofta",
    description: "Vegetable and cheese dumplings in rich cream sauce",
    price: "$13.99",
    category: "Special Cuisine"
  },
  {
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato-cream sauce",
    price: "$13.99",
    category: "Special Cuisine"
  },
  {
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in spiced gravy",
    price: "$13.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken Curry",
    description: "Traditional Indian chicken curry",
    price: "$13.99",
    category: "Special Cuisine"
  },
  {
    name: "Chicken Vindaloo",
    description: "Spicy curry with potatoes and chicken",
    price: "$14.99",
    category: "Special Cuisine"
  },
  {
    name: "Beef Curry",
    description: "Traditional Indian beef curry",
    price: "$15.99",
    category: "Special Cuisine"
  },
  {
    name: "Lamb Curry",
    description: "Traditional Indian lamb curry",
    price: "$15.99",
    category: "Special Cuisine"
  },
  {
    name: "Lamb Saag",
    description: "Lamb cooked with creamy spinach",
    price: "$15.99",
    category: "Special Cuisine"
  },
  {
    name: "Shrimp Curry",
    description: "Shrimp cooked in aromatic curry sauce",
    price: "$15.99",
    category: "Special Cuisine"
  },
  {
    name: "Fish Curry",
    description: "Fish cooked in traditional spices",
    price: "$14.99",
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
    name: "Double Meat Burger",
    description: "Two 1/3 lb patties with fresh toppings",
    price: "$8.99",
    category: "Lunch"
  },
  {
    name: "Double Cheese Burger",
    description: "Two 1/3 lb patties with double cheese and fresh toppings",
    price: "$9.49",
    category: "Lunch"
  },
  {
    name: "Chicken Sandwich",
    description: "Grilled or crispy chicken with lettuce, tomato, and mayo",
    price: "$6.99",
    category: "Lunch"
  },
  {
    name: "Chicken Strip Basket",
    description: "4 crispy chicken strips served with fries and gravy",
    price: "$7.99",
    category: "Lunch"
  },
  {
    name: "BLT Sandwich",
    description: "Bacon, lettuce, and tomato with mayo on Texas toast",
    price: "$5.99",
    category: "Lunch"
  },
  {
    name: "Grilled Cheese",
    description: "Melted American cheese on Texas toast",
    price: "$3.99",
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
    name: "Tater Tots",
    description: "Crispy potato tots",
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
  },
  {
    name: "Small Coffee",
    description: "Fresh brewed coffee",
    price: "$2.50",
    category: "Drinks"
  },
  {
    name: "Large Coffee",
    description: "Fresh brewed coffee",
    price: "$3.50",
    category: "Drinks"
  },
  {
    name: "Hot Tea",
    description: "Choice of tea varieties",
    price: "$2.50",
    category: "Drinks"
  },
  {
    name: "Orange Juice",
    description: "Fresh orange juice",
    price: "$2.50",
    category: "Drinks"
  },
  {
    name: "Apple Juice",
    description: "Fresh apple juice",
    price: "$2.50",
    category: "Drinks"
  },
  {
    name: "Bottled Water",
    description: "Pure bottled water",
    price: "$1.50",
    category: "Drinks"
  }
] as const;

// Default export for better static site compatibility
export default menuData;