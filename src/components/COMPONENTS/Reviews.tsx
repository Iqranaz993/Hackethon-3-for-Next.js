import Image from 'next/image';
import React from 'react';
import PizzaSticker from "../../../public/Sticker4.png";
import SpoonSticker from "../../../public/Sticker3.png";
import foodSticker from "../../../public/Sticker2.png";
import Sticker from "../../../public/Sticker1.png";

const Reviews = () => {
  return (
    <div className="bg-primary">
      <section className="text-[white] body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Professional Chefs */}
            <div className="p-4 text-center">
              <Image src={Sticker} alt="Professional Chef" className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-[white] font-bold text-sm md:text-lg lg:text-xl mt-4">Professional Chefs</p>
              <h1 className="text-[white] text-xl md:text-2xl lg:text-3xl">420</h1>
            </div>
            {/* Items of Food */}
            <div className="p-4 text-center">
              <Image src={foodSticker} alt="Items of Food" className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-[white] font-bold text-sm md:text-lg lg:text-xl mt-4">Items of Food</p>
              <h1 className="text-[white] text-xl md:text-2xl lg:text-3xl">320</h1>
            </div>
            {/* Years of Experience */}
            <div className="p-4 text-center">
              <Image src={SpoonSticker} alt="Years of Experience" className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-[white] font-bold text-sm md:text-lg lg:text-xl mt-4">Years of Experience</p>
              <h1 className="text-[white] text-xl md:text-2xl lg:text-3xl">30+</h1>
            </div>
            {/* Happy Customers */}
            <div className="p-4 text-center">
              <Image src={PizzaSticker} alt="Happy Customers" className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <p className="leading-relaxed text-[white] font-bold text-sm md:text-lg lg:text-xl mt-4">Happy Customers</p>
              <h1 className="text-[white] text-xl md:text-2xl lg:text-3xl">220</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;