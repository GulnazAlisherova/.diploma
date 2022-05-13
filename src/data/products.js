import CupsImage from "../assets/cups.jpg";
import VasesImage from "../assets/vase.jpg";
import PlatesImage from "../assets/plate.jpg";
import AccesoryImage from "../assets/accesories.png"
import ToolsImage from "../assets/tools.png";
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
      categoryId: "tools",
      title: "Tools",
     },
     {
      image: AccesoryImage,
      categoryId: "equipment",
      title: "Equipment",
     },
     
  ];
  export function getProducts(){
    return products;
  };