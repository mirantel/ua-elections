$(window).load(function(){


$("#voite, .voit__cell").sortable({
	placeholder: "ui-sortable-placeholder",
	connectWith: ".js-sortable:not(\".full\")",
	update: function (e, ui) {
		if (($(this).children().length === 1) && ($(this).hasClass("voit__cell"))) {
			$(this).addClass("full");
		}
	},
	remove: function (e, ui) {
		if ($(this).hasClass("voit__cell")) {
			$(this).removeClass("full");
		}
	},
});

});