import accessoriesImage from "../assets/plate.jpg";
import cupImage from "../assets/mug.jpg";
import vaseImage from "../assets/vase.jpg";
import platesImage from "../assets/plates.jpg"
const categories = [
  {
    categoryId: "cups",
    title: "Mugs",
    image: cupImage,
    desciption: "Ceramic artifacts have an important role in archaeology for understanding the culture, technology, and behavior of peoples of the past. "
  },
  {
    categoryId: "vases",
    title: "Vases",
    image: vaseImage,
    desciption: "The traditional analysis involves sorting ceramic artifacts, sherds, and larger fragments into specific types based on style, composition, manufacturing, and morphology. "
  },
  {
    categoryId: "plates",
    title: "Plates",
    image: platesImage,
    desciption: " This mechanism substantially increases the fracture toughness of such ceramics. Ceramic disc brakes are an example of using a ceramic matrix composite material manufactured with a specific process."
  },
  {
    categoryId: "accessories",
    title: "Accessories",
    image: accessoriesImage,
    desciption: "Pyroelectricity is also a necessary consequence of ferroelectricity. This can be used to store information in ferroelectric capacitors, elements of ferroelectric RAM.."
  },
  
];
export function getCategories() {
  return categories;
}
export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category => category.categoryId === categoryId
    )
  ];
}