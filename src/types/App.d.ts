interface YearlyData {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

type YearlyDataArray = YearlyData[];

export { YearlyData, YearlyDataArray };
