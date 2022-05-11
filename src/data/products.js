import CupsImage from "../assets/cups.jpg";
import VasesImage from "../assets/vase.jpg";
import PlatesImage from "../assets/plate.jpg";
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
  ];
  export function getProducts(){
    return products;
  };