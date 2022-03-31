import React from 'react';
import { render, screen } from '@testing-library/react';
import Cube from './Cube.jsx';


const CubeWrapper = (props) => <table>
  <tbody>
  <tr>{props.children}</tr>
  </tbody>
</table>

describe('Cube', () => {

  test('can render without props', () => {
    render(<CubeWrapper><Cube/></CubeWrapper>);
    const linkElement = screen.getByRole('cube');
    expect(linkElement).toBeInTheDocument();
  });

  test('receive correct className', () => {
    render(<CubeWrapper><Cube status="some"/></CubeWrapper>);
    const linkElement = screen.getByRole('cube');
    expect(linkElement.className).toBe('some');
  });
})
