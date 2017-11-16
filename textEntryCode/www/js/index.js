var result; 
var words; 
var number;
    
$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
 submitButton()
 });            
});            


function submitButton() {
var text = $('#textinput').val();
alert(random());
}
    //returns a random answer either true or false
    var randomResult = random();
    function random() {
	return !Math.round(Math.random());
        
        
        if (randomResult == true) {
            navigator.notification.beep(1)
        } else { 
        navigator.notification.beep(2);
        }
}



//words = [
  //  "True",
//    "False",
//];
    

//function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 


//returns a random number from 0 - 2 
//function random()
//    {
//        number = Math.floor(Math.random() *3);
//        alert(number);
//        return number;
//    }


//returns random answer from array
//    function answer () {
//    result = words[random()] + " " + 
//        words[random() + 3];
//    return result;
//}