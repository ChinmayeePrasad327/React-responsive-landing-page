import { Container } from "../shared/container";
import logo from '../../assets/icon.svg';
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import useThemeStore from "../../store/ThemeStore";
import { CTA } from "../sections/CallToAction";

export const navItems = [
    { href: "#", text: "Home" },
    { href: "#about-us", text: "About Us" },
    { href: "#services", text: "Services" },
    { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();

    return <header className="absolute inset-x-0 top-0 z-50 py-6">
        <Container>
            <nav className="w-full flex items-center justify-between gap-6 relative">
                {/*Logo*/}
                <div className="min-w-max inline-flex relative">
                    <a href="/" className="relative flex items-center gap-3">
                        <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
                        <div className="inline-flex text-lg font-semibold text-heading-1">
                            EdgeAI
                        </div>
                    </a>
                </div>

                <div
                    className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
                >
                    <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                        {navItems.map((item, key) => (
                            <NavItem href={item.href} text={item.text} key={key} />
                        ))}
                    </ul>

                    <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                        <BtnLink text="Get Started" href="#cta" className="" />
                    </div>
                </div>

                <div className="min-w-max flex items-center gap-x-3">
                    <button
                        onClick={toggleTheme}
                        className="outline-none inline-flex items-center justify-center h-12 w-12 rounded-full  border border-box-border cursor-pointer bg-transparent text-heading-2"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            // Sun icon (switch to light)
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.75V3m0 18v-1.75M5.636 5.636l-1.238-1.237m14.142 14.142l-1.238-1.237M4.75 12H3m18 0h-1.75M5.636 18.364l-1.237 1.238m14.142-14.142l1.238-1.238M12 8.25a3.75 3.75 0 103.75 3.75A3.75 3.75 0 0012 8.25z"
                                />
                            </svg>

                        ) : (
                            // Moon icon (switch to dark)
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                fill="currentColor"
                                className="w-5 h-5 block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

        </Container>
    </header>;
};
