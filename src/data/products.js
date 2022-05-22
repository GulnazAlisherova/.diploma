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
    description: `When the fruit is ripe, it is almost always handpicked, using either "selective picking", where only the ripe fruit is removed, or "strip-picking", where all of the fruit is removed from a limb all at once. Selective picking is often used to produce higher quality coffee because the cherries are picked at their ripest. Strip-picking is indiscriminate and will harvest unripe, ripe, and over-ripe fruit. To improve quality after strip-picking, the harvest must be sorted.`,
    price: 10,
  },
  {
    image: cup2Image,
    productId: "wavy-mug",
    categoryId: "cups",
    title: "Wavy Mug",
    description: `The Asian palm civet eats coffee berries and excretes the beans. Because the civet prefers the taste of the ripest cherries, the civet selectively harvests the cherries. Its digestive system then processes the beans by breaking down the mucilage and pulp surrounding the seed. Once the seeds are excreted by the civet, they can be harvested, processed and sold as a niche product. Once they are finally processed, these beans are called kopi luwak, and are often marketed as a rare and expensive coffee.`,
    price: 15,
  },
  {
    image: cup3Image,
    productId: "kitty-coffe-mugs",
    categoryId: "cups",
    title: "Kitty coffe mugs",
    description: `Two methods are primarily used to process coffee berries. The first, "wet" or "washed" process, has historically usually been carried out in Central America and areas of Africa. The flesh of the cherries is separated from the seeds and then the seeds are fermented – soaked in water for about two days. This softens the mucilage, which is a sticky pulp residue that is still attached to the seeds. Then this mucilage is washed off with water.`,
    price: 44,
  },
  {
    image: vase1Image,
    productId: "dried-flower-vase",
    categoryId: "vases",
    title: "Dried flower vase",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    price: 53,
  },
  {
    image: vase2Image,
    productId: "artlandtis-face-vase",
    categoryId: "vases",
    title: "Artlandtis Face Vase",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 11,
  },
  {
    image: vase3Image,
    productId: "vintage-ceramic-vase",
    categoryId: "vases",
    title: "Vintage ceramic vase",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    price: 70,
  },
  {
    image: plate1Image,
    productId: "tableware-dish-set",
    categoryId: "plates",
    title: "Tableware dish set",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 90,
  },
  {
    image: plate2Image,
    productId: "kiwi-ceramic-plate",
    categoryId: "plates",
    title: "Kiwi ceramic plate",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 50,
  },
  {
    image: plate3Image,
    productId: "flower-ceramic-plate",
    categoryId: "plates",
    title: "Flower-ceramic plate",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 30,
  },
  {
    image: acces1Image,
    productId: "rabbit-ceramic",
    categoryId: "accesories",
    title: "2pcs Rabbit ceramic",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 10,
  },
  {
    image: acces2Image,
    productId: "ceramic-coasters",
    categoryId: "accesories",
    title: "Ceramic coasters",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 75,
  },
  {
    image: acces3Image,
    productId: "ring-holder",
    categoryId: "accesories",
    title: "Ceramic ring holder",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 80,
  },
  {
    image: equipment1Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "Pottery  Wheel orange",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 500,
  },
  {
    image: equipment2Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "Ceramic Wheel blue",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 550,
  },
  {
    image: equipment3Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "Ceramic wheel white",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 540,
  },
  {
    image: tool1Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "6pcs Tool set",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 6,
  },
  {
    image: tool3Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "8pcs Tool set",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 8,
  },
  {
    image: tool2Image,
    productId: "pottery-wheel",
    categoryId: "accesories",
    title: "Full Tool set",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
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