import React from 'react';
import '../assets/css/InvenstmentTable.css';
import { YearlyDataArray } from '../types/App';

const InvenstmentTable = ({ yearlyData }: { yearlyData: YearlyDataArray }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.savingsEndOfYear}</td>
              <td>{item.yearlyInterest}</td>
              <td>{item.yearlyContribution}</td>
              <td>TOTAL INVESTED CAPITAL</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvenstmentTable;
