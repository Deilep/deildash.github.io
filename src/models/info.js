// export default {
// 	data: [{tag: "h1", body: "Nick"},
// 				 {tag: "img", src: "../../assets/img/dog.jpg"},
// 				 {tag: "p", body: "Want to work"},
// 				 {tag: "ul", body: "5"}, 
// 				 {tag: "li", body: "HTML"},
// 				 {tag: "li", body: "CSS"},
// 				 {tag: "li", body: "JS Base"},
// 				 {tag: "li", body: "JS Advanced"},
// 				 {tag: "li", body: "Front-End Advanced"}
// 			]
// }

let store = {
	data: [],
	init: function(url) {
		return fetch('https://jsonplaceholder.typicode.com/posts')
  		.then(response => response.json())
  		.then(json => store.data = json);
	}
}

export default store;