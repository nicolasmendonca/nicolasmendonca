import Link from "next/link";
import { useRouter } from "next/router";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "My Experience",
    path: "/experience",
  },
];

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="Navbar">
      <ul className="Navbar__nav-list">
        {routes.map((route) => (
          <li key={route.name} className="Navbar__nav-list-item">
            <Link href="/experience">
              <a>My Experience</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
