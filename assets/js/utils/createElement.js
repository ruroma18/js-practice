function createElement(tagName, options, ...children) {
  const { classNames = [], attributes = {}, event = {} } = options;
  const elem = document.createElement(tagName);

  for (let i = 0; i < classNames.length; i++) {
    elem.classList.add(classNames[i]);
  }

  for (const attributePair of Object.entries(attributes)) {
    const [attributeKey, attributeValue] = attributePair;
    elem.setAttribute(attributeKey, attributeValue);
  }

  for (const eventPair of Object.entries(event)) {
    const [eventName, eventFunction] = eventPair;
    elem.addEventListener(eventName, eventFunction);
  }

  elem.append(...children);

  return elem;
}
