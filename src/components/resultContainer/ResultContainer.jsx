import styled from 'styled-components';

import CalculatorIllustration from './../../../public/images/illustration-empty.svg';
import { useCalculator } from '../../contexts/AppContext';
import { formatNumberWithCommas } from '../../helpers/helperFunctions';
const StyledResultContainer = styled.div`
  background-color: var(--color-slate-900);
  border-radius: 0rem 2.2rem 2.2rem 8rem;
  padding: 4rem;

  @media (max-width: 900px) {
    border-radius: 0rem 2.2rem 2.2rem 2.2rem;
  }
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;
const StyledEmptyResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  height: 100%;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  color: var(--color-white);
`;
const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: var(--color-slate-500);
  letter-spacing: 0.05rem;
  line-height: 1.5;
`;
const ResultText = styled(Text)`
  text-align: left;
  margin-top: 2rem;
`;

const ResultsHeading = styled(ResultText)`
  color: var(--color-slate-700);
  margin-top: 0;
  margin-bottom: 1.2rem;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

const ResultContainerDecoration = styled.span`
  background-color: var(--color-lime);
  position: absolute;
  top: -0.6rem;
  left: 0;
  right: 0;
  height: 2rem;
  border-radius: 0.8rem 0.8rem 0 0;
  z-index: 0;
`;
const Container = styled.div`
  position: relative;
`;
const ResultsContainer = styled.div`
  padding: 3.2rem;
  background-color: var(--color-result-background);
  margin-top: 4rem;
  border-radius: 0.8rem;
  position: relative;
  z-index: 1;
`;

const LineDevider = styled.span`
  display: inline-block;
  width: 100%;
  height: 0.1rem;
  background-color: var(--color-line-devider);
  margin-top: 3rem;
  margin-bottom: 3.6rem;
`;

const MonthlyResult = styled.p`
  font-weight: 700;
  font-size: 5.6rem;
  letter-spacing: 0.02em;
  color: var(--color-lime);
  opacity: 0.6;

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;
const TotalResult = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: -0.01em;
  color: var(--color-slate-500);
`;

/**
 * ResultContainer component displays the results of the mortgage calculator.
 * It shows either a message prompting the user to complete the form or the calculated results
 * based on the user's input, including monthly and total payments.
 *
 * @returns {JSX.Element} The rendered ResultContainer component.
 */
function ResultContainer() {
  // Get the monthly and total payments from the CalculatorContext, and decide to show or not to show the results based on the 'showresults' state
  const { showResults, totalPayment, monthlyPayment } = useCalculator();

  return (
    <StyledResultContainer>
      {/* Display a message if results are not available */}
      {(!showResults || !+monthlyPayment) && (
        <StyledEmptyResults>
          {/* Illustration image */}
          <Image src={CalculatorIllustration} alt="" />
          <Heading>Results shown here</Heading>
          <Text>
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be
          </Text>
        </StyledEmptyResults>
      )}
      {/* Display calculated results if available */}
      {showResults && +monthlyPayment && (
        <>
          <Heading>Your results</Heading>
          <ResultText>
            Your results are shown below based on the information you provided.
            To adjust the result, edit the form and click &quot;calculate
            repayments&quot; again.
          </ResultText>
          <Container>
            <ResultContainerDecoration />
            <ResultsContainer>
              <ResultsHeading>Your monthly repayments</ResultsHeading>
              {/* Monthly payment result */}
              <MonthlyResult>
                $ {formatNumberWithCommas(monthlyPayment)}
              </MonthlyResult>

              <LineDevider></LineDevider>
              <ResultsHeading>
                Total you&apos;ll repay over the term
              </ResultsHeading>
              {/* Total payment result */}
              <TotalResult>${formatNumberWithCommas(totalPayment)}</TotalResult>
            </ResultsContainer>
          </Container>
        </>
      )}
    </StyledResultContainer>
  );
}

export default ResultContainer;
