import styled from 'styled-components';

const StyledCredit = styled.div`
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: 600px) {
    background-color: var(--color-slate-900);
    width: 100%;
    text-align: center;
    padding: 2rem;
    color: var(--color-slate-100);
  }
`;

const StyledLink = styled.a`
  color: var(--color-credit);
  @media (max-width: 600px) {
    color: var(--color-slate-500);
  }
`;

/**
 * The footer of the app, which contains the credit information.
 * @returns {ReactElement} A React element containing the credit information.
 */
function Credit() {
  return (
    <StyledCredit>
      {/* This challenge was created by Frontend Mentor. */}
      Challenge by{' '}
      <StyledLink
        target="_blank"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </StyledLink>
      .
      {/* This project was coded by Rachid Ben. with help from AI tool: Codeium */}
      Coded by{' '}
      <StyledLink
        target="_blank"
        href="https://www.frontendmentor.io/profile/rachidbend"
      >
        Rachid Ben
      </StyledLink>
      .
    </StyledCredit>
  );
}

export default Credit;
