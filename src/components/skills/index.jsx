import React from "react";
import {
  SkillsStyled,
  SkillsTransictionOne,
  SkillIcons,
  TextPage,
} from "./style";
import skillsData from "./skillsData.json"; // Importe o arquivo JSON

const Skills = () => {
  const skillsArray = skillsData.skills;

  return (
    <SkillsStyled>
      <TextPage>
        <h1>Habilidades</h1>
      </TextPage>
      <SkillIcons>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
      </SkillIcons>
      <SkillsTransictionOneComponent skillsArray={skillsArray} />
    </SkillsStyled>
  );
};

const SkillsTransictionOneComponent = ({ skillsArray }) => {
  return (
    <SkillsTransictionOne>
      <div className="Text-Container" id="Text1">
        {skillsArray.map((skill, index) => (
          <h1 key={index} style={{ marginRight: "20px" }}>
            {skill}
          </h1>
        ))}
      </div>
    </SkillsTransictionOne>
  );
};

export default Skills;
