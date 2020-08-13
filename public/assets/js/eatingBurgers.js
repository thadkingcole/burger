// TODO: add button listeners to all buttons
// [ ] submit button with input form
// [ ] dynamically listen to "devour it!" buttons

// * helper functions
function addNewBurger(event) {
  const newBurger = $("#burger").val().trim(); // get text from input-no whitespace
  // add new burger to db & reload (default for submit button)
  $.ajax({
    url: "/api/burgers",
    type: "POST",
    data: { burger_name: newBurger },
  });
}

// function eatBurger(event) {

// }

// * event listeners
$("#new-burger").click(addNewBurger); // new burger form submition
// $(".devour-it").click(eatBurger); // devour it buttons
