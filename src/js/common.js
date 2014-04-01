$(window).load(function(){

$("#voite, .voit-cell").sortable({
  placeholder: "ui-sortable-placeholder",
  connectWith: ".connectedSortable",
  receive: function(event, ui) {
		var $this = $(this);
		if ($this.children('.voit-item').length > 1 && $this.attr('id') != "voite") {
			$(ui.sender).sortable('cancel');
		}
	}
});

});