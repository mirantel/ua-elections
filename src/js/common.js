$(window).load(function(){
	$("#voite").sortable();
	// 	{ revert: "invalid", appendTo: 'body', helper: 'clone',
	// 	start: function(ev, ui){ ui.helper.width($(this).width()); }                    // ensure helper width
	// });

	$(".voit__holder").droppable({ tolerance: 'pointer', hoverClass: 'highlight',
		drop: function(ev, ui){
			var item = ui.draggable;
			if (!ui.draggable.closest('.voit__holder').length) item = item.clone().draggable();// if item was dragged from the source list - clone it
			this.innerHTML = '';                                                        // clean the placeholder
			item.css({ top: 0, left: 0 }).appendTo(this);                                // append item to placeholder
		}
	});
});





// // $(window).load(function(){
// //   $( "#sortable" ).sortable({
// //     revert: true
// //   });
// //   $( "#draggable" ).draggable({
// //     connectToSortable: "#sortable",
// //     helper: "clone",
// //     revert: "invalid"
// //   });
// //   $( "ul, li" ).disableSelection();
// // });
// $(function() {
//     $( "ul.droptrue" ).sortable({
//       connectWith: "ul"
//     });
 
//     $( "ul.dropfalse" ).sortable({
//       connectWith: "ul",
//       dropOnEmpty: false
//     });
 
//     $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
//   });

// $(".voit__item").draggable({
//      revertDuration: 10,
//         helper: function(){
//             var container = $('<div/>').attr('id', 'rankDrag');
//             container.append($(this).clone());
//             return container; 
//         },
//        appendTo: 'body',
//         start: function(e, ui) {
//             $(this).hide();
//             ui.helper.width($('#stack-rank .voit__item').width());
//         },
//         stop: function(e, ui) {
//             $(this).show()
//                 .parents('.voit__holder').removeClass('holder-empty');
//         },
//         drag: function(e, ui) {
//             $(this).parents('.voit__holder').addClass('holder-empty');
//         }
//      });

// $(".voit__holder" ).droppable({
//         activeClass: "ui-holder-highlight",
//         hoverClass: "u-holder-active",
//         tolerance: "pointer",
//         over: function( event, ui ) {
//             rearrange($(this));
//         },
//         out: function( event, ui ) {
//             resetPositions();
//         },
//         drop: function( event, ui ) { 
//             var dragid = ui.draggable.attr("id"),
//                 $this = $(this),
//                 dropid = $this.attr("id"),
//                 isEmpty = $this.hasClass('holder-empty'),
//                 next = $this.parents('.pipeline-rank-row').next().find('.voit__holder'),
//                 isNextEmpty = next.hasClass('holder-empty');

//              if (isEmpty) {
//                  $this.append(ui.draggable);
//                  $this.removeClass('holder-empty');
//                  $this.siblings('.remember-my-position-dropped').html(dragid);
//                  $('.voit__holder').each(function(){
//                      var $this = $(this),
//                          tid = $this.attr('id'),
//                          cid = $this.siblings('.remember-my-position-hover').html();
                     
//                      if (tid == dropid) {
//                          $this.siblings('.remember-my-position-dropped').html(dragid);
//                      } else {
//                          if (cid) {
//                              $this.siblings('.remember-my-position-dropped').html(cid);
//                          }
//                          var hasContent = $this.find('.voit__item').length;
//                          $this.parents('.voit__holder').toggleClass('holder-empty', !hasContent);
//                          $this.siblings('.remember-my-position-hover').html('');
//                      }
//                  });                     
                 
//              } 
//          }
// });


// $("#voite" ).droppable({
//         activeClass: "ui-content-list-highlight",
//         hoverClass: "ui-content-list-active",
//         tolerance: "pointer",
//         drop: function( event, ui ) {
//             $(this).append(ui.draggable);
//             var draggedId = $(ui.draggable).attr('id');
//             $('.pipeline-rank-row').each(function(){
//                 var $this =  $(this),
//                     oldPosition = $this.find('.remember-my-position-dropped').html();   
//                 if (draggedId == oldPosition) {
//                     $this.find('.remember-my-position-dropped').html('');
//                 }
//             });
//         }
// });

// function getTruncatedId(index, element){
//     return element.id.substring(14);
// }

// function rearrange(droppedElement) {
//     var holders = $('.voit__holder'),
//         emptyHolders = [],
//         isRanked = [],
//         cid = droppedElement.attr('id').substring(14),
//         isEmpty = droppedElement.hasClass('holder-empty');
  
//     if(!isEmpty) {
//         emptyHolders = holders.filter('.holder-empty').map(getTruncatedId);
//         isRanked = holders.filter(':not(.holder-empty)').map(getTruncatedId);
//         var nextEmpty = null;
//         var prevEmpty = null;
        
//         for (var i = 0; i < emptyHolders.length; i++) {
//             var currentEmpty = emptyHolders[i];
//             if (currentEmpty > cid) {
//                 nextEmpty = currentEmpty;
//                 i = emptyHolders.length;
//             } else {
//                 prevEmpty = parseInt(currentEmpty);
//             }
//         }
    
//         if (nextEmpty != null) {
//             var moveMe = nextEmpty -1;
//             console.log('---> You are over slot number ' + cid + '. The next empty slot is '+nextEmpty+'.');
            
//             for (var i = moveMe; i >= cid; i--) {

//                 var nextcount = i + 1;
//                 console.log('I moved the contents of slot '+ i +' to slot '+ nextcount+ '.');
//                 var me = $('#pipeline-rank-' + i);
             
//                 var next = me.parents('.pipeline-rank-row').next().find('.voit__holder');
//                 var pid = me.find('.voit__item').attr('id');
                
//                 next.append(me.find('.voit__item'));
//                 next.removeClass('holder-empty');
//                 next.siblings('.remember-my-position-hover').html(pid);
//             }
//              $('#pipeline-rank-' + cid).addClass('holder-empty');
//             console.log('');
//         } else if (prevEmpty != null) {
//             var moveMe = prevEmpty + 1;
//             console.log(prevEmpty);
//             console.log('---> You are over slot number ' + cid + '. The first previous empty slot is '+prevEmpty+'.');
            
//             for (var i = moveMe; i <= cid; i++) {

//                 var prevcount = i - 1;
//                 console.log('I moved the contents of slot '+ i +' to slot '+ prevcount+ '.');
//                 var me = $('#pipeline-rank-' + i);
             
//                 var prev = me.parents('.pipeline-rank-row').prev().find('.voit__holder');
//                 var pid = me.find('.voit__item').attr('id');
                
//                 prev.append(me.find('.voit__item'));
//                 prev.removeClass('holder-empty');
//                 prev.siblings('.remember-my-position-hover').html(pid);
//             }
//              $('#pipeline-rank-' + cid).addClass('holder-empty');
//             console.log('');
//         }
//     }
    
       
// }

// function resetPositions() {
//     $('.voit__holder').each(function(){
//         var $this = $(this),
//             pid = $this.siblings('.remember-my-position-dropped').html();
       
//         if(pid) {
//             $this.append($('#'+pid));
//             $this.removeClass('holder-empty');
//         } else {
//             $this.addClass('holder-empty');
//         }
        
//         $this.siblings('.remember-my-position-hover').html('')
//     });
// }