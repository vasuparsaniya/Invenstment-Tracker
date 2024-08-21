import React from 'react';
import '../assets/css/InvestmentTable.css';
import { YearlyDataArray } from '../types/App';

/**total interest gained ==> {item.savingsEndOfYear -
                  initialInvenstment -
                  item.yearlyContribution * item.year}*/

// total invested capital {initialInvenstment + item.yearlyContribution * item.year}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear -
                    initialInvenstment -
                    item.yearlyContribution * item.year,
                )}
              </td>{' '}
              <td>
                {formatter.format(
                  initialInvenstment + item.yearlyContribution * item.year,
                )}
              </td>{' '}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvenstmentTable;
