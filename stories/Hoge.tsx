import * as React from "react";

export type HogeProps = {
  title: string;
};

export const Hoge = (props) => {
  return <p>Hello {props.title}!</p>;
};
