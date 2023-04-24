<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First js script</title>
</head>
<body>
    <input id="myButton" type="submit" onclick="greet">
    <input type="text" id="thereName" placeholder="enter your name">
   <script>
    let myName = "jorge";
    let prompt = "hello i am" + myName + "what's your name";
     function greet() {
        return  prompt 
     }
     document.getElementById("myButton").addEventListener("click", function(){
     alert(greet());
     there();
     });
     // entry of user name
     let nom = "my name is";
     function there() {
       let names = document.getElementById("thereName").value;
       alert(nom + names);
     }
   </script>
    
</body>
</html>
