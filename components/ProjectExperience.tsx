import React from "react";
import { IProjectExperience } from "../entities/Project";
import { PillWithColor } from "./shared/Pill";
import { getColorForStack } from "../constants/stack";

interface IProjectExperienceProps extends IProjectExperience {}
export const ProjectExperience: React.FC<IProjectExperienceProps> = ({
  name,
  description,
  stack,
  role,
  screenshots,
}) => {
  return (
    <section className="ProjectExperience">
      <h2 className="ProjectExperience__project-name">{name}</h2>
      <p className="ProjectExperience__role">{role}</p>
      <p className="ProjectExperience__description">{description}</p>
      <div className="ProjectExperience__screenshots">
        {screenshots.map((screenshot) => (
          <img
            className="ProjectExperience__screenshot"
            key={screenshot}
            src={screenshot}
            alt=""
          />
        ))}
      </div>
      <div className="ProjectExperience__stack">
        {stack.map((tech) => (
          <PillWithColor
            key={tech}
            color={getColorForStack(tech)}
            checked={true}
          >
            {tech}
          </PillWithColor>
        ))}
      </div>
    </section>
  );
};
