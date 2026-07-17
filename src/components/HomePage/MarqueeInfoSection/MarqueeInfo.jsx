import React from "react";
import { FaAsterisk } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const MarqueeInfo = () => {
  return (
    <div className="relative z-0 headline bg-background text-text-primary py-6 lg:py-12 ">
            <div className=" absolute inset-0 -z-10 bg-linear-to-br from-accent-soft via-background to-background dark:from-accent-soft/60 dark:via-background dark:to-background text-center lg:text-left space-y-5" />
      <div
        style={{ clipPath: "polygon(0% 10%, 95% 0%, 100% 90%, 0% 100%)" }}
        className="overflow-hidden"
      >
        <div className="moving-text flex">
          <Marquee speed="50">
            <div className="flex ">
              <div className=" cntainer text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-sora md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                <h3>Flexible Payment</h3>
                <FaAsterisk />
                <h3>Money Gurantee</h3>
                <FaAsterisk />
                <h3>Online Support</h3>
                <FaAsterisk />
                <h3>Luxurious Comfort</h3>
                <FaAsterisk />
                <h3>Premium Collection</h3>
                <FaAsterisk />
                <h3>Affordable Price</h3>
                <FaAsterisk />
           
              </div>

              <div className=" cntainer text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-sora md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                 <h3>Flexible Payment</h3>
                <FaAsterisk />
                <h3>Money Gurantee</h3>
                <FaAsterisk />
                <h3>Online Support</h3>
                <FaAsterisk />
                <h3>Luxurious Comfort</h3>
                <FaAsterisk />
                <h3>Premium Collection</h3>
                <FaAsterisk />
                <h3>Affordable Price</h3>
                <FaAsterisk />
              </div>

              {/* 3 */}

              <div className=" cntainer text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-sora md:font-extrabold inter flex items-center gap-3 md:gap-6 p-1 md:p-6 justify-center">
                <h3>Flexible Payment</h3>
                <FaAsterisk />
                <h3>Money Gurantee</h3>
                <FaAsterisk />
                <h3>Online Support</h3>
                <FaAsterisk />
                <h3>Luxurious Comfort</h3>
                <FaAsterisk />
                <h3>Premium Collection</h3>
                <FaAsterisk />
                <h3>Affordable Price</h3>
                <FaAsterisk />
                <FaAsterisk />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeInfo;
