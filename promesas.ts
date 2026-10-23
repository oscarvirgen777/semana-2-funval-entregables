/* ------------------------EJERCICIOS--------------------------------- */
/* ==========================================================================
   GUÍA PRÁCTICA: PROMESAS + MÉTODOS DE ARRAYS EN TYPESCRIPT
   - Impares: Para resolver en vivo con el profesor (Demo en clase).
   - Pares: Reto para los estudiantes.
   ========================================================================== */

// ==========================================
// EJERCICIO 1 [PROFESOR]: Filtrar mayores de edad
// ==========================================
/*
Contexto: Simular la consulta de usuarios en una base de datos y filtrar a los mayores de 18 años.
Array simulado:
interface Usuario { id: number; nombre: string; edad: number; }
const dbUsuarios: Usuario[] = [
  { id: 1, nombre: "Carlos", edad: 17 },
  { id: 2, nombre: "Lucía", edad: 22 },
  { id: 3, nombre: "Mateo", edad: 15 },
  { id: 4, nombre: "Valeria", edad: 29 }
];


Misión:
1. Crear una función `obtenerMayoresDeEdad(): Promise<Usuario[]>`.
2. Simular un delay de 1.5s y resolver con los usuarios filtrados con `.filter()`.
3. Consumir la función con async/await manejando errores con try/catch.
*/

// ==========================================
// EJERCICIO 2 [ESTUDIANTE]: Filtrar productos en stock
// ==========================================
/*
Contexto: La tienda necesita mostrar solo los productos disponibles para la venta.
Array simulado:
interface Producto { id: number; nombre: string; stock: number; precio: number; }
const dbProductos: Producto[] = [
  { id: 101, nombre: "Teclado Mecánico", stock: 5, precio: 60 },
  { id: 102, nombre: "Mouse Pad XL", stock: 0, precio: 15 },
  { id: 103, nombre: "Auriculares Gamer", stock: 8, precio: 45 },
  { id: 104, nombre: "Monitor 144Hz", stock: 0, precio: 220 }
];



Misión:
1. Crear una función `obtenerProductosDisponibles(): Promise<Producto[]>`.
2. Delay de 2 segundos. Si hay productos con stock > 0, resolver con `.filter()`. Si el array resultante está vacío, rechazar con error.
3. Consumir con async/await e imprimir la lista en consola.
*/


interface Producto { id: number; nombre: string; stock: number; precio: number; }

const dbProductos: Producto[] = [
  { id: 101, nombre: "Teclado Mecánico", stock: 5, precio: 60 },
  { id: 102, nombre: "Mouse Pad XL", stock: 0, precio: 15 },
  { id: 103, nombre: "Auriculares Gamer", stock: 8, precio: 45 },
  { id: 104, nombre: "Monitor 144Hz", stock: 0, precio: 220 },
];

const obtenerProductosDisponibles = (): Promise<Producto[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const disponibles = dbProductos.filter((p) => p.stock > 0);
      if (disponibles.length === 0) {
        reject(new Error("No hay productos disponibles"));
      } else {
        resolve(disponibles);
      }
    }, 2000);
  });
};

(async () => {
  try {
    const productos = await obtenerProductosDisponibles();
    productos.forEach((p) => console.log(`${p.nombre} - $${p.precio}`));
  } catch (err: any) {
    console.error(err.message);
  }
})();   

// ==========================================
// EJERCICIO 3 [PROFESOR]: Aplicar descuento con .map()
// ==========================================
/*
Contexto: El ecommerce lanza una campaña de 10% de descuento en todos los cursos.
Array simulado:
interface Curso { id: string; titulo: string; precio: number; }
const dbCursos: Curso[] = [
  { id: "c1", titulo: "React desde Cero", precio: 100 },
  { id: "c2", titulo: "Node.js & Backend", precio: 120 },
  { id: "c3", titulo: "TypeScript Avanzado", precio: 80 }
];

Misión:
1. Crear `obtenerCursosConDescuento(): Promise<Curso[]>`.
2. Retornar una nueva lista con los precios reducidos un 10% usando `.map()`.
3. Consumir usando .then() y .catch().
*/

// ==========================================
// EJERCICIO 4 [ESTUDIANTE]: Formatear nombres de clientes
// ==========================================
/*
Contexto: La base de datos guarda nombres en minúsculas y se requiere pasarlos a mayúsculas con un prefijo "CLIENTE VIP:".
Array simulado:
interface Cliente { id: number; nombre: string; correo: string; }
const dbClientes: Cliente[] = [
  { id: 1, nombre: "ana maria", correo: "ana@test.com" },
  { id: 2, nombre: "pedro perez", correo: "pedro@test.com" },
  { id: 3, nombre: "laura gomez", correo: "laura@test.com" }
];

Misión:
1. Crear `obtenerClientesFormateados(): Promise<{ id: number; etiqueta: string; correo: string }[]>`.
2. Usar `.map()` para transformar los datos tras 1 segundo de retraso.
3. Consumir usando async/await.
*/
interface Cliente { id: number; nombre: string; correo: string; }

const dbClientes: Cliente[] = [
  { id: 1, nombre: "ana maria", correo: "ana@test.com" },
  { id: 2, nombre: "pedro perez", correo: "pedro@test.com" },
  { id: 3, nombre: "laura gomez", correo: "laura@test.com" },
];

const obtenerClientesFormateados = (): Promise<{ id: number; etiqueta: string; correo: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formateados = dbClientes.map((c) => ({
        id: c.id,
        etiqueta: `CLIENTE VIP: ${c.nombre.toUpperCase()}`,
        correo: c.correo,
      }));
      resolve(formateados);
    }, 1000);
  });
};

(async () => {
  try {
    const clientes = await obtenerClientesFormateados();
    clientes.forEach((c) => console.log(`${c.etiqueta} | ${c.correo}`));
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 5 [PROFESOR]: Buscar elemento específico con .find()
// ==========================================
/*
Contexto: Buscar a un estudiante por su ID de matrícula. Si no existe, lanzar error 404.
Array simulado:
interface Estudiante { id: number; nombre: string; promedio: number; }
const dbEstudiantes: Estudiante[] = [
  { id: 10, nombre: "Fernando", promedio: 85 },
  { id: 20, nombre: "Camila", promedio: 96 },
  { id: 30, nombre: "Rodrigo", promedio: 78 }
];

Misión:
1. Crear `buscarEstudiantePorId(id: number): Promise<Estudiante>`.
2. Buscar con `.find()`. Si lo encuentra, resolver; si devuelve undefined, rechazar con `Error("404: Estudiante no encontrado")`.
3. Probar con un ID existente y con uno inexistente dentro de un bloque try/catch.
*/

// ==========================================
// EJERCICIO 6 [ESTUDIANTE]: Autenticar usuario con .find()
// ==========================================
/*
Contexto: Simular login verificando username y password en la base de datos.
Array simulado:
interface Cuenta { username: string; token: string; activo: boolean; }
const dbCuentas: Cuenta[] = [
  { username: "kevin_dev", token: "xyz789", activo: true },
  { username: "gamer123", token: "abc456", activo: false },
  { username: "maria_code", token: "qwe123", activo: true }
];

Misión:
1. Crear `login(username: string): Promise<string>`.
2. Buscar la cuenta con `.find()`.
3. Validar: si existe y `activo === true`, resolver retornando el token. Si no existe o está inactivo, rechazar con error de credenciales.
4. Consumir con async/await.
*/
interface Cuenta { username: string; token: string; activo: boolean; }

const dbCuentas: Cuenta[] = [
  { username: "kevin_dev", token: "xyz789", activo: true },
  { username: "gamer123", token: "abc456", activo: false },
  { username: "maria_code", token: "qwe123", activo: true },
];

const login = (username: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cuenta = dbCuentas.find((c) => c.username === username);
      if (cuenta && cuenta.activo) {
        resolve(cuenta.token);
      } else {
        reject(new Error("Credenciales inválidas o cuenta inactiva"));
      }
    }, 800);
  });
};

(async () => {
  try {
    const token = await login("kevin_dev");
    console.log(`Login exitoso. Token: ${token}`);
  } catch (err: any) {
    console.error(err.message);
  }

  try {
    const token = await login("gamer123");
    console.log(`Login exitoso. Token: ${token}`);
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 7 [PROFESOR]: Calcular total acumulado con .reduce()
// ==========================================
/*
Contexto: Calcular la suma total de ventas generadas durante el día.
Array simulado:
interface Venta { id: number; item: string; total: number; }
const dbVentas: Venta[] = [
  { id: 1, item: "Mouse Pad", total: 25 },
  { id: 2, item: "Hub USB-C", total: 40 },
  { id: 3, item: "Cable HDMI", total: 15 },
  { id: 4, item: "Soporte Laptop", total: 35 }
];

Misión:
1. Crear `calcularArqueoCaja(): Promise<number>`.
2. Usar `.reduce()` para sumar el total tras 1.2 segundos.
3. Imprimir el balance final con async/await.
*/

// ==========================================
// EJERCICIO 8 [ESTUDIANTE]: Calcular promedio de notas con .reduce()
// ==========================================
/*
Contexto: Obtener el promedio de notas de un curso para saber si la clase aprobó en promedio (mínimo 60).
Array simulado:
interface Examen { materia: string; nota: number; }
const dbNotas: Examen[] = [
  { materia: "TypeScript", nota: 75 },
  { materia: "React", nota: 55 },
  { materia: "Node", nota: 80 },
  { materia: "Bases de Datos", nota: 62 }
];

Misión:
1. Crear `obtenerPromedioFinal(): Promise<number>`.
2. Sumar las notas con `.reduce()`, calcular el promedio y resolverlo tras 1.5s.
3. Si el promedio resultante es menor a 51, la promesa debe rechazarse advirtiendo "Reprobados".
4. Consumir con try/catch.
*/
interface Examen { materia: string; nota: number; }

const dbNotas: Examen[] = [
  { materia: "TypeScript", nota: 75 },
  { materia: "React", nota: 55 },
  { materia: "Node", nota: 80 },
  { materia: "Bases de Datos", nota: 62 },
];

const obtenerPromedioFinal = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const suma = dbNotas.reduce((acc, e) => acc + e.nota, 0);
      const promedio = suma / dbNotas.length;
      if (promedio < 51) {
        reject(new Error("Reprobados"));
      } else {
        resolve(promedio);
      }
    }, 1500);
  });
};

(async () => {
  try {
    const promedio = await obtenerPromedioFinal();
    console.log(`Promedio del curso: ${promedio}`);
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 9 [PROFESOR]: Validar condiciones con .some() y .every()
// ==========================================
/*
Contexto: Un sistema de envíos debe validar si todos los paquetes fueron inspeccionados y si al menos uno contiene material frágil.
Array simulado:
interface Paquete { codigo: string; inspeccionado: boolean; fragil: boolean; }
const dbPaquetes: Paquete[] = [
  { codigo: "P-01", inspeccionado: true, fragil: false },
  { codigo: "P-02", inspeccionado: true, fragil: true },
  { codigo: "P-03", inspeccionado: true, fragil: false }
];

Misión:
1. Crear `validarDespacho(): Promise<{ listoParaSalir: boolean; requiereCuidadoEspecial: boolean }>`.
2. Usar `.every()` para chequear si todos están inspeccionados y `.some()` para verificar si hay frágiles.
3. Si `listoParaSalir` es false, rechazar la promesa.
*/

// ==========================================
// EJERCICIO 10 [ESTUDIANTE]: Auditoría de servidores con .every()
// ==========================================
/*
Contexto: Monitorear el clúster de servidores. Si todos están online se da el alta; si al menos uno está caído, se levanta una alerta.
Array simulado:
interface Servidor { nodo: string; online: boolean; latenciaMs: number; }
const dbServidores: Servidor[] = [
  { nodo: "US-East", online: true, latenciaMs: 45 },
  { nodo: "SA-Brazil", online: true, latenciaMs: 120 },
  { nodo: "EU-Central", online: false, latenciaMs: 0 }
];

Misión:
1. Crear `verificarCluster(): Promise<string>`.
2. Verificar con `.every()` si todos están online.
3. Si todos están online, resolver con "Clúster 100% operativo".
4. Si al menos uno está offline, rechazar con "Alerta: Servidores caídos detectados".
5. Consumir con async/await y capturar el error.
*/
interface Servidor { nodo: string; online: boolean; latenciaMs: number; }

const dbServidores: Servidor[] = [
  { nodo: "US-East", online: true, latenciaMs: 45 },
  { nodo: "SA-Brazil", online: true, latenciaMs: 120 },
  { nodo: "EU-Central", online: false, latenciaMs: 0 },
];

const verificarCluster = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todosOnline = dbServidores.every((s) => s.online);
      if (todosOnline) {
        resolve("Clúster 100% operativo");
      } else {
        reject(new Error("Alerta: Servidores caídos detectados"));
      }
    }, 1000);
  });
};

(async () => {
  try {
    const estado = await verificarCluster();
    console.log(estado);
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 11 [PROFESOR]: Ordenar rankings con .sort()
// ==========================================
/*
Contexto: Tabla de posiciones de un torneo de esports donde los puntajes deben ordenarse de mayor a menor.
Array simulado:
interface Jugador { tag: string; puntaje: number; }
const dbTorneo: Jugador[] = [
  { tag: "Shadow", puntaje: 1420 },
  { tag: "Viper", puntaje: 2100 },
  { tag: "Phoenix", puntaje: 980 },
  { tag: "Astra", puntaje: 1850 }
];

Misión:
1. Crear `obtenerLeaderboard(): Promise<Jugador[]>`.
2. Crear una copia del array con `[...dbTorneo]` y ordenarlo descendentemente usando `.sort()`.
3. Consumir con async/await e iterar con `.forEach()` para imprimir el podio.
*/

// ==========================================
// EJERCICIO 12 [ESTUDIANTE]: Ordenar inventario por precio con .sort()
// ==========================================
/*
Contexto: Presentar los componentes de hardware del más económico al más costoso.
Array simulado:
interface Hardware { item: string; precioUsd: number; }
const dbHardware: Hardware[] = [
  { item: "GPU RTX 3060", precioUsd: 380 },
  { item: "RAM 16GB DDR4", precioUsd: 45 },
  { item: "SSD NVMe 1TB", precioUsd: 70 },
  { item: "Fuente 750W Gold", precioUsd: 110 }
];

Misión:
1. Crear `obtenerHardwareOrdenado(): Promise<Hardware[]>`.
2. Clonar el array y ordenar de menor a mayor precio.
3. Resolver tras 1 segundo y mostrarlo por consola.
*/
interface Hardware { item: string; precioUsd: number; }

const dbHardware: Hardware[] = [
  { item: "GPU RTX 3060", precioUsd: 380 },
  { item: "RAM 16GB DDR4", precioUsd: 45 },
  { item: "SSD NVMe 1TB", precioUsd: 70 },
  { item: "Fuente 750W Gold", precioUsd: 110 },
];

const obtenerHardwareOrdenado = (): Promise<Hardware[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ordenado = [...dbHardware].sort((a, b) => a.precioUsd - b.precioUsd);
      resolve(ordenado);
    }, 1000);
  });
};

(async () => {
  try {
    const hardware = await obtenerHardwareOrdenado();
    hardware.forEach((h) => console.log(`${h.item} - $${h.precioUsd}`));
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 13 [PROFESOR]: Encadenar .filter() + .map()
// ==========================================
/*
Contexto: Extraer únicamente los correos electrónicos de los empleados del departamento de "IT".
Array simulado:
interface Empleado { nombre: string; depto: string; email: string; }
const dbEmpleados: Empleado[] = [
  { nombre: "Sofía", depto: "Marketing", email: "sofia@funval.org" },
  { nombre: "Jorge", depto: "IT", email: "jorge@funval.org" },
  { nombre: "Elena", depto: "IT", email: "elena@funval.org" },
  { nombre: "Marcos", depto: "Finanzas", email: "marcos@funval.org" }
];

Misión:
1. Crear `obtenerEmailsIT(): Promise<string[]>`.
2. Encadenar `.filter(e => e.depto === "IT")` y luego `.map(e => e.email)`.
3. Consumir y listar los correos con async/await.
*/

// ==========================================
// EJERCICIO 14 [ESTUDIANTE]: Encadenar .filter() + .map() con montos
// ==========================================
/*
Contexto: Filtrar las transacciones aprobadas y convertirlas a un formato de texto: "Cobro #ID: $MONTO".
Array simulado:
interface Transaccion { id: number; monto: number; estado: "aprobada" | "rechazada"; }
const dbTransacciones: Transaccion[] = [
  { id: 501, monto: 120, estado: "aprobada" },
  { id: 502, monto: 450, estado: "rechazada" },
  { id: 503, monto: 85, estado: "aprobada" },
  { id: 504, monto: 300, estado: "rechazada" }
];

Misión:
1. Crear `obtenerRecibosAprobados(): Promise<string[]>`.
2. Filtrar solo las aprobadas y formatear el string resultante.
3. Consumir con async/await.
*/
interface Transaccion14 {
  id: number;
  monto: number;
  estado: "aprobada" | "rechazada";
}

const dbTransacciones14: Transaccion14[] = [
  { id: 501, monto: 120, estado: "aprobada" },
  { id: 502, monto: 450, estado: "rechazada" },
  { id: 503, monto: 85, estado: "aprobada" },
  { id: 504, monto: 300, estado: "rechazada" },
];

const obtenerRecibosAprobados = (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recibos = dbTransacciones14
        .filter((t) => t.estado === "aprobada")
        .map((t) => `Cobro #${t.id}: $${t.monto}`);
      resolve(recibos);
    }, 1000);
  });
};

const main = async (): Promise<void> => {
  try {
    const recibos = await obtenerRecibosAprobados();
    recibos.forEach((r) => console.log(r));
  } catch (err: any) {
    console.error(err.message);
  }
};

main();   
// ==========================================
// EJERCICIO 15 [PROFESOR]: Buscar índice con .findIndex() y actualizar estado
// ==========================================
/*
Contexto: Marcar una tarea pendiente como "completada" en la base de datos simulada.
Array simulado:
interface Tarea { id: number; titulo: string; completada: boolean; }
let dbTareas: Tarea[] = [
  { id: 1, titulo: "Configurar tsconfig", completada: true },
  { id: 2, titulo: "Crear rutas en Express", completada: false },
  { id: 3, titulo: "Conectar con Supabase", completada: false }
];

Misión:
1. Crear `marcarTareaCompletada(id: number): Promise<Tarea>`.
2. Usar `.findIndex()` para ubicar la tarea. Si devuelve -1, rechazar con `Error("Tarea no encontrada")`.
3. Si existe, mutar la propiedad `completada = true` y resolver con la tarea actualizada.
*/

// ==========================================
// EJERCICIO 16 [ESTUDIANTE]: Eliminar elemento con .findIndex() y .splice()
// ==========================================
/*
Contexto: Dar de baja una suscripción de usuario por su correo.
Array simulado:
interface Suscripcion { email: string; plan: string; activa: boolean; }
let dbSuscripciones: Suscripcion[] = [
  { email: "dev1@test.com", plan: "Pro", activa: true },
  { email: "dev2@test.com", plan: "Free", activa: true },
  { email: "dev3@test.com", plan: "Enterprise", activa: true }
];

Misión:
1. Crear `cancelarSuscripcion(email: string): Promise<string>`.
2. Encontrar el índice con `.findIndex()`. Si no existe, rechazar.
3. Si existe, removerlo del array con `.splice()` y resolver con un mensaje de confirmación.
4. Probar eliminando "dev2@test.com" con try/catch.
*/
interface Suscripcion { email: string; plan: string; activa: boolean; }

let dbSuscripciones: Suscripcion[] = [
  { email: "dev1@test.com", plan: "Pro", activa: true },
  { email: "dev2@test.com", plan: "Free", activa: true },
  { email: "dev3@test.com", plan: "Enterprise", activa: true },
];

const cancelarSuscripcion = (email: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const idx = dbSuscripciones.findIndex((s) => s.email === email);
      if (idx === -1) {
        reject(new Error("Suscripción no encontrada"));
      } else {
        dbSuscripciones.splice(idx, 1);
        resolve(`Suscripción de ${email} cancelada correctamente.`);
      }
    }, 800);
  });
};

(async () => {
  try {
    const msg = await cancelarSuscripcion("dev2@test.com");
    console.log(msg);
  } catch (err: any) {
    console.error(err.message);
  }
})();   
// ==========================================
// EJERCICIO 17 [PROFESOR]: Promesa con condición de fallo aleatoria (Simulación de red)
// ==========================================
/*
Contexto: Simular inestabilidad de red (50% de probabilidad de fallo) al cargar un catálogo de libros.
Array simulado:
interface Libro { isbn: string; titulo: string; autor: string; }
const dbLibros: Libro[] = [
  { isbn: "978-1", titulo: "Clean Code", autor: "Robert C. Martin" },
  { isbn: "978-2", titulo: "Refactoring", autor: "Martin Fowler" },
  { isbn: "978-3", titulo: "Design Patterns", autor: "Gang of Four" }
];

Misión:
1. Crear `cargarCatalogo(): Promise<Libro[]>`.
2. En el setTimeout generar un `Math.random()`. Si es mayor a 0.5 resolver; si no, rechazar con `Error("Timeout: La base de datos no responde")`.
3. Consumir con async/await para mostrar cómo reacciona el catch ante caídas aleatorias.
*/

// ==========================================
// EJERCICIO 18 [ESTUDIANTE]: Simulación de pasarela de pago con saldo
// ==========================================
/*
Contexto: Procesar un cobro verificando si el saldo del usuario es suficiente.
Array simulado:
interface Billetera { usuarioId: number; saldo: number; }
const dbBilleteras: Billetera[] = [
  { usuarioId: 101, saldo: 500 },
  { usuarioId: 102, saldo: 45 },
  { usuarioId: 103, saldo: 1200 }
];

Misión:
1. Crear `procesarPago(usuarioId: number, monto: number): Promise<string>`.
2. Buscar al usuario con `.find()`. Si no existe, rechazar con "Usuario inválido".
3. Si el saldo es menor al monto, rechazar con "Saldo insuficiente".
4. Si tiene saldo suficiente, restar el monto y resolver con: "Pago exitoso. Saldo restante: X".
5. Probar con casos de éxito y saldo insuficiente.
*/
interface Billetera { usuarioId: number; saldo: number; }

const dbBilleteras: Billetera[] = [
  { usuarioId: 101, saldo: 500 },
  { usuarioId: 102, saldo: 45 },
  { usuarioId: 103, saldo: 1200 },
];

const procesarPago = (usuarioId: number, monto: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const billetera = dbBilleteras.find((b) => b.usuarioId === usuarioId);
      if (!billetera) {
        reject(new Error("Usuario inválido"));
      } else if (billetera.saldo < monto) {
        reject(new Error("Saldo insuficiente"));
      } else {
        billetera.saldo -= monto;
        resolve(`Pago exitoso. Saldo restante: ${billetera.saldo}`);
      }
    }, 1000);
  });
};

(async () => {
  try {
    const r1 = await procesarPago(101, 200);
    console.log(r1); // "Pago exitoso. Saldo restante: 300"
  } catch (err: any) {
    console.error(err.message);
  }

  try {
    const r2 = await procesarPago(102, 100);
    console.log(r2);
  } catch (err: any) {
    console.error(err.message); // "Saldo insuficiente"
  }

  try {
    const r3 = await procesarPago(999, 50);
    console.log(r3);
  } catch (err: any) {
    console.error(err.message); // "Usuario inválido"
  }
})();   
// ==========================================
// EJERCICIO 19 [PROFESOR]: Métodos combinados (.filter + .reduce)
// ==========================================
/*
Contexto: Calcular el valor monetario total del inventario solo de los productos que pertenecen a la categoría "Tecnología".
Array simulado:
interface Articulo { nombre: string; categoria: string; stock: number; precioUnitario: number; }
const dbArticulos: Articulo[] = [
  { nombre: "Mouse Pad", categoria: "Tecnología", stock: 10, precioUnitario: 15 },
  { nombre: "Silla Ergonómica", categoria: "Muebles", stock: 4, precioUnitario: 180 },
  { nombre: "Monitor 24p", categoria: "Tecnología", stock: 5, precioUnitario: 140 },
  { nombre: "Escritorio L", categoria: "Muebles", stock: 2, precioUnitario: 220 }
];

Misión:
1. Crear `valorizarInventarioTecnologia(): Promise<number>`.
2. Filtrar por categoría "Tecnología" y luego usar `.reduce()` acumulando `(item.stock * item.precioUnitario)`.
3. Resolver tras 1 segundo e imprimir el total calculado.
*/

// ==========================================
// EJERCICIO 20 [ESTUDIANTE]: El gran pipeline de datos (Filter + Sort + Map + Reduce)
// ==========================================
/*
Contexto: Reporte final de calificaciones de la academia.
Array simulado:
interface Alumno { nombre: string; modulo: string; calificacion: number; }
const dbAlumnos: Alumno[] = [
  { nombre: "Marcos", modulo: "TypeScript", calificacion: 92 },
  { nombre: "Luciana", modulo: "React", calificacion: 48 },
  { nombre: "Gabriel", modulo: "TypeScript", calificacion: 85 },
  { nombre: "Daniela", modulo: "TypeScript", calificacion: 58 },
  { nombre: "Esteban", modulo: "TypeScript", calificacion: 74 }
];

Misión:
1. Crear una función `generarReporteTypeScript(): Promise<{ aprobadosOrdenados: string[]; promedioAprobados: number }>`.
2. Filtrar solo los alumnos del módulo "TypeScript" que tengan `calificacion >= 61`.
3. Ordenar a los aprobados de mayor a menor nota con `.sort()`.
4. Obtener un array de solo los nombres formateados: `["1. Marcos (92)", "2. Gabriel (85)", ...]`.
5. Calcular el promedio de calificaciones de los que aprobaron usando `.reduce()`.
6. Resolver la promesa con el objeto resumen y consumirla con async/await manejando posibles errores.
*/
interface Alumno { nombre: string; modulo: string; calificacion: number; }

const dbAlumnos: Alumno[] = [
  { nombre: "Marcos", modulo: "TypeScript", calificacion: 92 },
  { nombre: "Luciana", modulo: "React", calificacion: 48 },
  { nombre: "Gabriel", modulo: "TypeScript", calificacion: 85 },
  { nombre: "Daniela", modulo: "TypeScript", calificacion: 58 },
  { nombre: "Esteban", modulo: "TypeScript", calificacion: 74 },
];

const generarReporteTypeScript = (): Promise<{ aprobadosOrdenados: string[]; promedioAprobados: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 1. Filtrar: módulo TypeScript y calificación >= 61
      const aprobados = dbAlumnos
        .filter((a) => a.modulo === "TypeScript" && a.calificacion >= 61)
        // 2. Ordenar de mayor a menor
        .sort((a, b) => b.calificacion - a.calificacion)
        // 3. Formatear nombres
        .map((a, i) => `${i + 1}. ${a.nombre} (${a.calificacion})`);

      // 4. Calcular promedio
      const aprobadosNotas = dbAlumnos.filter((a) => a.modulo === "TypeScript" && a.calificacion >= 61);
      const promedio = aprobadosNotas.reduce((acc, a) => acc + a.calificacion, 0) / aprobadosNotas.length;

      resolve({ aprobadosOrdenados: aprobados, promedioAprobados: promedio });
    }, 1500);
  });
};

(async () => {
  try {
    const reporte = await generarReporteTypeScript();
    console.log("=== Reporte TypeScript ===");
    reporte.aprobadosOrdenados.forEach((linea) => console.log(linea));
    console.log(`Promedio de aprobados: ${reporte.promedioAprobados}`);
  } catch (err: any) {
    console.error(err.message);
  }
})();   