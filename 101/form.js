function nameInfo(){
    var firstName = document.getElementById("first").value;
    var middleName = document.getElementById("middle").value;
    var lastName = document.getElementById("last").value;
    var statement = "Hello my name is "+ firstName + " "+  middleName + " "+ " "+ lastName;
    
    document.getElementById("line").innerHTML = statement;
  }