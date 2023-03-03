const sobremi = document.getElementById("sobremi");
const page2 = document.getElementById("page2");
const volver = document.getElementById("volver");

sobremi.addEventListener("click", ()=>{
    page2.classList.add("entrar")
});


volver.addEventListener("click", ()=>{
    page2.classList.remove("entrar")
})