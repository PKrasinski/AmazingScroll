"use strict";

 var asElement = function (element, animation) {
    let self = {};
    let startElement = animation.getStartStyle();
    let finishElement = animation.getFinishStyle();
    self.init = function (){
        self.startStyle();
        self.addEvent();
    };

    self.startStyle = function() {
        for (var i = 0; i < startElement.length; i++) {
            element.style[startElement[i].element] = startElement[i].value;
        }
    };

    self.addEvent = function() {
        window.addEventListener('scroll', function() {
            if ((element.getBoundingClientRect().top / window.innerHeight) < 0.75) {
                for (var i = 0; i < finishElement.length; i++) {
                        element.style[finishElement[i].element] = finishElement[i].value;
                }
            }
        });
    };

    self.init();

    return self;
}

var animationSet = new Set();

var animation = function (data) {
    var self = {},
        startStyle = [],
        finishStyle = [];

    self.init = function () {
        let tab = [];
        tab = data.split(',');
        tab.forEach(function(e) {
            let styleS = {},
                styleF = {};
            styleS["element"] = e.split(":")[0].replace(/\s*/gi, "");
            styleS["value"] = e.split(":")[1].split("->")[0];
            if(styleS.element !== undefined && styleS.value !== undefined)
                startStyle.push(styleS);

            styleF["element"] = e.split(":")[0].replace(/\s*/gi, "");
            styleF["value"] = e.split(":")[1].split("->")[1];
            if(styleF.element !== undefined && styleF.value !== undefined)
                finishStyle.push(styleF);
        });
        animationSet.add(this);
    }

    self.getStartStyle = function() {
        return startStyle;
    }

    self.getFinishStyle = function() {
        return finishStyle;
    }

    self.init();

    return self;
}

if (document.querySelector('[data-as]')) {
    document.querySelectorAll('[data-as]').forEach(function(e) {
        var data = e.dataset.as;
        if ((e.getBoundingClientRect().top / window.innerHeight) >= 1) {
            new asElement(e,new animation(data));
        }
    });
}
