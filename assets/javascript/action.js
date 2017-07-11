$(function(){

	makeButtons(topics, 'topicButton', '#buttons-here');

})

	var topics = ["pizza", "cheese", "ice cream", "hamburger"];


	function makeButtons (topics, addClass, addToArea){
			$(addToArea).empty();

				for ( var i = 0; i < topics.length; i++){

				var a = $("<button class='btn btn-success'>");

				a.addClass(addClass);

				a.attr("data-type", topics[i]);

				a.text(topics[i]);

				$(addToArea).append(a);
					
				}
				
	}	


	$(document).on("click", ".topicButton", function(){

		var topic = $(this).data("type");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        	topic + "&api_key=d343830e2923415bbeecd52bfbb47cee&limit=10&rating=g";

        		$.ajax({
        		url: queryURL,
        		method: "GET"
			}).done(function(response){

				console.log(response);

				for (var i = 0; i<response.data.length; i++){
						var newDiv = $("<div class= search-item>");
						var rating = response.data[i].rating;
						var p = $("<p>").text("Rating: "+ rating);

						var moving = response.data[i].images.fixed_height.url;
						var still = response.data[i].images.fixed_height_still.url;

						var image = $("<img>");
						image.attr("src", still);
						// image.attr("data-still", still);
						// image.attr("data-animated", moving);
						// image.attr("data-state", 'still');
						// image.addClass('searchImage');
						newDiv.append(p);
						newDiv.append(image);
						$("topics-here").append(newDiv);

				}

	

	})	


})

     
     
 //      function displayTopics (){ 

 //   			var topic = $(this).attr("data-topic");

 //      		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
 //        		topic + "&api_key=d343830e2923415bbeecd52bfbb47cee&limit=10&rating=g";

 //        	console.log(queryURL);

 //        	$.ajax({
 //        		url: queryURL,
 //        		method: "GET"
	// 		}).done(function(response){

	// 		console.log(response);

		
	// 		var topicsDiv = $("<div class='topic'>");

	// 		var rating = response.rating;

	// 		console.log(rating);

	// 		var p = $("<p>").text("Rating:" + rating);

	// 		topicsDiv.append(p);

	// 		var topicImages = $("<img>");

	// 		topicImages.attr("src", response.data[i].images.fixed_height.url);

	// 		topicsDiv.append(p);
	// 		topicsDiv.append(topicImages);

	// 		$("#topics-here").prepend(topicsDiv);

	// 		})

	// 	}

	// $("button").on("click", displayTopics);	



      

      










