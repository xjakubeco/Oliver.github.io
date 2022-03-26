

// $(document).ready(function() {

//        $("#container").slideUp(1500).slideDown(1500);
// });

// $(function()    {

// $("#btn1").on("mouseover", function() {
   
//      $("p").text("pes");
// });



// });




// var allToDo = [];

// $(function() {
//     $("#btn1").on("click", function() {
         
//            var str = $("#input").val();
//              allToDo.push(str);
              
//                 $("#todo").text(allToDo);                               
// });
     
// });
     


$(function() {
    $("#Oak").on("click", function() {
      $(".container").css("background-image","url(Oak.jpeg)");  
    });

    $("#Palacinky").on("click", function() {
      $(".container").css("background-image","url(Palacinky.jpg)");  
    });


    $("#Zebra").on("click", function() {
      $(".container").css("background-image","url(Zebra.jpeg)");  
    });

    $("#Vcela").on("click", function() {
      $(".container").css("background-image","url(Vcela.jpeg)");  
    });

    $("#Plaz").on("click", function() {
      $(".container").css("background-image","url(Plaz.jpeg)");  
    });

    $("#Tiger").on("click", function() {
      $(".container").css("background-image","url(Tiger.jpeg)");  
    });
});      