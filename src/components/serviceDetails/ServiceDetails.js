import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../hooks/useServices";

function ServiceDetails() {
  const { services } = useServices();
  const [service, setServices] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const sv = services.find((service) => service.id == id);
    if (sv) {
      setServices(sv);
    } else {
      setServices({});
    }
  }, [service]);

  return (
    <>
      {service?.title ? (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={service.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <article className="flex justify-center items-center h-full">
                  <div>
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      SERVICE
                    </h2>
                    <h1 className="text-indigo-600  text-4xl font-bold title-font  mt-2 mb-1">
                      {service.title}
                    </h1>

                    <p className="text-xl my-5">{service.desc}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Service not found</p>
      )}
    </>
  );
}

export default ServiceDetails;
