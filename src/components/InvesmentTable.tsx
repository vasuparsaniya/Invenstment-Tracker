import React from 'react';
import '../assets/css/InvestmentTable.css';
import { YearlyDataArray } from '../types/App';

const InvenstmentTable = ({
  yearlyData,
  initialInvenstment,
}: {
  yearlyData: YearlyDataArray;
  initialInvenstment: number;
}) => {
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
              <td>
                {item.savingsEndOfYear -
                  initialInvenstment -
                  item.yearlyContribution * item.year}
              </td>{' '}
              //total interest gained
              <td>
                {initialInvenstment + item.yearlyContribution * item.year}
              </td>{' '}
              //total invested capital
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvenstmentTable;
