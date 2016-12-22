

$("button#search").on("click", function(){
//	console.log("The search button works!");
	var restaurantName = $("#search-bar").val();
//	console.log(restaurantName);
	var restaurantZip = $("#search-bar-zipcode").val();
//	console.log(restaurantZip);
	var resultsData = $.getJSON("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=" + restaurantName.toUpperCase() + "&zipcode=" + restaurantZip, function(data) {
		data.forEach(function(gradingEvent) {
//		console.log(gradingEvent["action"]); 
	})
		if (_.size(resultsData) == 0) {
			alert("No restaurant found. Try again!");
		}
		var onlyWithGrades = data.filter(function(gradingEvent) {
				return gradingEvent["grade"];})
		console.log(onlyWithGrades);
		if (_.size(onlyWithGrades) == 0) {
			alert("No restaurant found. Try again!");
		}
		var sortedOnlyWithGrades = _.sortBy(onlyWithGrades, function(gradingEvent) {
			return new Date(gradingEvent["grade_date"]);
		})
		console.log(sortedOnlyWithGrades);		
		var lastEntry = _.last(sortedOnlyWithGrades) 
		console.log(lastEntry);
		var restaurantBoro = lastEntry["boro"];
		console.log(restaurantBoro);
		var restaurantLocation = lastEntry["boro"] + " (" + lastEntry["zipcode"] + ")";
		console.log(restaurantLocation);
		$("h1#restaurant-name").text(restaurantName);
		$("span#restaurant-location").text(restaurantLocation);
		$("span#restaurant-violations").text(lastEntry["violation_description"]);
		var restaurantGrade = lastEntry["grade"];
		console.log(restaurantGrade);
		$("p#results-grade").text(restaurantGrade);

		var findGradeDescrip = function(restaurantGrade) {
	// var restaurantInput = $("#search-bar").val();
	// var restaurantName = restaurantInput.toUpperCase()
	// var restaurantZip = $("#search-bar-zipcode").val();
	$.getJSON("https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=" + restaurantName.toUpperCase() + "&zipcode=" + restaurantZip , function(data) {
			var restaurantGrade = (lastEntry["grade"]);
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

		findGradeDescrip(restaurantGrade);
		$("p#result-grade-descrip").text
		$("div.results-slider").toggleClass("div.close-slider");
		$(".overlay").css("height", "90%");
	})
})


 $(".closebtn").on("click", function(){
 	$(".overlay").css("height", "0%");
 })






