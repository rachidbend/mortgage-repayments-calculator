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

const StyledMortgageTerm = styled.div``;

/**
 * A component that renders a mortgage term input field.
 * It uses the context to keep track of the term value and to update it when the user changes the input.
 * The component also handles the focus state of the input field.
 * @returns {JSX.Element} The rendered MortgageTerm component.
 */
function MortgageTerm() {
  // State to keep track of the focus state of the input field
  const [isFocused, setIsFocused] = useState(false);

  // Get the term value and the handler to change it from the calculator context
  const { term, handleTermChange, errorFlag } = useCalculator();

  return (
    <StyledMortgageTerm>
      {/* The heading for the mortgage term input field */}
      <MortgageHeading>Mortgage Term</MortgageHeading>
      {/* The input field container, which contains the label and the input field */}
      <MortgageInputContainer
        $isError={term === 0 && errorFlag}
        $isFocused={isFocused}
        $location="right"
      >
        {/* The label for the input field, which is "years" */}
        <MortgageLabel
          $isError={term === 0 && errorFlag}
          $isFocused={isFocused}
          htmlFor="mortgage-term"
        >
          years
        </MortgageLabel>
        {/* The input field itself, which is a number input field */}
        <MortgageInput
          // Handle the focus event to update the isFocused state
          onFocus={() => {
            setIsFocused(true);
          }}
          // Handle the blur event to update the isFocused state
          onBlur={() => {
            setIsFocused(false);
          }}
          // Set the value of the input field to the term value from the context
          value={term !== 0 ? term : ''}
          // Handle the change event to update the term value in the context
          onChange={e => {
            handleTermChange(e.target.value);
          }}
          // Set the type of the input field to "number"
          type="number"
          // Set the id of the input field to "mortgage-term"
          id="mortgage-term"
        />
      </MortgageInputContainer>
      {/* Error message */}
      {term === 0 && errorFlag && (
        <RequiredMessage>This field is required</RequiredMessage>
      )}
    </StyledMortgageTerm>
  );
}

export default MortgageTerm;
