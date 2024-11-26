/* eslint-disable react/prop-types */

// Import necessary hooks from React
import { createContext, useContext, useState } from 'react';

// Create a context for the calculator
const CalculatorContext = createContext();

// Define the CalculatorProvider component
/**
 * A context provider component for the Mortgage Calculator application.
 * This component provides state and handler functions to its children components
 * through the CalculatorContext, allowing them to access and update the state.
 * @param {Object} props Component properties
 * @param {JSX.Element} props.children The children components to render
 * @returns {JSX.Element} The rendered CalculatorProvider component
 */
export default function CalculatorProvider({ children }) {
  // Initialize state with default values for calculator inputs and results
  const [state, setState] = useState({
    amount: 0, // Mortgage amount
    term: 0, // Mortgage term in years
    interestRate: 0, // Annual interest rate
    type: '', // Type of mortgage ('repayment' or 'interest-only')
    showResults: false, // Flag to show/hide results
    monthlyPayment: 0, // Calculated monthly payment
    totalPayment: 0, // Total payment over the term
    errorFlag: false,
  });

  // Function to update a specific key-value pair in the state
  /**
   * Updates a specific key-value pair in the state with the provided value.
   * @param {String} key The key of the state property to update
   * @param {Any} value The new value of the state property
   */
  const handleChange = (key, value) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  // Function to reset all input values and results to default
  /**
   * Resets all input values and results to default, effectively clearing the
   * calculator state.
   */
  const handleReset = () => {
    setState({
      amount: 0,
      term: 0,
      interestRate: 0,
      type: '',
      showResults: false,
      monthlyPayment: 0,
      totalPayment: 0,
      errorFlag: false,
    });
  };

  // Function to calculate monthly and total payments based on the input values
  /**
   * Calculates monthly and total payments based on the input values and updates
   * the state accordingly.
   */
  const handleCalculate = () => {
    const { amount, term, interestRate, type } = state;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = term * 12;

    // Use a switch statement for type evaluation
    const calculatePayment = type => {
      switch (type) {
        case 'repayment':
          return (
            (amount *
              monthlyInterestRate *
              Math.pow(1 + monthlyInterestRate, totalPayments)) /
            (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
          );
        case 'interest-only':
          return amount * monthlyInterestRate;
        default:
          // throw new Error('Invalid mortgage type');
          setState(prevState => ({
            ...prevState,
            errorFlag: true,
          }));
          return 0;
      }
    };

    const monthlyPayment = calculatePayment(type);
    const totalPayment = monthlyPayment * totalPayments;

    setState(prevState => ({
      ...prevState,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      showResults: true,
      errorFlag: true,
    }));
  };

  // Provide state and handler functions to children components through context
  return (
    <CalculatorContext.Provider
      value={{
        ...state, // Spread current state
        handleAmountChange: value => handleChange('amount', value), // Handler for amount change
        handleTermChange: value => handleChange('term', value), // Handler for term change
        handleInterestRateChange: value => handleChange('interestRate', value), // Handler for interest rate change
        handleTypeChange: value => handleChange('type', value), // Handler for type change
        handleReset, // Handler to reset inputs and results
        handleCalculate, // Handler to perform calculation
      }}
    >
      {children} {/* Render children components */}
    </CalculatorContext.Provider>
  );
}

/**
 * Custom hook to access calculator context values.
 
 * @returns {Object} The current state and handler functions from the CalculatorContext.
 * @throws Will throw an error if used outside of a CalculatorProvider.
 */
export function useCalculator() {
  // Retrieve the context value for the calculator
  const value = useContext(CalculatorContext);

  // Ensure that the hook is used within a Provider
  if (value === undefined) {
    throw new Error(
      'The CalculatorContext was used outside the CalculatorProvider'
    );
  }

  // Return the context value
  return value;
}
