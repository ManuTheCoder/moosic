var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var db = JSON.parse(this.responseText);
		var list = document.getElementById('list');
		var content = "";
		db.music.forEach(e => {
			var hash = e.name.toLowerCase().replace(" ", "-");
			content += `
			<a href="#" class="collection-item waves-effect" data-url="${e.url}">
				<b>${e.name}</b>
				<p>${e.author}</p>
			</a>
			`
		})
		list.innerHTML = `<div class="collection">${content}</div>`
	}
};
xhttp.open("GET", "db.json", true);
xhttp.send();