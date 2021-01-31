import { v4 as uuidv4 } from 'uuid';

const categories = [
  {
    id: uuidv4(),
    title: "Mobile Phones",
    slug: "mobile-phone"
  },
  {
    id:uuidv4(),
    title: "Cars",
    slug:"cars"
  },
  {
    id: uuidv4(),
    title: "MotorCycle",
    slug: "motorcycle"
  },
  {
    id: uuidv4(),
    title: "Houses",
    slug : "houses"
  },
  {
    id: uuidv4(),
    title: "TV-Video-Audio",
    slug : "tv-video-audio"
  },
  {
    id: uuidv4(),
    title: "Tablets",
    slug: "tablets"
  },
  {
    id: uuidv4(),
    title: "Lands & Plots",
    slug: "lands-&-plots"
  },
];

export default categories;