import React from "react";
import Head from "next/head";
import { Sidebar } from "../components/shared/Sidebar";
import { ProjectExperience } from "../components/ProjectExperience";
import { PillWithColor } from "../components/shared/Pill";
import { stackLabels, StackNames } from "../constants/stack";
import { projectExperiences } from "../constants/projectExperiences";

const sortedStackLabels = stackLabels.sort((a, b) =>
  a.name < b.name ? -1 : 1
);

export const Experience: React.FC = () => {
  const [activeStackFilters, _setActiveStackFilter] = React.useState<
    StackNames[]
  >([]);

  const toggleStackFilter = (stackName: StackNames) => {
    _setActiveStackFilter((stackFilters) =>
      stackFilters.includes(stackName)
        ? stackFilters.filter((stackItem) => stackItem !== stackName)
        : [...stackFilters, stackName]
    );
  };

  const filteredProjects =
    activeStackFilters.length === 0
      ? projectExperiences
      : projectExperiences.filter((project) =>
          project.includesSomeStack(activeStackFilters)
        );

  return (
    <div className="ExperiencePage">
      <Head>
        <title>My Experience</title>
      </Head>
      <Sidebar
        sidebarContent={
          <div>
            <p>Filter by stack</p>
            {sortedStackLabels.map((stack) => {
              return (
                <PillWithColor
                  key={stack.name}
                  color={stack.color}
                  checked={activeStackFilters.includes(stack.name)}
                  onToggle={() => toggleStackFilter(stack.name)}
                >
                  {stack.name}
                </PillWithColor>
              );
            })}
          </div>
        }
        mainContent={
          <main className="main-section">
            <h1>Experience</h1>
            {filteredProjects.map((experience) => {
              return <ProjectExperience {...experience} />;
            })}
          </main>
        }
      />
    </div>
  );
};

export default Experience;
