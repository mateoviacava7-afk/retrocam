// Catálogo definitivo alineado con los precios competitivos del mercado argentino
const productos = {
    1: { nombre: "Fujifilm Instax Mini 13", precio: 269000 },
    2: { nombre: "Combo Premium Instax Mini 12", precio: 345000 },
    3: { nombre: "Fujifilm Instax Mini Film (20 Fotos)", precio: 62000 }
};

function comprarProducto(idProducto) {
    const producto = productos[idProducto];
    if (!producto) return;

    // Tus datos reales integrados
    const tuTelefono = "5492255551352"; 
    const tuAlias = "0000003100020513601268";

    // Mensaje automático ultra optimizado
    const mensaje = `¡Hola RetroCam! Quiero aprovechar la oferta y comprar: *${producto.nombre}* por el valor promocional de $${producto.precio} con Envío Gratis.\n\nYa tengo agendado tu alias: *${tuAlias}*.\n¿Me confirmás si tenés cupo de importación libre para pasarte el comprobante de transferencia y mis datos de envío?`;
    
    const urlWhatsapp = `https://wa.me/${tuTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-comprar");
    botones.forEach((boton, indice) => {
        boton.addEventListener("click", () => {
            comprarProducto(indice + 1);
        });
    });
});