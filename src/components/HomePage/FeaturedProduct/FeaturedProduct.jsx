"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import products from "@/data/productsData";

import "swiper/css";
import "swiper/css/navigation";
import FeaturedCard from "./FeaturedCard";

import SectionTitle from "@/components/shared/Title/SectionTitle";

const featuredProduct = products.filter((item) => item.isFeatured === true);

const FeaturedProduct = () => {
  if (featuredProduct.length === 0) return null;

  return (
    <section className="relative text-text-primary  py-14 px-4 md:px-8 lg:px-16 z-0">
      <div className=" absolute inset-0 -z-10 bg-linear-to-br from-accent-soft via-background to-background dark:from-accent-soft/60 dark:via-background dark:to-background text-center lg:text-left space-y-5" />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-accent-soft dark:from-accent-soft/40 to-transparent -z-10" />

      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10 xl:mb-14 border-b border-border pb-6">
          <SectionTitle
            className="text-center lg:text-left"
            subTitleClass={"text-center lg:text-left pt-2 lg:pt-4"}
            subTitle={"Explore our handpicked products chosen just for you."}
          >
            {" "}
            Featured Products
          </SectionTitle>

          {/* Custom nav arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              aria-label="Previous product"
              className="featured-prev w-11 h-11 flex items-center justify-center rounded-full border border-accent-soft text-text-primary hover:bg-accent/90 hover:text-accent-soft hover:border-accent-soft transition-colors duration-200 cursor-pointer "
            >
              <ChevronLeft size={18} strokeWidth={1.75} />
            </button>
            <button
              aria-label="Next product"
              className="featured-next w-11 h-11 flex items-center justify-center rounded-full border border-accent-soft text-text-primary hover:bg-accent/90 hover:text-accent-soft hover:border-accent-soft transition-colors duration-200 cursor-pointer "
            >
              <ChevronRight size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".featured-prev",
            nextEl: ".featured-next",
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          slidesPerView={1.15}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="pb-2!"
        >
          {featuredProduct.map((product) => (
            <SwiperSlide key={product.id}>
              <FeaturedCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile arrows below carousel */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-8">
          <button
            aria-label="Previous product"
            className="featured-prev w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary active:bg-accent/90 active:text-background transition-colors disabled:bg-red-400"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            aria-label="Next product"
            className="featured-next w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary active:bg-accent/90 active:text-background transition-colors "
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
