import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    return (
        <section className="max-container gap-9 flex justify-center flex-wrap">
            {services.map((service)=>{
                return (
                    <ServiceCard key={service.label} {...service} />
                )
            })}
        </section>
    )
}

export default Services;