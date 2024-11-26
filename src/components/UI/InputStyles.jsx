import styled from 'styled-components';

export const MortgageHeading = styled.h3`
  font-size: 1.6rem;
  color: var(--color-slate-500);
  font-weight: 500;
  margin-bottom: 1.4rem;
  letter-spacing: 0.01rem;
`;

export const MortgageInputContainer = styled.div`
  position: relative;
  display: flex;
  border: 0.1rem solid
    ${props =>
      props.$isError
        ? 'var(--color-red)'
        : props.$isFocused === false
        ? 'var(--color-slate-500)'
        : 'var(--color-lime)'};
  border-radius: 0.4rem;
  overflow: hidden;
  flex-direction: ${props =>
    props.$location === 'right' ? ' row-reverse' : 'row'};
  transition: border 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 0.1rem solid var(--color-slate-900);
  }
`;

export const MortgageLabel = styled.label`
  padding: 0 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 700;
  /* color: var(--color-slate-700); */
  color: ${props =>
    props.$isError
      ? 'var(--color-white)'
      : props.$isFocused === false
      ? 'var(--color-slate-700)'
      : 'var(--color-slate-900)'};
  /* background-color: var(--color-slate-100); */
  background-color: ${props =>
    props.$isError
      ? 'var(--color-red)'
      : props.$isFocused === false
      ? 'var(--color-slate-100)'
      : 'var(--color-lime)'};
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export const MortgageInput = styled.input`
  display: inline-block;
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  appearance: textfield;
  width: 100%;

  border-radius: 0.4rem;
  /* border: 0.1rem solid var(--color-slate-500); */
  border: none;
  outline: none;
  font-size: 1.8rem;
  color: var(--color-slate-900);
  font-weight: 500;
  padding: 1.3rem 1.6rem;
`;

// Mortgage Type Components
export const TypeContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
export const TypeInput = styled.input`
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
`;
export const TypeLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1.5rem 2rem;
  border: 0.1rem solid
    ${props =>
      props.$isCkecked === true
        ? 'var(--color-lime)'
        : 'var(--color-slate-500)'};
  border-radius: 0.6rem;
  cursor: pointer;
  gap: 1.8rem;
  background-color: ${props =>
    props.$isCkecked === true ? 'var(--color-type-background)' : 'transparent'};
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;

  &:focus {
    border: 0.1rem solid var(--color-lime);
    background-color: var(--color-type-background);
  }
`;

export const TypeBox = styled.span`
  height: 2rem;
  width: 2rem;
  border: 0.2rem solid
    ${props =>
      props.$isCkecked === true
        ? 'var(--color-lime)'
        : 'var(--color-slate-500)'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.3s ease-in-out;
`;
export const TypeMark = styled.span`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: var(--color-lime);
  opacity: ${props => (props.$isCkecked === true ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;
export const TypeText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-slate-900);
  letter-spacing: 0.16rem;
`;

export const RequiredMessage = styled.p`
  font-size: 1.4rem;
  color: var(--color-red);
  margin-top: 1.2rem;
  font-weight: 500;
`;
