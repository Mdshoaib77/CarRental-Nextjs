"use client";
import { TESTIMONIALS } from "@/constants";
import Image from "next/image";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };
  return (
    <section
      className="max-container padding-container bg-slate-10 relative py-12 xl:py-28"
      id="testimonials"
    >
      <h3 className="bold-32 text-center">Testimonial</h3>
      <p className="text-center max-w-lg m-auto text-gray-30 py-6">
       Best car ever i received in my life form this website.You can trush easily best website for rental
      </p>
      {/* slider */}
      <Slider {...settings}>
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialItem
            key={testimonial.title}
            title={testimonial.title}
            desc={testimonial.desc}
            profession={testimonial.profession}
            URL={testimonial.URL}
          />
        ))}
      </Slider>
    </section>
  );
};

type TestimonialItem = {

  title: string;
  URL: string;
  profession: string;
  desc: string;
};

const TestimonialItem = ({ title, URL, profession, desc }: TestimonialItem) => {
  return (
    <div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10 border-l-4 border-secondary">
      <span className="text-slate-10 text-9xl absolute -top-4 right-4 -z-10">
        <RiDoubleQuotesR />
      </span>
      <div className="flex gap-4 mb-8">
        <Image src={URL} alt="user" height={55} width={55} className="rounded-lg"/>
        <div className="mt-1">
          <div className="medium-16">{title}</div>
          <div className="text-gray-20 regular-14">{profession}</div>
        </div>
      </div>
      <p className="text-gray-30">{desc}</p>
    </div>
  );
};

export default Testimonials;
