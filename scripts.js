// Definir valor del ticket
const Ingreso = 3000;

// Definir los descuentos
let descDoná = 0.30;
let descEnviá = 0.40;
let descSumate = 0.25;

// Tomar elementos
const formulario = document.getElementById('formulario');
const Opciones = document.getElementById('Opciones');
const Cantidad = document.getElementById('Cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnEnviar = document.getElementById('Enviar');

function calcularPago() {
    let cantidad = parseFloat(Cantidad.value);
    let ingreso = Ingreso; // Use Ingreso directly as it's a constant value
    let descuento = 0;

    // Condition for discount
    switch (Opciones.value) {
        case "doná":
            descuento = descDoná;
            break;
        // Add cases for other options if needed

        default:
            break;
    }

    let total = cantidad * ingreso * (1 - descuento);

    totalPagar.textContent = `Total a Pagar: u$s ${total.toFixed(2)}`;
}

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    calcularPago();
});