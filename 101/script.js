function nameInfo(){
    let firstName = document.getElementById("first").value;
    let middleName = document.getElementById("middle").value;
    let lastName = document.getElementById("last").value;
    let greet = "Hello my name is "+ firstName + " "+  middleName + " "+ lastName;
    
    document.getElementById("line").innerHTML = greet;
  }