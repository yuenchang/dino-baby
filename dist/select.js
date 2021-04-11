
function GoToParent(){
    key1 = "ID";
    value1 = "andy";
    key2 = "who";
    value2 = "parent";
	key3 = "parent_pwd"
    value3 = "0000"

    var expires = new Date();
    expires.setTime(expires.getTime()+10*60*1000 );//10 min
    document.cookie = key1 + "=" + escape(value1) +"; expires=" + expires.toGMTString();
    document.cookie = key2 + "=" + escape(value2) +"; expires=" + expires.toGMTString();
	document.cookie = key3 + "=" + escape(value3) +"; expires=" + expires.toGMTString();
    document.location.href="parent.html";
}

function GoToChild(){
    key1 = "ID";
    value1 = "andy";
    key2 = "who";
    value2 = "child";

    var expires = new Date();
    expires.setTime(expires.getTime()+10*60*1000 );//10 min
    document.cookie = key1 + "=" + escape(value1) +"; expires=" + expires.toGMTString();
    document.cookie = key2 + "=" + escape(value2) +"; expires=" + expires.toGMTString();
    document.location.href="child.html";
}
