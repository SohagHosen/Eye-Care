import React from "react";
import "./choose.css";
import view from "../../assets/icons/view.png";
import lens from "../../assets/icons/smart-lens.png";
import laser from "../../assets/icons/laser-surgery.png";
import doctor from "../../assets/icons/doctor.png";
function ChooseUs() {
  return (
    <section className="choose pt-8 px-2 sm:px-0  text-center">
      <span>Why Choose Us</span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-10 my-3 font-bold text-indigo-500">
        We Always Provide The Best Services
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 pb-10">
        <Card
          img={doctor}
          title="Qualified Doctors"
          desc="A doctor is someone who is qualified in medicine and treats people who are ill"
        />
        <Card
          img={view}
          title="Eye Examination"
          desc="An eye examination is a series of tests performed to assess vision and ability to focus on and discern objects"
        />
        <Card
          img={lens}
          title="Contact Lenses"
          desc="Contact lenses, or simply contacts, are thin lenses placed directly on the surface of the eyes"
        />
        <Card
          img={laser}
          title="Laser Eye Correction"
          desc="Laser eye surgery is a medical procedure that involves the use of a laser to reshape the surface of the eye"
        />
      </div>
    </section>
  );
}

export default ChooseUs;

const Card = ({ img, title, desc }) => {
  return (
    <div class="h-72 rounded-lg bg-indigo-500 flex justify-center items-center">
      <div class="p-8  text-white">
        <img
          className="h-20 mx-auto my-4 bg-white p-3 rounded"
          src={img}
          alt=""
        />
        <h1 class="text-xl font-bold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
