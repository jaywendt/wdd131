const themeSelector = document.querySelector("select");
function changeTheme() {
    const footer = document.querySelector('footer');
    const existingLogo = footer.querySelector('img');
    const body = document.querySelector('body');
    const newLogo = document.createElement("img");

    if (themeSelector.value === 'dark') {
        body.className = "dark";
        newLogo.setAttribute("src", "https://wdd131.netlify.app/assets/images/byui-logo_white.png")
        if (existingLogo) {
            footer.removeChild(existingLogo);
        }
        footer.appendChild(newLogo);
        }
    else {
        body.className = "";
        footer.removeChild(newLogo);
        footer.appendChild(existingLogo);
    }
}

themeSelector.addEventListener('change', changeTheme);