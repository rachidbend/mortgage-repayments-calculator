import styled from 'styled-components';
import CalculatorContainer from '../calculatorContainer/CalculatorContainer';
import ResultContainer from '../resultContainer/ResultContainer';

const StyledCalculator = styled.div`
  max-width: 108.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-white);
  border-radius: 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    border-radius: 0;
  }
`;

/**
 * The main component of the calculator. It contains the calculator form and the result.
 * @returns {ReactElement} A React element containing the calculator form and the result.
 */
function Calculator() {
  return (
    <StyledCalculator>
      {/* The calculator form, which contains the inputs and the calculate button. */}
      <CalculatorContainer />
      {/* The result of the calculation. If the result is not available, it displays a message. */}
      <ResultContainer />
    </StyledCalculator>
  );
}

export default Calculator;
