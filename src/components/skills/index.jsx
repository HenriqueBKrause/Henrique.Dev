import React from "react";
import {
  SkillsStyled,
  SkillsTransictionOne,
  SkillIcons,
  SkillsTransictionTwo,
} from "./style";

const Skills = () => {
  return (
    <SkillsStyled>
      <SkillsTransictionOne></SkillsTransictionOne>
      <SkillIcons>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          width="100px"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          width="100px"
        />
      </SkillIcons>
      <SkillsTransictionTwo></SkillsTransictionTwo>
    </SkillsStyled>
  );
};

export default Skills;
