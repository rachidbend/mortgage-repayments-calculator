import { createGlobalStyle } from 'styled-components';
import Calculator from './components/calculator/Calculator';
import Credit from './components/credit/Credit';
import CalculatorProvider from './contexts/AppContext';

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
  /* reset */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /* variables */
  :root {
    --color-lime: hsl(61, 70%, 52%);
    --color-red: hsl(4, 69%, 50%);

    --color-white: hsl(0, 0%, 100%);
    --color-slate-100: hsl(202, 86%, 94%);
    --color-slate-300: hsl(203, 41%, 72%);
    --color-slate-500: hsl(200, 26%, 54%);
    --color-slate-700: hsl(200, 24%, 40%);
    --color-slate-900: hsl(202, 55%, 16%);

    --color-credit: hsl(228, 45%, 44%);
    --color-type-background: hsl(60, 72%, 92%);

    --color-calculate-button-background: hsl(62, 71.9%, 76%);

    --color-result-background: hsl(202, 55%, 12%);
    --color-line-devider: hsl(202, 35%, 19%);

    --font-main: 'Plus Jakarta Sans', sans-serif;
  }

  /* changing base font size */
  html {
    font-size: 62.5%;
    font-family: var(--font-main);
    @media (max-width: 600px) {
     
  }
  }

  /* main page styles */
  #root {
    min-height: 100vh;
    background-color: var(--color-slate-100);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    padding: 3.6rem;

    @media (max-width: 600px) {
      padding: 0;
      gap: 0;
  }
`;

function App() {
  return (
    <>
      {/* applyinh the global styles */}
      <GlobalStyle />
      {/* using the calculator context  */}
      <CalculatorProvider>
        {/* the main calculator component */}
        <Calculator />
      </CalculatorProvider>
      {/* credit */}
      <Credit />
    </>
  );
}

export default App;
