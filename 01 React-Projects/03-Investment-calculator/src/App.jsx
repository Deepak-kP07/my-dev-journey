import logo from './assets/investment-calculator-logo.png';
import Header from './Components/Header';
import ResultTable from './Components/ResultTable';
import { useState } from 'react';
function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
// console.log(calculateInvestmentResults(...userInput));
    function handleChnage(identifer, newValue) {
    setUserInput((prevInput) => {
        return {
        ...prevInput,
        [identifer]: +newValue,
        };
    });
    }

  return (
    <>
    <div id="header">
      <img src={logo} alt="Investment calculator" />
      {/* <img src="/assets/investment-calculator-logo.png" alt="Investment calculator" /> */}
      <h1>React Investment Calculator</h1>
    </div>
    <main>
      <Header userInput={userInput} onChangelistner={handleChnage}  />   
      <ResultTable data={ userInput} />
    </main>
    </>
  );
}

export default App;