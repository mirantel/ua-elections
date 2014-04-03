$(window).load(function(){



$("#js-voteData").height($("#js-voteResult").height() - 4);

$("#js-voteData, .vote__cell").sortable({
	placeholder: "ui-sortable-placeholder",
	connectWith: ".js-sortable:not(\".full\")",
	update: function () {
		if (($(this).children().length >= 1) && ($(this).hasClass("vote__cell"))) {
			$(this).addClass("full");
		}
		$(this).children("input.js-votePlace").val($(this).children(".vote__item").attr("id"));
	},
	remove: function () {
		if ($(this).hasClass("vote__cell")) {
			$(this).removeClass("full");
		}
	},
});

$('#js-voteYear').on('input propertychange keyup', function(){
	var minAge = 18;
	var maxYear = new Date().getFullYear() - minAge;
	var minYear = maxYear - 90;
	var myYear = $(this).val();

	if (myYear.length > 3){
		if ((myYear > minYear) && (myYear < maxYear)) {
			$(this).parent().removeClass("has-error").addClass("has-success");
			console.log("success");
		}
		else {
			$(this).parent().removeClass("has-success").addClass("has-error");
			console.log("error");
		}
	}
	else {
		$(this).parent().removeClass("has-success has-error").removeClass("");
	}
});

});