
function celToFar(temp){
    let celcius =temp ;
    let res= ((celcius*(9/5))+32).toFixed(1) ;
    const ans = document.getElementById("ans1");
    ans.innerHTML=res+"&#176;"+"F" ;
}

function farToCell(temp){
    let farh = temp ;
    let res = ((farh-32)*5/9).toFixed(1) ;
    const ans = document.getElementById("ans1");
    ans.innerHTML=res+"&#176;"+"C" ;
}

function calculate(){
    let cel = document.getElementById("cel").value ;
    let far = document.getElementById("far").value;
    let temp = document.getElementById("temp_input").value ;
    let valueSelect = document.getElementById("temp_name").value ;
  console.log(temp) ;


   if(valueSelect==cel) {
       celToFar(temp) ;
   }
   else if(valueSelect==far) {
    farToCell(temp) ;
   }
}