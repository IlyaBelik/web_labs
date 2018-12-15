const feedback = (name, text, date, time) => ` 
    <div class="card-body">
		<p class="card-text">${text}</p>
		<div class="row">
		<div class="date_of_post_in_fans col-md-3">${name}</div><div class="nickname_in_fans col-md-3 col-md-offset">${date}, ${time}</div>
	</div>
`

function isOnline() {
    return window.navigator.onLine;
}

var list_commit = [];

function addElement(){
	if (document.getElementById('inp').value.length == 0){ 
		alert("Error") 
		return;
	}

	const date = new Date();
	if(!isOnline()){
	    var commit = {
	      text: document.getElementById('inp').value
	    }
    
    	list_commit.push(commit);

    	localStorage.setItem("list_commit",JSON.stringify(list_commit));

    	console.log(list_commit);
  	}if(isOnline()){
    	console.log("Added on server");
    	$('#con').prepend(
    	feedback( document.getElementById('inp').value, date.toLocaleDateString(), date.toLocaleTimeString())
  		);
  	}
	
	
  	document.getElementById('inp').value = '';
}
function addElementLocalStorig(){
	const date = new Date();
	if(isOnline()){
		for(var i = 0; i < JSON.parse(localStorage.getItem("list_commit")).length ;i++){
			$('#con').prepend(
		    	feedback(JSON.parse(localStorage.getItem("list_commit"))[i].name,
		    		JSON.parse(localStorage.getItem("list_commit"))[i].text,
		    		date.toLocaleDateString(), date.toLocaleTimeString())
		  	);
		}
	}
}