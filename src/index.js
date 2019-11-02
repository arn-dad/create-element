/**
 * Imlementetion of createElement function
 * Description
 *
 * function must recive three arguments
 * 1. element type ( 'div', 'span', 'button' )
 * 2. element properties/attributes ( className, onclick, herf, style ) @NOTE it can be an object to hold key-value pair
 * 3. element child @NOTE appendChild and/or innerHTML can be use
 *
 * @NOTE child can be string or another result of createElement function (Node), or for multiple elements it can be an array
 */

/**
 * Imlementetion of render function
 *  Description
 *
 * function must recive two arguments
 * 1. Destination where created element should be rendered
 * 2. Target element which will insert in to DOM
 *
 * @NOTE The destination can be div with some id usually it called root or app
 * @NOTE Target can be DOM element or a function
 */

/**
 * @TODO Create Card in example.html file using createElement function
 * @TODO Create List of Cards using createElement function
 * @TODO Render list of Cards in to DOM
 *
 * happy hacking ;)
 */

function createElement(element, attr, child = null) {
  const elem = document.createElement(element);
  const childType = typeof child;
  Object.keys(attr).forEach(attrName => {
    elem[attrName] = attr[attrName];
  });

  if (childType === "function") {
    const childEval = child();
    elem.appendChild(childEval);
    return elem;
  }

  if (childType === "string") {
    elem.innerHTML = child;
    return elem;
  }

  if (childType === "object" && Array.isArray(child)) {
    child.forEach(childElem => {
      if (typeof childElem === "string") {
        elem.innerHTML = child;
      } else {
        elem.appendChild(childElem);
      }
    });
    return elem;
  }

  if (childType === "object" && child) {
    elem.appendChild(child);
    return elem;
  }

  return elem;
}

function render(destination, target) {
  if (typeof target === "function") {
    const app = target();
    destination.appendChild(app);
    return;
  }
  destination.appendChild(target);
}

const CardList = () => {
  return createElement(
    "div",
    { className: "divider" },
    [1, 2, 3, 4, 5].map((item, index) => {
      return Card({ index });
    })
  );
};

const Card = props => {
  const onButtonClick = e => {
    console.log("Clicked", e);
  };

  return createElement("div", { className: "card" }, [
    createElement("div", { className: "card-header" }, "Featured"),
    createElement("div", { className: "card-body" }, [
      createElement(
        "h5",
        { className: "card-title" },
        "Special title treatment"
      ),
      createElement(
        "p",
        { className: "card-text" },
        "With supporting text below as a natural lead-in to additional content."
      ),
      createElement(
        "a",
        {
          href: "#",
          className: "btn btn-primary",
          onclick: onButtonClick.bind(null, props.index)
        },
        "Go somewhere"
      )
    ])
  ]);
};

render(document.getElementById("root"), CardList);
