$(document).ready(function(){
	var jqxhr = $.ajax( "bot.php" )
	.done(function(meddelande) {
		console.log( "success" );
		console.log( meddelande );
		$("body").text(meddelande);
	})
	.fail(function() {
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
});