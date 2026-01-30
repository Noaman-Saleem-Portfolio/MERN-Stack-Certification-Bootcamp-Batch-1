const input = document.getElementById("toDo");
const btn = document.getElementById("btn");
const list = document.getElementById("todo-list");

btn.addEventListener("click", () => {
    const data = input.value.trim();
    if (!data) return;

    // create todo container
    const todo = document.createElement("div");
    todo.className = "todo";

    // text
    const text = document.createElement("span");
    text.textContent = data;

    // tick button
    const tick = document.createElement("button");
    tick.textContent = "✔";
    tick.addEventListener("click", () => {
        text.classList.toggle("done");
    });

    // cross button
    const cross = document.createElement("button");
    cross.textContent = "✖";
    cross.addEventListener("click", () => {
        todo.remove();
    });

    // assemble
    todo.appendChild(text);
    todo.appendChild(tick);
    todo.appendChild(cross);
    list.appendChild(todo);

    input.value = "";
});
