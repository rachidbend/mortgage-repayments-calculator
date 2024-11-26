import styled from 'styled-components';
import { useCalculator } from '../../contexts/AppContext';

const StyledMortgageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.4rem;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  color: var(--color-slate-900);
`;

const Button = styled.button`
  font-size: 1.6rem;
  background: none;
  color: var(--color-slate-500);
  text-transform: capitalize;
  border: none;
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  font-family: inherit;
  &:hover {
    color: var(--color-slate-900);
  }
`;

/**
 * MortgageTitle component renders the title and a reset button
 * for the mortgage calculator.
 *
 * This component uses the calculator context to handle the reset functionality.
 * It displays a heading and a button to clear all inputs in the calculator.
 *
 * @returns {JSX.Element} The rendered MortgageTitle component.
 */
function MortgageTitle() {
  // Extract the handleReset function from the calculator context
  const { handleReset } = useCalculator();

  return (
    <StyledMortgageTitle>
      {/* Render the heading for the mortgage calculator */}
      <Heading>Mortgage Calculator</Heading>
      {/* Render a button that triggers the reset functionality when clicked */}
      <Button onClick={handleReset}>clearn all</Button>
    </StyledMortgageTitle>
  );
}

export default MortgageTitle;
