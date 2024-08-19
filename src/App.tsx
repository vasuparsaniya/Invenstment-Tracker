import React, { useState } from 'react';
import './assets/css/App.css';
import { YearlyDataArray } from './types/App';
import Header from './components/Header';
import InvensmentForm from './components/InvensmentForm';
import InvenstmentTable from './components/InvensmentTable';

function App() {
  const [yearlyData, setYearlyData] = useState<YearlyDataArray>([]);

  return (
    <div>
      <Header />
      <InvensmentForm setYearlyData={setYearlyData} />
      {yearlyData.length ? (
        <InvenstmentTable yearlyData={yearlyData} />
      ) : (
        <p className="nodatatext">No invensment calculate yet....</p>
      )}
    </div>
  );
}

export default App;
