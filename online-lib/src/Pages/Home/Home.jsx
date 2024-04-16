import React from "react";
import Services from "../../Component/Services/Services";
import Slider from "../../Component/Slider/Slider";
import { books } from "../../data/books";
import Headeing from "../../Component/Headeing/Headeing";
import BookSlider from "../../Component/BookSlider/BookSlider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <Headeing title="Best Seller" />
      <BookSlider item={books} />
      <Headeing title="Most Gifted" />
      <BookSlider item={books} />
      <Headeing title="Most Wished for" />
      <BookSlider item={books} />
    </div>
  );
};

export default Home;
