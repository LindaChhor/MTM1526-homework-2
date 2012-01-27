/*
	3 ways to get elements in your HTML
	- document.getElementbyId()
	- document.getElementbyTagName()
	- document.getElementbyIdClassName()
*/

var mylist; 												 
var createList = function(ev) {
	
	mylist = document.createElement('li');
	
	mylist.className = 'thislist'; 						
	
	document.getElementById('ul').appendChild(mylist);						
	
	mylist.innerHTML = document.getElementById('text').value;
};



document.getElementById('create').addEventListener('click', createList, false);

document.documentElement.addEventListener('click', function (ev) {
	
	
	if (ev.target.tagName == 'LI') {
		console.log('here');
		ev.target.className = 'list active';
	}
}, false);

