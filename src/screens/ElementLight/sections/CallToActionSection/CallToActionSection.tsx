import React from "react";

export const CallToActionSection = (): JSX.Element => {
  const textElements = [
    {
      text: "Let's",
      className:
        "w-full sm:w-[268px] h-auto sm:h-[154px] [font-family:'Lato',Helvetica] font-light text-white text-4xl sm:text-6xl md:text-8xl lg:text-[128.2px] text-center tracking-[-1px] sm:tracking-[-2px] md:tracking-[-2.5px] lg:tracking-[-2.56px] leading-tight sm:leading-tight md:leading-tight lg:leading-[128.2px]",
    },
    {
      text: "build",
      className:
        "w-full sm:w-[351px] h-auto sm:h-[183px] [font-family:'Permanent_Marker',Helvetica] font-normal text-[#ffde17] text-4xl sm:text-6xl md:text-8xl lg:text-[128.2px] text-center tracking-[-1px] sm:tracking-[-2px] md:tracking-[-2.5px] lg:tracking-[-2.56px] leading-tight sm:leading-tight md:leading-tight lg:leading-[128.2px]",
    },
    {
      text: "together.",
      className:
        "w-full sm:w-[477px] h-auto sm:h-[154px] [font-family:'Lato',Helvetica] font-light text-white text-4xl sm:text-6xl md:text-8xl lg:text-[128.2px] text-center tracking-[-1px] sm:tracking-[-2px] md:tracking-[-2.5px] lg:tracking-[-2.56px] leading-tight sm:leading-tight md:leading-tight lg:leading-[128.2px]",
    },
  ];

  return (
    <section className="w-full relative px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-8">
        {textElements.map((element, index) => (
          <div key={index} className={element.className}>
            {element.text}
          </div>
        ))}
      </div>
    </section>
  );
};

