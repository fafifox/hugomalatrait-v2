import Link from "next/link";
import React from "react";

const navigation = [
    {
        name: 'Github',
        link: 'https://github.com/fafifox',
        isExternal: true
    },
    {
        name: 'Resume',
        link: 'https://github.com/fafifox',
        isExternal: true
    }
]

export const Header = () => {
    return (
        <header>
            <nav className="flex flex-row justify-between items-center mt-4">
                <h1 className="text-white text-md font-bold uppercase">Hugo Malatrait</h1>
                <div className="space-x-4">
                    { navigation.map((link, i) => (
                    <Link href={link.link} key={`link-${i}`} className="text-white text-sm font-semibold uppercase hover:opacity-50 transition-opacity duration-300">
                        {link.name}
                    </Link>
                    ))
                    }
                </div>
            </nav>
            <section className="w-full h-[512px] relative flex items-center">
                <h1 className="text-white text-opacity-40 text-4xl lg:text-6xl font-semibold lg:text-center mx-auto z-10 bg-clip-text bg-gradient-to-tl from-transparent to-white">
                    Helping companies build,
                    <br className="hidden lg:block" /> launch and refine their product
                </h1>
                <div
                    className="w-full h-full text-white bg-grid absolute"
                    style={{
                        maskImage: "radial-gradient(circle at 50% 50%, #8C8CDB 0%, #8C8CDB00 90%)",
                        WebkitMaskImage: "radial-gradient(circle at 50% 50%, #8C8CDB 0%, #00000000 50%)",
                    }}
                ></div>
                <div className="w-full h-[320px] header-gradient blur-[96px] rounded-[48px] absolute"></div>
            </section>
        </header>
    );
};
