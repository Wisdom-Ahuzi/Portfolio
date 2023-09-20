import React, { createContext, useContext } from 'react'
import { IconGlobe, IconAppleLogo, IconAndroidLogo, IconFolder, IconDatabase, IconCloud, IconFigmaLogo } from '@vtex/phosphor-icons';

const SkillsContext = createContext();

export const useSkills = () => {
  return useContext(SkillsContext);
};

export const SkillsContextProvider = ({ children }) => {
  const size = 30;

  const codeSnippets = {
    h1Open: "<h1>",
    h1Close: "</h1>",
    pOpen: "<p>",
    pClose: "</p>"
  }

  const skills = [
    {
      skillIconOne: (<IconGlobe size={size} />),
      skillIconTwo: (<IconFolder size={size} />),
      skillText: "Frontend Development"
    },
    {
      skillIconOne: (< IconCloud size={size} />),
      skillIconTwo: (<IconDatabase size={size} />),
      skillText: "Backend Development"
    },
    {
      skillIconOne: (<IconAndroidLogo size={size} />),
      skillIconTwo: (<IconAppleLogo size={size} />),
      skillText: "Mobile App Development"
    },

    {
      skillIconOne: (< IconFigmaLogo size={size} />),
      skillIconTwo: "",
      skillText: "UI/UX Design"
    }
  ]

  const technologies = ["HTML", "CSS", "Sass", "JavaScript", "React.js", "Node.js", "Express", "GraphQL", "MongoDB", "Java", "Kotlin", "Figma", "Python", "Firebase", "Bootstrap", "Material UI", "C#", "Git"]

  const Projects = [
    {
      prImg: require("../Assets/tsks.png"),
      prName: "Tsks Task Tracker",
      prSiteLink: "https://tsks-three.vercel.app",
      prDes: "Tsks is a simple task-tracking web-app built with React, Sass and Firebase. Tsks allows you to keep track of daily tasks. It harnesses firebase firestore for storing tasks.",
      gitLink: "https://github.com/Wizzy-05/Tsks."

    },
    {

      prImg: require("../Assets/trift.png"),
      prName: "Thrift Fashion Store",
      prSiteLink: "https://trift-fashion.netlify.app",
      prDes: "Trift-Fashion is a trift online shopping store built with HTML, CSS and JavaScript. It allows you to shop for trift fashion items online. Trift-fashion was built by team achievers where I was member.",
      gitLink: "https://github.com/Wizzy-05/Thrift-Fashion"

    },
    {
      prImg: require("../Assets/warmth.png"),
      prName: "Warmth Blog Website",
      prSiteLink: "https://warmthbg.netlify.app",
      prDes: "Warmth is a simple blog web-app built with React, Sass, Express and Mongodb. It allows you to create, read, update and delete blogs. It harnesses MongoDB atlas to store the different blogs",
      gitLink: "https://github.com/Wisdom-Ahuzi/Warmthbg"
    },
    {
      prImg: require("../Assets/speechify.png"),
      prName: "Speechify",
      prSiteLink: "https://speechify.vercel.app",
      prDes: "Speechify is a web-application built with React and Sass that converts all your texts to speech.",
      gitLink: "https://github.com/Wizzy-05/text-to-speech"
    },
    {
      prImg: require("../Assets/weather.png"),
      prName: "Weather Glitz",
      prSiteLink: "https://weather-glitz.vercel.app",
      prDes: "A weather web-application built with react and Sass. ",
      gitLink: "https://github.com/Wizzy-05/Weather-Glitz"
    },
    {
      prImg: require("../Assets/space.png"),
      prName: "Space Tourism",
      prSiteLink: "https://space-ebon.vercel.app",
      prDes: "A space website",
      gitLink: "https://github.com/Wizzy-05/Space"
    }
  ]

  return (
    <SkillsContext.Provider value={{ codeSnippets, skills, technologies, Projects }}>
      {children}
    </SkillsContext.Provider>
  )
}

