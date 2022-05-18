import CupsImage from "../assets/cups.jpg";
import VasesImage from "../assets/vase.jpg";
import PlatesImage from "../assets/plate.jpg";
import AccesoryImage from "../assets/accesories.png"
import ToolsImage from "../assets/tools.png";

import EquipmentImage from "../assets/equipment.jpg";
  const products = [
     {
      image: CupsImage,
      productId: "cups",
      title: "Cups",
     },
     {
      image: PlatesImage,
      productId: "plates",
      title: "Plates",
     },
     {
      image: VasesImage,
      productId: "vases",
      title: "Vases",
     },
     {
      image: AccesoryImage,
      categoryId: "accessories",
      title: "Accessories",
     },
     {
      image: ToolsImage,
      productId: "tools",
      categoryId: "coffee-beans",
      title: "Tools",
      description: ` Totam cupiditate, qui deserunt nostrum consectetur, laboriosam tempore officiis rerum deleniti nisi sunt suscipit maiores!`,
      price: 10,
     },
     {
      image: EquipmentImage,
      categoryId: "equipment",
      title: "Equipment",
     },
     
  ];
  export function getProducts(categoryId) {
    if (categoryId) {
      return products.filter(product => product.categoryId === categoryId);    
    }
  
    return products;
  }
  