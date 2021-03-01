var uname = getCookie('name');
if (uname) {
    alert('您已登录，退出后才能进入此界面哦~');
    location.href = './index.html';
}
var thisUrl = location.search;
//如果是列表页或者详情页，则需另外定义一个变量来接收传递的参数
var parameter;
if (thisUrl.indexOf('?') > -1) {
    parameter = thisUrl.split('=')[2];
}
var nameIpt = document.querySelector('[name="uname"]');
var pwdIpt = document.querySelector('[name="password"]');
var smt = document.querySelector('[type="submit"]');
nameIpt.onfocus = function () {
    this.style.color = '#333';
}
pwdIpt.onfocus = function () {
    this.style.color = '#333';
}
nameIpt.onblur = function () {
    this.style.color = '#757575';
}
pwdIpt.onblur = function () {
    this.style.color = '#757575';
}
smt.onclick = function () {
    var uname = nameIpt.value;
    var pwd = pwdIpt.value;
    if (thisUrl) {
        var newUrl = thisUrl.split('=')[1] + (parameter ? '=' + parameter : '');
        (async function () {
            var flag = await promiseAjax({
                url: '../php/login.php',
                // type: 'POST',
                data: `uname=${uname}&password=${pwd}`
            })
            if (flag == 1) {
                setCookie('name', uname);
                location.href = newUrl;
            } else {
                alert('账号或密码错误！');
            }
        })()
    } else {
        (async function () {
            var flag = await promiseAjax({
                url: '../php/login.php',
                // type: 'POST',
                data: `uname=${uname}&password=${pwd}`
            })
            if (flag == 1) {
                setCookie('name', uname);
                location.href = './index.html';
            } else {
                alert('账号或密码错误！');
            }
        })()
    }
    return false;
}