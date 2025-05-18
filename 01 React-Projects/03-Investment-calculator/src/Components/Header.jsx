
export default function Header({userInput ,onChangelistner}) {
    
return <>
    <form action="" id="user-input">
        <div className="input-group">
            <div>
            <label htmlFor="intialAmount"> Intial Amount </label> <br />
            <input
                type="number"
                id="intialAmount"
                required
                value={userInput.initialInvestment}
                onChange={(e) => {
                onChangelistner("initialInvestment", e.target.value);
            }}
            />
        </div>

        <div>
            <label htmlFor="anualInvestment"> Anual Investment </label> <br />
            <input
                type="number"
                id="anualInvestment"
                required
                value={userInput.annualInvestment}
                onChange={(e) => {
                onChangelistner("annualInvestment", e.target.value);
            }}
            />
        </div>
        </div>

        <div className="input-group">
        <div>
            <label htmlFor="expectedReturn"> Expected Return </label> <br />
            <input
                type="number"
                id="expectedReturn"
                required
                value={userInput.expectedReturn}
                onChange={(e) => {
                onChangelistner("expectedReturn", e.target.value);
            }}
            />
        </div>

        <div>
            <label htmlFor="duration"> Duration </label> <br />
            <input
                type="number"
                id="duration"
                required
                min="1"
                value={userInput.duration}
                onChange={(e) => {
                onChangelistner("duration", e.target.value);
            }}
            />
        </div>
        </div>
    </form>
    </>

}
