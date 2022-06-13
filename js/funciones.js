function calcular (parCantidad, parValor){
    let precio = parseFloat(parCantidad * parValor)
    console.log("La tarifa para esta compra es de "+precio+"$")
    alert("La tarifa para esta compra es de "+precio+"$")
}

function generadorAutomatico() {
    productos.push(new Producto("ARIEL", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    productos.push(new Producto("BLANCANIEVES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("DOLORES", "PRINCESA DISNEY", 3200))
    productos.push(new Producto("GROGU / BABY YODA", "STAR WARS", 3500))
    productos.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    productos.push(new Producto("LEIA", "STAR WARS", 3000))
    productos.push(new Producto("MOANA", "PRINCESA DISNEY", 3300))
    productos.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
    productos.push(new Producto("PADME", "STAR WARS", 3000))
    productos.push(new Producto("SERENA", "SAILOR MOON / ANIME", 3000))
    productos.push(new Producto("TIGER", "ANIMALES", 3600))
}

generadorAutomatico()

function generadorDeCarrito() {
    carrito.push(new Producto("AURORA", "PRINCESA DISNEY", 3400))
    carrito.push(new Producto("HIPOPOTAMO", "ANIMALES", 3000))
    carrito.push(new Producto("PADME", "STAR WARS", 3000))
    carrito.push(new Producto("MOZART", "HISTORIA / MUSICA", 4000))
}

generadorDeCarrito()

function calcularCarrito(){
    debugger
    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.table(carrito)
        console.log ("El total de tu compra: ",total,"$")
}

function listarProductos(){
    debugger
    productos.forEach( (producto)=>{
        console.log(producto.nombre)
    })
}

function presupuestarCartel(){
    debugger
    let cartel = prompt("Escribí lo que va a decir tu cartel (nombre o apodo) \n ¡Vamos a calcular su precio! ")
            let letras = cartel.length
            console.log ("Tu cartel tiene ",letras," letras")
            calcular (letras, precioLetra)
}

function busquedaPorNombre(){
    debugger
    let aBuscar = prompt("¡Buscá amigurumis por su nombre! Ingresá el del amigurumi que buscás").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined){
            console.table(resultado)
        }
}

function busquedaPorTipo(){
    debugger
    let aBuscar = prompt("¡Buscá amigurumis según su tipo! Ingresá la categoría del amigurumi").toUpperCase()
    let resultado = productos.filter((producto)=> producto.tipo.includes(aBuscar))
        if (resultado !== undefined){
            console.table(resultado)
        }  
}