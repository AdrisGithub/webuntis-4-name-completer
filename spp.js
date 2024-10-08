function fakeMain(){
	const elements = document.querySelectorAll(".mx_Dropdown");
	
	const words = ["I","B","D","TOAST"];

	for(let i = 0; i< elements.length; i++){
		const elem = elements[i];
		
		const div = document.createElement("div");
		div.innerText = words[i];

		elem.appendChild(div);
	}
}

fakeMain();
