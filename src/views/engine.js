export default {
	render: function(data) {

	var body = document.body;
	data.map( el=> {
		let div = document.createElement('div');
		let h3 = document.createElement('h3');
		let p = document.createElement('p');
		body.appendChild(div);
		div.appendChild(h3);
		div.appendChild(p);
		h3.innerHTML = el.title;
		p.innerHTML = el.body;
		return div;
		}).forEach(function(el){
			body.appendChild(el)
		}
		);
	}
};