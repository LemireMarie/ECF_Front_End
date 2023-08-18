//Pour le fondu sur toute les sections :
const allSections = document.querySelectorAll("section");

const observere = new IntersectionObserver(elements=>{
    elements.forEach(element=>{
        if(element.isIntersecting){ 
            //Lorsque la section est interceptée, 
            //la classe visible lui est ajoutée:          
            element.target.classList.add("visible");
        }
    });
});
//Il faut observer chaque section :
allSections.forEach(section =>{
    observere.observe(section);
});

//Au clic sur le chevron :
//scroller automatiquement de manière fluide en haut de page :

let chevron = document.createElement("p");
    chevron.id = "scroll";
    chevron.textContent = ">";
    document.body.appendChild(chevron);

window.addEventListener("scroll", () => {
    if(window.scrollY > 800){
        chevron.classList.add("visible");
    }
    else{
        chevron.classList.remove("visible");
    }
});

chevron.addEventListener("click", () =>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

//Génération des images au scroll :
const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            //On stock dans la variable balise la balise img :
            let balise = entry.target;
            //Puis on la réutilise dans nos requête :
            let lien = balise.getAttribute("data-src");
            balise.setAttribute("src", lien);
            //Pour supprimer la technique dans l'inspecteur :
            balise.removeAttribute("data-src");
            //Pour arrêter d'observer et alléger le chargement :
            observer.unobserve(balise);
        }
    });
});
images.forEach(image=>{
    observer.observe(image);
});

//Burger menu :
let burger = document.createElement("button");
burger.id = "burger";
let nav = document.querySelector("#nav");
let menu = document.querySelector("ul");

window.addEventListener("resize", () => {
    if(window.innerWidth < 1213){
        burger.classList.add("visible");
        nav.appendChild(burger);
    }
    else{
        burger.remove();
    }
});

window.addEventListener("load", () => {
    if(window.innerWidth < 1213){
        burger.classList.add("visible");
        nav.appendChild(burger);
    }
    else{
        burger.remove();
    }
});

burger.addEventListener("click", () => {
    menu.classList.toggle("visible");
    burger.classList.toggle("active");
});