
// When DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    animateUsername(animatePassword);
    
    // window.localLinkClicked = false;

//     $("body").on("click", 'a', function() {
//         var url = $(this).attr("href");

//         // check if the link is relative or to your domain
//         if (! /^https?:\/\/./.test(url) || /https?:\/\/ivyhub\.org/.test(url)) {
//             window.localLinkClicked = true;
//         }
//         console.log("URL: " + url);
//     });

//     window.onbeforeunload = function() {
//         if (window.localLinkClicked) {
//             // do stuff
//             console.log("If case");
//         } else {
//             // don't
//             console.log("Else case");
//         }
//     }
    
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