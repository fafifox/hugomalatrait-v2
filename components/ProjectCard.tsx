import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    image: StaticImageData;
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
    return (
        <motion.article
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: 0,
                ease: "easeIn",
            }}
            className="bg-[#7877C6] cursor-pointer backdrop-blur-sm bg-opacity-10 w-full h-[296px] rounded-[32px] border border-[#8C8CDB] border-opacity-50 flex flex-col hover:bg-opacity-20 duration-300 box-border overflow-hidden"
        >
            <div className="h-1/2 w-full">
                <Image src={image} width={640} height={280} quality={100} priority alt="" />
            </div>
            <div className="h-1/2 px-4 text-white flex flex-col space-y-2">
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="font-normal text-base text-justify">{description}</p>
            </div>
        </motion.article>
    );
};
