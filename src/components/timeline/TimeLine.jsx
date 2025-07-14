import React from 'react'
import './Timeline.css';
import Milestone from './milestones/Milestone';

const milestones = [
  {
    year: '2021',
    title: 'The Beginning',
    description: 'Started learning Java and web basics. Built small apps and explored frontend development.'
  },
  {
    year: '2022',
    title: 'Full Stack Exploration',
    description: 'Built my first full stack project using React and Spring Boot. Learned how to structure apps efficiently.'
  },
  {
    year: '2023',
    title: 'Real-World Experience',
    description: 'Worked on internship projects and built a Peer Tutoring Platform for students. Learned Git workflow and best practices.'
  },
  {
    year: '2024',
    title: 'Open Source & Portfolio',
    description: 'Launched my developer portfolio and contributed to open-source projects. Expanded into REST APIs and JWT auth.'
  }
];

export const TimeLine = () => {
  return (
    <div className='timeline-div'>
      <div className='my-journey'><h1>My Journey</h1></div>
      <div className='time-line'>
        <div className='round1'>2021</div>
        <div className='round2'>2022</div>
        <div className='round3'>2023</div>
        <div className='round4'>2024</div>
      </div>

      <div className='straight-line-1' />
      <div className='straight-line-2' />
      <div className='straight-line-3' />

      <div className='line1' />
      <div className='line2' />
      <div className='line3' />
      <div className='line4' />

        {milestones.map((milestone, index) => (
          <Milestone key={index} className={`milestone-item-${index+1}`}>
            <h4 className='title'>{milestone.title}</h4>
            <p className='description'>{milestone.description}</p>
          </Milestone>
        ))}
    </div>
  )
}
