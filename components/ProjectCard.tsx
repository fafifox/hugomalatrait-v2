import React from "react";
import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
    image: StaticImageData
    title: string
    description: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description}) => {
    return (
        <article className="bg-[#7877C6] cursor-pointer backdrop-blur-sm bg-opacity-10 w-full h-[296px] rounded-[32px] border-2 border-[#8C8CDB] border-opacity-50 flex flex-col">
            <div className="h-1/2">
                <Image
                src={image}
                width={636}
                height={280}
                quality={100}
                priority
                alt=""
                />
            </div>
            <div className="h-1/2 px-4 text-white flex flex-col space-y-2 -mt-4">
                <h3 className="font-semibold text-base">{title}</h3>
                <p className="font-normal text-base text-justify">{description}</p>
            </div>
        </article>
    );
};
