export enum StackNames {
  angular = "Angular",
  compodoc = "Compodoc",
  javascript = "Javascript",
  laravel = "Laravel",
  node = "Node.js",
  paymentsService = "Payments",
  php = "PHP",
  reactJs = "React.js",
  reactTsx = "React.tsx",
  sass = "Sass",
  socialAuth = "Social Auth",
  storybook = "Storybook",
  graphql = "Graphql",
  prisma = "Prisma",
  typescript = "Typescript",
  ci = "CI",
}

interface StackLabel {
  color: string;
  name: StackNames;
}

const stackColors: { [K in StackNames]: string } = {
  [StackNames.angular]: "#DD0031",
  [StackNames.compodoc]: "#A84F7A",
  [StackNames.javascript]: "#F7DF1D",
  [StackNames.laravel]: "#FA645F",
  [StackNames.node]: "#066E03",
  [StackNames.paymentsService]: "lightgreen",
  [StackNames.php]: "#8993C1",
  [StackNames.reactJs]: "#62DAFB",
  [StackNames.reactTsx]: "#62DAFB",
  [StackNames.sass]: "#C03F80",
  [StackNames.socialAuth]: "coral",
  [StackNames.storybook]: "#FF2C74",
  [StackNames.graphql]: "#E430A9",
  [StackNames.prisma]: "#272F3E",
  [StackNames.typescript]: "#3178C6",
  [StackNames.ci]: "#fa7035",
};

export const getColorForStack = (stackName: StackNames) =>
  stackColors[stackName];

export const stackLabels: StackLabel[] = [
  "angular",
  "graphql",
  "ci",
  "typescript",
  "prisma",
  "compodoc",
  "javascript",
  "laravel",
  "node",
  "paymentsService",
  "php",
  "reactTsx",
  "reactJs",
  "sass",
  "socialAuth",
  "storybook",
].map((stackName) => ({
  name: StackNames[stackName],
  color: stackColors[StackNames[stackName]],
}));
