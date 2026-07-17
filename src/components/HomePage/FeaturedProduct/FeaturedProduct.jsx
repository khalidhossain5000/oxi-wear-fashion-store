'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import products from '@/data/productsData';

import 'swiper/css';
import 'swiper/css/navigation';
import FeaturedCard from './FeaturedCard';

import SectionTitle from '@/components/shared/Title/SectionTitle';

const featuredProduct = products.filter((item) => item.isFeatured === true);

const FeaturedProduct = () => {
  if (featuredProduct.length === 0) return null;

  return (
    <section className="bg-background text-text-primary px-4 py-14 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
  
        <div className="flex items-end justify-between mb-10 xl:mb-14 border-b border-border pb-6">
          
          <SectionTitle className="text-center lg:text-left" subTitleClass={'text-center lg:text-left pt-2 lg:pt-4'} subTitle={'Explore our handpicked products chosen just for you.'}> Featured Products</SectionTitle>

          {/* Custom nav arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              aria-label="Previous product"
              className="featured-prev w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary hover:bg-primary hover:text-background hover:border-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} strokeWidth={1.75} />
            </button>
            <button
              aria-label="Next product"
              className="featured-next w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary hover:bg-primary hover:text-background hover:border-primary transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.featured-prev',
            nextEl: '.featured-next',
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
            className="featured-prev w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary active:bg-primary active:text-background transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            aria-label="Next product"
            className="featured-next w-11 h-11 flex items-center justify-center rounded-full border border-border text-text-primary active:bg-primary active:text-background transition-colors"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
};



export default FeaturedProduct;