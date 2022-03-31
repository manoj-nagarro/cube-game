import { updateGrid, randomCube } from './index.js';


describe('Utils', () => {

  test('randomCube should be boolean', () => {
    expect(randomCube() % 1).toBe(0);
    expect(randomCube()).toBeLessThanOrEqual(1);
  });

  test('  updateGrid should return an array of array of given length', () => {
    const width = 5
    const height = 5
    const grid = updateGrid(width, height);
    expect(grid).toHaveLength(width)
    expect(grid[4]).toHaveLength(height)
  });
})
