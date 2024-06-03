

document.addEventListener("click", () =>{
    let value1 = Number(document.getElementById("Input1").value);
    let value2 = Number(document.getElementById("Input2").value);
    let value3 = Number(document.getElementById("Input3").value);
    let total= Number(value1+value2+value3);
   
   if  (total <= 10 && total >=0){
    document.getElementById("cantidad").textContent = total+" estamos ok " ;
   }
   else{
       document.getElementById("cantidad").textContent =total+" te pasaste, la suma de stickers es mayor o igual a 11";
   
   }
   }
   )