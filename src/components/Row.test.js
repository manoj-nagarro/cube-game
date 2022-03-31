import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from './Row';

const RowWrapper = (props) => <table>
  <tbody>{props.children}</tbody>
</table>

describe('Row', () => {
  const defaultClassNames = {
    ON: 'alive', OFF: 'dead'
  };

  test('can render', () => {
    render(<RowWrapper><Row/></RowWrapper>);
    const linkElement = screen.getByRole('row');
    expect(linkElement).toBeInTheDocument();
  });

  test('pass correct class names', () => {
    render(<RowWrapper><Row data={[0,1,1,0]}/></RowWrapper>);
    const {ON: on, OFF: off} = defaultClassNames
    const expectClassNames = [off, on, on, off]
    screen.getAllByRole('cube').forEach((i, idx) => {
      expect(i.className).toBe(expectClassNames[idx]);
    });
  });
})
