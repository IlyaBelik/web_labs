window.onload = function(){ 
function isOnline() {
    return window.navigator.onLine;
}

console.log(isOnline());

var list_news = [];

const text = document.getElementById('text');
const caption = document.getElementById('caption') 
const photo = document.getElementById('formForFile')

  alert('News have been successfuly');
  
  text.value=" ";
  caption.value=" ";
}

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#example_picture').attr('src', e.target.result);                                                                                
      }                                                            
    

    reader.readAsDataURL(input.files[0]);
  }
}

$("#formForFile").change(function() {
  readURL(this);
});

const addButton = document.getElementById('sub');
addButton.onclick = onSubmitPress;
}

