

let buutton = document.getElementById('btn1');
let output = document.getElementById('P');
let essyer =0;
let number =[Math.floor(Math.random()*100)]
console.log(number)
buutton.addEventListener('click', function(){
    essyer++;
    console.log(essyer)
     let inp1 = document.getElementById("inp1").value;
     if (inp1==number && essyer<=2) {
    
        output.innerHTML ='Well Done, You Are A Genius :'+essyer;
      }  
      else if (inp1 < number ){

        output.innerHTML = 'A Little Smaller'
     }
     if (inp1 > number){ 

         output.innerHTML = 'A Little Bit Bigger'
     }
      else if (essyer >=3 && inp1==number && essyer <10){ output.innerHTML= 'Congratulations, You Won After :'+essyer;

     } else if (essyer>=10){ output.innerHTML = 'It Missed' 


     }
     


});