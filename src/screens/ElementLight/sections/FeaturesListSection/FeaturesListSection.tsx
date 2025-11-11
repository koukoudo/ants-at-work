import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { servicesImages } from "../../../../assets/images/servicesImages";

export const FeaturesListSection = (): JSX.Element => {
  const features = [
    {
      number: "1",
      title: "BUILDING",
      imageUrl: servicesImages.building,
    },
    {
      number: "2",
      title: "SHOPFITTING",
      imageUrl: servicesImages.shopfitting,
    },
    {
      number: "3",
      title: "RENOVATIONS",
      imageUrl: servicesImages.renovations,
    },
    {
      number: "4",
      title: "REMOVALS",
      imageUrl: servicesImages.removals,
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <Card
          key={index}
          className="w-full sm:w-[220px] md:w-[260px] lg:w-[300px] h-[410px] sm:h-[460px] md:h-[510px] lg:h-[564px] bg-white/80 backdrop-blur-md rounded-[20px] border border-gray-200 hover:shadow-2xl hover:shadow-black/10 hover:scale-105 hover:bg-white transition-all duration-500 group"
        >
          <CardContent className="p-0 relative h-full">
            <div
              className="absolute w-[calc(100%-48px)] h-[55%] sm:h-[60%] md:h-[65%] lg:h-[320px] top-[24px] sm:top-[28px] md:top-[32px] lg:top-[40px] left-1/2 transform -translate-x-1/2 bg-cover bg-[50%_50%] rounded-lg shadow-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-500"
              style={{ backgroundImage: `url(${feature.imageUrl})` }}
            />

            <div className="absolute bottom-[60px] sm:bottom-[90px] md:bottom-[100px] lg:top-[395px] left-[16px] sm:left-[20px] md:left-[25px] lg:left-[57px] flex items-baseline gap-2 sm:gap-3 lg:gap-4">
              <div className="[font-family:'Permanent_Marker',Helvetica] font-normal text-[#ffde17] text-[50px] sm:text-[50px] md:text-[60px] lg:text-[86.5px] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-5.19px] leading-tight sm:leading-tight md:leading-tight lg:leading-[103.8px] drop-shadow-md">
                {feature.number}
              </div>
              <div className="[font-family:'Lato',Helvetica] font-bold text-[#030303] text-xl sm:text-xl md:text-2xl lg:text-2xl tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.44px] leading-tight sm:leading-tight md:leading-tight lg:leading-[26.4px] group-hover:text-[#ffde17] transition-colors duration-300">
                {feature.title}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
