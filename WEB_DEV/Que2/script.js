 

function emiCalculated() {
    // 1. Get values and ensure they are numbers
    const p = Number(document.getElementById("principalAmount").value);
    const r = Number(document.getElementById("interestRate").value);
    const n = Number(document.getElementById("tenure").value);

    // 2. Calculate monthly interest rate
    const monthlyRate = (r / 100) / 12;

    // 3. Corrected EMI Formula
    // Formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const top = Math.pow((1 + monthlyRate), n);
    const bottom = top - 1;
    const emi = (p * monthlyRate * (top / bottom)).toFixed(2);

    // 4. Display result
    document.getElementById("result").innerHTML = "Monthly EMI: Rs. " + emi;

    // 5. Prevent page refresh
    return false; 
}