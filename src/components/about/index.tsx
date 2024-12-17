import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";
import { SkillData } from "@/data/data";
import AboutElement from "@/utils/AboutElement";
import Sub from "@/utils/Sub";
import { YEARS_OF_EXPERIENCE } from "@/data/personal";
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <AboutElement classes="font-light text-xs sm:text-sm md:text-base">
            Software Engineer with three years of experience in both company
            settings and freelance work. Specializing in front-end development
            using ReactJS and Next.js, I focus on building large-scale web
            applications with clean, efficient code. Recently graduated in
            Informatics Engineering from Aleppo University, with a
            specialization in Artificial Intelligence. I have a foundational
            understanding of back-end technologies such as Express.js and
            MongoDB.
          </AboutElement>
        </ItemLayout>
        {/* <ItemLayout
                    className={
                        " col-span-full xs:col-span-6 lg:col-span-4 text-accent"
                    }
                >
                    <AboutElement classes="font-semibold w-full text-left text-2xl sm:text-4xl">
                        <Sub num={NUMBER_OF_CLIENTS} text="clients" />
                    </AboutElement>
                </ItemLayout> */}
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <AboutElement classes="font-semibold w-full text-left text-2xl sm:text-4xl">
            <Sub num={YEARS_OF_EXPERIENCE} text="Years of Experience" />
          </AboutElement>
        </ItemLayout>
        <ItemLayout className={"col-span-full p-3"}>
          <div className="flex flex-col gap-9">
            <AboutElement classes="font-bold text-3xl text-center">
              Skills
            </AboutElement>
            <div className="flex flex-wrap justify-center gap-7 items-end">
              {SkillData.map((skill) => (
                <div
                  key={skill?.name}
                  className="flex flex-col items-center justify-end gap-1"
                >
                  <div className="shadow-inner hover:shadow-lg shadow-foreground rounded-full p-6">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      priority
                      width={70}
                      // height={70}
                    />
                  </div>
                  <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full p-3 mt-10"}>
          <div className="flex flex-col gap-6">
            <AboutElement classes="font-bold text-3xl text-center">
              Work Experience
            </AboutElement>
            <div className="flex flex-col gap-4">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <p className="text-sm">Innovura</p>
                <p className="text-sm">KSA, Riyadh, Remote</p>
                <p className="text-sm">03/2023 - 11/2024</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-400">
                  <li>
                    Worked with Atlassian tools: JIRA, Bitbucket, and Forge.
                  </li>
                  <li>
                    Developed features using React, React Query, and Tailwind
                    CSS.
                  </li>
                  <li>
                    Received a{" "}
                    <a
                      href="https://drive.google.com/file/d/135JB7txngUEstY8l3aFE3i-oPwDQqcpl/view?usp=drive_link"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      Letter of Recommendation
                    </a>{" "}
                    from Innovura for exceptional performance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
