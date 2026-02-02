import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders dynamic product filter and filters products', () => {
  render(<App />);

  // Check title
  expect(screen.getByText(/Dynamic Product Filter/i)).toBeInTheDocument();

  // Check initial state (All products visible)
  expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByText(/Shoes/i)).toBeInTheDocument();

  // Filter by Electronics
  const selectUtils = screen.getByRole('combobox');
  fireEvent.change(selectUtils, { target: { value: 'Electronics' } });

  // Check filtered state
  expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone/i)).toBeInTheDocument();
  expect(screen.queryByText(/Shoes/i)).not.toBeInTheDocument();

  // Filter by Fashion
  fireEvent.change(selectUtils, { target: { value: 'Fashion' } });

  // Check filtered state
  expect(screen.queryByText(/Laptop/i)).not.toBeInTheDocument();
  expect(screen.getByText(/Shoes/i)).toBeInTheDocument();
});
