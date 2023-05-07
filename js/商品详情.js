var liningjoin = function () {
    window.location = "../html/购物车.html"; //跳转到购物车页面
    sessionStorage.setItem("joinin1", "lining"); //test是接收的值，可自定义
}

var tuitebaojoin = function () {
    window.location = "../html/购物车.html"; //跳转到购物车页面
    sessionStorage.setItem("joinin2", "tuitebao"); //test是接收的值，可自定义
}

var tuitebaojoin = function () {
    window.location = "../html/购物车.html"; //跳转到购物车页面
    sessionStorage.setItem("joinin2", "tuitebao"); //test是接收的值，可自定义
}

$(function () {
    $('#btn01').css('color', 'rgb(122,157,150)');
    $('#btn01').css('background-color', '#fff');
    document.getElementById('evalu').style.display = "none";
    $('#btn01').click(function () {
        $('#evalu').css('display', 'none');
        $('#info').css('display', 'block');
        document.getElementById('info').style.display = "";
        $('#btn01').css('color', 'rgb(122,157,150)');
        $('#btn02').css('color', 'white');
        $('#btn01').css('background-color', '#fff');
        $('#btn02').css('background-color', 'rgb(122,157,150)');
        // $('#btn01').css('boder-color','red')


    })
    $('#btn02').click(function () {
        document.getElementById('evalu').style.display = "";
        document.getElementById('info').style.display = "none";
        $('#btn01').css('color', 'white');
        $('#btn02').css('color', 'rgb(122,157,150)');
        $('#btn01').css('background-color', 'rgb(122,157,150)');
        $('#btn02').css('background-color', '#fff');

    })
    document.getElementById("check-box").onclick = function () {
        var checked = document.getElementById("check-box").checked;
        var checkson = document.getElementsByName("user");
        if (checked) {
            for (var i = 0; i < checkson.length; i++) {
                checkson[i].checked = true;
            }
        } else {
            for (var i = 0; i < checkson.length; i++) {
                checkson[i].checked = false;
            }
        }
    }

})





