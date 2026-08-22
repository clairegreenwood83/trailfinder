import image1 from "../assets/images/TheWrekin2.jpeg";
import image2 from "../assets/images/Snowdon.jpeg";
import image3 from "../assets/images/TheLongMynd.jpg";

const trails = [
  {
    id: "the-wrekin",
    name: "The Wrekin",
    region: "Shropshire",
    difficulty: "Moderate",
    duration: "Around 1 hour",
    image: image1,
    imageAlt: "View across the wooded slopes surrounding The Wrekin",
    featured: true,
  },
  {
    id: "snowdon",
    name: "Snowdon",
    region: "Eryri, North Wales",
    difficulty: "Challenging",
    duration: "Around 4 hours",
    image: image2,
    imageAlt: "Snowdon rising above a mountain lake in Eryri",
    featured: true,
  },
  {
    id: "the-long-mynd",
    name: "The Long Mynd",
    region: "Shropshire Hills",
    difficulty: "Moderate",
    duration: "Around 2 hours",
    image: image3,
    imageAlt: "Rolling green ridges and valleys across the Long Mynd",
    featured: true,
  },
];

export default trails;