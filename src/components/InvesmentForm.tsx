import React, { ChangeEvent, FormEvent } from 'react';
import '../assets/css/InvesmentForm.css';
import { InvensmentFormProps } from '../types/InvesmentForm';
import { USER_INPUT } from '../constant/InvestmentForm';

function InvenstmentForm({
  setYearlyData,
  setUserInput,
  userInput,
}: InvensmentFormProps) {
  const handleUserInput = (
    identifier: USER_INPUT,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    switch (identifier) {
      case USER_INPUT.CURRENT_SAVING:
        setUserInput((prev) => {
          return { ...prev, currentSavings: event.target.value };
        });
        break;
      case USER_INPUT.YEAR_SAVING:
        setUserInput((prev) => {
          return { ...prev, yearlyContribution: event.target.value };
        });
        break;
      case USER_INPUT.EXPECTEDINTEREST:
        setUserInput((prev) => {
          return { ...prev, expectedReturn: event.target.value };
        });
        break;
      case USER_INPUT.DURATION:
        setUserInput((prev) => {
          return { ...prev, duration: event.target.value };
        });
        break;
    }
  };
  const calculateHandler = (event: FormEvent<HTMLFormElement>) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    event.preventDefault();

    setYearlyData([]);

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      setYearlyData((prev) => {
        return [
          ...prev,
          {
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          },
        ];
      });
    }
    // do something with yearlyData ...
  };

  const resetHandler = () => {
    setUserInput({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: '',
    });
    setYearlyData([]);
  };

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(e) => handleUserInput(USER_INPUT.CURRENT_SAVING, e)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(e) => handleUserInput(USER_INPUT.YEAR_SAVING, e)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(e) => handleUserInput(USER_INPUT.EXPECTEDINTEREST, e)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) => handleUserInput(USER_INPUT.DURATION, e)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvenstmentForm;
