"use client";
import React from "react";
import "./About.css";
import { GlowCard } from "../ui/spotlight-card.tsx";
import fullstackIcon from "../../assets/Fullstack.png";
import apiIcon from "../../assets/Api.png";
import dbIcon from "../../assets/Database.png";
import agileIcon from "../../assets/Agile.png";


const skills = [
    {
        name:'Full Stack Web Development',
        icon : fullstackIcon
    },

    {
        name:'RESTful API Design',
        icon: apiIcon
    },

    {
        name:'Database Management',
        icon: dbIcon
    },

    {
        name:'Agile Development',
        icon: agileIcon
    }
];


export function About() {
    return (
        <div>
            <h1 className="heading">About Me</h1>
            <div>
                <div className="about-container">
                    <p className="description">
                        I'm a passionate full stack developer with experience building modern web applications from the ground up. I specialize in Java-based backends and dynamic, responsive frontends using React. I enjoy solving complex problems and continuously learning new technologies to sharpen my craft.
                        Currently focused on developing scalable solutions and contributing to open-source projects. When I’m not coding, I enjoy exploring new tech trends and helping others learn programming.
                    </p>
                </div>
            </div>
            <div className="skills">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {skills.map((skill, index) => (
                        <GlowCard
                            customSize={true}
                            width="250px"
                            height="300px"
                            key={index} glowColor="purple" size="md">
                            <div className="flex flex-col items-center justify-evenly h-full text-center gap-10 glowText">
                                <h2 className="text-lg font-semibold glowText">{skill.name}</h2>
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
