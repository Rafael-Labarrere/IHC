//Script para acionar Popover - Conforme documentação do Bootstrap
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

//Rotina Para modo noturno
// Seleciona os elementos
const inputCheck = document.querySelector("#modo-noturno");
const body = document.querySelector("body");
const nav = document.querySelector("nav"); // Seleciona a navbar

// Função para mudar o modo
function alternarModo() {
	const modo = inputCheck.checked ? 'dark' : 'light';
	body.setAttribute("data-bs-theme", modo);

	if (modo === 'dark') {
		nav.classList.remove('navbar-light', 'bg-white');
		nav.classList.add('navbar-dark', 'bg-dark');
	} else {
		nav.classList.remove('navbar-dark', 'bg-dark');
		nav.classList.add('navbar-light', 'bg-white');
	}
}

// Clique no checkbox
inputCheck.addEventListener('click', alternarModo);

// Chama a função ao carregar a página para aplicar o modo salvo
window.addEventListener('DOMContentLoaded', alternarModo);