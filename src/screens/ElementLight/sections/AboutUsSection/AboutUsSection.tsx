import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full relative px-4 sm:px-8 lg:px-16 hidden">
      <p className="[font-family:'Lato',Helvetica] font-normal text-[#030303] text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[66.1px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1px] lg:tracking-[-1.32px] leading-tight sm:leading-tight md:leading-tight lg:leading-[66.1px] max-w-[1146px] mx-auto">
        <span className="font-light tracking-[-0.3px] sm:tracking-[-0.5px] md:tracking-[-0.7px] lg:tracking-[-0.87px]">
          From concept to completion, we&#39;ll be your dedicated building partner for{" "}
        </span>
        <span className="tracking-[-0.3px] sm:tracking-[-0.5px] md:tracking-[-0.7px] lg:tracking-[-0.87px]">that </span>
        <span className="font-light tracking-[-0.3px] sm:tracking-[-0.5px] md:tracking-[-0.7px] lg:tracking-[-0.87px]">project.</span>
      </p>
    </section>
  );
};
