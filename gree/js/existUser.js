//查找cookie是否有uname内容
var uname = getCookie('name');
var welcome = document.querySelector('.h_l');
if (uname) {
    let str = `
    <li>hi~&nbsp;<a href="javascript:;">${uname}</a>&nbsp;欢迎！<a href="javascript:;">[退出]</a><i class="iconfont h_vertical_line">&#xe605;</i></li>
	<li><a href="javascript:;">个人中心</a><i class="iconfont h_vertical_line">&#xe605;</i></li>
	<li><a href="#">移动端下载</a><i class="iconfont h_vertical_line">&#xe605;</i></li>
	<li><a href="#">卖家移动端下载</a></li>
    `;
    welcome.innerHTML = str;
}
welcome.addEventListener('click', function (e) {
    var e = e || window.event;
    var target = e.target;
    if (target.innerHTML == '[退出]') {
        delCookie('name', -1);
        var thisUrl = location.href;
        location.href = './login.html?url=' + thisUrl;
    }
    if (target.innerHTML == '登录') {
        var thisUrl = location.href;
        location.href = './login.html?url=' + thisUrl;
    }
})