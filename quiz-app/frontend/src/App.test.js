import { render, screen } from '@testing-library/react';
import App from './App';
import Quiz from './Components/Quiz'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('TRIVIA GAME');
  expect(linkElement).toBeInTheDocument();
});

describe("Quiz", () => {
  test("renders my quiz component", () => {
    render(<Quiz />);
  });
});


