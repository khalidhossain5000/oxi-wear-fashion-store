import React from "react";
import Link from "next/link";
import { House, PackageX, ShoppingBag } from "lucide-react";
import Title from "../Title/Title";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background transition-colors duration-300">
      <div className="w-full max-w-3xl text-center">
        {/* Large icon with soft background */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-teal-600 transition-colors duration-300">
          <PackageX className="h-12 w-12 text-accent-soft" strokeWidth={1.5} />
        </div>

        {/* 404 number – bold, oversized, primary color */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-extrabold leading-none tracking-tighter text-primary transition-colors duration-300 font-sora">
          <span className="bg-linear-to-r from-teal-900 via-teal-200 to-teal-600  bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Title */}
        <Title>Product Not Found</Title>

        {/* Separator */}
        <div className="mx-auto mt-6 mb-6 h-px w-16 bg-border transition-colors duration-300" />

        {/* Description */}
        <p className="text-base text-text-secondary leading-relaxed transition-colors duration-300">
          We couldn’t locate that product. It may have been removed, renamed, or
          the link you followed is incorrect.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:opacity-85 shadow-sm"
          >
            <House />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground px-6 py-3 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-muted-surface"
          >
            Browse Products
           <ShoppingBag />
          </Link>
        </div>

   
      </div>
    </section>
  );
};

export default NotFound;
