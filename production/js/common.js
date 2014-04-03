$(window).load(function(){

var minAge = 18;
var minYear = new Date().getFullYear() - minAge;
var maxYear = minYear + 100;

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

});