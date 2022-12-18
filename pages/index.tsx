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
        description: `Worked in collaboration with the client team to integrate the design into a functional application, and implemented web3 auth and smart contract interactions.`,
    },
    {
        image: illus_kryxivia,
        title: "Kryxivia",
        description: `Designed and developed the Kryxivia minting and staking dApp in collaboration with the client team.`,
    },
    {
        image: illus_glq_marketplace,
        title: "GraphLinq Marketplace",
        description: `Built the whole Marketplace frontend, implemented Web3 authentication and smart contract interactions.`,
    },
    {
        image: illus_glq_interface,
        title: "GraphLinq Interface",
        description: `Built the product MVP which led to a successful fundraising. Then working in collaboration with a team of designer and developer to improve the product.`,
    },
    {
        image: illus_glq,
        title: "GraphLinq",
        description: `Wireframed, copywrote and designed the landing page in collaboration with a designer.`,
    },
    {
        image: illus_dr,
        title: "Dofus Renderer",
        description: `Built an API to render and customize characters from an online game (Dofus Retro) on the web, used by fan-sites and private servers.`,
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
                <h2 className="text-white text-4xl font-semibold mb-8">Hi, I&apos;m Hugo Malatrait!</h2>
                <section className="my-8">
                    <p className="text-lg text-white">
                        I am a Designer, Developer, Founder — A jack-of-all-trade with a passion for building new things.
                        <br />
                        <br />
                        My experience in web development, video game development, game design, network programming, cloud computing, blockchain, and
                        decentralization is not just a job to me - it&apos;s my calling.
                        <br />
                        I am self-taught and always eager to learn and improve my skills.
                        <br />
                        I enjoy working both as a team member and individually, and pride myself on being able to adapt to new challenges and environments
                    </p>
                </section>
                <h2 className="text-white text-4xl font-semibold mb-8">Latest Projects</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
                    {projects.map((project, i) => (
                        <ProjectCard key={`project-${i}`} image={project.image} title={project.title} description={project.description} />
                    ))}
                </section>
            </main>
            <footer className="container mx-auto max-w-xs md:max-w-3xl lg:max-w-6xl md:px-4 lg:px-0 text-white text-sm text-opacity-50 mb-4 mt-8">
                <p>Copyright © 2022 Hugo Malatrait.</p>
            </footer>
        </>
    );
}
