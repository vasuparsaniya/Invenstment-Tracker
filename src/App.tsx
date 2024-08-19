import React, { useState } from 'react';
import './assets/css/App.css';
import { YearlyDataArray } from './types/App';
import Header from './components/Header';
import InvenstmentTable from './components/InvesmentTable';
import InvenstmentForm from './components/InvesmentForm';
import { UserInput } from './types/InvesmentForm';

function App() {
  const [yearlyData, setYearlyData] = useState<YearlyDataArray>([]);
  const [userInput, setUserInput] = useState<UserInput>({} as UserInput);

  return (
    <div>
      <Header />
      <InvenstmentForm
        setYearlyData={setYearlyData}
        setUserInput={setUserInput}
        userInput={userInput}
      />
      {yearlyData.length ? (
        <InvenstmentTable
          yearlyData={yearlyData}
          initialInvenstment={Number(userInput.currentSavings)}
        />
      ) : (
        <p className="nodatatext">No invensment calculate yet....</p>
      )}
    </div>
  );
}

export default App;
