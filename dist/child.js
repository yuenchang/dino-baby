$('#text').html("下一頁");

var socket = io('ws://140.116.177.150:5321');


$(document).ready(function (){
    //這邊加上判斷stage的code
    console.log(document.cookie);
    $('#text').html("請聽" + getCookie('ID') +  "講故事");
  });

socket.on('appear_egg', function(data){
    if (data.ID == getCookie('ID'))
    {
        alert('appear egggg!!!!');
    }
})
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
