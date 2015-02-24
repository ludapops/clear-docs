promBtn = subBtn.addEventListener('click', function() {
	// making request with a promise ======================
	yay = new Promise(function(res, rej) {
		newQ = new XMLHttpRequest();
		newQ.addEventListener("load", function() {
			res(newQ.responseText)
		})
		newQ.addEventListener("error", function() {
			rej(new Error('stuff happened'))
		})

		newQ.open('post', '/questionAdded');
		newQ.send();
	})

	// actually using the promise ========================================
	yay.then
})