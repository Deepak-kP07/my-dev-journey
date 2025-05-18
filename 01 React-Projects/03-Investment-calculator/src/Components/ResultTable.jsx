import {calculateInvestmentResults ,formatter } from '../util/investment';
export default function ResultTable({data}){
    let result = calculateInvestmentResults(data);
    const intialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    return <table  id="result">
        <thead>
                <tr> 
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital </th>
                </tr>
        </thead>
        <tbody>
            {
                result.map((yeardata)=>{
                    const  totalInterest = yeardata.valueEndOfYear - intialInvestment - (yeardata.annualInvestment * yeardata.year);
                    const totalAmountInvested = yeardata.valueEndOfYear - totalInterest;
                    return <tr key={yeardata.year}>
                        <td>{yeardata.year} </td>
                        <td>{formatter.format(yeardata.valueEndOfYear)} </td>
                        <td>{formatter.format(yeardata.interest)} </td>
                        <td>{formatter.format(totalInterest)} </td>
                        <td>{formatter.format(totalAmountInvested)} </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}
