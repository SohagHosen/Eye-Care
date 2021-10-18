import React from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service/Service";

function Services() {
  const { services } = useServices();
  return (
    <section className="px-2 sm:px-0 container mx-auto text-center mt-10">
      <span>Service</span>
      <h1 className="text-2xl sm:text-3xl md:text-6xl mb-10  font-bold text-indigo-500">
        Eye Care Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
