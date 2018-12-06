jQuery(document).ready(function($) {
	  			$("#target1").addClass("animated");
	  			$("#target1").addClass('shake');
	  			$("#target1").parent().css("background","blue");
	  			$("#left-well").children().css("color","red");
                $(".target:nth-child(2)").addClass("animate shake");
                $("#target3").remove();
                $("#target5").clone().appendTo('#left-well');
                $("#target2").prop('disabled',true);
                $("#right-well").children().css("color","orange");
                $("#target4").parent().css("background","green");
                 	  		}); 