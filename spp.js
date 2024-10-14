function fakeMain(){

	const submit = document.querySelector(".mx_Dialog_primary");

	if(submit){

		const elements = document.querySelectorAll(".mx_Dropdown");
 
		const words = ["INSERT","YOUR","VALUES","HERE"];
	
		for(let i = 0; i < elements.length; i++){
			elements[i].children[0].click();

			const elem = document.querySelectorAll(".mx_Dropdown_option");
		
			elem.forEach((value) => {
				if(value.innerText.toLowerCase() === words[i].toLowerCase()){
					value.click();
				}
			});
		}
	
		submit.click();
	}
}

setInterval(() => fakeMain(), 500);
