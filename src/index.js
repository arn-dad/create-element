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
