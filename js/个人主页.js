window.onload=function(){

    // 设置默认地址
    $('.device').click(function(){
        var a = $("td").children().eq(2);
        a.text('设为默认');
        $(this).html('默认');

    })
    // 取消订单
    $('.cancle').click(function(){
    var div =$(this).parent().parent().parent();
    // console.log(div)
    if(confirm('确定取消该订单？')){
        div.css("display","none");
    }
    })

    // 修改地址
    $('.changeAddr').css("display","none");
    $('#change').click(function(){
        $('.changeAddr').css("display","block");
        $('#cover').css("display","block");
    })
    // 
    $('#times').click(function(){
        $('.changeAddr').css("display","none");
        $('#cover').css("display","none");
        $('.jifendiv').css("display","none")
    })
    $('#times1').click(function(){
        $('.changeAddr').css("display","none");
        $('#cover').css("display","none");
        $('.jifendiv').css("display","none")
    })
    $('#shut').click(function(){
        $('.tel-check').css("display","none")
        $('.bindcard').css("display","none")

        $('#cover').css("display","none");
    })

    // 积分明细
    $('.jifendiv').css("display","none")
    $('#alert-name-btn4').click(function(){
        $('#cover').css("display","block");
        $('.jifendiv').css("display","block")
    })
    // 绑定员工信息
    $('.tel-check').css("display","none")
    $('#sucess').css('display','none')
    $('#alert-name-btn3').click(function(){
        $('#cover').css("display","block");
        $('.tel-check').css("display","block")
    })
    $('#ver-code').click(function(){
        $(this).val('验证码已发送！   ');
        $(this).css('color','red');
    })
    $('#bind').click(function(){
        $('.tel-check').css("display","none");
        $('#cover').css("display","none");
        alert('绑定成功！')
    })

    // 绑定员工卡
    $('.bindcard').css("display","none")
    $('#shut2').click(function(){
        $('.bindcard').css("display","none")
        $('#cover').css("display","none");
    })
    $('#alert-name-btn5').click(function(){
        // alert('1')
        $('#cover').css("display","block");
        $('.bindcard').css("display","block")
    })
    $('#bind2').click(function(){
        $('.bindcard').css("display","none");
        $('#cover').css("display","none");
        alert('绑定成功！')
    })
    
    // 个人资料
    var btn01 = document.getElementById("play1")
    var btn02 = document.getElementById("play2")
    var btn03 = document.getElementById("list1")
    var btn04 = document.getElementById("list2")
    var btn05 = document.getElementById("list3")
    var btn06 = document.getElementById("list4")
    

    var demo1 = document.getElementById('demo1')
    var demo2 = document.getElementById('demo2')
    var demo3 = document.getElementById('demo3')
    var demo4 = document.getElementById('demo4')
    var demo5 = document.getElementById('demo5')
    var demo6 = document.getElementById('demo6')

    var p1 = document.getElementById("part1")
    var p2 = document.getElementById("part2")
    
    var but1 = document.getElementById("but1")
    var but2 = document.getElementById("but2")

    var flag=1
    
    if(flag==1){
        demo2.style.display='none';
        demo4.style.display='none';
        demo5.style.display='none';
        demo6.style.display='none';
        p2.style.display="none";

        flag=0;
        btn01.style.color="#7A9D96"
        btn03.style.color="#7A9D96"

        // btn03.style.backgroundColor="aquamarine";
        
    }
    $('#topper-list1').css('color','white');
   
        but1['onclick']=function(){
            p1.style.display="block";
            p2.style.display="none";
            $('#topper-list1').css('color','white');
            $('#topper-list2').css('color','black');

            console.log("13")
        }
    
        but2['onclick']=function(){
            p1.style.display="none";
            p2.style.display="block";
            $('#topper-list2').css('color','white');
            $('#topper-list1').css('color','black');
            console.log('234')
        }
        but3['onclick']=function(){
            p1.style.display="block";
            p2.style.display="none";
            $('#topper-list1').css('color','white');
            $('#topper-list2').css('color','black');
            console.log("13")
        }
    
        but4['onclick']=function(){
            p1.style.display="none";
            p2.style.display="block";
            $('#topper-list2').css('color','white');
            $('#topper-list1').css('color','black');
            console.log('234')
        }

        // 直接跳转到订单待收货位置
    var funenter = sessionStorage.getItem("funenter");
    if (funenter === 'enter') {
        p1.style.display = "none";
        p2.style.display = "block";
        $('#topper-list2').css('color', 'white');
        $('#topper-list1').css('color', 'black');
        console.log('234')
        demo3.style.display = "none";
        demo5.style.display = "none";
        demo6.style.display = "none";
        demo4.style.display = "block";

        btn04.style.color = "#7A9D96"
        btn03.style.color = "black"
        btn05.style.color = "black"
        btn06.style.color = "black"

    }
    //

   
 

    btn02.onclick=function(){
        demo1.style.display="none";

        demo2.style.display="";

        btn02.style.color="#7A9D96"

        btn01.style.color="black"

        
    }
    btn01.onclick=function(){
        demo2.style.display="none";

        demo1.style.display="";

        btn01.style.color="#7a9d96"

        btn02.style.color="black"

        
    }
    // 直接跳转到收货地址修改位置
    var fun = sessionStorage.getItem("func");
    if (fun === 'test') {
        demo1.style.display="none";

        demo2.style.display="";

        btn02.style.color="#7A9D96"

        btn01.style.color="black"
    }
    //
// 直接跳转到订单待付款位置
var funenter = sessionStorage.getItem("funenter");
if (funenter === 'pay') {
    p1.style.display = "none";
    p2.style.display = "block";
    $('#topper-list2').css('color', 'white');
    $('#topper-list1').css('color', 'black');
    console.log('234')
    demo4.style.display = "none";
    demo5.style.display = "none";
    demo6.style.display = "none";


    demo3.style.display = "";

    btn03.style.color = "#7A9D96"
    btn04.style.color = "black"
    btn05.style.color = "black"
    btn06.style.color = "black"
}
//


   
    btn03.onclick=function(){
        demo4.style.display="none";
        demo5.style.display="none";
        demo6.style.display="none";


        demo3.style.display="";

        btn03.style.color="#7A9D96"
        btn04.style.color="black"
        btn05.style.color="black"
        btn06.style.color="black"
        // btn04.style.backgroundColor="aliceblue"
        // btn05.style.backgroundColor="aliceblue"
        // btn06.style.backgroundColor="aliceblue"

    }
    btn04.onclick=function(){
        demo3.style.display="none";
        demo5.style.display="none";
        demo6.style.display="none";
        demo4.style.display="";

        btn04.style.color="#7A9D96"
        btn03.style.color="black"
        btn05.style.color="black"
        btn06.style.color="black"

    }
    btn05.onclick=function(){
        demo4.style.display="none";
        demo3.style.display="none";
        demo6.style.display="none";
        demo5.style.display="";

        btn05.style.color="#7A9D96"
        btn04.style.color="black"
        btn03.style.color="black"
        btn06.style.color="black"

    }
    btn06.onclick=function(){
        demo4.style.display="none";
        demo5.style.display="none";
        demo3.style.display="none";


        demo6.style.display="";

        btn06.style.color="#7A9D96"
        btn04.style.color="black"
        btn05.style.color="black"
        btn03.style.color="black"

    }




    // 更换头像
	//选择图片随后同步显示
    $(document).ready(function(){
        $('#my-img').click(function(){
            $('#file').click();
        })
    })

    let inp = document.getElementById('file');
    let fileImg = document.getElementById('my-img');
    inp.onchange = function() {
    let inpObj = inp.files[0]; // 拿到上传文件的属性
    // inpObj.size 上传文件的大小（字节数）
    // inpObj.type 上传文件的类型   例如：image/png
    if (inpObj.type !== "image/png") {
        alert('上传的不是png/jpg类型的图片')
    } else if (inpObj.size / 1024 / 1024 > 2) {
        alert('上传的图片超过2MB')
    } else {
        let windowURL = window.URL || window.webkitURL;
        let img = document.getElementById('preview');
        if (inp && inpObj) {
            // createObjectURL(inpObj)  创建一个文件的临时地址
            let dataURL = windowURL.createObjectURL(inpObj);
            fileImg.setAttribute('src', dataURL);
            fileImg.style.opacity = 1
         }
    }
}
// 更改昵称\\
  
    // console.log(inputText)

    $('#alert-name-btn').click(function(){
        var inputText = $('#alert-name').val();
        // console.log(inputText)
        $('alert-name').value=inputText;
        alert('昵称修改成功！')
    })

    var re_phone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

    $('#alert-name-btn2').click(function(){
        var inputText2 = $('#alert-name2').val();
        if(re_phone.test(inputText2)){
        $('alert-name2').value=inputText2;
        alert('手机号修改成功！\n新手机号为'+inputText2)
        }else{
            alert('请输入正确的手机号！')
        }
            // console.log(inputText2)
    })


    var del = $('tr td a:first').text();
    // console.log(del);
    var dela = $('tr td a:first');
    // console.log(dela)
    dela.click(function(){
        alert(dela);
    })

    // 新增地址 
    $('#add-btn').click(function(){
    // 获取省市区
    var province  = $('#province').val();
    var city = $('#city').val();
    var area = $('#area').val();
    var add_info = $('#add_info').val();
    // console.log(province);
    // console.log(city);
    // console.log(area);
    // console.log(add_info);
    // 正则表达式
    var re_code = /^[0-9]\d{5}$/;
    // var re_name = /^[\u4E00-\u9FA5A-Za-z]+$/;
    var re_phone = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    var code = $('#code').val();
    var name = $("#add-name").val();
    var phone = $('#add_phone').val();

    // if(!add_info || !name || ! phone || !code){
    //     alert('信息不能为空！')
    // }
    if(phone && !re_phone.test(phone)){
        alert('请输入正确的手机号！')
    }else{
        // console.log(phone);
    }
    if(re_code.test(code) && re_phone.test(phone) && name){
        // console.log(code);
        alert('新增地址成功!');  

        // 表格增添信息
        var tab = document.getElementById("tab");
        var tbody = tab.tBodies[0];
        var tr = document.createElement("tr")

        createTd("td",name);
        createTd("td",province+" "+city+" "+area);
        createTd("td",add_info);
        createTd("td",code);
        createTd("td",phone);
        createTd("td", "<a href='javascript:void(0);' onclick='deltr(this);'>删除</a> <a href='javascript:;'>修改</a> <a href='javascript:;'>设为默认</a>");

        function createTd(tagName,value){
            var td = document.createElement(tagName);
            td.innerHTML = value;
            tr.appendChild(td);
        }
        
        tbody.appendChild(tr);


    } else if (code && !re_code.test(code)){
            alert("请输入正确的邮政编码！")
        }
        
    })
}
// 删除地址
function deltr(obj) {//obj是形参，接收this的，this代表是a标签
    var table = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;
    if(confirm("你确定要删除该条地址信息？"))
 
    { 
        table.removeChild(tr);
    }
}

// 修改地址
function change(obj){
    var arr=[];
    var table = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;
    var td = obj.parentNode;
    $('table tr').each(function(){
        var res = (this).children('td').eq(1).html();
        arr.push(res);
    })
    alert(arr);
}