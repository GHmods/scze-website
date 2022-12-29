function sandwitchButtonClick(element) {
        if(element == null) {
                element = document.getElementById("side-menu-button");
        }

        element.classList.toggle("change");

        var menu_bar = document.getElementById("side-menu");
        menu_bar.classList.toggle("open");
        
        var elements = document.getElementById("side-menu-elements");
        elements.classList.toggle("show");
}