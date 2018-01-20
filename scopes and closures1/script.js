var people = ["Peter", "Gustav", "Victoria"];

for (let i = 0; i < people.length; i++) {
  
  var button = document.createElement("button");
  var text = document.createTextNode(`${people[i]}`);
  button.appendChild(text);

  button.addEventListener("click", function() {
    alert(`Hi I'm ${people[i]}`);
  });

  document.getElementById("main").appendChild(button);
}
