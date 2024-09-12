const fromAmountValue=document.querySelector('.amount')
const  covertedAmout=document.querySelector('.converted-amount')
const   fromCurrncyElement=document.querySelector('.fromCurrncy')
const   toCurrencyElement=document.querySelector('.ToCurrncy')
const  result=document.querySelector('.result')

// Array to populate the select tage with countries
const countries=[
    {code :"AED", name:"Untied Arab Emerirates dhiram"},
    {code :"USD", name:"Untied State Of Kindom"},
    {code :"INR", name:"India"},
    {code :"XCD", name:"xcd"}, 
    {code :"ALL", name:"all"},
    {code :"AMD", name:"amd"},
    {code :"ANG", name:"ang"},
    {code :"AOA", name:"aoa"},
    {code :"AQD", name:"aqo"},
    {code :"ARS", name:"ars"},




];

//showing countires from array to select tag
 //  javascript me elemenet created asee kar te hai

countries.forEach(country =>{
    const optiona1=document.createElement('option')
    const optiona2=document.createElement('option')

    optiona1.value=  optiona2.value=country.code;  
    optiona1.textContent= optiona2.textContent = `${country.code} (${country.name})`;

    fromCurrncyElement.appendChild(optiona1)
    toCurrencyElement.appendChild(optiona2)


    // SETTING DEFULT VALUE 
    fromCurrncyElement.value="USD";
    toCurrencyElement.value="INR";
})


//funcation to get exchage rate using Api
const getExchangeRate =() =>{
    const amount=parseFloat(fromAmountValue.value);
    const fromCurrncy=fromCurrncyElement.value;
    const ToCurrncy =toCurrencyElement.value
}

