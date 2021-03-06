
// When DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    animateUsername(animatePassword);
    
    
});

function animateUsername(callback) {
    var str = ""
    

    var str =  "johndoe@example.com";
    var i = 0, text; 

    (function type() {
        if (i == str.length) 
        {
            return;
        }

        text = str.slice(0, ++i);
        
        var elem = document.getElementById("email");
        elem.focus();
        elem.select();
        elem.setAttribute("value", text);
        moveCursorToEnd(elem);
        setTimeout(type, 100);
    }());
    setTimeout(callback, 3000);
}

function animatePassword() {
    var str = ""
    

    var str =  "password";
    var i = 0, text; 

    (function type() {
        if (i == str.length) 
        {
            return;
        }

        text = str.slice(0, ++i);
        
        var elem = document.getElementById("password");
        elem.focus();
        elem.select();
        elem.setAttribute("value", text);
        moveCursorToEnd(elem);
        setTimeout(type, 100);
    }());
}

function moveCursorToEnd(el) {
    console.log(el.selectionStart)
    el.select();
    el.focus();
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}