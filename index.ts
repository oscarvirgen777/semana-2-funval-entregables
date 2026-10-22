import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

// 3. Variables del sistema
let systemName: string = "OscarVirgen's System";
let version: number = 77.7;
let userName: string = "OscarPC";

let proximaVersion: number = version + 0.1;

console.log("==================================");
console.log("  " + systemName + "  v" + version);
console.log("  ¡Bienvenido, " + userName + "!");
console.log("  Próxima versión: v" + proximaVersion);
console.log("==================================");

// ==========================================
// 2. Interface
// ==========================================
interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

let tareas: Tarea[] = [
  { id: 1, title: "Estudiar TypeScript", completed: true },
  { id: 2, title: "Hacer ejercicio", completed: false },
  { id: 3, title: "Leer un libro", completed: false },
];

let nextId: number = 4;

// ==========================================
// 4. Arrow functions (miércoles)
// ==========================================
const addTask = (title: string): void => {
  tareas.push({ id: nextId, title: title, completed: false });
  nextId++;
  console.log(`✅ Tarea "${title}" agregada.`);
};

const removeTask = (): void => {
  if (tareas.length === 0) {
    console.log("⚠️ No hay tareas para eliminar.");
    return;
  }
  const eliminada: Tarea = tareas.pop() as Tarea;
  console.log(`🗑️ Tarea eliminada: "${eliminada.title}"`);
};

// ==========================================
// 2. Nuevas funciones (jueves)
// ==========================================
const markCompleted = (id: number): void => {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completed = true;
    console.log(`✅ Tarea "${tarea.title}" marcada como completada.`);
  } else {
    console.log(`❌ No se encontró ninguna tarea con id ${id}.`);
  }
};

const filterPending = (): Tarea[] => {
  return tareas.filter((t) => t.completed === false);
};

const filterCompleted = (): Tarea[] => {
  return tareas.filter((t) => t.completed === true);
};

// ==========================================
// 3. listTasks (desestructuración + map + forEach)
// ==========================================
const listTasks = (): void => {
  if (tareas.length === 0) {
    console.log("📭 No hay tareas registradas.");
    return;
  }

  const tareasFormateadas: string[] = tareas.map((task) => {
    const { id, title, completed } = task;
    const estado = completed ? "completed" : "pending";
    return `[${id}] ${title} - ${estado}`;
  });

  tareasFormateadas.forEach((linea) => {
    console.log(linea);
  });
};

// ==========================================
// 4. Menú
// ==========================================
let salir: boolean = false;

while (!salir) {
  console.log("\n========== MENÚ DE TAREAS ==========");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar como completada");
  console.log("5. Ver solo pendientes");
  console.log("6. Ver solo completadas");
  console.log("7. Salir");
  console.log("====================================");

  const opcion: string = await rl.question("Elige una opción (1-7): ");

  if (opcion === "1") {
    const titulo: string = await rl.question("Título de la tarea: ");
    addTask(titulo);
  } else if (opcion === "2") {
    removeTask();
  } else if (opcion === "3") {
    listTasks();

    /* agregue la opcion para poder ver las tareas que se pueden completar con la funcion foreach  */
} else if (opcion === "4") {
  const pendientes = filterPending();
  if (pendientes.length === 0) {
    console.log("🎉 No hay tareas pendientes para marcar.");
  } else {
    console.log("\n📋 Tareas pendientes:");
    pendientes.forEach((t) => {
      const { id, title } = t;
      console.log(`  [${id}] ${title}`);
    });
    const idStr: string = await rl.question("Ingresá el id de la tarea a completar: ");
    markCompleted(parseInt(idStr));
  }
  } else if (opcion === "5") {
    const pendientes = filterPending();
    if (pendientes.length === 0) {
      console.log("🎉 No hay tareas pendientes.");
    } else {
      pendientes.forEach((t) => {
        const { id, title } = t;
        console.log(`  [${id}] ${title} - pending`);
      });
    }
  } else if (opcion === "6") {
    const completadas = filterCompleted();
    if (completadas.length === 0) {
      console.log("No hay tareas completadas.");
    } else {
      completadas.forEach((t) => {
        const { id, title } = t;
        console.log(`  [${id}] ${title} - completed`);
      });
    }
  } else if (opcion === "7") {
    salir = true;
    console.log("Hasta luego");
  } else {
    console.log("❌ Opción inválida.");
  }
}   

rl.close();

