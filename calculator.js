function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthly_rate = (parseFloat(document.getElementById('rate').value) / 100) / 12;
    const years = parseInt(document.getElementById('years').value);
    const total_months = 12 * years;
    const monthly_contribution = parseFloat(document.getElementById('monthly-investments').value);

    if (isNaN(principal) || isNaN(monthly_rate) || isNaN(years) || isNaN(total_months) || isNaN(monthly_contribution) || 
        principal <= 0 || rate < 0 || years <= 0 ||  total_months <= 0 ||  monthly_contribution < 0) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    // Future Value of initial investment
    const initialInvestmentFV = principal * Math.pow(1 + monthly_rate, total_months);

    // Future value of monthly contributions (annuity formula)
    const annuityFV = monthly_contribution * ((Math.pow(1 + monthly_rate, total_months) - 1) / monthly_rate);

    // Total Future Value
    futureValue = initialInvestmentFV + annuityFV;

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
