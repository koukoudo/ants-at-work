import React from "react";

export const MainHeadingSection = (): JSX.Element => {
  return (
    <section className="w-full relative px-4 sm:px-8 lg:px-16 flex items-start justify-center pt-8 sm:py-20 lg:py-24 mt-8 sm:mt-0">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="[font-family:'Lato',Helvetica] font-bold text-[#030303] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] 2xl:text-[140px] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-8px] lg:tracking-[-8px] xl:tracking-[-10px] 2xl:tracking-[-11.40px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-[140px] px-4 mb-4 sm:mb-8 lg:mb-1 max-w-none w-full drop-shadow-lg">
          <span className="block lg:hidden">
            Construction
            <br />
            &amp; Home
            <br />
            Renovation
          </span>
          <span className="hidden lg:block">
            Construction
            <br />
            &amp; Home Renovation
          </span>
        </h1>

        <div className="relative flex flex-col sm:flex-row items-center w-full px-2 sm:px-4">
          {/* Top yellow line for mobile, left line for desktop */}
          <div className="w-full sm:flex-1 h-1 bg-[#ffde17] mb-4 sm:mb-0 sm:mr-12 lg:mr-16 order-1 sm:order-1"></div>
          
          {/* Excellence text */}
                      <div className="[font-family:'Permanent_Marker',Helvetica] font-normal text-[#030303] text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[120px] 2xl:text-[140px] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-8px] lg:tracking-[-8px] xl:tracking-[-10px] 2xl:tracking-[-11.40px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-[146.5px] flex-shrink-0 drop-shadow-[0_0_10px_#ffde17] sm:drop-shadow-[0_0_15px_#ffde17] md:drop-shadow-[0_0_20px_#ffde17] lg:drop-shadow-[0_0_25px_#ffde17] order-2 relative z-[99999]">
            Excellence .
          </div>
          
          {/* Bottom yellow line for mobile, right line for desktop */}
          <div className="w-full sm:flex-1 h-1 bg-[#ffde17] mt-4 sm:mt-0 sm:ml-12 lg:ml-16 order-3 sm:order-3"></div>
        </div>
      </div>
    </section>
  );
};
