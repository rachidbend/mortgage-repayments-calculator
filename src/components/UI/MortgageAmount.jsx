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
import { formatNumberWithCommas } from '../../helpers/helperFunctions';

const StyledMortgageAmount = styled.div`
  margin-bottom: 3.6rem;
`;

/**
 * A component to input the mortgage amount.
 *
 * @returns {JSX.Element} A JSX element representing the mortgage amount input.
 */
function MortgageAmount() {
  // State to track focus state
  const [isFocused, setIsFocused] = useState(false);

  // Get the mortgage amount and the handler to change it from the calculator context
  const { amount, handleAmountChange, errorFlag } = useCalculator();
  return (
    <StyledMortgageAmount>
      {/* Mortgage amount heading */}
      <MortgageHeading>Mortgage ammount</MortgageHeading>
      {/* Container for the input and label */}
      <MortgageInputContainer
        $isFocused={isFocused}
        $isError={amount === 0 && errorFlag}
      >
        {/* Label for the input */}
        <MortgageLabel
          $isFocused={isFocused}
          $isError={amount === 0 && errorFlag}
          htmlFor="mortgage-amount"
        >
          $
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
          value={amount !== 0 ? formatNumberWithCommas(amount) : ''}
          onChange={e => {
            handleAmountChange(e.target.value.replace(/,/g, ''));
          }}
          // Input type and id
          type="text"
          id="mortgage-amount"
        />
      </MortgageInputContainer>
      {/* Error message */}
      {amount === 0 && errorFlag && (
        <RequiredMessage>This field is required</RequiredMessage>
      )}
    </StyledMortgageAmount>
  );
}

export default MortgageAmount;
