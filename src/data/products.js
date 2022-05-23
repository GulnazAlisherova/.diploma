import cup1Image from "../assets/cup1.png";
import cup2Image from "../assets/cup2.jpg";
import cup3Image from "../assets/cup3.jpg";
import vase1Image from "../assets/vase1.jpg";
import vase2Image from "../assets/vase2.jpg";
import vase3Image from "../assets/vase3.jpg";
import plate1Image from "../assets/plate1.jpg";
import plate2Image from "../assets/plate2.jpg";
import plate3Image from "../assets/plate3.jpg";
import acces1Image from "../assets/acces1.jpg";
import acces2Image from "../assets/acces2.jpg";
import acces3Image from "../assets/acces3.jpg";
import equipment1Image from "../assets/equipment1.jpg";
import equipment2Image from "../assets/equipment2.jpg";
import equipment3Image from "../assets/equipment3.jpg";
import tool1Image from "../assets/tool1.webp";
import tool2Image from "../assets/tool2.jpg";
import tool3Image from "../assets/tool3.jpg";


const products = [
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
    title: "Kiwi ceramic plate",
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
    productId: "2pcs-rabbit-ceramic",
    categoryId: "accesories",
    title: "2pcs Rabbit ceramic",
    description: `Funny Home Decor - Excellent Easter Bunny Ornament for anywhere, such as home, office, party, etc.
    Vivid Bunny Decor - This Ceramic Bunny Decor with fine workmanships, delicate surface, lifelike shape design.`,
    price: 10,
  },
  {
    image: acces2Image,
    productId: "ceramic-coasters",
    categoryId: "accesories",
    title: "Ceramic coasters",
    description: `While coasters come in a wide variety of materials, from cotton to cork, some of the most absorbent choices are felt and porous stones like ceramic and sandstone. If you go with one of these materials, your coasters will be able to properly manage any condensation that runs off your glass.`,
    price: 75,
  },
  {
    image: acces3Image,
    productId: "ceramic-ring-holder",
    categoryId: "accesories",
    title: "Ceramic ring holder",
    description: `The glaze breaks where its thinner to a lighter color. This is easy to see on the rim of each ring dish. `,
    price: 80,
  },
  {
    image: equipment1Image,
    productId: "pottery-wheel ",
    categoryId: "equipment",
    title: "Pottery  Wheel",
    description: `The term 'collaring' refers to a type of the ceramic technique that involves throwing a pot onto a potter's wheel. It is done by narrowing the top of the pot for the purpose of preventing the wet clay from being flared.
    `,
    price: 500,
  },
  {
    image: equipment2Image,
    productId: "pottery-wheel-blue",
    categoryId: "equipment",
    title: "Pottery Wheel blue",
    description: `
    Right handed potters should let the wheel spin anti-clockwise and left-handed throwers should switch the direction of the wheel head to a clockwise motion.`,
    price: 550,
  },
  {
    image: equipment3Image,
    productId: "pottery-wheel-white",
    categoryId: "equipment",
    title: "Pottery wheel white",
    description: `
    It comes with a foot pedal that turns the wheel faster when pressure is put on it. The wheel is placed in a frame and is about waist high. You sit in front of the wheel and lean forward to work with the clay. The wheel will turn non-stop as long as there is pressure on the foot pedal.`,
    price: 540,
  },
  {
    image: tool1Image,
    productId: "6pcs-tool-set",
    categoryId: "tools",
    title: "6pcs Tool set",
    description: `There are pottery tools specifically designed for ceramics. Among these are: elephant ear sponges, potter ribs, loop tools, needle tools, fettling knives, and toggle clay cutters. Other essential ceramic tools are the elephant ear sponge and potter ribs.`,
    price: 6,
  },
  {
    image: tool3Image,
    productId: "8pcs-tool-set",
    categoryId: "tools",
    title: "8pcs Tool set",
    description: `The three main pieces of clay processing equipment are clay mixers, pugmills, and pugger-mixers. Clay mixers only mix clay body ingredients and are also used to recycle clay scraps.`,
    price: 8,
  },
  {
    image: tool2Image,
    productId: "full-tool-set",
    categoryId: "tools",
    title: "Full Tool set",
    description: `There are four basic types of pottery, porcelain, stoneware, earthenware,and Bone China. Those four vary in accordance to the clay used to create them,as well as the heat required to fire them.`,
    price: 22,
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