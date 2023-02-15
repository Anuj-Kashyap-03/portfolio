import Head from "next/head";
import { Inter } from "@next/font/google";
import Home from "@/Components/Main/Home";
import Skills from "@/Components/Skills/Skills";
import Projects from "@/Components/Work/Projects";
import Contact from "@/Components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  return (
    <>
      <Head>
        <title>Anuj Kashyap</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio. 
          I am a highly skilled and experienced Full Stack Developer with a
          passion for creating beautiful, functional, and efficient web
          applications. I have extensive experience in both front-end and
          back-end development, and I am proficient in a wide range of
          programming languages, including HTML, CSS, JavaScript, React,
          Node.js, and Python."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div id="home">
        <Home />
      </div>
      <div id="skills" className="mx_width">
        <Skills />
      </div>
      <div id="work" className="mx_width">
        <Projects />
      </div>
      <div id="contact" className="mx_width">
        <Contact />
      </div>
    </>
  );
}
