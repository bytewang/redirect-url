currentIndex=localStorage["currentIndex"];

if (currentIndex) {
	var k = 0;
	for (var i = 1; i <= currentIndex; i++) {
		var index = "prefix" + i;
		var prefix = localStorage[index];
		
		var f = 1;
		for (var j = 1; j <= k; j++) {
			if (localStorage["prefix" + j] == prefix) {
				f = 0;
				break;
			}
		}
		if (f == 1) {
			k += 1;
			localStorage["prefix" + k] = prefix;
		}
	}
	currentIndex = k;
}
if (currentIndex) {
	for (var i = 1; i <= currentIndex; i++) {
		var index = "prefix" + i;
		var prefix = localStorage[index];
		var x = new Option(prefix, index);
		var y = document.getElementById("prefix");
		y.add(x);
	}
}

function additem() {
	var prefix = document.getElementById("myInput").value;
	if(!currentIndex){
	   currentIndex = 0;
	}
	currentIndex ++;
	localStorage["currentIndex"] = currentIndex;
	var index ="prefix"+currentIndex;
	localStorage[index] = prefix;
	localStorage["prefix"] = prefix;
	//alert(localStorage["prefix"]);
	var status = document.getElementById("status01");
	status.innerHTML = "Options Saved.";
	setTimeout(function() { status.innerHTML = ""; }, 500);
};

function save_options() {
	//var dd = $("prefix").options[$("prefix").selectedIndex].text;
	var dd = document.getElementById("prefix").selectedIndex;
	//alert(dd);
	var prefix = document.getElementById("prefix")[dd].text;
	localStorage["prefix"] = prefix;
	//alert(localStorage["prefix"]);
	var status = document.getElementById("status02");
	status.innerHTML = "Options Saved.";
	setTimeout(function() { status.innerHTML = ""; }, 500);
};

document.querySelector('#save01').addEventListener('click', additem);
document.querySelector('#save02').addEventListener('click', save_options);