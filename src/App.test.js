import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import Index from './pages/Index';

afterEach(()=>{
  jest.useRealTimers();
  cleanup();
})

test('renders learn react link', () => {
  render(<App />);
  const pages=screen.getByTestId("menu");
  expect(pages).toBeInTheDocument();
  expect(pages).toHaveTextContent("Shop");
  expect(pages).toHaveTextContent("About Us");
  // expect(pages).toHaveTextContent("nrl-engine");
});

