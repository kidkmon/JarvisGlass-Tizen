document.addEventListener('tizenhwkey', function (e) {
	if (e.keyName === "back") {
		stopHRM();
		try {
			tizen.application.getCurrentApplication().exit();
		} catch (ignore) {}
	}
});
