function isOnline() {
    return window.navigator.onLine;
}

const feedback = (name, text,photo) => ` 
    <div class="item col-lg-3">
		<img src=${photo} class="img-news">
		<h3>${name}</h3>
		<p>${text}</p>
	</div>
`

function addElementNews(){
	if(isOnline()){
		console.log("Done");
		for(var i = 0; i < JSON.parse(localStorage.getItem("list_news")).length ;i++){
			$('#news').prepend(
		    	feedback(JSON.parse(localStorage.getItem("list_news"))[i].name,
		    		JSON.parse(localStorage.getItem("list_news"))[i].text,
		    		JSON.parse(localStorage.getItem("list_news"))[i].photo)
		  	);
		}
	}
}


