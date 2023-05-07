window.onload = function () {
    // 全选
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
    //选中框计算总价
    document.getElementById("choosesum").onclick = function () {
        var sum;
        sum = 0;
        var checkson = document.getElementsByName("user");
        for (var i = 0; i < checkson.length; i++) {
            if (checkson[i].checked) {
                sum += parseInt(checkson[i].value * 100) / 100
            }
        }
        document.getElementById("jiage").innerHTML = "总价：" + sum;
        console.log(sum);
    }


    //修改购物车内数据 
    var lining = document.getElementById("lining")
    var tuitebao = document.getElementById("tuitebao")
    var joinnew1 = sessionStorage.getItem("joinin1");
    var joinnew2 = sessionStorage.getItem("joinin2");
    if (joinnew1 === 'lining') {
        lining.style.display = "block";
    }
    if (joinnew2 === 'tuitebao') {
        tuitebao.style.display = "block";
    }


    // 传送选中的商品栏至结算页面
    document.getElementById("jiesuan-btn").onclick = function () {
        window.location = '../html/结算.html'
        //     var checkson = document.getElementsByName("user");
        //     var goodsid;
        //     goodsid = ""
        //     for (var i = 0; i < checkson.length; i++) {
        //         if (checkson[i].checked) {
        //             goodsid = goodsid + i;
        //             sessionStorage.setItem("goodsid", "choose");
        //         }
        //     }
    }
}


function deletelining() {
    document.getElementById('lining').style.display = "none";
    sessionStorage.setItem("joinin1", "close")
};

function deletetuitebao() {
    document.getElementById('tuitebao').style.display = "none";
    sessionStorage.setItem("joinin2", "close")
}

