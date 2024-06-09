function getElementWidth(content, padding, border) {
  function getValue(value) {
    return parseInt(value.replace("px", ""), 10);
  }
  const contentWidth = getValue(content);
  const paddingWidth = getValue(padding) * 2;
  const borderWidth = getValue(border) * 2;
  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
