class uber {
    constructor(customerName) {
        this.customerName = customerName;
    }
    getDetails() {
        let personalData = `${this.customerName}`;

        var city = prompt("Welcome to the Uber, please enter the city you want to visit");
        console.log(`Hello ${personalData}, Welcome to the Uber`);

        return city;
    }
    calculateFare() {

        var baseFee = 21;
        let Total_km = prompt("Enter your KMs");
        let finalRate = (baseFee) * Total_km;
        return finalRate
    }

}
let obj = new uber("Aniket Prakash Bagul");
var userCity = obj.getDetails();
var totalAmt = obj.calculateFare();
console.log(` Your total fare for ${userCity} will be: ${totalAmt}`);