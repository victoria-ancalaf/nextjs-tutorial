import React from "react";
import Center from "../Center/Center";
import HomeBtn from "./HomeBtn";


export default {
  title: "Button/HomeBtn",
  component: HomeBtn,
  decorators: [story => <Center>{story()}</Center>]
};

export const Basic = () => <HomeBtn />;