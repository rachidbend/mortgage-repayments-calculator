import styled from 'styled-components';
import IconCalculator from '../../../public/images/icon-calculator.svg';
import { useCalculator } from '../../contexts/AppContext';

const StyledButtonCalculate = styled.button`
  border: none;
  background-color: var(--color-lime);
  padding: 1.6rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.8rem;
  color: var(--color-slate-900);
  font-weight: 700;
  border-radius: 5rem;
  margin-top: 4rem;
  cursor: pointer;
  font-family: inherit;

  transition: background 0.26s ease-in-out;
  &:hover {
    background-color: var(--color-calculate-button-background);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img``;

/**
 * A button to calculate the mortgage repayment. It calls the handleCalculate
 * function from the calculator context when clicked.
 *
 * @returns {JSX.Element} A JSX element representing the button.
 */
function ButtonCalculate() {
  // handler to start the calculation and display the results
  const { handleCalculate } = useCalculator();

  return (
    <StyledButtonCalculate onClick={handleCalculate}>
      {/* calculator icon */}
      <Image src={IconCalculator} alt="calculator icon" />
      Calculate Repayments
    </StyledButtonCalculate>
  );
}

export default ButtonCalculate;
