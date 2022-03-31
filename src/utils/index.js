const randomCube = () => Math.round(Math.random());


const updateGrid = (width, height, fill) => {
  if (fill === void 0) { fill = randomCube; }
  return Array
      .from({ length: width }, function () { return Array.from({ length: height }, fill); });
};
export { randomCube, updateGrid }