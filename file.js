
// it is only work in console on my computer! please if it does not work, test my code in console, Thanks..

var button = document.getElementById("click-btn");
var input = document.getElementById("input-text");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return list.length;
}

function createList() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 
 
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("X"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteListItem);


	function deleteListItem(){
		li.classList.add("delete")
	}
}


function clickAddBtn(){
	if (inputLength() > 0) { 
		createList();
	}
}

button.addEventListener("click",clickAddBtn);
