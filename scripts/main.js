const peopleAmount=document.querySelector('#people-amount');
const billAmount=document.querySelector('#bill-amount');
const tipAmount=document.querySelector('.tip-per-person-amount')
const totalPerPerson=document.querySelector('.total-per-person-amount')

const calculateFunc=()=>{
    if (peopleAmount.value>0){
        tipAmount.innerHTML=`$${((billAmount.value*0.05)/peopleAmount.value).toFixed(2)}`
        totalPerPerson.innerHTML=`$${(billAmount.value/peopleAmount.value).toFixed(2)}`
    }
}


billAmount.addEventListener('change',calculateFunc)
peopleAmount.addEventListener('change',calculateFunc)