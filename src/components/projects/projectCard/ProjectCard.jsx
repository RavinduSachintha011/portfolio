import React from 'react'
import githubIcon from '../../../assets/github.png';
import liveDemoIcon from '../../../assets/golive.png';
import tutorProject from '../../../assets/tutorProject.jpg';
import wellnessProject from '../../../assets/wellnessProject.jpg';
import portfolioProject from '../../../assets/portfolioProject.png';

const projects = [
    {
        title: 'Peer Tutoring Platform',
        description:
            'A full-featured web application that connects university students with peer tutors. Built with Spring Boot, React, and MySQL. Includes session booking, role-based access, and tutor availability management.',
        image: tutorProject,
        github: 'https://github.com/yourusername/peer-tutoring-platform',
        demo: 'https://peer-tutoring.example.com',
        technology: 'Spring Boot, React, MySQL'
    },
    {
        title: 'E-Commerce Site',
        description:
            'An e-commerce platform for herbal wellness products. Includes product catalog, cart, Stripe payments, and admin dashboard. Built using React, Firebase, and Tailwind CSS.',
        image: wellnessProject,
        github: 'https://github.com/yourusername/wellness-ecommerce',
        demo: 'https://wellness-shop.example.com',
        technology: 'React, Firebase, Tailwind CSS'
    },
    {
        title: 'Portfolio Website (This Site)',
        description:
            'My personal developer portfolio built using React and Tailwind CSS. It showcases my journey, skills, and major projects in an interactive, responsive layout.',
        image: portfolioProject,
        github: 'https://github.com/yourusername/portfolio',
        demo: 'https://yourname.dev',
        technology: 'React, Tailwind CSS'
    }
];

export const ProjectCard = ({ project }) => {
    return (
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className=" p-4 rounded-xl shadow-md bg-gray-900 project-card">
                    <img src={project.image} alt={project.title} className="rounded-md mb-4 h-48 object-cover project-image" />
                    <div className="project-info">
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                    </div>
                    <div className="mt-4 flex gap-4 links">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                <img src={liveDemoIcon} alt="Live Demo" />
                            </a>
                        )}
                    </div>
                    <div className="technologies">
                        <span className="text-gray-400">{project.technology}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}
