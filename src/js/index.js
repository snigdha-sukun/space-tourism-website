const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');

const nav_links = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');
const linkHome = document.getElementById('link-home');

const linkDestinations = document.querySelectorAll('.link-destination');
const destination__img = document.getElementById('destination__img');
const destination__name = document.getElementById('destination__name');
const destination__description = document.getElementById('destination__description');
const destination__distance = document.getElementById('destination__distance');
const destination__time = document.getElementById('destination__time');

const linkCrew = document.querySelectorAll('.dot');
const crew__designation = document.getElementById('crew__designation');
const crew__name = document.getElementById('crew__name');
const crew__details = document.getElementById('crew__details');
const crew__img = document.getElementById('crew__img');

const linkTechnology = document.querySelectorAll('.technology__link');
const technology__name = document.getElementById('technology__name');
const technology__description = document.getElementById("technology__description");
const technology__img_mobile = document.getElementById("technology__img_mobile");
const technology__img_desktop = document.getElementById("technology__img_desktop");

menuHamburger.addEventListener("click", () => {
    nav_menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    nav_menu.classList.remove("active");
});

let json_data = [];

fetch('./data.json').then((response) => {
    if (!response.ok) return console.log('Oops! Something went wrong.');
    return response.json();
}).then((data) => {
    json_data = data;
});

function selectSection(selected) {
    for (const link of nav_links) {
        link.classList.remove("active-link");
    }

    for (const section of sections) {
        section.classList.add("hidden");
    }

    selected.classList.add("active-link");
    const sectionName = selected.getAttribute("data-tab");
    document.body.className = "";
    document.body.classList.add(`${sectionName}__background`);
    document.getElementById(sectionName).classList.remove("hidden");

    if (sectionName === "destination") {
        selectDestination(linkDestinations[0]);
    } else if (sectionName === "crew") {
        selectCrew(linkCrew[0]);
    } else if (sectionName === "technology") {
        selectTechnology(linkTechnology[0]);
    }
}

function selectDestination(selectedLink) {
    for (const link of linkDestinations) {
        link.classList.remove("active-destination");
    }

    selectedLink.classList.add("active-destination");
    const index = Number(selectedLink.getAttribute("data-index"));
    const destination = json_data.destinations[index];
    destination__img.src = destination.images.webp;
    destination__name.textContent = destination.name;
    destination__description.textContent = destination.description;
    destination__distance.textContent = destination.distance;
    destination__time.textContent = destination.travel;
}

function selectCrew(selectedLink) {
    for (const link of linkCrew) {
        link.classList.remove("active__crew");
    }

    selectedLink.classList.add("active__crew");
    const index = Number(selectedLink.getAttribute("data-index"));
    const crew = json_data.crew[index];
    crew__designation.textContent = crew.role;
    crew__name.textContent = crew.name;
    crew__details.textContent = crew.bio;
    crew__img.src = crew.images.webp;
}

function selectTechnology(selectedLink) {
    for (const link of linkTechnology) {
        link.classList.remove("active-technology");
    }

    selectedLink.classList.add("active-technology");
    const index = Number(selectedLink.getAttribute("data-index"));
    const technology = json_data.technology[index];
    technology__name.textContent = technology.name;
    technology__description.textContent = technology.description;
    technology__img_mobile.src = technology.images.landscape;
    technology__img_desktop.src = technology.images.portrait;
}

for (const link of nav_links) {
    link.addEventListener("click", () => {
        selectSection(link);
    });
}

for (const link of linkDestinations) {
    link.addEventListener("click", () => {
        selectDestination(link);
    });
}

for (const link of linkCrew) {
    link.addEventListener("click", () => {
        selectCrew(link);
    });
}

for (const link of linkTechnology) {
    link.addEventListener("click", () => {
        selectTechnology(link);
    });
}

selectSection(linkHome);
