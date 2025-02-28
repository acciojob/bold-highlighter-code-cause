function highlight() {
    //Write your code here
 let strongElements = document.querySelectorAll("strong");
    
    // Loop through each <strong> and change the color to green
    strongElements.forEach((strong) => {
        strong.style.color = "rgb(0, 128, 0)";
    });
	


}


function return_normal() {
    //Write your code here
	let strongElements = document.querySelectorAll("strong");
    
    // Loop through each <strong> and change the color back to black
    strongElements.forEach((strong) => {
        strong.style.color = "rgb(0, 0, 0)";
    });

    
}
