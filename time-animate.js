<p id="time" style="font-size:70px;font-weight:bolder;color:magenta;text-shadow: orangered 1px 2px 25px;text-align:center"> Le temps</p>
<!-- Debut de la fonction JS du temps -->        
<script>
   var obtenir= document.getElementById("time");
    setInterval(function(){
     obtenir.innerText=new Date().toLocaleTimeString();
     if(obtenir.style.color=="orange"){
       obtenir.style.color="blue"
}
     else if(obtenir.style.color=="blue"){
       obtenir.style.color="red";
}
    else if(obtenir.style.color=="red"){
       obtenir.style.color="green";}},122)
</script>
<!-- Fin de la fonction JS du temps --> 
