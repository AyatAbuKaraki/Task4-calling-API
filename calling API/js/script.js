$("document").ready(function(){
 $("#country").change(function(){
  var country= $("#country").val();
  $.ajax(
     {
       type : "GET",
       url :  "http://upskillsprojects.atwebpages.com/htu/?country_id="+country,
       success: function(data){
       	$ ("#City").html(data);
       }

     }

  	);

  });

});