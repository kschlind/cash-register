// HINT:
//
// When you press Enter to submit a new cash register entry, the form will 
// actually submit data and reload the page. You don't want to reload the page. It 
// messes up the running tab. So in order to prevent normal form submission, 
// make sure your form submit handler looks like this:
//
	// $('#entry').submit(function(e) {
	// 		e.preventDefault();
	//      .... do other stuff here ....
	// 
	// });





$(function() {

	var total = 0

	$('#entry').submit(function(e) {
		e.preventDefault();

		//get input

		var entry = $('#newEntry').val();
		console.log(entry);
		entry = parseFloat(entry);

		//add decimal places

		var showEntry = entry.toFixed(2);

		//display input

		$('#entries').append('<tr><td></td><td>$' + showEntry + '</td>','</tr>');

		//add to total

		total = total + entry
		console.log(total)

		//maintain two decimal places?	

		var showTotal = total.toFixed(2);

		//display total

		$('#total').html('$' + showTotal);

		//clear input

		$('#newEntry').val('');



	});

});



