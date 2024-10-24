import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
    return ( 
        <section
            id="services"
            className="max-container flex justify-center flex-wrap gap-9"
        >
            {services.map((item)=>(
                <ServiceCard key={item.label} imageUrl={item.imgURL} label={item.label} subtext={item.subtext}/>
            ))

            }
        </section>
    );
}
 
export default Services;