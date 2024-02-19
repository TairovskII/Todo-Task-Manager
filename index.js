const Addform = document.querySelector(".add");
const tasks = document.querySelector(".task");
const Clearall = document.querySelector(".Clearall");
const messageSpan = document.querySelector(".message-box span");
const searchForm = document.querySelector(".search");

function updateMessage(){
    const textLength = tasks.children.length;
     messageSpan.textContent = `you have ${textLength} pending messages.`;
}
updateMessage();

Addform.addEventListener("submit", event =>{
    event.preventDefault();
    const value = Addform.task.value.trim()

    if(value.length){
        tasks.innerHTML += `<li>
                            <span>${value}</span>
                            <button class="Clear">Clear</button>
                        </li>`
        Addform.reset();
        updateMessage();
    }
});

tasks.addEventListener("click", event => {
    if (event.target.classList.contains("Clear")) {
        event.target.parentElement.remove();
        updateMessage();
    }
});

Clearall.addEventListener("click", event => {
    const Taskitems = tasks.querySelectorAll("li");
    Taskitems.forEach(item =>{
        item.remove();
        updateMessage();
    });
    updateMessage();
});

function filterTask(term){
        Array.from(tasks.children).filter(task =>
        {
        return !task.textContent.toLowerCase().includes(term);
        })
        .forEach(task => {
            task.classList.add("hide");
        });
        Array.from(tasks.children)
        .filter(task => {
            return task.textContent.toLowerCase().includes(term);
        })
        .forEach(task => {
            task.classList.remove("hide");
        });
}

searchForm.addEventListener("keyup", event => {
    const term = searchForm.task.value.trim().toLowerCase();
    console.log(term);
    filterTask(term);
})