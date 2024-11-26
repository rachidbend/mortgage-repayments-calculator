import styled from 'styled-components';
import MortgageTitle from '../UI/MortgageTitle';
import MortgageAmount from '../UI/MortgageAmount';
import MortgageTerm from '../UI/MortgageTerm';
import MortgageRate from '../UI/MortgageRate';
import MortgageTypeContainer from '../mortgageTypeContainer/MortgageTypeContainer';
import ButtonCalculate from '../UI/ButtonCalculate';

const StyledCalculatorContainer = styled.div`
  padding: 4rem;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 2.2rem;
  margin-bottom: 3.6rem;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
  }
`;

/**
 * A container component that wraps all the components of the calculator
 * It renders the title, the inputs, the mortgage type checkboxes, and the
 * calculate button
 */
function CalculatorContainer() {
  return (
    <StyledCalculatorContainer>
      {/* title and reset button */}
      <MortgageTitle />
      {/* mortgage amount label and input */}
      <MortgageAmount />
      {/* container with mortgage term and mortgage rate inputs */}
      <StyledContainer>
        {/* mortgage term label and input */}
        <MortgageTerm />

        {/* mortgage interest rate label and input */}
        <MortgageRate />
      </StyledContainer>

      {/* mortgage type label and inputs */}
      <MortgageTypeContainer />
      {/* calculate button */}
      <ButtonCalculate />
    </StyledCalculatorContainer>
  );
}

export default CalculatorContainer;
