// --- 1. CLOSURES & SCOPE ---
function createIdGenerator() {
    let count = 0;
    return function () {
        count++;
        return `ID-${count}`;
    };
}
const generateId = createIdGenerator();

// This function runs when the button is clicked
function updateIdDisplay() {
    const display = document.getElementById('id-display');
    // console.log(typeof(display));
    // console.log(typeof(10));
    display.innerText = generateId(); // Using the closure
}

// --- 2. ASYNC / AWAIT ---
async function fetchGlobalData() {
    const statusEl = document.getElementById('api-status');
    try {
        // Simulating the Event Loop waiting for a response
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(fetch);
        const data = await response.json();
        console.log(data);
        statusEl.innerText = `Fetched Task: ${data.title}`;
    } catch (error) {
        statusEl.innerText = "Failed to load data.";
    }
}

// --- 3. HIGHER ORDER FUNCTIONS (MAP/FILTER) ---
const tasks = [
    { text: "Understand Memory Phase", priority: 5 },
    { text: "Fix Syntax Errors", priority: 2 },
    { text: "Master Closures", priority: 4 }
];

function renderTasks() {
    const listEl = document.getElementById('task-list');

    // Using Filter to find hard tasks, then Map to turn them into HTML strings
    const taskHTML = tasks
        .filter(t => t.priority > 3)
        .map(t => `<li class="high-priority">${t.text} (Level: ${t.priority})</li>`)
        .join(''); // Join array into one string

    listEl.innerHTML = taskHTML;
}

// --- INITIALIZE (Execution Phase) ---
fetchGlobalData();
renderTasks();