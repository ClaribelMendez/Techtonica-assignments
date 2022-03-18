import { render, screen } from '@testing-library/react';
import App from './App';
import Users from './components/Users'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eventonica/i);
  expect(linkElement).toBeInTheDocument();
});

describe("users", () => {
  test("renders my users component", () => {
    render(<Users />);
  });
});
