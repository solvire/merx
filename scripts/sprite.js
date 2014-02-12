	
	$(document).ready(function(){
	
		// remove link background images since we're re-doing the hover interaction below 
		// (doing it this way retains the CSS default hover states for non-javascript-enabled browsers)
		// we also want to only remove the image on non-selected nav items, so this is a bit more complicated
		$(".nav").children("li").each(function() {
			var current = "nav current-" + ($(this).attr("class"));
			var parentClass = $(".nav").attr("class");
			if (parentClass != current) {
				$(this).children("a").css({backgroundImage:"none"});
			}
		});	


		// create events for each nav item
		attachNavEvents(".nav", "home");
		attachNavEvents(".nav", "covers");
		attachNavEvents(".nav", "gussets");
		attachNavEvents(".nav", "projects");
		attachNavEvents(".nav", "contact");
	

		function attachNavEvents(parent, myClass) {
			$(parent + " ." + myClass).mouseover(function() {
				$(this).append('<div class="nav-' + myClass + '"></div>');
				$("div.nav-" + myClass).css({display:"none"}).fadeIn(400);
			}).mouseout(function() {
				$("div.nav-" + myClass).fadeOut(400, function() {
					$(this).remove();
				});
			}).mousedown(function() {
				$("div.nav-" + myClass).attr("class", "nav-" + myClass + "-click");
			}).mouseup(function() {
				$("div.nav-" + myClass + "-click").attr("class", "nav-" + myClass);
			});
		}



	});


