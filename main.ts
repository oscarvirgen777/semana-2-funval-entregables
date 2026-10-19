/* ==========================================================================
   TALLER PRÁCTICO: FUNDAMENTOS DE TYPESCRIPT (NIVEL BÁSICO A INTERMEDIO)
   Temas: Tipos primitivos, operadores aritméticos, autoasignación,
          comparación y lógica.
   ========================================================================== */

/* --------------------------------------------------------------------------
   EJERCICIO 1: Tipado explícito de una tarjeta de perfil
   Nivel: Básico
   Instrucciones:
   - Declara 'nombreUsuario' de tipo string con el valor "AlexCode".
   - Declara 'seguidores' de tipo number con el valor 250.
   - Declara 'cuentaVerificada' de tipo boolean con el valor true.
   - Muestra las tres variables en un solo console.log().
   -------------------------------------------------------------------------- */
let nombreUsuario: string = "OscarVirgen";
let seguidores: number = 250;
let cuentaVerificada: boolean = true;

console.log(nombreUsuario+" "+ seguidores+" "+ "Cuenta Verificada"+" " +cuentaVerificada);


/* --------------------------------------------------------------------------
   EJERCICIO 2: Calculadora de propinas simple
   Nivel: Básico
   Instrucciones:
   - Declara 'montoCuenta' (number) con valor 80.
   - Declara 'porcentajePropina' (number) con valor 0.15 (representa el 15%).
   - Declara 'montoPropina' (number) calculando 'montoCuenta' multiplicado por 'porcentajePropina'.
   - Declara 'totalPagar' (number) sumando la cuenta y la propina.
   - Imprime 'totalPagar'.
   -------------------------------------------------------------------------- */
let montoCuenta: number = 80;
let porcentajePropina: number = 0.15;
let montoPropina: number = montoCuenta * porcentajePropina;
let totalPagar: number = montoCuenta + montoPropina;

console.log("TOTAL A PAGAR" + " " + totalPagar);


/* --------------------------------------------------------------------------
   EJERCICIO 3: El contador de visitas (Incremento y Decremento)
   Nivel: Básico
   Instrucciones:
   - Declara 'visitasWeb' con let y tipado number, iniciando en 10.
   - Incrementa su valor en 1 usando el operador '++'.
   - Luego, decrementa su valor en 1 usando el operador '--'.
   - Imprime el valor final por consola.
   -------------------------------------------------------------------------- */
let visitasWeb: number = 10;
visitasWeb++;
visitasWeb--;

console.log("VISITAS WEB" +" "+ visitasWeb);
/* --------------------------------------------------------------------------
   EJERCICIO 4: Actualización compuesta de inventario
   Nivel: Básico - Intermedio
   Instrucciones:
   - Declara 'stockProductos' (number) con valor inicial 50.
   - Llega un pedido nuevo: aumenta el stock en 20 usando '+='.
   - Se realiza una venta: disminuye el stock en 8 usando '-='.
   - Una promoción triplica la cantidad restante: multiplica el stock por 3 usando '*='.
   - Imprime el stock final.
   -------------------------------------------------------------------------- */
let stockProductos: number = 50;
stockProductos += 20;   // 70
stockProductos -= 8;    // 62
stockProductos *= 3;    // 186

console.log("EL STOCK FINAL ES DE " + stockProductos);
/* --------------------------------------------------------------------------
   EJERCICIO 5: Detector de números pares (Módulo / Residuo)
   Nivel: Básico - Intermedio
   Instrucciones:
   - Declara 'numeroEvaluado' (number) con el número que quieras (ej: 42).
   - Declara 'esPar' de tipo boolean.
   - Asigna a 'esPar' la comparación que verifique si el residuo de dividir
     'numeroEvaluado' entre 2 es estrictamente igual (===) a 0.
   - Imprime 'esPar'.
   -------------------------------------------------------------------------- */
let numeroEvaluado: number = 42;
let esPar: boolean = numeroEvaluado % 2 === 0;

console.log("El número", numeroEvaluado, "es par:", esPar);
/* --------------------------------------------------------------------------
   EJERCICIO 6: Validador de mayoría de edad y permiso
   Nivel: Intermedio
   Instrucciones:
   - Declara 'edadCliente' (number) con valor 16.
   - Declara 'tienePermisoPadres' (boolean) con valor true.
   - Declara 'puedeIngresar' (boolean).
   - La persona puede ingresar si su edad es mayor o igual (>=) a 18
     O (||) si cuenta con permiso de los padres.
   - Imprime 'puedeIngresar'.
   -------------------------------------------------------------------------- */
let edadCliente: number = 16;
let tienePermisoPadres: boolean = true;
let puedeIngresar: boolean = edadCliente >= 18 || tienePermisoPadres;
console.log("El cliente puede ingresar:", puedeIngresar);
/* --------------------------------------------------------------------------
   EJERCICIO 7: Acceso a cajero automático (Operador AND estricto)
   Nivel: Intermedio
   Instrucciones:
   - Declara 'pinIngresado' (number) con valor 1234.
   - Declara 'pinCorrecto' (number) con valor 1234.
   - Declara 'tarjetaBloqueada' (boolean) con valor false.
   - Declara 'accesoPermitido' (boolean).
   - Solo se permite el acceso si el PIN coincide (===) Y (&&)
     la tarjeta NO está bloqueada (usa la negación '!').
   - Imprime 'accesoPermitido'.
   -------------------------------------------------------------------------- */
let pinIngresado: number = 1234;
let pinCorrecto: number = 1234;
let tarjetaBloqueada: boolean = false;
let accesoPermitido: boolean = pinIngresado === pinCorrecto && !tarjetaBloqueada;

console.log("Acceso al cajero permitido:", accesoPermitido);
/* --------------------------------------------------------------------------
   EJERCICIO 8: Rango de temperatura operativa
   Nivel: Intermedio
   Instrucciones:
   - Declara 'temperaturaActual' (number) con valor 24.
   - Declara 'climaAceptable' (boolean).
   - Asigna a 'climaAceptable' una condición que sea true solo si
     la temperatura es mayor que 18 Y menor que 30.
   - Imprime 'climaAceptable'.
   -------------------------------------------------------------------------- */
let temperaturaActual: number = 24;
let climaAceptable: boolean = temperaturaActual > 18 && temperaturaActual < 30;

console.log("La temperatura actual es aceptable:", climaAceptable);
/* --------------------------------------------------------------------------
   EJERCICIO 9: Carrito con envío gratis
   Nivel: Intermedio
   Instrucciones:
   - Declara 'totalCarrito' (number) con valor 120.
   - Declara 'esMiembroPrime' (boolean) con valor false.
   - Declara 'aplicaEnvioGratis' (boolean).
   - El envío es gratis si el total gastado es mayor o igual a 100
     O (||) si el usuario es miembro prime.
   - Imprime 'aplicaEnvioGratis'.
   -------------------------------------------------------------------------- */
let totalCarrito: number = 120;
let esMiembroPrime: boolean = false;
let aplicaEnvioGratis: boolean = totalCarrito >= 100 || esMiembroPrime;

console.log("El carrito aplica envío gratis:", aplicaEnvioGratis);
/* --------------------------------------------------------------------------
   EJERCICIO 10: Validación de formulario de registro
   Nivel: Intermedio
   Instrucciones:
   - Declara 'longitudPassword' (number) con valor 8.
   - Declara 'aceptoTerminos' (boolean) con valor true.
   - Declara 'tieneEmailInvalido' (boolean) con valor false.
   - Declara 'formularioValido' (boolean).
   - El formulario es válido si:
     1. La longitud de la contraseña es mayor o igual a 8, Y
     2. El usuario aceptó los términos, Y
     3. NO tiene un email inválido (usa '!').
   - Imprime 'formularioValido'.
   -------------------------------------------------------------------------- */
let longitudPassword: number = 8;
let aceptoTerminos: boolean = true;
let tieneEmailInvalido: boolean = false;
let formularioValido: boolean = longitudPassword >= 8 && aceptoTerminos && !tieneEmailInvalido;

console.log("El formulario es válido:", formularioValido);
/* ==========================================================================
   RETO INTEGRADOR: Batalla por Turnos (Primera Clase TypeScript)
   
   Instrucciones:
   Escribe el código necesario debajo de cada indicación respetando
   el tipado explícito (number, boolean, string) y los operadores requeridos.
   ========================================================================== */

// 1. Declara la variable 'puntosDeVida' de tipo number con un valor inicial de 100.
//    (Usa 'let' ya que su valor cambiará a lo largo del combate).

let puntosDeVida: number = 100;

// 2. Declara la variable 'tieneEscudo' de tipo boolean con el valor true.

let tieneEscudo: boolean = true;
// 3. ¡Ataque enemigo! Resta 25 puntos de vida usando el operador de autoasignación '-='.
puntosDeVida -= 25;
// 4. El personaje toma una poción mínima: incrementa 'puntosDeVida' en 1 usando '++'.
puntosDeVida++;
// 5. Declara una variable 'sigueVivo' de tipo boolean que evalúe si 'puntosDeVida' es mayor que 0.
let sigueVivo: boolean = puntosDeVida > 0;
// 6. Declara una variable 'alertaPeligro' de tipo boolean.
//    Debe ser true solo si 'puntosDeVida' es menor a 50 Y el jugador NO tiene escudo (usa && y !).
let alertaPeligro: boolean = puntosDeVida < 50 && !tieneEscudo;
// 7. Imprime en consola todos los resultados para verificar el estado final del jugador:
//    - Puntos de vida actuales
console.log("Puntos de vida actuales:", puntosDeVida);
//    - Si tiene escudo activo
console.log("Escudo activo:", tieneEscudo);
//    - Si sigue vivo
console.log("Sigue vivo:", sigueVivo);
//    - Si está en alerta de peligro
console.log("Alerta de peligro:", alertaPeligro);
