import React from 'react';
import { render, fireEvent, waitForElement, getByTitle, getByDisplayValue } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import { screen } from '@testing-library/dom'


test('word search', async () => {
  const { getByText } = render(<App />);
  expect(getByText("Coding task")).toBeInTheDocument();
});
