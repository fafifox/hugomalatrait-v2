import Head from "next/head";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import illus_crappy from "../public/projects/illus_crappybirds.png";
import illus_treefi from "../public/projects/illus_treefi.png";
import illus_kryxivia from "../public/projects/illus_kryxivia.png";
import illus_glq_marketplace from "../public/projects/illus_glq_marketplace.png";
import illus_glq_interface from "../public/projects/illus_glq_interface.png";
import illus_glq from "../public/projects/illus_glq.png";
import illus_dr from "../public/projects/illus_dr.png";

const projects = [
    {
        image: illus_crappy,
        title: "Crappy Birds",
        description: `Convivial and alluring online game, with a strong design emphasis on explorative platforming, social interactions and digital collectible ownership.`,
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
        description: `Collaborated with a designer to wireframe, copywrite, and design the landing page. Implemented an internationalization system to enable localization of the page.`,
    },
    {
        image: illus_dr,
        title: "Dofus Renderer",
        description: `Built a rendering engine accessible over an API, allowing the customization and rendering of Dofus Retro characters (an MMORPG) on the web, used by fan sites and private servers.`,
    },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Hugo Malatrait</title>
                <meta name="description" content="todo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl md:px-4 lg:px-0">
                <Header />
                <section className="my-8 space-y-8">
                    <h2 className="text-white text-4xl font-semibold">Hi, I&apos;m Hugo Malatrait!</h2>
                    <p className="text-lg text-white">
                        Designer, Developer, Founder — Jack-of-all-trade with a passion for building new things.
                        <br />
                        <br />
                        Experienced in web development, video game development, game design, network programming, cloud computing, blockchain, and
                        decentralization.
                        <br />
                        <br />
                        As a continual self-learner, I&apos;m always looking to expand my knowledge and skills.
                        Whether working in a team or individually, I am committed to use my abilities to bring ideas to life and create meaningful solutions.
                    </p>
                </section>
                <section className="my-8 space-y-8">
                    <h2 className="text-white text-4xl font-semibold">Latest Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 lg:gap-8 place-items-center">
                        {projects.map((project, i) => (
                            <ProjectCard key={`project-${i}`} image={project.image} title={project.title} description={project.description} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="container mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl md:px-4 lg:px-0 text-white text-sm text-opacity-50 mb-4 mt-8">
                <p>Copyright © 2022 Hugo Malatrait.</p>
            </footer>
        </>
    );
}
