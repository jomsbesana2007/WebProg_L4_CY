/*
When the 'Calculate!' button is clicked, the inputted values are assigned to two variables wherein:
let costPerLiter - stores the inputted costPerLiter that is no less than $1.72
let petrolAmountPurchased - stores the inputted amount of litres of petrol purchased
*/
document.getElementById("btn").addEventListener("click", function() 
{
    /*Assigns the inputted values to two variables. When no input value was given, the variable is automatically assigned as undefined*/
    let costPerLiter = parseFloat(document.getElementById("cost").value) || undefined;
    let petrolAmountPurchased = parseFloat(document.getElementById("petrol").value) || undefined;

    /*Passes the values in costPerLiter and petrolAmountPurchased as the parameters of the function petrolTotalCost in order to perform calculations*/
    petrolTotalCost(costPerLiter, petrolAmountPurchased);
});

/*This function performs the calculations*/
function petrolTotalCost(a, b) {
    /*Checks if the user inputted values into variables a, or costPerLiter, or b, or petrolAmountPurchased*/
    if (a === undefined || b === undefined) {
        alert("Please enter values into the fields!")
        return false
    }
    /*Checks if the user inputted a cost per litre is less than the standard price of $1.72 per litre*/
    else if (a < 1.72) {
        alert("Enter the cost per litre that is greater than the standard cost of $1.72 per litre!")
        return false
    }

    /*After the conditions have been performed, the function then performs a calculation and then returns the result by modifying the <p id="result"> tag with inneHTML*/
    document.getElementById("result").innerHTML = "$" + a * b;
}

/*This function clears all the input fields and result*/
function clearFields() {
    document.getElementById("cost").value = '';
    document.getElementById("petrol").value = '';
    document.getElementById("result").innerHTML = '$&nbsp;';
}