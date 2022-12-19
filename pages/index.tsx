import Head from "next/head";
import { StaticImageData } from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import illus_crappy from "../public/projects/illus_crappybirds.png";
import illus_treefi from "../public/projects/illus_treefi.png";
import illus_kryxivia from "../public/projects/illus_kryxivia.png";
import illus_glq_marketplace from "../public/projects/illus_glq_marketplace.png";
import illus_glq_interface from "../public/projects/illus_glq_interface.png";
import illus_glq from "../public/projects/illus_glq.png";
import illus_dr from "../public/projects/illus_dr.png";

export default function Home({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Hugo Malatrait</title>
                <meta name="description" content="Designer, Developer, Founder — Jack-of-all-trade with a passion for building new things." />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000212" />
                <meta name="msapplication-TileColor" content="#000212" />
                <meta name="theme-color" content="#000212" />
            </Head>

            <main className="container mx-auto max-w-sm md:max-w-3xl lg:max-w-6xl px-4 lg:px-0">
                <Header />
                <section className="mt-8 mb-16 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: "easeIn",
                        }}
                        className="text-white text-4xl font-semibold"
                    >
                        Hello, I&apos;m Hugo Malatrait!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: "easeIn",
                        }}
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
                    </motion.p>
                </section>
                <section className="mt-8 mb-16 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: "easeIn",
                        }}
                        className="text-white text-4xl font-semibold"
                    >
                        Latest Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {projects.map((project: any, i: number) => (
                            <ProjectCard key={`project-${i}`} image={project.image} title={project.title} description={project.description} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="container mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl md:px-4 lg:px-0 text-[#8C8CDB] text-sm text-opacity-50 mb-4 mt-8">
                <p>© 2022 Hugo Malatrait. All rights reserved.</p>
            </footer>
        </>
    );
}

type Project = {
    image: StaticImageData;
    title: string;
    description: string;
};

export const getStaticProps: GetStaticProps<{ projects: Project[] }> = async () => {
    const projects = [
        {
            image: illus_crappy,
            title: "Crappy Birds",
            description: `Founder of Crappy Birds, a convivial and whimsical online game, with a strong design emphasis on explorative platforming, social interactions and digital collectible ownership.`,
        },
        {
            image: illus_treefi,
            title: "TreeFi",
            description: `Collaborated with the client team to integrate the design into a functional application and implemented web3 authentication and smart contract interactions.`,
        },
        {
            image: illus_kryxivia,
            title: "Kryxivia",
            description: `Collaborated with the client team to design and develop the Kryxivia minting and staking dApp. Implemented web3 authentication and smart contract interactions.`,
        },
        {
            image: illus_glq_marketplace,
            title: "GraphLinq Marketplace",
            description: `Designed and developed Marketplace frontend, including implementation of Web3 authentication and smart contract interactions.`,
        },
        {
            image: illus_glq_interface,
            title: "GraphLinq Interface",
            description: `Designed and developed the MVP, which led to a successful fundraising round. Then collaborated with the team to improve the product.`,
        },
        {
            image: illus_glq,
            title: "GraphLinq",
            description: `Collaborated with a designer to wireframe, copywrite, and design the landing page. Implemented an internationalization system to enable localization on the page.`,
        },
        {
            image: illus_dr,
            title: "Dofus Renderer",
            description: `Built a rendering engine accessible over an API, allowing the customization and rendering of Dofus Retro characters (an MMORPG) on the web, used by fan sites and private servers.`,
        },
    ];
    return {
        props: {
            projects,
        },
    };
};
