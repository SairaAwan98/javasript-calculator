function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-red";
  }


  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function getNumber(number){
      var result = document.getElementById("result");
      result.value += number;
  }

  function clearResult(){
      var clear = document.getElementById("result");
      clear.value = "";
      var clear = document.getElementById("output");
      clear.value = "";
  }

  function getResult(){
      var result= document.getElementById("result");
      var output= document.getElementById("output");
      var finalResult= eval(result.value);
      output.value = finalResult;

  }


  