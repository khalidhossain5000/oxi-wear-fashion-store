import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <h2 className="text-3xl font-bold bg-linear-to-r from-accent to-text-primary dark:to-text-primary bg-clip-text text-transparent">
            Nokshi
          </h2>
        </Link>
    );
};

export default Logo;