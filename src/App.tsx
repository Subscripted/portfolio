import './App.css'
import LinkRef from "./components/LinkRef.tsx";
import Header from "./components/Header.tsx";
import TextWriter from "./functions/TextWriter.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";
import Sidebar from "./components/Sidebar.tsx";
import pb from "./assets/images/profile.jpeg"
import spring from "./assets/images/spring.png"
import ts from "./assets/images/ts.png"
import rea from "./assets/images/React-icon.svg.png"
import tcss from "./assets/images/Tailwind_CSS_Logo.svg.png"
import php from "./assets/images/PHP-logo.svg.png"
import java from "./assets/images/java.png"
import mysql from "./assets/images/mysql.png"
import {Card, CardDescription, CardHeader} from "./components/Card.tsx";
import {Carousel} from "./components/Carousel.tsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    type Skill = {
        title: string;
        description: string;
        image: string;
    };
    const skills: Skill[] = [
        {title: 'Java', description: 'Programming Language', image: java},
        {title: 'PHP', description: 'Programming Language', image: php},
        {title: 'TypeScript', description: 'Programming Language', image: ts},
        {title: 'React', description: 'JavaScript Framework', image: rea},
        {title: 'Spring Boot', description: 'Java Framework', image: spring},
        {title: 'TailwindCSS', description: 'CSS Framework', image: tcss},
        {title: 'MySQL', description: 'Database', image: mysql},
    ];

    const renderSkillCard = (skill: Skill, index: number) => (
        <Card
            key={index}
            className={'bg-card-main border-2 max-w-lg h-max border-card-border'}
            image={skill.image}
        >
            <CardHeader className={'text-white font-bold'} children={skill.title}/>
            <CardDescription children={skill.description} className={'text-gray-400'}/>
        </Card>
    );

    return (
        <>
            <body className="bg-lighter-black">
            <Header
                className="w-full h-16 z-50 bg-lighter-black text-white flex fixed justify-between items-center px-6">
                <div className="hidden md:flex lg:inline-flex items-center justify-center w-full ">
                    <LinkRef text="About Me" href="#profile" className="hover:bg-gray-950 rounded px-5 py-1"/>
                    <LinkRef text="Skills" href="#skills" className="hover:bg-gray-950 rounded px-5 py-1"/>
                    <LinkRef text="Admin" href="#admin" className="hover:bg-gray-950 rounded px-5 py-1"/>
                </div>
                <div className="md:hidden">
                    <Button children={'☰'} className={'bg-neutral-800 hover:bg-gray-600'} onClick={toggleOpen}></Button>
                </div>
            </Header>
            {/*Header Ende*/}

            {/*Section Start*/}
            <section id="profil" className="h-screen p-10 ">
                <div
                    className="w-72 h-72 p-4 m-8 mx-auto bg-neutral-800 rounded-full shadow-lg flex items-center justify-center">
                    <img src={pb} alt="img" className="w-64 h-64 rounded-full object-cover"/>
                </div>
                <div className="max-w-xl w-full h-58 overflow-hidden text-center break-words mx-auto relative">
                    <TextWriter
                        text="Hey, I’m Lorenz, an 18-year-old IT specialist in software development. I’m currently in my second year of vocational training and have worked with several programming languages — with Java being my favorite so far. My main focus is on backend development, as I enjoy designing robust systems and APIs. However, I’ve also gained experience in frontend development — because in practice, you just can’t avoid it."
                        speed={25}
                        deleteSpeed={10}
                        pause={3000}
                        className="font-bold text-white"
                    />
                </div>
                <div className="hidden md:block">
                    <Carousel speed={0.2}>
                        {skills.map((skill, index) => renderSkillCard(skill, index))}
                    </Carousel>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:hidden">
                    {skills.map((skill, index) => renderSkillCard(skill, index))}
                </div>
            </section>

            <section id="skills" className="h-screen p-10 ">
            </section>
            <Sidebar mode={"user"} isOpen={isOpen} onClose={toggleOpen}/>
            </body>
        </>

    )

}

export default App;