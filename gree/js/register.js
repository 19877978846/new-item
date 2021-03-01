var uname = getCookie('name');
if (uname) {
    alert('您已登录，退出后才能进入此界面哦~');
    location.href = './index.html';
}
var ipts = document.querySelector('.register').querySelector('ul').querySelectorAll('input');
var phoneIpt = ipts[0];
var unameIpt = ipts[1];
var pwdIpt1 = ipts[2];
var pwdIpt2 = ipts[3];
var agree = document.querySelector('[type="checkbox"]');
var smt = document.querySelector('[type="submit"]');
for (let i = 0; i < ipts.length; i++) {
    ipts[i].onfocus = function () {
        this.style.color = '#333';
    }
}
var phoneF = false;
phoneIpt.onblur = function () {
    this.style.color = '#757575';
    let reg = /^[1]([3-9])[0-9]{9}$/;
    let i = document.createElement('i');
    if (this.nextElementSibling) {
        this.nextElementSibling.remove();
    }
    if (this.value == '') {
        i.innerHTML = '请输入电话号码！';
        i.className = 'wrong-i';
        phoneF = false;
    } else if (reg.test(this.value)) {
        i.innerHTML = '&#xe61e;';
        i.className = 'correct-i iconfont';
        phoneF = true;
    } else {
        i.innerHTML = '手机号码格式不正确！';
        i.className = 'wrong-i';
        phoneF = false;
    }
    this.parentNode.appendChild(i);
}
var unameF = false;
unameIpt.onblur = function () {
    this.style.color = '#757575';
    let reg = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){2,8}$/;
    let i = document.createElement('i');
    if (this.nextElementSibling) {
        this.nextElementSibling.remove();
    }
    if (this.value == '') {
        i.innerHTML = '请输入用户名！';
        i.className = 'wrong-i';
        unameF = false;
    } else if (reg.test(this.value)) {
        i.innerHTML = '&#xe61e;';
        i.className = 'correct-i iconfont';
        unameF = true;
    } else {
        i.innerHTML = '用户名应由2~8位的汉字、字母或数字组成！';
        i.className = 'wrong-i';
        unameF = false;
    }
    this.parentNode.appendChild(i);
}
var pwdF1 = false;
pwdIpt1.onblur = function () {
    this.style.color = '#757575';
    let reg = /^[\w]{6,12}$/;
    let i = document.createElement('i');
    if (this.nextElementSibling) {
        this.nextElementSibling.remove();
    }
    if (this.value == '') {
        i.innerHTML = '请输入密码！';
        i.className = 'wrong-i';
        pwdF1 = false;
    } else if (reg.test(this.value)) {
        i.innerHTML = '&#xe61e;';
        i.className = 'correct-i iconfont';
        pwdF1 = true;
    } else {
        i.innerHTML = '密码应由6~12位数字字母下划线组成！';
        i.className = 'wrong-i';
        pwdF1 = false;
    }
    this.parentNode.appendChild(i);
}
var pwdF2 = false;
pwdIpt2.onblur = function () {
    this.style.color = '#757575';
    let i = document.createElement('i');
    if (this.nextElementSibling) {
        this.nextElementSibling.remove();
    }
    if (this.value == '') {
        i.innerHTML = '请再次输入密码！';
        i.className = 'wrong-i';
        pwdF2 = false;
    } else if (this.value !== this.parentNode.previousElementSibling.children[1].value) {
        i.innerHTML = '两次输入的密码不一样！';
        i.className = 'wrong-i';
        pwdF2 = false;
    } else {
        i.innerHTML = '&#xe61e;';
        i.className = 'correct-i iconfont';
        pwdF2 = true;
    }
    this.parentNode.appendChild(i);
}
// var thisUrl = location.search;
smt.onclick = function () {
    var phone = phoneIpt.value;
    var uname = unameIpt.value;
    var pwd = pwdIpt2.value;
    if (agree.checked && phoneF && unameF && pwdF1 && pwdF2) {
        (async function () {
            var flag = await promiseAjax({
                url: '../php/register.php',
                // type: 'POST',
                data: `phone=${phone}&uname=${uname}&pwd=${pwd}`
            });
            if (flag == 0) {
                // setCookie('name', uname);
                if (confirm('账号注册成功，快去登录吧')) {
                    location.href = './login.html';
                }
            } else if (flag == 1) {
                alert('所填手机号已被注册！');
            } else {
                alert('所填用户名已被注册！');
            }
        })()
        // }
        return false;
    } else if (!agree.checked) {
        alert('请勾选同意相关协议后再进行操作！');
        return false;
    } else {
        return false;
    }
}