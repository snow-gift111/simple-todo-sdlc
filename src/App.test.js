import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Clear Completed when completed todos exist', ( ) => {
  render(<App />);

  expect(screen.getByRole('button', { name: /clear completed/i })).toBeInTheDocument();
});

test('clears completed todos and keeps incomplete todos', ( ) => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /clear completed/i }));

  expect(screen.queryByText(/Do My Home Work/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Read boyd language book/i)).toBeInTheDocument();
  expect(screen.getByText(/create mini project react/i)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /clear completed/i })).not.toBeInTheDocument();
});
