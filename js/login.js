$(function(){
// 滑动
let login = document.getElementById('login');
let register = document.getElementById('register');
let form_box = document.getElementsByClassName('form-box')[0];
let register_box = document.getElementsByClassName('register-box')[0];
let login_box = document.getElementsByClassName('login-box')[0];

register.addEventListener('click', () => {
    form_box.style.transform = 'translateX(80%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})
login.addEventListener('click', () => {
    form_box.style.transform = 'translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})
$('#btn01').click(function(){
    $(location).attr("href","首页.html")
})

// 测试
// $(btn01).click(function(){
//     var a = $(user).val();
//     console.log(a)
//     // console.log($(".user").value)
// })


// // 4-12（字母，数字，下划线）
// var name_re = /^[a-zA-Z0-9_]{4,12}$/;
// // 最少6位，包括至少1个大写字母，1个小写字母，和1个数字，1个特殊字符
// var pwd_re =  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;;
// // 
// var email_re =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
// // 登录格式检验
//  $(btn01).click(function(){
//     if (name_re.test($(user).val()) && pwd_re.test($(pass).val())) {
//         alert("提交成功！");
//      }else if (!name_re.test($(user).val()) || !pwd_re.test($(pass).val())) {
//          alert("格式错误！！！\n用户名必须是4-12位(包括字母、数字、下划线)\n密码最少6位(包括至少1个大写字母，1个小写字母，和1个数字，1个特殊字符)");
//     }
//  })


// // 注册格式检验
// $(btn02).click(function(){
//     if (name_re.test($(username).val()) && pwd_re.test($(password).val()) && email_re.test($(email).val()) && $(password).val()==$(password2.val()) ) {
//         alert("提交成功！");
//      }else if (!name_re.test($(user).val()) || !pwd_re.test($(pass).val()) || !email_re.test($(email).val()) ) {
//          alert("格式错误！！！\n用户名必须是4-12位(包括字母、数字、下划线)\n密码最少6位(包括至少1个大写字母，1个小写字母，和1个数字，1个特殊字符)");
//     }else if((password).val()!== $(password2.val())){
//         alert("两次密码输入不同！！")
//     }
// })
})
