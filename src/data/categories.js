import CupsImage from "../assets/cups.jpg";
import VasesImage from "../assets/vase.jpg";
import PlatesImage from "../assets/plate.jpg";
import AccesoryImage from "../assets/accesories.png"
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
      image: AccesoryImage,
      categoryId: "accessories",
      title: "Accessories",
     },
  ];
  export function getProducts(){
    return categories;
  };