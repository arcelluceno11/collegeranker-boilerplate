import React, { useState } from "react";
import Pane from "../components/Pane";
import Navigation from "../components/Navigation";

export type NavigationItemProps = {
  label: string;
};

export type ChipItemProps = {
  label: string;
  text: string;
  link: string;
};

export type PaneItemProps = {
  title: string;
  description: string;
  chips: ChipItemProps[];
};

const navItems: NavigationItemProps[] = [
  { label: "College 1" },
  { label: "College 2" },
  { label: "College 3" },
  { label: "College 4" },
];

const paneItems: PaneItemProps[] = [
  {
    title: "College 1",
    description:
      "Lorem ipsum dolor sit amet,  mollit anim id est laborum.",
    chips: [
      { label: "A++", text: "Excellent", link: "https://www.youtube.com/embed/CZy5pwKdMuo?si=nVsf3LIvtOX2mj3d" },
      { label: "B", text: "Good", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4l" },
      { label: "C+", text: "Good", link: "https://www.youtube.com/embed/CZy5pwKdMuo?si=nVsf3LIvtOX2mj3d" },
    ],
  },
  {
    title: "College 2",
    description:
      "Lorem ipsum dolor  tempor incididunt ut  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    chips: [
      { label: "A-", text: "Excellent", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4l" },
      { label: "B-", text: "Good", link: "https://www.youtube.com/embed/CZy5pwKdMuo?si=nVsf3LIvtOX2mj3d" },
      { label: "C", text: "Good", link: "https://www.youtube.com/embed/f3YtLsLueo8?si=FR99mGgyMrJKtAOq" },
      { label: "D", text: "Good", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4lY" },
    ],
  },
  {
    title: "College 3",
    description:
      "Lorem ipsum dolor sdipiscing labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    chips: [
      { label: "A+", text: "Excellent", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4l" },
      { label: "B", text: "Good", link: "https://www.youtube.com/embed/CZy5pwKdMuo?si=nVsf3LIvtOX2mj3d" },
      { label: "C-", text: "Good", link: "https://www.youtube.com/embed/f3YtLsLueo8?si=FR99mGgyMrJKtAOq" },
    ],
  },
  {
    title: "College 4",
    description:
      "Lorem ipsum dolor tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    chips: [
      { label: "A", text: "Excellent", link: "https://www.youtube.com/embed/f3YtLsLueo8?si=FR99mGgyMrJKtAOq" },
      { label: "B+", text: "Good", link: "https://www.youtube.com/embed/CZy5pwKdMuo?si=nVsf3LIvtOX2mj3d" },
      { label: "C", text: "Better", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4l" },
      { label: "D-", text: "Better", link: "https://www.youtube.com/embed/5puX_BVuVAA?si=AIOq1J8mgpw0Ss4l" },
    ],
  },
];

const CollegeView = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Navigation
        navItems={navItems}
        value={value}
        handleChange={handleChange}
      />
      <Pane
        title={paneItems[value].title}
        description={paneItems[value].description}
        chips={paneItems[value].chips}
      />
    </div>
  );
};

export default CollegeView;
