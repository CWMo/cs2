function toggleMenu(menuControl, menuID) {
    let menuItems = document.getElementById(menuID);
    if (menuControl.textContent.includes("≡")) {
        menuControl.textContent = "⊗";
        menuItems.classList.add("show");
    } else {
        menuControl.textContent = "≡";
        menuItems.classList.remove("show");
    }
}