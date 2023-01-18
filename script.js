//Sandwitch
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

//Effects
window.addEventListener('load', onLoadEvent);

function onLoadEvent() {
        StartStringEffect("release-text");
        StartStringEffect("release-info");
        StartStringEffect("release-download");
}

function StartStringEffect(element_id) {
        element = document.getElementById(element_id);
        element.style.display = "none";

        var style = getComputedStyle(element);
        let delay = style.getPropertyValue("--t_delay");
        let freq = style.getPropertyValue("--t_freq");
        //StringEffect(element,125.0);
        setTimeout(StringEffect, delay, element, freq);
}
function StringEffect(element,letterFreq=500.0) {
        if(element == null)
                return;
        
        element.style.display = "inline-block";
        let strFinal = element.textContent;
        StringEffect_Process(element,letterFreq,0,strFinal);
}

function StringEffect_Process(element,letterFreq,strNow,strFinal) {
        if(element == null)
                return;
        
        let text = "";

        for(let i=0;i<strNow;i++) {
                text+=strFinal[i];
        }
        element.textContent = text;

        if(strNow<strFinal.length) {
                strNow++;

                let tempFreq = letterFreq;
                if(text[text.length-1]==" ") tempFreq = 0;//Skip Spaces

                setTimeout(StringEffect_Process,tempFreq, element, letterFreq, strNow, strFinal);
        }
}

function close_release_news(element) {
        if(element == null)
                return;
        
        var parent = element.parentNode;
        parent.style.animation = "element-hide 2s forwards";
        setTimeout(function() {
                parent.remove();
        }, 3000);
}