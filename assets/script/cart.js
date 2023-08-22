const billAmt = document.querySelector('#billAmt');
const serviceSelector = document.querySelector('#serviceSelector');
const noOfPeople = document.querySelector('#noOfPeople');
const calculatebtn = document.querySelector('.calculate');


calculatebtn.addEventListener('click', function(){
    if(billAmt.value === ""){
        alert('Enter bill Amount Please!')
        return false;
    }
        
    if(serviceSelector.value =="0"){ 
        alert('Choose service please');
    return false;
}

if(noOfPeople.value === ""){
    alert('Enter number of People sharing the bill please');
    return false;
}

let total = (billAmt.value*serviceSelector.value)/noOfPeople.value;
total = Math.round(total*100)/100;
total = total.toFixed(2);


document.querySelector('.totalTip').style.display= 'block';
document.querySelector('.tip').textContent= total;
})