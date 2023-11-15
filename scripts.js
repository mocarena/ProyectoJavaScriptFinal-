// Definir Valor
const Ingreso = 3000;

// Definir los descuentos
let descDoná = 0.30;
let descEnviá = 0.40;
let descSumate = 0.25;

// Tomar elementos
const formulario = document.getElementById('formulario');
const Opciones = document.getElementById('Opciones');
const Cantidad = document.getElementById('cantidadInput');
const totalPagar = document.getElementById('totalAPagar');
const btnSubmit = document.getElementById('btnEnviar');

// Event Listener del botón enviar
function calcularPago() {
    // Calculate total
    let total = Cantidad.value * Ingreso;

    // Condicionar por descuento
    switch (Opciones.value) {
        case "Doná":
            total = total - (total * descDoná);
            break;
        case "Enviá":
            total = total - (total * descEnviá);
            break;
        case "Sumate":
            total = total - (total * descSumate);
        default:
            break;
        }
totalPagar.textContent = `Total a Pagar $${total}`;
}
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    calcularPago()
}
);