
promBtn = $("#subBtn").on('click', function(e) {
	e.preventDefault();
	// making request with a promise ======================
	yay = new Promise(function(res, rej) {
		// newQ = new XMLHttpRequest();
		// newQ.addEventListener("load", function() {
		// 	res(newQ.responseText)
		// })
		// newQ.addEventListener("error", function() {
		// 	rej(new Error('stuff happened'))
		// })

		// newQ.open('post', '/questionAdded');
		// newQ.send();
		request = $.post("/questionAdded", $('.topicForm').serialize())
		request.done(res);
		request.fail(rej);
	})

	// actually using the promise ========================================
	yay.then(function(value) {
		console.log(value);
		$(".topList").append("<li>" + value.subject + "</li>");
		console.log('miricle');
		$('.topicForm').trigger('reset');
	}, function(reason) {
		$(".container").append(reason);
		console.log("no work");
	})
	console.log("yaaaaaay")
})


// p.then(function(value) {
//    // fulfillment
//   }, function(reason) {
//   // rejection
// });