//************************************
//          ANIMATION CONFIG

var animate1 = AmazingScroll({
    start: {
        ratio:0.2,
        dataName:"ask",
        visibleAfterLoading:true
    },
    animation: {
        "fade-left":"left:-300px->0; transition: all 2s",
        "fade-top":"top:-200px->0; opacity:0->1; transition: all 0.5s"
    }
});
var animate2 = AmazingScroll();

//        END ANIMATION CONFIG
//************************************

const codeLine = document.querySelectorAll('.code-line');
[...codeLine].forEach((e) => {
    const code = e.innerHTML;
    const codeTab = code.split("=");
    let content = "";
    for(var i = 0; i < codeTab.length; i++){
        if(i%2 === 0)
            content += "<span class='purple'>" + codeTab[i] + "</span> = ";
        else {
            content += "<span class='blue'>" + codeTab[i] + "<br>";
        }
    }
    e.innerHTML = content;
})
