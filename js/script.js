/* DATA LAYER */
const costForKm = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;
let ValidData = true;
let output;

/*BUSINESS LAYER*/
const btn1 = document.getElementById('get');
btn1.addEventListener('click', function(){
  const nameSurname = document.getElementById('name').value
  const userNumberKm = document.getElementById('km').value
  const userAge = document.getElementById('eta').value
  const ticketCost = costForKm * userNumberKm;

  if(nameSurname === '' || !isNaN(nameSurname)){
    alert('Si prega di inserire un Nome e un Cognome!');

    ValidData = false;
  }

  if(userNumberKm < 1 || isNaN(userNumberKm)){
    alert('Si prega di inserire un valore valido nel campo "Km da percorrere"!');
    
    ValidData = false;
  }

  if(ValidData){

    const show = document.querySelector('.rl_box.ticket');
    show.classList.add('d-block');
    show.classList.remove('d-none');
  
    if(userAge === 'maggiorenne'){
      output = ticketCost.toFixed(2); 
    
      document.getElementById('name-output').innerHTML =`
        <span class="fw-bold text-uppercase">${nameSurname} </span>
      `; 
      document.getElementById('offert').innerHTML =`
        <span class="fw-bold">Biglietto Standard</span>
      `; 
      document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10);

      document.getElementById('code').innerHTML = Math.floor(Math.random() * 1000000);

      document.getElementById('cost').innerHTML =`
        <span class="fw-bold">${output} €</span>
      `; 
    }else if(userAge === 'minorenne'){
      const ticketMinorDiscount = ticketCost - ticketCost * minorDiscount;      
      output = ticketMinorDiscount.toFixed(2);

      document.getElementById('name-output').innerHTML =`
        <span class="fw-bold text-uppercase">${nameSurname} </span>
      `; 
      document.getElementById('offert').innerHTML =`
        <span class="fw-bold">${minorDiscount * 100}%</span>
      `; 
      document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10);

      document.getElementById('code').innerHTML = Math.floor(Math.random() * 1000000);
      
      document.getElementById('cost').innerHTML =`
        <span class="fw-bold">${output} €</span>
      `; 
    }else{
      const ticketSeniorDiscount =ticketCost - ticketCost * seniorDiscount;
      output = ticketSeniorDiscount.toFixed(2);
       
      document.getElementById('name-output').innerHTML =`
        <span class="fw-bold text-uppercase">${nameSurname} </span>
      `; 
      document.getElementById('offert').innerHTML =`
        <span class="fw-bold">${seniorDiscount * 100}%</span>
      `; 
      document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10);

      document.getElementById('code').innerHTML = Math.floor(Math.random() * 1000000);
      
      document.getElementById('cost').innerHTML =`
        <span class="fw-bold">${output} €</span>
      `; 
    }
  }
});

const btn2 = document.getElementById('flush');
btn2.addEventListener('click', function(){ 
  const hide = document.querySelector('.rl_box.ticket');
  hide.classList.add('d-none');
  document.getElementById('name').value = '';
  document.getElementById('km').value = '';
  document.getElementById('name-output').innerHTML = '';
  document.getElementById('offert').innerHTML = '';
  document.getElementById('carriage').innerHTML = '';
  document.getElementById('code').innerHTML = '';
  document.getElementById('cost').innerHTML = '';
});