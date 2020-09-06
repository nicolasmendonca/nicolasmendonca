export interface ICompany {
  companyName: string;
  companyLogo: string;
}

export class Company implements ICompany {
  public companyName: string;
  public companyLogo: string;

  constructor({ companyName, companyLogo }: ICompany) {
    this.companyName = companyName;
    this.companyLogo = companyLogo;
  }
}
