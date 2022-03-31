import { useCallback, useEffect, useState } from 'react';
import { updateGrid } from '../utils';

export default function useActive(width, height) {
  const [grid, setGrid] = useState([]);

  const countNeighbors = (x, y) => {
    return (
      get(x - 1, y - 1) +
      get(x - 1, y) +
      get(x - 1, y + 1) +
      get(x, y - 1) +
      get(x, y + 1) +
      get(x + 1, y - 1) +
      get(x + 1, y) +
      get(x + 1, y + 1)
    );
  }

  function nextStep() {
    const grid = [];
    for (let x = 0; x < width; x++) {
      const row = [];
      for (let y = 0; y < height; y++) {
        const neighbors = countNeighbors(x, y);
        if (get(x, y)) {
          if (neighbors < 2) {
            row.push(0);
          } else if (neighbors < 4) {
            row.push(1);
          } else {
            row.push(0);
          }
        } else if (neighbors === 3) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      grid.push(row);
    }

    setGrid(grid);
  }

  function get(x, y, r = grid[x]) {
    return r ? r[y] || 0 : 0;
  }

  const refresh = useCallback(() => {setGrid(updateGrid(width, height))}, [width,
                                                                       height])

  useEffect(() => {refresh()}, [width,
                              height,
                              refresh]);

  return { refresh, grid, nextStep };
}
