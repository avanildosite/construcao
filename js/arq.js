
// Wrapped in a function so as to not pollute the global scope.
var activatables = (function () {

// The CSS classes to use for active/inactive elements.
var activeClass = 'active';
var inactiveClass = 'inactive';

var anchors = {}, activates = {};
var regex = /#([A-Za-z][A-Za-z0-9:._-]*)$/;
// Find all anchors (<a href="#something">.)

function imagems(qual){// amplia a imagem
  var img = document.getElementById("imagem");//funcao para selecionar a div 
  img.src = qual;
}


var temp = document.getElementsByTagName('a');
for (var i = 0; i < temp.length; i++) {
	var a = temp[i];

	// Make sure the anchor isn't linking to another page.
	if ((a.pathname != location.pathname &&
		'/' + a.pathname != location.pathname) ||
		a.search != location.search) continue;

	// Make sure the anchor has a hash part.
	var match = regex.exec(a.href);
	if (!match) continue;
	var id = match[1];

	// Add the anchor to a lookup table.
	if (id in anchors)
		anchors[id].push(a);
	else
		anchors[id] = [a];
}

// Adds/removes the active/inactive CSS classes depending on whether the
// element is active or not.
function setClass(elem, active) {
	var classes = elem.className.split(/\s+/);
	var cls = active ? activeClass : inactiveClass, found = false;
	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == activeClass || classes[i] == inactiveClass) {
			if (!found) {
				classes[i] = cls;
				found = true;
			} else {
				delete classes[i--];
			}
		}
	}

	if (!found) classes.push(cls);
	elem.className = classes.join(' ');
}

// Functions for managing the hash.
function getParams() {
	var hash = location.hash || '#';
	var parts = hash.substring(1).split('&');

	var params = {};
	for (var i = 0; i < parts.length; i++) {
		var nv = parts[i].split('=');
		if (!nv[0]) continue;
		params[nv[0]] = nv[1] || null;
	}
	
	return params;
}





function setParams(params) {
	var parts = [];
	for (var name in params) {
		// One of the following two lines of code must be commented out. Use the
		// first to keep empty values in the hash query string; use the second
		// to remove them.
		//parts.push(params[name] ? name + '=' + params[name] : name);
		if (params[name]) parts.push(name + '=' + params[name]);
	}

	location.hash = knownHash = '#' + parts.join('&');
}

// Looks for changes to the hash.
var knownHash = location.hash;
function pollHash() {
	var hash = location.hash;
	if (hash != knownHash) {
		var params = getParams();
		for (var name in params) {
			if (!(name in activates)) continue;
			activates[name](params[name]);
		}
		knownHash = hash;
	}
}
setInterval(pollHash, 250);

function getParam(name) {
	var params = getParams();
	return params[name];
}

function setParam(name, value) {
	var params = getParams();
	params[name] = value;
	setParams(params);
}

// If the hash is currently set to something that looks like a single id,
// automatically activate any elements with that id.
var initialId = null;
var match = regex.exec(knownHash);
if (match) {
	initialId = match[1];
}

// Takes an array of either element IDs or a hash with the element ID as the key
// and an array of sub-element IDs as the value.
// When activating these sub-elements, all parent elements will also be
// activated in the process.
function makeActivatable(paramName, activatables) {
	var all = {}, first = initialId;

	// Activates all elements for a specific id (and inactivates the others.)
	function activate(id) {
		if (!(id in all)) return false;

		for (var cur in all) {
			if (cur == id) continue;
			for (var i = 0; i < all[cur].length; i++) {
				setClass(all[cur][i], false);
			}
		}

		for (var i = 0; i < all[id].length; i++) {
			setClass(all[id][i], true);
		}

		setParam(paramName, id);

		return true;
	}

	activates[paramName] = activate;

	function attach(item, basePath) {
		if (item instanceof Array) {
			for (var i = 0; i < item.length; i++) {
				attach(item[i], basePath);
			}
		} else if (typeof item == 'object') {
			for (var p in item) {
				var path = attach(p, basePath);
				attach(item[p], path);
			}
		} else if (typeof item == 'string') {
			var path = basePath ? basePath.slice(0) : [];
			var e = document.getElementById(item);
			if (!e) throw 'Could not find "' + item + '".'
			path.push(e);

			if (!first) first = item;

			// Store the elements in a lookup table.
			all[item] = path;

			// Attach a function that will activate the appropriate element
			// to all anchors.
			if (item in anchors) {
				// Create a function that will call the 'activate' function with
				// the proper parameters. It will be used as the event callback.
				var func = (function (id) {
					return function (e) {
						activate(id);

						if (!e) e = window.event;
						if (e.preventDefault) e.preventDefault();
						e.returnValue = false;
						return false;
					};
				})(item);

				for (var i = 0; i < anchors[item].length; i++) {
					var a = anchors[item][i];

					if (a.addEventListener) {
						a.addEventListener('click', func, false);
					} else if (a.attachEvent) {
						a.attachEvent('onclick', func);
					} else {
						throw 'Unsupported event model.';
					}

					all[item].push(a);
				}
			}

			return path;
		} else {
			throw 'Unexpected type.';
		}

		return basePath;
	}

	attach(activatables);

	// Activate an element.
	if (first) activate(getParam(paramName)) || activate(first);
}

return makeActivatable;
})();
/* procedimentos para calculos e formato de numeros avanildo */
function somar( number1, number2 ) {
  var DECIMAL = 10;
  return parseInt( number1, DECIMAL ) + parseInt( number2, DECIMAL );
}

function resu()

{ //funcão para calculo de pestação
/*
Para oferecer parcelamento com PayPal:
2 vezes: 5,5%
3 vezes: 6,0%
4 vezes: 6,5%
5 vezes: 7,5%
6 vezes: 8,5%
7 vezes: 9,5%
8 vezes: 10,5%
9 vezes: 11,5%
10 vezes: 12,5%
11 vezes: 13%
12 vezes: 13,5%
+6.4 %
*/
  
var n = document.getElementById('valor');
var n1 = document.getElementById('quantidade');
var valor=n.value;
var parcela= n1.value;
var acre=6;
if (parcela==2){acre=12} 
else if (parcela==3){acre=12} 
else if (parcela==4){acre=14}
else if (parcela==5){acre=14}
else if (parcela==6){acre=15}
else if (parcela==7){acre=16}
else if (parcela==8){acre=17}
else if (parcela==9){acre=19}
else if (parcela==10){acre=20}
else if (parcela==11){acre=21}
else if (parcela==12){acre=22}

else {alert("Digite o numero de parcela, minimo 2 e maximo de 12");
 
 return(0);
}

var po1=(valor*acre)/100;//certo
var va=somar(valor,po1)/parcela;
var fin= parseFloat(somar(valor,po1), 12).toFixed(2);
var res1=parseFloat(va, 10).toFixed(2); 
var tot = res1*parcela; 
 document.getElementById("resultado").innerHTML= "Financiando "+ valor+"<br /> Fica <strong> R$"+res1+" </strong><br /> Em "+parcela+"X<br /> Valor total é de :"+tot+"<br />";
}

function SomenteNumero(e){
 var tecla=(window.event)?event.keyCode:e.which;
 if((tecla>47 && tecla<58)) return true;
 else{
 if (tecla==8 || tecla==0) return true;
 
  else  {alert("Somente números são permitidos");return false}; 
 }
}




