function Show() {
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
    $('.path2').css("background-color", "#fff");
    $('.path3').css("background-color", "#62887f");

}
function Hide() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
    $('.path2').css("background-color", "#62887f");
    $('.path3').css("background-color", "#fff");
}

// function addnewaddress() {
//     window.location.href = "../html/个人主页.html?div=demo2"
// }

var addnewaddress = function () {
    window.location = "../html/个人主页.html"; //跳转到个人中心页面
    sessionStorage.setItem("func", "test"); //test是接收的值，可自定义
}

function payok() {
    alert("支付成功！")
    window.location = "../html/个人主页.html";
    sessionStorage.setItem("funenter", "enter");
}

function payno() {
    alert("订单待支付！请在15分钟内付款")
    window.location = "../html/个人主页.html";
    sessionStorage.setItem("funenter", "pay");
}

function checktype() {
    var paytype = document.getElementById("comname").value;
    var jifen = document.getElementById("card-cradit");
    var paycode = document.getElementById("pay-code");
    var paystill = document.getElementById("pay-still");
    if (paytype == "员工卡") {
        jifen.style.display = "block";
        paystill.style.display = "block";
    }
    paycode.style.display = "block";
}