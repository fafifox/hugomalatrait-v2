import React from "react";
import { FaGithub, FaTwitter, FaRegEnvelope, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

interface AboutProps {}

const links = [
    {
        id: 0,
        icon: FaTwitter,
        link: "https://twitter.com/fafif0x",
    },
    {
        id: 1,
        icon: FaGithub,
        link: "https://github.com/fafifox",
    },
    {
        id: 2,
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/hugomalatrait",
    },
    {
        id: 3,
        icon: FaLinkedin,
        link: "https://twitter.com/crappybirds",
    },
];

export const About: React.FC<AboutProps> = ({}) => {
    return (
        <section className="mt-8 mb-16 space-y-8">
            <div className="flex flex-row justify-between w-full">
                <div className="w-1/2 space-y-8">
                    <h2 className="text-4xl font-semibold text-white">
                        About Me
                    </h2>
                    <p
                        className="text-lg text-white"
                    >
                        Designer, Developer, Founder — Jack-of-all-trade with a passion for creating technology-driven experiences.
                        <br />
                        <br />
                        Experienced in web development, video game development, game design, network programming, cloud computing, blockchain, and
                        decentralization.
                        <br />
                        <br />
                        As a continual self-learner, I&apos;m always looking to expand my knowledge and skills. Whether working in a team or individually, I am
                        committed to use my abilities to bring ideas to life and create meaningful solutions.
                    </p>
                </div>
                <div className="flex flex-col justify-center w-1/3 space-y-8">
                    <dt className="flex flex-row items-center p-6 border border-[#8C8CDB] border-opacity-50 rounded-2xl text-center bg-[#7877C6] bg-opacity-10 hover:bg-opacity-20 duration-300">
                        <FaRegEnvelope className="w-6 h-6" aria-label="Email Icon" aria-hidden="true" />
                        <span className="ml-6 text-xl font-semibold">hello@hugomalatrait.com</span>
                    </dt>
                    <dt className="flex flex-row items-center p-6 border border-[#8C8CDB] border-opacity-50 rounded-2xl text-center bg-[#7877C6] bg-opacity-10 hover:bg-opacity-20 duration-300">
                        <FaDiscord className="w-6 h-6" aria-label="Email Icon" aria-hidden="true" />
                        <span className="ml-6 text-xl font-semibold">fafifox#3250</span>
                    </dt>
                    {/* <div className="flex flex-row justify-between">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                className="flex flex-row items-center p-6 border border-[#8C8CDB] border-opacity-50 rounded-2xl text-center bg-[#7877C6] bg-opacity-10 hover:bg-opacity-20 duration-300"
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <link.icon className="w-6 h-6" aria-label="Email Icon" aria-hidden="true" />
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};
