import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

const Services = () => {
  return (
    <div className="flex flex-wrap items-center gap-1 justify-between">
      {
        services.map((service)=>(
          <ServicesCard key={service.label} {...service} />
        ))
      }
    </div>
  )
}

export default Services