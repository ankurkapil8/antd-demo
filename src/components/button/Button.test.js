import { render, screen } from '@testing-library/react';
import Button from './Button';

test('test props welcome', () => {
   const{ getByTestId } = render(<Button label="welcome"/>);
   expect(getByTestId("button")).toHaveTextContent("welcome");
});

 