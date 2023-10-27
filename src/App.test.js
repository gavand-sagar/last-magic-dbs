import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { addition } from './utilities';
import Counter from './Counter';

test('check if counter has 0 as initial value', () => {
  render(<Counter />);
  const linkElement = screen.getByTestId('element1');
  expect(linkElement.innerHTML).toBe('0');
});

test('check if counter increments', () => {
  render(<Counter />);
  const linkElement = screen.getByTestId('element1');
  expect(linkElement.innerHTML).toBe('0');

  const button = screen.getByTestId('magical')

  fireEvent.click(button);
  expect(linkElement.innerHTML).toBe('1');

});


test('check if counter increments by input', () => {
  render(<Counter />);
  const linkElement = screen.getByTestId('element1');
  expect(linkElement.innerHTML).toBe('0');

  const button = screen.getByTestId('super-magical')

  const inputbox = screen.getByTestId('helperguy')

  fireEvent.change(inputbox,{target:{value:'3'}})
  
  fireEvent.click(button);
  expect(linkElement.innerHTML).toBe('3');

});

test('testing addition function for 1,2',()=>{
  expect(addition(1,2)).toBe(3)
})


test('testing addition function for 1,3',()=>{
  expect(addition(1,3)).toBe(4)
})

test('testing addition function for 1,"3"',()=>{
  expect(addition(1,"3")).toBe(4)
})