
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var newBurgerState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger to", true);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".reorder").on("click", function(event){
      var id = $(this).data("id");
  
      var oldBurgerState = {
        devoured : false
      };
  
      //Send the PUT request
      $.ajax("api/burgers/" + id, {
        type: "PUT",
        data: oldBurgerState
      }).then(
        function(){
          console.log("Changed burger to ", false);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bur").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  