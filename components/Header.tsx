import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const navigation = [
    {
        name: "Twitter",
        link: "https://twitter.com/fafif0x",
        isExternal: true,
    },
    {
        name: "Github",
        link: "https://github.com/fafifox",
        isExternal: true,
    },
    {
        name: "Resume",
        link: "/malatrait_resume.pdf",
        isExternal: true,
    },
];

export const Header = () => {
    return (
        <header>
            <nav className="flex flex-row justify-between items-center mt-4">
                <h1 className="text-white text-md font-bold uppercase">Hugo Malatrait</h1>
                <div className="space-x-4">
                    {navigation.map((link, i) => (
                        <Link
                            href={link.link}
                            key={`link-${i}`}
                            target={link.isExternal ? "_blank" : "_self"}
                            className="text-white text-sm font-semibold uppercase hover:opacity-50 transition-opacity duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <section className="w-full h-[560px] md:h-screen relative flex items-center">
                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: 0,
                    ease: "easeIn",
                }}
                className="text-white text-opacity-40 text-4xl lg:text-6xl font-semibold lg:text-center mx-auto z-10 bg-clip-text bg-gradient-to-tl from-transparent to-white"
                >
                    Helping companies build,
                    <br className="hidden lg:block" /> launch and refine their product
                </motion.h1>
                <div
                    className="w-full h-full text-white bg-grid absolute"
                    style={{
                        maskImage: "radial-gradient(circle at 50% 50%, #8C8CDB 0%, #00000000 90%)",
                        WebkitMaskImage: "radial-gradient(circle at 50% 50%, #8C8CDB 0%, #00000000 50%)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.2,
                        ease: "easeIn",
                    }}
                    className="w-full h-[320px] header-gradient blur-[128px] rounded-[48px] absolute"
                />
            </section>
        </header>
    );
};
