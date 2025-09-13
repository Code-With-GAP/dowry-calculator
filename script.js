
//-------------Dowry calculation------------------//



let isDowryGenerated = false;

function deservedDowry(event) {
  event.preventDefault();

  const age =  document.querySelector('#Age').value;  
  const profession =  document.querySelector('#profession').value;  
  const salary =  document.querySelector('#salary').value;  
  const education =  document.querySelector('#education').value;  
  const residence =  document.querySelector('#residence').value;  
  const country =  document.querySelector('#country').value;  

  if (!age || !profession || !salary || !education || !residence || !country) {
    document.querySelector('.alert').innerHTML="Please enter values first!"
    return;
  }


  if (isDowryGenerated) {
    document.querySelector('.alert').innerHTML="The dowry is already calculated!"
    return;
  }


  if (residence==="Rajasthan") {
    document.querySelector(".alert").innerHTML="Baal Vivah karne wala call 100!!!"
    return;
  }

  let dowryAmount = Math.floor(Math.random()*(9999999-10000+1))+10000

  const result = document.querySelector('.result')

  result.innerHTML=`You deserve: ₹${dowryAmount}`

  isDowryGenerated=true;

  setTimeout(() => {
    document.querySelector('.alert').innerHTML=""
  }, 2500);

}


function resetForm(event) {
    event.preventDefault()

    const inputs = document.querySelectorAll("input")

    inputs.forEach(input=>{
      input.value=""
    })

    document.querySelector(".result").innerHTML=""
    document.querySelector(".alert").innerHTML=""

    isDowryGenerated=false;

}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.calculate').addEventListener("click", deservedDowry);
  document.querySelector(".reset").addEventListener("click", resetForm);
});

















































