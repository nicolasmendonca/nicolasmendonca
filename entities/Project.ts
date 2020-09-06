import { StackNames } from "../constants/stack";
import { Company } from "./Company";

export interface IProjectExperience {
  company: Company;
  description: string;
  name: string;
  role: string;
  screenshots?: string[];
  stack: StackNames[];
}

export class Project {
  public company: Company;
  public description: string;
  public name: string;
  public role: string;
  public screenshots?: string[];
  public stack: StackNames[];

  constructor({
    company,
    description,
    name,
    role,
    screenshots = [],
    stack,
  }: IProjectExperience) {
    this.company = company;
    this.description = description;
    this.name = name;
    this.role = role;
    this.screenshots = screenshots;
    this.stack = stack.sort((a, b) => (a < b ? -1 : 1));
  }

  hasStack(stack: StackNames) {
    return this.stack.includes(stack);
  }

  includesSomeStack(stacks: StackNames[]) {
    return stacks.some((stack) => this.hasStack(stack));
  }
}
