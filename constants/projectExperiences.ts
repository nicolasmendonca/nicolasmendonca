import { Company } from "../entities/Company";
import { Project } from "../entities/Project";
import { StackNames } from "./stack";

const wCanvas = new Company({
  companyName: "White Canvas",
  companyLogo: "https://wcanvas.com/img/logo-canvas.png",
});

const assurline = new Project({
  name: "Assurline",
  description:
    "Developed with Laravel, Assurline is a platform to purchase travel insurance across multiple services, all in one place. Contains an admin app to manage leads, purchases, users, payments and more. It consumes 3rd party APIs to request and register insurance products.",
  role: "FullStack Developer",
  stack: [
    StackNames.php,
    StackNames.laravel,
    StackNames.javascript,
    StackNames.sass,
  ],
  screenshots: ["/assurline-1.png"],
  company: wCanvas,
});

const traigoTuCompra = new Project({
  name: "TraigoTuCompra",
  description:
    "TraigoTuCompra is an app to register as a traveller, and bring products from overseas to customers. It's developed with Laravel and Sass, uses social authentication to sign in with Facebook, and Mercadopago's payment service.",
  role: "Backend Developer",
  stack: [
    StackNames.php,
    StackNames.laravel,
    StackNames.javascript,
    StackNames.sass,
    StackNames.paymentsService,
    StackNames.socialAuth,
  ],
  screenshots: ["/traigotucompra-1.png"],
  company: wCanvas,
});

const conseguilOnline = new Project({
  name: "ConseguilOnline",
  description:
    "ConseguilOnline is an ecommerce app, where the buyers post the item they want and the sellers compete to offer the best price.",
  role: "Frontend Developer",
  stack: [
    StackNames.javascript,
    StackNames.sass,
    StackNames.angular,
    StackNames.socialAuth,
    StackNames.paymentsService,
  ],
  screenshots: ["/conseguilonline-1.jpg"],
  company: wCanvas,
});

const edufy = new Project({
  name: "Edufy",
  description:
    "Edufy is a courses platform. I stared working on this project as a Frontend Developer, and then worked on the backend. Edufy uses compodoc to generate near 90% of code documentation for angular with a web interface. Also uses Mercadopago's subscription system and Vimeo API",
  role: "Fullstack Developer",
  stack: [
    StackNames.javascript,
    StackNames.sass,
    StackNames.angular,
    StackNames.paymentsService,
    StackNames.compodoc,
  ],
  screenshots: ["/edufy-1.jpg"],
  company: wCanvas,
});

const macaio = new Project({
  name: "Macaio",
  description:
    "Started out as a backend developer and then moved to frontend. Macaio is a platform for sound equipment where each page can be self-managed.",
  role: "Fullstack Developer",
  stack: [
    StackNames.php,
    StackNames.laravel,
    StackNames.javascript,
    StackNames.sass,
    StackNames.angular,
  ],
  screenshots: ["/macaio-1.png"],
  company: wCanvas,
});

const walt = new Project({
  name: "Walt",
  description:
    "Completely engineered by me, Walt is my first own app. Destined to manage corporate benefits in a single platform, Walt will launch an Android and an iOS app. A monorepo built with yarn workspaces, following a clean architecture pattern and sharing common logic and components across the web, mobile, and the admin app.",
  company: new Company({
    companyLogo: "Nicolas Mendonca",
    companyName: "Nicolas Mendonca",
  }),
  role: "CTO",
  stack: [
    StackNames.reactTsx,
    StackNames.graphql,
    StackNames.sass,
    StackNames.node,
    StackNames.javascript,
    StackNames.typescript,
    StackNames.prisma,
    StackNames.storybook,
    StackNames.ci,
  ],
  screenshots: ["./walt-1.png"],
});

export const projectExperiences: Project[] = [
  assurline,
  traigoTuCompra,
  conseguilOnline,
  edufy,
  macaio,
  walt,
];
