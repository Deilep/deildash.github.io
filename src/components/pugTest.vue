<template lang="pug">
div
	input(type="file" id="file")
	p {{ file.message }}

	img
	canvas

</template>

<script>	
	export default {
		data() {
			return {
			file: { message: "" }
			}
		},
		mounted() {
	    	let input = document.getElementById("file");
	    	let output = this.file;

	    	input.onchange = function() {
	        let list = this.files;
	        let file = list[0];
	        let reader = new FileReader();

	        reader.onloadend = function(event) {
	          let text = event.target.result;
	          output.message = text;
	        }
	        reader.readAsText(file);
	    	}
	    }
	}
</script>