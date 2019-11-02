import ce from "../lib";
import { Card } from "./Card";

export const CardList = () => {
  return ce.createElement(
    "div",
    { className: "divider" },
    [1, 2, 3, 4, 5].map((item, index) => {
      return Card({ index });
    })
  );
};
