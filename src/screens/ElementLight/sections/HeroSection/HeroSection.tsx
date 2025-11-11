import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Services", width: "w-[57px]" },
    { label: "About", width: "w-[43px]" },
    { label: "Clients", width: "w-[49px]" },
    { label: "Gallery", width: "w-[50px]" },
  ];

  return (
    <section className="w-full h-[90px] flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-0 h-[39px]">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={item.label} className="h-[39px]">
              <NavigationMenuLink
                className={`flex items-center justify-center h-[39px] px-4 ${item.width} [font-family:'Lato',Helvetica] font-light text-[#030303] text-base tracking-[0] leading-[normal] whitespace-nowrap hover:bg-gray-100 transition-colors cursor-pointer`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        className="w-[161px] h-[42px] bg-[#ffde17] hover:bg-[#ffde17]/90 rounded-[10px] flex items-center justify-center gap-2 text-black [font-family:'Inter',Helvetica] font-normal text-[15.6px] leading-[22.4px]"
        variant="secondary"
      >
        <span className="w-[83px] text-center">Contact Us</span>
        <img
          className="w-6 h-6"
          alt="Svg"
          src="https://c.animaapp.com/megx9igh612D8f/img/svg.svg"
        />
      </Button>
    </section>
  );
};







