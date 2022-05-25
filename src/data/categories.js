import accessoriesImage from "../assets/accessoriesImage.jpg";
import toolsImage from "../assets/tools.png";
import cupImage from "../assets/cups.jpg";
import vaseImage from "../assets/vase.jpg";
import equipmentImage from "../assets/equipment.jpg"
import platesImage from "../assets/plateImage.jpg"
const categories = [
  {
    categoryId: "cups", 
    title: "Mugs",
    image: cupImage,
    desciption: "A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry."
  },
  {
    categoryId: "vases",
    title: "Vases",
    image: vaseImage,
    desciption: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries."
  },
  {
    categoryId: "plates",
    title: "Plates",
    image: platesImage,
    desciption: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries."
  },
  {
    categoryId: "accessories",
    title: "Accessories",
    image: accessoriesImage,
    desciption: "The best coffee accessories for hot and iced coffee drinks include burr grinders, water kettles, frothers, scales, and thermometers."
  },
  {
    categoryId: "equipment",
    title: "Equipment",
    image: equipmentImage,
    desciption: "The best coffee accessories for hot and iced coffee drinks include burr grinders, water kettles, frothers, scales, and thermometers."
  },
  {
    categoryId: "tools",
    title: "Tools",
    image: toolsImage,
    desciptin: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries."
  },
 
];
export function getCategories() {
  return categories;
}
export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}