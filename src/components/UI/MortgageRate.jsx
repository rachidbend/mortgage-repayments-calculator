import styled from 'styled-components';
import {
  MortgageHeading,
  MortgageInput,
  MortgageInputContainer,
  MortgageLabel,
  RequiredMessage,
} from './InputStyles';
import { useState } from 'react';
import { useCalculator } from '../../contexts/AppContext';

const StyledMortgageRate = styled.div``;

/**
 * A component to input the mortgage interest rate.
 *
 * @returns {JSX.Element} A JSX element representing the mortgage interest rate input.
 */
function MortgageRate() {
  // State to track focus state
  const [isFocused, setIsFocused] = useState(false);

  // Get the interest rate and the handler to change it from the calculator context
  const { interestRate, handleInterestRateChange, errorFlag } = useCalculator();

  return (
    <StyledMortgageRate>
      {/* Interest rate heading */}
      <MortgageHeading>Interest rate</MortgageHeading>
      {/* Container for the input and label */}
      <MortgageInputContainer
        $isFocused={isFocused}
        $isError={interestRate === 0 && errorFlag}
        $location="right"
      >
        {/* Label for the input */}
        <MortgageLabel
          $isFocused={isFocused}
          $isError={interestRate === 0 && errorFlag}
          htmlFor="mortgage-rate"
        >
          %
        </MortgageLabel>
        {/* Input component */}
        <MortgageInput
          // Focus and blur handlers to track focus state
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          // Value and change handler props from the calculator context
          value={interestRate !== 0 ? interestRate : ''}
          onChange={e => {
            handleInterestRateChange(e.target.value);
          }}
          // Input type and id
          type="number"
          id="mortgage-rate"
        />
      </MortgageInputContainer>
      {/* Error message */}
      {interestRate === 0 && errorFlag && (
        <RequiredMessage>This field is required</RequiredMessage>
      )}
    </StyledMortgageRate>
  );
}

export default MortgageRate;
