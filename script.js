// write your JS code here


let apha =
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function myFunc(){

	for(let i = 0; i < 26 ; i++)
	{    
		document.querySelector(".container1").innerHTML+= ` <p class="image">${apha[i]}</p>`;
	}
	
}