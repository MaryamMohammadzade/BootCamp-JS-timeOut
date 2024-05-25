var inputField =document.querySelector("#input");
var outputField =document.querySelector("#output");
var inputFirstValue= "";
var displayTimeOut;

input.addEventListener("input", function (e) {
    var inputCurrentValue=e.target.value;
    if(inputCurrentValue===inputFirstValue){
      return;
      
    }else{
        clearTimeout(displayTimeOut);
        inputFirstValue=inputCurrentValue;
        displayTimeOut= setTimeout(()=>
        {
            outputField.textContent=inputFirstValue;
        
        }, 3000)
        
    }
}
)