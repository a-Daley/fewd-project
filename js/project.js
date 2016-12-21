
console.log("Does this work?");

var findGradeDescrip = function(restaurantGrade) {
	var restaurantName = $("#search-bar").val();
	var restaurantZip = $("#search-bar-zipcode").val();
	$.getJSON("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=" + restaurantName + "&zipcode=" + restaurantZip , function(data) {
			var restaurantGrade = (data[3]["grade"]);
			if (restaurantGrade === "A") {
				var newGradeDescrip = $("p#a-grade-descrip").text();
				$("p#result-grade-descrip").text(newGradeDescrip);
			} else if (restaurantGrade === "B") {
				var newGradeDescrip = $("p#b-grade-descrip").text();
				$("p#result-grade-descrip").text(newGradeDescrip);} else {
					var newGrade = $("p#c-grade").val();
					var newGradeDescrip = $("p#c-grade-description").val();
					$("p#restaurantGrade").text(newGrade);
					$("p#restauant-grade-descrip").text(newGradeDescrip);

 		}
	})
 }


$("button#search").on("click", function(){
//	console.log("The search button works!");
	var restaurantName = $("#search-bar").val();
	console.log(restaurantName);
	var restaurantZip = $("#search-bar-zipcode").val();
	console.log(restaurantZip);
	$.getJSON("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=" + restaurantName + "&zipcode=" + restaurantZip, function(data) {
			var restaurantBoro = data[0]["boro"];
			console.log(restaurantBoro);
	 		var restaurantLocation = data[0]["boro"] + " (" + data[0]["zipcode"] + ")";
			console.log(restaurantLocation);
			$("h1#restaurant-name").text(restaurantName);
			$("span#restaurant-location").text(restaurantLocation);
			$("span#restaurant-violations").text(data[0]["violation_description"]);
			var restaurantGrade = data[3]["grade"];
			console.log(restaurantGrade);
			$("p#results-grade").text(restaurantGrade);
			findGradeDescrip(restaurantGrade);
			$("p#result-grade-descrip").text
			$("div.results-slider").toggleClass("div.close-slider");
			$(".overlay").css("height", "90%");
		})

})

$(".closebtn").on("click", function(){
	$(".overlay").css("height", "0%");
})






