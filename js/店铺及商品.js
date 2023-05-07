$(function () {

    // 店铺分类
    $('#all').css("color", "#ff7c2d")

    $('#all').click(function () {
        $('#clothes').css("color", "black");
        $('#lives').css("color", "black");
        $('#others').css("color", "black")
        $('#electric').css("color", "black")
        $('#foods').css("color", "black")
        $(this).css("color", "#ff7c2d")
        var types = document.getElementsByClassName('type');
        for (var i = 0; i < types.length; i++) {
            var li = types[i].parentNode;
            var ul = li.parentNode;
            ul.style.display = "block";
        }
    })
    $('#clothes').click(function () {
        $('#lives').css("color", "black");
        $('#others').css("color", "black")
        $('#electric').css("color", "black")
        $('#foods').css("color", "black")
        $('#all').css("color", "black")
        $(this).css("color", "#ff7c2d")
        var types = document.getElementsByClassName('type');
        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML != this.innerHTML) {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "none";
            }
            // }else if(types[i].innerHTML == this.innerHTML){
            //     ul.style.display="block";
            // }
        }
    })
    $('#lives').click(function () {
        $('#clothes').css("color", "black");
        $('#others').css("color", "black")
        $('#electric').css("color", "black")
        $('#foods').css("color", "black")
        $('#all').css("color", "black")

        $(this).css("color", "#ff7c2d")
        var types = document.getElementsByClassName('type');

        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML == this.innerHTML) {
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "block";
            }
        }
        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML != '生活用品类') {
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "none";
            }
        }
    })
    $('#foods').click(function () {
        $('#all').css("color", "black")
        $('#clothes').css("color", "black");
        $('#lives').css("color", "black");
        $(this).css("color", "#ff7c2d")
        $('#others').css("color", "black")
        $('#electric').css("color", "black")

        var types = document.getElementsByClassName('type');
        console.log(types)

        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML == this.innerHTML) {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                console.log(ul)
                ul.style.display = "block";
            }
        }
        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML != '食品类') {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "none";
            }
        }
    })
    $('#electric').click(function () {
        $('#all').css("color", "black")
        $('#clothes').css("color", "black");
        $('#lives').css("color", "black");
        $('#foods').css("color", "black");
        $('#others').css("color", "black")
        $(this).css("color", "#ff7c2d")
        var types = document.getElementsByClassName('type');
        console.log(types)

        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML == this.innerHTML) {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                console.log(ul)
                ul.style.display = "block";
            }
        }
        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML != '电器类') {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "none";
            }
        }
    })
    $('#others').click(function () {
        $('#all').css("color", "black")
        $('#clothes').css("color", "black");
        $('#lives').css("color", "black");
        $('#foods').css("color", "black");
        $('#electric').css("color", "black");


        $(this).css("color", "#ff7c2d")
        var types = document.getElementsByClassName('type');
        console.log(types)

        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML == this.innerHTML) {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                console.log(ul)
                ul.style.display = "block";
            }
        }
        for (var i = 0; i < types.length; i++) {
            if (types[i].innerHTML != '其它类') {
                console.log('yes!')
                var li = types[i].parentNode;
                var ul = li.parentNode;
                ul.style.display = "none";
            }
        }
    })
    // $('.all-things').css("display",'none')
    $('.all-shops').css("display", 'none')
    $('#choice1').css('background-color', '#62887f')
    $('#choice1').css('color', 'orange')

    $('#choice1').click(function () {
        $('.all-things').css("display", 'block')
        $('.all-shops').css("display", 'none')
        $('#choice1').css('color', 'orange')
        $('#choice1').css('background-color', '#62887f')
        $('#choice2').css('color', 'black')
        $('#choice2').css('background-color', '#d7e1df')
        // 显示所有商品
        $(".gang ul h3").css('color', 'black')
        $('.clearfix li').css('display', 'block');
    })
    $('#choice2').click(function () {
        $('.all-shops').css("display", 'block')
        $('.all-things').css("display", 'none')
        $('#choice2').css('color', 'orange')
        $('#choice2').css('background-color', '#62887f')
        $('#choice1').css('color', 'black')
        $('#choice1').css('background-color', '#d7e1df')
    })
    $('#star').click(function () {

        this.style.color = ('#F9D72D');
    })

    $('#first-img').click(function () {
        location.href = "www.baidu.com"
    })


    // 商品展示
    var ul = $('.clearfix')
    for (var i = 1; i < 30; i++) {
        var li = $('<li></li>');
        var img = $('<img class="imgs"/>')
        var div = $('<div class="info"></div>')
        var p = $('<p></p>')
        var span = $('<span></span>')
        var h4 = $('<h4></h4>')
        var info = [
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "1000+购买 ·",
            "正在热销 ·",
            "100+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "2000+购买 ·",
            "正在热销 ·",
            "3000+人正在浏览 ·",
            "正在热销 ·",
            "100+购买 ·",
            "正在热销 ·",
            "30+人正在浏览 ·",
            "正在热销 ·",
        ]
        var price = [
            '114',
            '137',
            '12.80',
            '18.50',
            '36.80',
            '1899.00',
            '129.00',
            '329.90',
            '77.00',
            '1140.00',
            '179.00',
            '159.00',
            '79.00',
            '18.90',
            '69.00',
            '158.00',
            '16.50',
            '49.00',
            '139.00',
            '137.00',
            '39.50',
            '39.90',
            '109.00',
            '80.00',
            '59.50',
            '24.90',
            '5299.00',
            '9798.00',
            '4488.00'
        ]
        var mess = [
            '爆款2022春款新款ins潮牌修身外套男春秋季翻领夹克痞帅休闲上衣',
            '春秋翻领卫衣POLO衫套装男休闲运动裤子搭配长袖T恤痞帅男装一套',
            '塑料小板凳儿童加厚凳子方凳创意浴室宝宝矮凳成人家用可爱防滑凳',
            '指甲刀套装女家用修剪脚趾甲修甲全套护理工具指甲钳眉夹掏耳勺SL',
            '泡脚盆泡脚桶过小腿深桶塑料儿童洗脚足浴盆养生按摩足浴桶熏蒸桶',
            '九阳不用手洗破壁机Y1家用料理多功能加热豆浆旗舰店官方正品Y511',
            '九阳马卡龙榨汁机家用水果小型便携式榨汁杯全自动充电果汁杯C86',
            '九阳电火锅E18家用鸳鸯锅烧烤肉一体多功能锅大容量插电热电煮锅',
            '夏季潮牌五分卫裤男薄款休闲运动短裤宽松中裤潮流外穿冰丝大裤衩',
            'COACH/蔻驰官方 中号女士PVC配皮大容量单肩手提包托特包 4455',
            '微光鸿星尔克男款鞋板鞋秋季新款白色厚底休闲鞋子潮流男士运动鞋',
            'colorkey珂拉琪冰淇淋限定迷你套装礼盒6支唇釉丝绒口红镜面水光',
            '博士伦护理液美瞳半年抛大直径黑色自然隐形眼镜年抛女正品官网TN',
            '宇航员小摆件办公室手机支架小物件送男生生日礼物女生桌面装饰品',
            '真维斯卫衣女春秋季圆领2022新款上衣服潮牌潮流女生潮ins长袖T恤',
            '抗蓝光防辐射近视眼镜女素颜大框疲劳护眼睛透明平光镜',
            '适用苹果13手机壳女快乐富婆透明11/12/13promax液态硅胶12/13mini全包镜头',
            '川岛屋咖啡豆保存罐真空单向排气咖啡粉密封罐奶粉储存收纳储豆罐',
            '诗尼女包2022新款小众原创花朵淑女小清新时尚手提包单肩斜挎包',
            '三只松鼠每日坚果750g30包儿童孕妇健康混合干果仁休闲零食大礼包',
            '三只松鼠手撕面包1000g岩烧乳酪吐司520g食品早餐面包小蛋糕零食',
            '三只松鼠鸭肉麻辣零食大礼包500g*1袋休闲零食鸭脖礼盒网红零食',
            '三只松鼠水果干零食大礼包送女友儿童健康芒果干果脯休闲食品小吃',
            '旺旺旺仔牛奶125ml*24盒装整箱批发营养早餐奶儿童饮料饮品',
            '旺旺大礼包旺仔零食整箱健康营养小吃儿童吃货生日小礼物休闲食品',
            '旺旺冻痴旺仔牛奶碎冰冰海盐芝士似雪糕棒棒冰临期冰淇淋整箱批发',
            '【爆款热销】华为HUAWEI MateBook D 14 笔记本电脑英特尔酷睿版i5/i7 16G+512G',
            '【爆款补货】联想拯救者Y9000P/Y9000K 12代酷睿i7/i5 高端电竞游戏笔记本电脑',
            '【优惠580元】HUAWEI/华为 P50新款智能手机鸿蒙手机直面屏摄影拍照旗舰游戏'
        ]
        div.append(p)
        div.append(span)
        li.append(img)
        li.append(div)
        li.append(h4)
        ul.append(li);
        $('p').eq(i).text(info[i - 1])
        $('h4').eq(i).text(mess[i - 1])
        $('span').eq(i).text('￥' + price[i - 1])

    }
    $('.imgs').eq(0).attr("src", "../html/img/商品主页/2.png")
    $('.imgs').eq(1).attr("src", "../html/img/商品主页/3.png")
    $('.imgs').eq(2).attr("src", "../html/img/商品主页/4.png")
    $('.imgs').eq(3).attr("src", "../html/img/商品主页/5.png")
    $('.imgs').eq(4).attr("src", "../html/img/商品主页/6.png")
    $('.imgs').eq(5).attr("src", "../html/img/商品主页/7.png")
    $('.imgs').eq(6).attr("src", "../html/img/商品主页/8.png")
    $('.imgs').eq(7).attr("src", "../html/img/商品主页/9.png")
    $('.imgs').eq(8).attr("src", "../html/img/商品主页/10.png")
    $('.imgs').eq(9).attr("src", "../html/img/商品主页/11.png")
    $('.imgs').eq(10).attr("src", "../html/img/商品主页/12.png")
    $('.imgs').eq(11).attr("src", "../html/img/商品主页/13.png")
    $('.imgs').eq(12).attr("src", "../html/img/商品主页/14.png")
    $('.imgs').eq(13).attr("src", "../html/img/商品主页/15.png")
    $('.imgs').eq(14).attr("src", "../html/img/商品主页/16.png")
    $('.imgs').eq(15).attr("src", "../html/img/商品主页/17.png")
    $('.imgs').eq(16).attr("src", "../html/img/商品主页/18.png")
    $('.imgs').eq(17).attr("src", "../html/img/商品主页/19.png")
    $('.imgs').eq(18).attr("src", "../html/img/商品主页/20.png")
    $('.imgs').eq(19).attr("src", "../html/img/商品主页/21.png")
    $('.imgs').eq(20).attr("src", "../html/img/商品主页/22.png")
    $('.imgs').eq(21).attr("src", "../html/img/商品主页/23.png")
    $('.imgs').eq(22).attr("src", "../html/img/商品主页/24.png")
    $('.imgs').eq(23).attr("src", "../html/img/商品主页/25.png")
    $('.imgs').eq(24).attr("src", "../html/img/商品主页/26.png")
    $('.imgs').eq(25).attr("src", "../html/img/商品主页/27.png")
    $('.imgs').eq(26).attr("src", "../html/img/商品主页/28.png")
    $('.imgs').eq(27).attr("src", "../html/img/商品主页/29.png")
    $('.imgs').eq(28).attr("src", "../html/img/商品主页/30.png")

    // 商品筛选
    // 服饰
    $('#ul-cloth h3').click(function () {
        var res1 = new RegExp('衣|裤|服|穿')
        $(".gang ul h3").css('color', 'black')
        $(this).css('color', '#b5d1cb')
        var lis = $('.clearfix li')

        for (var i = 0; i < lis.length; i++) {
            var mes = $($('h4').eq(i));
            var li = mes.parent();
            if (res1.test(mes.text())) {

                li.css('display', 'block')
            } else {
                li.css('display', 'none');
            }
        }
    })
    // 生活用品
    $('#ul-live h3').click(function () {
        var res1 = new RegExp('家|用|做|洗|物|肤|口')
        $(".gang ul h3").css('color', 'black')
        $(this).css('color', '#b5d1cb')
        var lis = $('.clearfix li')

        for (var i = 0; i < lis.length; i++) {
            var mes = $($('h4').eq(i));
            var li = mes.parent();
            if (res1.test(mes.text())) {

                li.css('display', 'block')
            } else {
                li.css('display', 'none');
            }
        }
    })
    // 食品
    $('#ul-food h3').click(function () {
        var res1 = new RegExp('吃|食|喝|味|饮|奶')
        $(".gang ul h3").css('color', 'black')
        $(this).css('color', '#b5d1cb')
        var lis = $('.clearfix li')

        for (var i = 0; i < lis.length; i++) {
            var mes = $($('h4').eq(i));
            var li = mes.parent();
            if (res1.test(mes.text())) {

                li.css('display', 'block')
            } else {
                li.css('display', 'none');
            }
        }
    })
    // 电器
    $('#ul-electric h3').click(function () {
        var res1 = new RegExp('电|器|机')
        console.log(res1);
        $(".gang ul h3").css('color', 'black')
        $(this).css('color', '#b5d1cb')
        var lis = $('.clearfix li')

        for (var i = 0; i < lis.length; i++) {
            var mes = $($('h4').eq(i));
            var li = mes.parent();
            if (res1.test(mes.text())) {

                li.css('display', 'block')
            } else {
                li.css('display', 'none');
            }
        }
    })

    // 商品搜索
    $('#search').click(function () {
        var str = $('#tags').val();
        var arry = str.split("");
        console.log(arry)
        var lis = $('.clearfix li')
        lis.css('display', 'none');
        for (var i = 10; i < lis.length; i++) {
            var mes = $($('h4').eq(i));
            var li = mes.parent();
            // li.css('display','none');
            for (var j = 0; j < mes.text().length; j++) {
                for (var k = 0; k < arry.length; k++) {
                    if (mes.text()[j] == arry[k]) {
                        li.css('display', 'block');
                        break;
                    }
                }
            }
        }
    })
})


