var	rating = 0;
console.log(rating);

var folder = 1;
console.log("folder " + folder);


function start(){

randomiser();
document.getElementById("image1").style.display="block";
document.getElementById("image2").style.display="block";
document.getElementById("image3").style.display="block";
document.getElementById("image4").style.display="block";
document.getElementById("image5").style.display="block";
document.getElementById("image6").style.display="block";
document.getElementById("zad").style.display="block";
document.getElementById("start").style.display="none";

}

function randomiser() {
document.getElementById("zad").src=folder + "/zad.jpg"
var mat = Math.random();
console.log(mat); 
if (mat <= 0.166) {
	document.getElementById("image1").src=folder + "/1.jpg"
	document.getElementById("image2").src=folder + "/2.jpg"
	document.getElementById("image3").src=folder + "/3.jpg"
	document.getElementById("image4").src=folder + "/4.jpg"
	document.getElementById("image5").src=folder + "/5.jpg"
	document.getElementById("image6").src=folder + "/6.jpg"
} else if (mat<=0.332) {

	document.getElementById("image1").src=folder + "/2.jpg"
	document.getElementById("image2").src=folder + "/1.jpg"
	document.getElementById("image3").src=folder + "/3.jpg"
	document.getElementById("image4").src=folder + "/4.jpg"
	document.getElementById("image5").src=folder + "/6.jpg"
	document.getElementById("image6").src=folder + "/5.jpg"
} else if (mat<=0.498) {

	document.getElementById("image1").src=folder + "/6.jpg"
	document.getElementById("image2").src=folder + "/3.jpg"
	document.getElementById("image3").src=folder + "/4.jpg"
	document.getElementById("image4").src=folder + "/1.jpg"
	document.getElementById("image5").src=folder + "/5.jpg"
	document.getElementById("image6").src=folder + "/2.jpg"
} else if (mat<=0.664) {

	document.getElementById("image1").src=folder + "/2.jpg"
	document.getElementById("image2").src=folder + "/4.jpg"
	document.getElementById("image3").src=folder + "/6.jpg"
	document.getElementById("image4").src=folder + "/3.jpg"
	document.getElementById("image5").src=folder + "/5.jpg"
	document.getElementById("image6").src=folder + "/1.jpg"
} else if (mat<=0.83) {

	document.getElementById("image1").src=folder + "/6.jpg"
	document.getElementById("image2").src=folder + "/5.jpg"
	document.getElementById("image3").src=folder + "/4.jpg"
	document.getElementById("image4").src=folder + "/3.jpg"
	document.getElementById("image5").src=folder + "/2.jpg"
	document.getElementById("image6").src=folder + "/1.jpg"
} else {

	document.getElementById("image1").src=folder + "/4.jpg"
	document.getElementById("image2").src=folder + "/1.jpg"
	document.getElementById("image3").src=folder + "/3.jpg"
	document.getElementById("image4").src=folder + "/6.jpg"
	document.getElementById("image5").src=folder + "/2.jpg"
	document.getElementById("image6").src=folder + "/5.jpg"
};
};

//console.log(document.getElementById("image1").src);

function end() {
/*document.getElementById("image1").style.display="none";
document.getElementById("image2").style.display="none";
document.getElementById("image3").style.display="none";	
document.getElementById("image4").style.display="none";
document.getElementById("image5").style.display="none";
document.getElementById("image6").style.display="none";
document.getElementById("zad").style.display="none";	

if (rating <= 3) {
	document.getElementById("rating").innerHTML="rating bad";
} else if (rating <= 6) {
	document.getElementById("rating").innerHTML="rating so-so";
}
else if (rating <= 9) {
	document.getElementById("rating").innerHTML="rating good";
} else if (rating <= 12) {
	document.getElementById("rating").innerHTML="rating amazing";
};
    */
    localStorage.setItem("your_res",rating);
    location.href = 'result_page.html';
};

function game(image) {
	if
        (document.getElementById(image).src==="http://localhost:5050/"+ folder + "/1.jpg") {
        
		rating++;
		console.log(rating);
	};
	folder++;
	document.getElementById("rating").innerHTML = rating;
    document.getElementById("folder").innerHTML = folder;
	if (folder<=30) {
		randomiser();
	} else {
		end();
	};
};