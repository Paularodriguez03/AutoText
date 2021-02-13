const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const prog = 'I like programming and design...';
let i = 1
let speed = 300 / speedEl.value

writeText();

function writeText() {
    textEl.innerText = prog.slice(0, i)
	/*se llama la constante del elemento text y se le asigana la variblñe que contiene el
	texto a escribir y se usa el metodo .slice para hacer una copia desde el elemento en 
	la posicion 0 hasta el la varible i */
	/*utilizar para escribir el texto dinámico en el documento html */

	i++;
	/*ala varible 1 se le suma 1 */
	
	if(i > prog.length){
      i = 1;
	}
	/*si i es mayor que el largo de el script en la varible prog, entonces 
	i = 1 y esto reinicia el ciclo */
	
	setTimeout(writeText, speed);
	/* El método llama a una función o evalúa una expresión después de un número específico de milisegundos.*/
	/*toma la funcion writetext y la ejecuta a la velocidad que deterjmine el speed */
}

speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
	/* la velocidad dependera del valor ingresado en le imput, el .target es para saber donde 
	se ejecuta y el . value cambia el valor*/
	/*ejemplo si es 1 300/1 = 300 que seria lo mas lento
	pero si 300/ 10 nos da 30 y es el valor mas rapido */
});


