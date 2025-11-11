import React from "react";
import { simpleYellowLogo } from "../../../../assets/images/logos";

export const ServicesSection = (): JSX.Element => {
  const textContent = [
    "Ants at Work is a family-owned construction and home renovation company based in Johannesburg. Founded by Andrew Pietersen, we've built a legacy of quality and trust, now carried forward by the second generation, Dylan Pietersen.",
    "Our commitment to excellence is evident in every project, big or small. From minor repairs to complete building construction, we approach each task with dedication and expertise.",
    "We believe in the power of collaboration and work closely with leading architects, designers, engineers and home owners to bring your vision to life. Our trusted network of suppliers ensures top-quality materials and finishes for every project.",
    "We're more than just builders. We're your partners, guiding you through every step of the process. With our in-house building approval expertise, we streamline the journey from concept to reality.",
  ];

  return (
    <section className="w-full relative px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-center">
        <div className="flex-shrink-0 flex items-center justify-center">
          <div 
            className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[257px] h-[164px] sm:h-[180px] md:h-[196px] lg:h-[211px] bg-cover bg-center" 
            style={{ backgroundImage: `url(${simpleYellowLogo})` }}
          />
        </div>

        <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-7">
          {textContent.map((text, index) => (
            <p
              key={index}
              className="[font-family:'Lato',Helvetica] font-light text-white text-base sm:text-lg md:text-xl lg:text-xl tracking-[0] leading-relaxed sm:leading-7 text-left max-w-4xl ml-auto"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
