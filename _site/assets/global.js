$(document).ready(function() {
	$(".overlay-bg").click(function() {
		$(this).css("display", "none");
		$(".overlay-msg").css("display", "none");
	});
	

	$("nav div").click(function() {
		var href = $(this).children("a").attr("href");
		if(href != undefined) {
			document.location = href;
		}
	});
	
	$(".g_submit").click(function() {
		$(this).closest("form").submit();
	});
	
	$(".g_submit_confirm").click(function(e) {
		e.preventDefault();
		retval = confirm("Do you really want to buy a hint for this challenge?");
		if(retval){
			$(this).closest("form").submit();
		}
	});
	
	$("form input").keypress(function(event) {
		if(event.which == 13) {
			$(this).closest("div").find(".g_submit").click();
		}
	});
	
	$(".title_hover").click(function() {
		$(".challenge_list_" + $(this).data("id")).toggle();
	});
	
	$(".title_hover").hover(
	function() {
		$(this).children().next().css("background-position", "bottom");
	},
	function() {
		$(this).children().next().css("background-position", "top");
	});
	
	$(".ranking_img").hover(
	function() {
		var i = 0;
		var max = $(this).data("value");
		$(".ranking_img").each(function() {
			if(i < max) {
				$(this).addClass("ranking_hover");
			} else {
				return false;
			}
			i++;
		});
	},
	function() {
		$(".ranking_img").each(function() {
			$(this).removeClass("ranking_hover");
		});
	});
	
	$(".ranking_img").click(function() {
		$.get("ajax.php?a=rate&id=" + $(this).data("id") + "&rate=" + $(this).data("value"), function(data) {
			$("#rate_response").html(data);
		});
		var i = 0;
		var max = $(this).data("value");
		$(".ranking_img").each(function() {
			if(i < max) {
				$(this).addClass("ranking_persistent");
			} else {
				return false;
			}
			i++;
		});
	});
	
	$(".u_click").click(function() {
		$("#real_avatar").click();
	})
	
	$("#real_avatar").hover(
		function() {
			$(".u_click").addClass("g_avatar_hover");
		},
		function() {
			$(".u_click").removeClass("g_avatar_hover");
	});
	
	$(".overlay").click(function() {
		$(this).css("display", "none");
		$(".c_prompt").css("display", "none");
	});
	
	$(".href_hint").click(function(event) {
		event.preventDefault();
		$(".prompt_text").html(decodeURIComponent($(this).data("hint")));
		$(".overlay").css("display", "block");
		$(".c_prompt").css("display", "block");		
	});
	
	var old_frame = null;
	$(".question_img").click(function() {
		if($(this).closest("div").css("right") == "-220px") {
			if($(this).closest("div").hasClass("over_friend")) {
				$(this).closest("div").css("z-index", "100000");
			}
			$(old_frame).closest("div").animate({"right": "-220px"}, 500);
			$(this).closest("div").animate({"right": "0px"}, 500);
		} else {
			$(this).closest("div").animate({"right": "-220px"}, 500);
			$(old_frame).closest("div").animate({"right": "-220px"}, 500);
			$(this).closest("div").css("z-index", "10000");
		}
		old_frame = this;
	});


	$(".tool-choice").click(function(event) {
		event.preventDefault();
		$(".tool_action").val($(this).attr("href"));
		$(".tool-form").submit();
	});
});
