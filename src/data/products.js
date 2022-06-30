import cup1Image from "../assets/cup1.png";
import cup2Image from "../assets/cup2.jpg";
import cup3Image from "../assets/cup3.jpg";
import vase1Image from "../assets/vase1.jpg";
import vase2Image from "../assets/vase2.jpg";
import vase3Image from "../assets/vase3.jpg";
import plate1Image from "../assets/plate1.jpg";
import plate2Image from "../assets/plate2.jpg";
import plate3Image from "../assets/plate3.jpg";
import acces1Image from "../assets/cat.jpg";
import acces2Image from "../assets/coaster.jpg";
import acces3Image from "../assets/candle.jpg";

const products = [
 
  {
    image: vase1Image,
    productId: "dried-flower-vase",
    categoryId: "vases",
    title: "Dried flower vase",
    description: `
    A ceramic vase is made from natural or specially formulated clay. Various types of clays with different properties and colors are available in a ceramics supplies shop.`,
    price: 53,
  },
  {
    image: vase2Image,
    productId: "artlandtis-face-vase",
    categoryId: "vases",
    title: "Artlandtis Face Vase",
    description: `Give our home the life and glory it deserves with Artlandtis The David Head Vase sculpture!This stunning artistic piece is crafted with utmost perfection .`,
    price: 11,
  },
  {
    image: vase3Image,
    productId: "vintage-ceramic-vase",
    categoryId: "vases",
    title: "Vintage ceramic vase",
    description: `Ceramic vase Active glaze ceramics are naturally flexible and stable in production. As an industry leader, don't hesitate to contact us for more high-quality products. transport safety.`,
    price: 70,
  },
  {
    image: cup1Image,
    productId: "coffe-mug",
    categoryId: "cups",
    title: "Coffee Mug",
    description: `Not only does the brew matter when it comes to coffee, but your mug choice matters too. Your mug choice can affect the taste of your drink, so it’s very important to choose carefully. Ceramic and stoneware coffee mugs often go head to head because while they have a lot in common, there are some key differences.  `,
    price: 10,
  },
  {
    image: cup2Image,
    productId: "wavy-mug",
    categoryId: "cups",
    title: "Wavy Mug",
    description: `Ceramic is a material that is mechanically strong and can be given the desired shape easily. Mugs and other products made with ceramics have a long life as compared to mugs made of glass. Also ceramic can be given any shape easily that makes possible to make different design mugs`,
    price: 15,
  },
  {
    image: cup3Image,
    productId: "kitty-coffe-mugs",
    categoryId: "cups",
    title: "Kitty coffe mugs",
    description: `
    They're common among coffee and tea drinkers. They're good to use for both cold and hot beverages and are microwave-safe! Ceramic mugs are the most neutral in terms of flavor. They do not hold on to flavors from other drinks.`,
    price: 44,
  },
  {
    image: plate1Image,
    productId: "tableware-dish-set",
    categoryId: "plates",
    title: "Tableware dish set",
    description: `Ceramic dishes are chippable but durable, tough, and corrosion-resistant. Unless, of course, you slip one on the floor. Ceramic cookware is oven and microwave-safe. Meaning, it's perfect for cooking different dishes at high temperatures.`,
    price: 90,
  },
  {
    image: plate2Image,
    productId: "kiwi-ceramic-plate",
    categoryId: "plates",
    title: "Lovely ceramic plate",
    description: `Painting your own pottery might not be good, clean fun, but at these paint-your-own places, you'll find out why it's worth getting your hands dirty.`,
    price: 50,
  },
  {
    image: plate3Image,
    productId: "flower-ceramic-plate",
    categoryId: "plates",
    title: "Flower-ceramic plate",
    description: `Ceramic plates or trauma plates are used as inserts in soft ballistic vests. It is hard enough to ensure that a bullet or other weapon is deflected, meaning the armor material pushes out on the bullet with nearly the same force with which the bullet pushes in, thus preventing the armor from being penetrated.`,
    price: 30,
  },
  {
    image: acces1Image,
    productId: "ceramic-cat",
    categoryId: "accessories",
    title: "Ceramic Cat",
    description: `Funny Home Decor - Excellent Easter Bunny Ornament for anywhere, such as home, office, party, etc.
    Vivid Bunny Decor - This Ceramic Bunny Decor with fine workmanships, delicate surface, lifelike shape design.`,
    price: 10,
  },
  {
    image: acces2Image,
    productId: "ceramic-coasters",
    categoryId: "accessories",
    title: "Ceramic coasters",
    description: `While coasters come in a wide variety of materials, from cotton to cork, some of the most absorbent choices are felt and porous stones like ceramic and sandstone. If you go with one of these materials, your coasters will be able to properly manage any condensation that runs off your glass.`,
    price: 75,
  },
  {
    image: acces3Image,
    productId: "PomegranateCandles",
    categoryId: "accessories",
    title: "PomegranateCandles",
    description: `The glaze breaks where its thinner to a lighter color. This is easy to see on the rim of each ring dish. `,
    price: 80,
  },
  
];


export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}
