import image1 from "../assets/images/TheWrekin2.jpeg";
import image2 from "../assets/images/Snowdon.jpeg";
import image3 from "../assets/images/TheLongMynd.jpg";

const trails = [
  {
    id: "the-wrekin",
    name: "The Wrekin",
    region: "Shropshire",
    difficulty: "Moderate",
    distance: "6.1km",
    duration: "2-2.5 hours",
    description: [
      "This trail takes in one of the most famous hills in Shropshire, with the route climbing up to and over the remains of a large Iron Age hill fort. Once inhabited by the Cornovii tribe, the stronghold dates to 400 BC and has a commanding view over the surrounding area on a clear day.",
      "The well-trodden path to the top is stony and steep in a few places, but the effort is well worth it. Great care is needed on the steep descent, which can be muddy and slippery. Appropriate footwear is required.",
      "On a clear day, the views are very scenic and the wildlife is simply stunning. This area is a composite of volcanic rocks, very ancient in its origins. The car park at the trailhead requires a fee.",
    ],
    startPoint: {
      name: "Forest Glen Car Park",
      latitude: 52.679281,
      longitude: -2.536873,
    },
    elevation: "304m",
    image: image1,
    imageAlt: "View across the wooded slopes surrounding The Wrekin",
    featured: true,
  },
  {
    id: "snowdon",
    name: "Snowdon",
    region: "Eryri, North Wales",
    difficulty: "Challenging",
    distance: "5km",
    duration: "Around 4 hours",
    description: [
      "This trail takes in one of the most famous hills in Shropshire, with the route climbing up to and over the remains of a large Iron Age hill fort. Once inhabited by the Cornovii tribe, the stronghold dates to 400 BC and has a commanding view over the surrounding area on a clear day.",
      "The well-trodden path to the top is stony and steep in a few places, but the effort is well worth it. Great care is needed on the steep descent, which can be muddy and slippery. Appropriate footwear is required.",
      "On a clear day, the views are very scenic and the wildlife is simply stunning. This area is a composite of volcanic rocks, very ancient in its origins. The car park at the trailhead requires a fee.",
    ],
    startPoint: {
      name: "Forest Glen Car Park",
      latitude: 52.679281,
      longitude: -2.536873,
    },
    elevation: "...",
    image: image2,
    imageAlt: "Snowdon rising above a mountain lake in Eryri",
    featured: true,
  },
  {
    id: "the-long-mynd",
    name: "The Long Mynd",
    region: "Shropshire Hills",
    difficulty: "Moderate",
    distance: "5km",
    duration: "Around 2 hours",
    description: "",
    startPoint: {
      name: "Forest Glen Car Park",
      latitude: 52.679281,
      longitude: -2.536873,
    },
    elevation: "...",
    image: image3,
    imageAlt: "Rolling green ridges and valleys across the Long Mynd",
    featured: true,
  },
];

export default trails;