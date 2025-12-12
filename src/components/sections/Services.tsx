import { services } from "../../utils/services"
import { Service } from "../cards/Service"
import { Container } from "../shared/container"
import Paragraph from "../shared/Paragraph"
import { Title } from "../shared/Title"

export const Services = () => {
    return <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title>Our AI Services</Title>
                <Paragraph>We offer a range of AI services to help businesses leverage
                    the power of artificial intelligence. Our team of experts is dedicated to delivering innovative solutions tailored to your specific needs.
                    Our Services include:</Paragraph>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
                {services.map((service, key) => (
                    <Service key={key}
                        title={service.title}
                        description={service.description}
                        icon={service.icon} />
                ))}

            </div>
        </Container>
    </section>
}