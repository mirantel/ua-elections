$(window).load(function(){

$("#voite, .voit__cell").sortable({
  placeholder: "ui-sortable-placeholder",
  connectWith: ".connectedSortable",
  receive: function(event, ui) {
		var $this = $(this);
		if ($this.children('.voit__item').length > 1 && $this.attr('id') != "voite") {
		//console.log('Only one per list!');
			$(ui.sender).sortable('cancel');
		}
	}
});

});
