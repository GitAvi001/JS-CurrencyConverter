//variable assigned with the generated API_KEY from ExchangeRate-API
/*API using to this script because currency rates are changing in every day,
 so these dynamically changes can't stored in a local database it needs to fetch the data from a updated server */   
let api=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

//selecting HTML element with id=from-currency-select
const fromDropDown=document.getElementById("from-currency-select");

//selecting HTML element with id=to-currency-select
const toDropDown=document.getElementById("to-currency-select");

//DropDown menu set with the currencies array
currencies.forEach(currency=>{

const option =document.createElement("option");
option.value=currency;
option.text=currency;
fromDropDown.addEventListener(option);

})


//Same thing for other DropDown
currencies.forEach((currency)=>{

    const option =document.createElement("option");
    option.value=currency;
    option.text=currency;
    toDropDown.addEventListener(option);
    
    });

    //Setting the default currency values

    fromDropDown.value="USD";
    toDropDown.value="LKR";


    let convertCurrency = () =>{

        //Reference creating

        const amount = document.querySelector("amount").value;

        //selecting the existing currency value
        const fromCurrency = fromDropDown.value;

        //selecting the conversion needed value
        const toCurrency=toDropDown.value;

        //Input field not empty
    
        if(amount.length!=0){
            //fetch api used to get the fetched data in json format 
            fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      });
        }else{

            alert("Please fill in the amount");
        }
    
    }
    
    document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
    window.addEventListener("load", convertCurrency);


