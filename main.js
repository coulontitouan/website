document.addEventListener('DOMContentLoaded', function () {
    function changeOpacity(){
        let html = document.getElementsByTagName('html').item(0)
        html.style.opacity = 1
    }
    setTimeout(changeOpacity,500)
}, false);

var logos = document.getElementsByTagName("object");
for(let logo of logos){
    logo.addEventListener('load', function() {
        for(let item of logo.contentWindow.document.getElementsByTagName('path')){
                item.style.fill = "snow"
            }
        }
    )
}