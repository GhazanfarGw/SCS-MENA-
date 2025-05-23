import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Links";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="">
          <div className="px-3 md:px-0 text-left md:cursor-pointer group">
            <h1
              className="tracking-wider justify-between group hover:bg-[#F0F5FF] md:px-4 px-5 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1A2B6B] text-[#000] border-[#000000] md:border-opacity-0 border-opacity-30 text-sm font-semibold"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="md:hidden inline text-base">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-sm md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="duration-300 md:z-10 z-0 justify-center mx-auto absolute py-20 w-full md:left-0 lg:left-0 md:py-0 hidden group-hover:md:block hover:md:block">
                  <div className="duration-300 p-10 grid grid-cols-3 bg-[#ffffff] justify-center mx-auto border-t border-[#1A2B6B] border-opacity-30 mt-4">
                    {link.sublinks.map((mysublinks) => (
                      <div className="md:px-5 md:py-3 md:max-w-xs mx-auto justify-center">
                        <h1 className="md:text-lg text-[#000] font-semibold pb-5">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="md:w-96 mx-auto tracking-wider group hover:bg-[#F0F5FF] md:px-4 px-5 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] text-xl font-semibold md:font-normal md:hover:font-semibold">
                            <Link
                              to={slink.link}
                              className="hover:text-primary text-sm"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`tracking-wider py-3 items-center duration-200 border-b text-[#000] border-[#202020] border-opacity-10 text-sm
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="tracking-wider hover:bg-[#F0F5FF] hover:font-semibold px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1A2B6B] text-[#161616] border-[#161616] border-opacity-10 text-sm justify-between"
                  >
                    {slinks.Head}

                    <span className="text-base md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="tracking-wider hover:bg-[#F0F5FF] px-8 py-3 items-center duration-200 border-b hover:text-[#1A2B6B] text-[#000] border-[#000000] border-opacity-10 text-sm">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;