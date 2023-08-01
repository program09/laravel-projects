const mobile_collapse = document.getElementById("btn_movil");
const aside_mav = document.getElementById("aside_mav");

mobile_collapse.addEventListener("click", function (event) {
	event.stopPropagation(); // Evita que el clic se propague al documento y active el evento de cierre.
	aside_mav.classList.toggle('show_aside');
});

document.addEventListener("click", function (event) {
	// Comprueba si el clic ocurrió fuera de los elementos que deseas afectar.
	if (!aside_mav.contains(event.target) && event.target !== mobile_collapse) {
		aside_mav.classList.remove('show_aside');
	}
});

// Función para agregar el HTML con JavaScript
function agregarHTML() {
	var miContenedor = document.getElementById('miContenedor');
	miContenedor.innerHTML = '<div class="loader-track"><div class="loader-fill"><div class="three-body"><div class="three-body__dot"></div><div class="three-body__dot"></div><div class="three-body__dot"></div></div><h1>Loading...</h1></div></div>';
}

// Evento DOMContentLoaded para llamar a la función cuando la página esté lista
document.addEventListener('DOMContentLoaded', agregarHTML);