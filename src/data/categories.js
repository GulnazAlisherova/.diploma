import CupsImage from "../assets/cups.jpg";
import VasesImage from "../assets/vase.jpg";
import PlatesImage from "../assets/plate.jpg";
import AccesoryImage from "../assets/accesories.png";
import EquipmentImage from "../assets/equipment.jpg";
import ToolsImage from "../assets/tools.png";


  const categories = [
     {
      image: CupsImage,
      categoryId: "cups",
      title: "Cups",
     },
     {
      image: PlatesImage,
      categoryId: "plates",
      title: "Plates",
     },
     {
      image: VasesImage,
      categoryId: "vases",
      title: "Vases",
     },
     {
      image: ToolsImage,
      categoryId: "tools",
      title: "Tools",
     },
     {
      image: AccesoryImage,
      categoryId: "accessories",
      title: "Accessories",
     },
     {
      image: EquipmentImage,
      categoryId: "equipment",
      title: "Equipment",
     },
  ];
  export function getCategories() {
    return categories;
  }
  
  export function getCategory(categoryId) {
    return categories[
      categories.findIndex((category) => category.categoryId === categoryId)
    ];
  }