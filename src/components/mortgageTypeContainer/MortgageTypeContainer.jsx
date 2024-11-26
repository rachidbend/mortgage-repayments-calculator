import styled from 'styled-components';
import { MortgageHeading, RequiredMessage } from '../UI/InputStyles';
import TypeCheckbox from '../UI/TypeCheckbox';
import { useCalculator } from '../../contexts/AppContext';

const StyledMortgageTypeContainer = styled.div``;

/**
 * A component that renders a container with checkboxes for selecting the type of mortgage.
 * The component renders a heading and two checkboxes for selecting the type of mortgage.
 * The component uses the TypeCheckbox component from the UI folder.
 * @returns {JSX.Element} A JSX element representing the mortgage type container.
 */
function MortgageTypeContainer() {
  // this is used to display the error message
  const { type, errorFlag } = useCalculator();
  return (
    <StyledMortgageTypeContainer>
      {/* Heading for the mortgage type container */}
      <MortgageHeading>Mortgage Type</MortgageHeading>
      {/* Two checkboxes for selecting the type of mortgage */}
      <TypeCheckbox name="repayment">Repayment</TypeCheckbox>
      <TypeCheckbox name="interest-only">Interest Only</TypeCheckbox>
      {/* Error message */}
      {type?.length === 0 && errorFlag && (
        <RequiredMessage>This field is required</RequiredMessage>
      )}
    </StyledMortgageTypeContainer>
  );
}

export default MortgageTypeContainer;
