import type { Meta, StoryFn } from "@storybook/react";
import TimeLine from "./TimeLine";

const info = [
  {
    title: "In-depth Niche Analysis",
    text: "We delve into your unique business landscape, assessing potential risks and addressing pitfalls before your project even begins.",
  },
  {
    title: "Cutting-Edge Technologies",
    text: "Our use of modern, efficient technologies accelerates task completion while saving you time and money..",
  },

  {
    title: "Future-Proof Scalability",
    text: "With our arsenal of over 30 advanced technologies, we build solutions that grow with your business, eliminating the need for costly rewrites or overhauls.",
  },

  {
    title: "Future-Proof Scalability",
    text: "With our arsenal of over 30 advanced technologies, we build solutions that grow with your business, eliminating the need for costly rewrites or overhauls.",
  },
];

const images = [
  "animation-one",
  "animation-two",
  "animation-three",
  "animation-four",
  "animation-five",
  "animation-six",
];

const meta: Meta<typeof TimeLine> = {
  title: "TimeLine",
  component: TimeLine,
};

export default meta;

const TimeLineDefault: StoryFn = (arg) => {
  return (
    <TimeLine imgName={images} data={info} {...arg} isInView>
      {images.map((imageName, index) => (
        <img
          key={index}
          src={`/img/animationImg/${imageName}.webp`}
          alt={imageName}
          className={`animation-images relative h-full w-full rounded-24px border-[1px] border-solid border-[#2F1E5E] object-cover 
          `}
        />
      ))}
    </TimeLine>
  );
};

export const TimeLineCheck = TimeLineDefault.bind({});

TimeLineCheck.args = {
  data: info,
  classes: "fix-images",
};
