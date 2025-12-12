import { Info } from "../cards/Info";
import { Container } from "../shared/container";
import Paragraph from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
    return <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5-/12 lg:w-1/2">
                <div className="w-full h-80 sm:h-96 relative">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER9_yaeTCBob-7rKi25sD-nVSTGAQsJCafw&s"
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                        alt="About Our Mission"
                    />
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title>About Our AI Solution</Title>
                <Paragraph className="mt-4">
                    We build practical, high-performance AI that solves real business problems — without the complexity.
                    Our mission is to make AI accessible, reliable, and seamlessly integrated into your existing workflows.
                </Paragraph>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl ">
                    <Info title="Mission" description="Use AI to solve meaningful problems — in ways that genuinely move businesses forward.">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-heading-1 dark:text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.7}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                        </svg>
                    </Info>
                    <Info title="Vison" description="A world where organizations of any size can harness advanced AI without barriers, limitations, or technical overwhelm.">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-heading-1 dark:text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.7}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                        </svg>
                    </Info>
                </div>

            </div>
        </Container>
    </section >;
};