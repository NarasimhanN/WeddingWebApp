// export const menuData = {
//   breakfast: {
//     title: "Breakfast",
//     items: [
//       "Idly - Sambhar & Chutney",
//       "Neer dosa ",
//       "Pongal",
//       "Kashi halwa (aka pumkin halwa)",
//       "Coffee | Tea",
//       "Lemon Pudina juice (at 11:30am)",
//     ],
//   },
//   lunch: {
//     title: "Lunch",
//     items: [
//       "Nelikai juice",
//       "Basics - Aplam (papad), Picket, salt",
//       "Beans curry",
//       "sweet corn salad",
//       "Pinapple goggu",
//       "Peni (sweet)",
//       "Badam halwa",
//       "Vege bonda",
//       "Kuruskethra",

//       "Vegetable Kutu",
//       "Pepper rasam",
//       "Curd",
//     ],
//   },
//   // Reception menu
//   dinner: {
//     title: "Dinner",
//     items: [
//       "Sugarcase juice (at entrance)",
//       "Chats (at entrance)",
//       "Coconut soup",
//       "Babycorn manchuri",
//       "Panner tikka",
//       "Munbagal Dosa",
//       "Cashew Ghee rice",
//       "Dal curry",
//       "Veg curry",
//       "Tandoor roti",
//       "Sambhar with rice",
//       "Rasam with rice",
//       "Rasmalai (Sweet)",
//       "Carrot halwa",
//       "Icecream",
//     ],
//   },
// };

export const menuData = {
  breakfast: {
    title: "Breakfast",
    items: [
      { category: "Beverages", foods: ["Coffee", "Tea", "Orange Juice"] },
      {
        category: "Main Course",
        foods: ["Pancakes", "Omelette", "French Toast"],
      },
      { category: "Sides", foods: ["Bacon", "Sausages", "Fruit Salad"] },
    ],
  },
  lunch: {
    title: "Lunch",
    items: [
      {
        category: "Starters",
        foods: ["Caesar Salad", "Bruschetta", "Soup of the Day"],
      },
      {
        category: "Main Course",
        foods: ["Grilled Chicken", "Pasta Primavera", "Vegetable Stir Fry"],
      },
      { category: "Desserts", foods: ["Brownie", "Cheesecake", "Ice Cream"] },
    ],
  },
  dinner: {
    title: "Dinner",
    items: [
      {
        category: "Appetizers",
        foods: ["Garlic Bread", "Stuffed Mushrooms", "Spring Rolls"],
      },
      {
        category: "Entrees",
        foods: ["Steak", "Salmon Fillet", "Vegetable Curry"],
      },
      {
        category: "Desserts",
        foods: ["Chocolate Mousse", "Tiramisu", "Panna Cotta"],
      },
    ],
  },
};
