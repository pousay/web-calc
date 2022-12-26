var enabled_keys = "-+=1234567890/*Backspace%.";
addEventListener("keydown", (e) => {
    if (enabled_keys.includes(e.key)) {
        // console.log(e.key); 
    }
})

const btn = document.querySelector(".switch_3")
btn.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark")
})