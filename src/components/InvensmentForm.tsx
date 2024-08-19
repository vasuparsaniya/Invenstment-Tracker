import React, { ChangeEvent, FormEvent, useState } from 'react';
import '../assets/css/InvensmentForm.css';
import { InvensmentFormProps, UserInput } from '../types/InvensmentForm';

function InvensmentForm({ setYearlyData }: InvensmentFormProps) {
  const [userInput, setUserInput] = useState<UserInput>({} as UserInput);

  const handleCurrentSaving = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, currentSavings: event.target.value };
    });
  };

  const handleYearSaving = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, yearlyContribution: event.target.value };
    });
  };

  const handleExpectedInterest = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, expectedReturn: event.target.value };
    });
  };

  const handleInvenstmentDuration = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {
      return { ...prev, duration: event.target.value };
    });
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
            onChange={handleCurrentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={handleYearSaving}
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
            onChange={handleExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={handleInvenstmentDuration}
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

export default InvensmentForm;
