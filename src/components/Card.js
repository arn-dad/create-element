import ce from "../lib";

export const Card = props => {
  const onButtonClick = e => {
    console.log("Clicked: ", e);
  };

  return ce.createElement("div", { className: "card" }, [
    ce.createElement("div", { className: "card-header" }, "Featured"),
    ce.createElement("div", { className: "card-body" }, [
      ce.createElement(
        "h5",
        { className: "card-title" },
        "Special title treatment"
      ),
      ce.createElement(
        "p",
        { className: "card-text" },
        "With supporting text below as a natural lead-in to additional content."
      ),
      ce.createElement(
        "a",
        {
          href: "#",
          className: "btn btn-primary",
          onclick: onButtonClick
        },
        "Go somewhere"
      )
    ])
  ]);
};
