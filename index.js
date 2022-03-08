
//login page validation
function login(){
  var u = document.forms["myForm"]["uname"].value;
  var p = document.forms["myForm"]["pass"].value;

  if(u =="test" && p =="test"){
    window.location.href="Home.html";
  }else{
    alert("Enter valid username and password");
  }
}
//banner
var one = (photourl) =>{
      document.getElementById("mypic").src = photourl;
  }


// Dom Conetent Loaded
window.addEventListener('DOMContentLoaded', (event) => {
  fetchPizza();
});

//---------Fetching Data from API------------------
var fetchPizza=()=>{
  var pizadata = "";
  fetch("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza")
  .then(response=>response.json())
  .then(pizzaArray=>{
    pizzaArray.forEach((pizza, index)=>{
      pizadata+="<tr>";
      pizadata+="<td>"+ pizza.id + "</td>"
      pizadata+="<td>"+ pizza.Crust + "</td>"
      pizadata+="<td>"+ pizza.Flavor + "</td>"
      pizadata+="<td>"+ pizza.Order_ID  + "</td>"
      pizadata+="<td>"+ pizza.Size+ "</td>"
      pizadata+="<td>"+ pizza.Table_No+ "</td>"
      pizadata+="<td><a href='#' class='btn btn-danger text-center cart delete'>Cancel</a></td>"
      pizadata+="</tr>";
    })
    document.getElementById("pizza-data").innerHTML=pizadata;
  })
  }



  //--------------Add Pizza to API----------------
  let addPizza= document.querySelector("#add-piza-Form");
  addPizza.addEventListener('submit', function(e){
    
    e.preventDefault();// Privent Auto Form Submition
    $('#exampleModal').modal('hide'); // Close the Modal

    // ----------Fetching Data form Input--------
    let newItems={
      Crust: document.querySelector("#add-crust").value,
      Flavor: document.querySelector("#add-flavor").value,
      Size: document.querySelector("#add-size").value,
      TableNo: document.querySelector("#add-table").value
    };
// ----------Adding Data To API----------------
    fetch("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/", { 
      method: "POST",
      body: newItems,
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      // console.log(data);
    });
    clearFormFields();
  });

  

  //--------------Clear Form Data After submit-------------

  let clearFormFields=()=>{
      document.querySelector("#add-crust").value="";
      document.querySelector("#add-flavor").value="";
      document.querySelector("#add-size").value="";
      document.querySelector("#add-table").value="";
  }



//---------------Pic the Element on Click-------------
  let tableBody= document.querySelector("#pizza-data");
  tableBody.addEventListener('click', function(e){
    let targetElement = e.target;
    // console.log(targetElement);
    //Recognise delte button
    if(targetElement.classList.contains('delete')){
      let selectedID=targetElement.parentElement.parentElement.firstElementChild.innerHTML;
      // console.log(selectedID)
//------Deleting Data--------------------------

      fetch("https://61b6012ac95dd70017d40dcd.mockapi.io/api/V1/Pizza/"+selectedID, { 
    method: "DELETE",
    body: tableBody,
  }).then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data);
  })
    }
  })






  




























  





















