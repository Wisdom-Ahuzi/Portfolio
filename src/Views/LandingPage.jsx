import React from 'react'
import "../Styles/LandingPage.scss";
import { useSkills } from '../Hooks/SkillsContextProvider';
import Skills from '../Components/Skills';
import { IconArrowSquareOut, IconGithubLogo } from '@vtex/phosphor-icons';
const LandingPage = () => {
  const { codeSnippets, Projects } = useSkills();

  const Education = [
    {
      major: "Advanced Diploma In Software Engineering",
      date: "September 2021 - September 2023.",
      institute: "Aptech Computer Education",
      location: "Abeokuta, Nigeria.",
      comment: "The experience gathered at Aptech was what laid the foundation of my software development career. A vast majority of programming languages were taught which gave me an eye opener to the path I wanted to focus on which is mobile app development."
    },

    {
      major: "Information Technology and Business Information Systems",
      date: "September 2023 - Present",
      institute: "Middlesex University",
      location: "London, United Kingdom.",
      comment: "Middlesex University London was pivotal in my professional development. The coursework, particularly in strategic information systems and global business strategies, provided valuable insights. The learning has greatly influenced my career, aiding me in navigating global markets and implementing effective strategies."
    }
  ]

  const Awards = [
    {
      position: "Third Runner Up Techwiz Global Competition",
      date: "October 2022.",
      team: "Team member and Presenter; Team Achievers."
    },

  ]

  const wisdomAge = new Date().getFullYear() - 2006

  return (
    <div className='landingpage-Container' id='Home'>
      <div className="inner-Landingpage-Container">
        <header className="header-Header-Container">
          <div className="header-Title" >
            <span> {codeSnippets.h1Open} </span>
            <h1>
              {wisdomAge}y/o Software Engineer creating intuitive and user-friendly experiences.
            </h1>
            <span>{codeSnippets.h1Close}</span>
          </div>
          <div className="header-Body" id='About'>
            <span> {codeSnippets.pOpen} </span>
            <h3>
              Hi There, I'm <span>Wisdom Ahuzi</span>  a software engineer. <br /> I'm a software developer with a passion for creating intuitive and user-friendly experiences. <br /> I have developed proficient skills in problem solving over the course of the development of several applications. <br /> I specialise in building fullstack web applications and mobile applications with a focus on usabilty and simplicity.
            </h3>
            <span>{codeSnippets.pClose}</span>
          </div>
        </header>

        <section className='education-Container' id='Education'>
          <div className="education">
            <h2>Education</h2>

            <div className="education-Institutions">
              <div className="aptech-Container">
                {
                  Education.map((education, index) => (
                    <div className="aptech" key={index}>
                      <div className="aptech-Items">
                        <span className="education-Title">
                          <h3>{education.major}</h3>
                          <span>{education.date}</span>
                        </span>
                        <span className="education-Location">
                          <h5>{education.institute}</h5>
                          <p> {education.location} </p>
                        </span>
                        <span className="education-Body">
                          {education.comment}
                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="awards-Container">
            <h3>Awards</h3>
            <div className="awards">
              {
                Awards.map((award, index) => (
                  <div className="inner-Awards" key={index}>
                    <div className="award-Item">
                      <span className="competition">
                        <h4> {award.position} </h4>
                        <span> {award.date} </span>
                      </span>
                      <span className="competition-Description">
                        <p> {award.team} </p>
                      </span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <Skills />


        <section className="featured-Projects-Container">
          <h3>Featured Projects</h3>
          <p>Here are some of the projects i've worked on personally or as a member in a team.</p>
          <div className="projects-Container">

            {
              Projects.map((project, index) => (
                <div className="project" key={index}>
                  <div className="inner-Project-Container">
                    <img className='img' src={project.prImg} alt={project.prName} />
                    <span className="project-Name">
                      <p>{project.prName}</p>
                      <a href={project.prSiteLink} target="_blank" rel='noreferrer'><IconArrowSquareOut className='redirect' /></a>
                    </span>
                    <div className="description">
                      <small>Description :</small>
                      <p>
                        {project.prDes}
                      </p>
                    </div>
                    <span className="git-View">
                      <a href={project.gitLink} target="_blank" rel='noreferrer'><IconGithubLogo size={30} /></a>
                      <a href={project.gitLink} className='git' target="_blank" rel='noreferrer'>View On Github</a>
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage