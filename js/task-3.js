function getElementWidth(content, padding, border) {
  const width = content + padding * 2 + border * 2;
  const width1 = Number.parseFloat(content, padding, border);
  return width1;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
