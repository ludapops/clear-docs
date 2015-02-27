
promBtn = $("#subBtn").on('click', function(e) {
	e.preventDefault();
	// making request with a promise ======================
	yay = new Promise(function(resolve, reject) {
		// newQ = new XMLHttpRequest();
		// newQ.addEventListener("load", function() {
		// 	resolve(newQ.responseText)
		// })
		// newQ.addEventListener("error", function() {
		// 	reject(new Error('stuff happened'))
		// })

		// newQ.open('post', '/questionAdded');
		// newQ.send();
		request = $.post("/questionAdded", $('.topicForm').serialize())
		request.done(function (data) {
			resolve(data);
		});
		request.fail(function (error) {
			reject(error);
		});
	})

	// actually using the promise ========================================
	yay.then(function(value) {
		console.log(value);
		console.log(value.category);
		console.log(value.id);
		var url = '/'+ value.category +'/'+ value.id +'/show';
		$(".topList").append('<li><a href="'+ url +'">' + value.subject +  '</a></li>');
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