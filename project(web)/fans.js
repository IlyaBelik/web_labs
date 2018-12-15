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

    
	
	
  
