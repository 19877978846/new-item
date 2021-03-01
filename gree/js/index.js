//热销推荐模块
var hotSale = document.querySelector('.hot-sale');
(async function () {
    var p = await promiseAjax({
        url: '../php/hotSale.php'
    })
    var dt = eval('(' + p + ')');
    var arr = dt.slice(0, 4);
    var str = '<h3>热销推荐</h3><ul class="clearfix">';
    for (let attr in arr) {
        str += `
            <li><a href="./detail.html?id=${arr[attr].h_goods_id}" target="_blank"><img src="${arr[attr].pic}" alt=""></a></li>
        `;
    }
    str += '</ul>';
    hotSale.innerHTML = str;
})();
//每日精选模块
var daySelect = document.querySelector('.day-select');
(async function () {
    var p = await promiseAjax({
        url: '../php/daySelect.php'
    })
    var dt = eval('(' + p + ')');
    var arr = dt.slice(0, 6);
    var str = '';
    str += `
        <h3>每日精选</h3>
        <div class="d_l">
            <a href="./detail.html?id=${arr[0].s_goods_id}" target="_blank"><img src="${arr[0].pic}" alt=""></a>
        </div>
        <div class="d_m">
            <div class="d_m_top">
                <a href="./detail.html?id=${arr[1].s_goods_id}" target="_blank"><img src="${arr[1].pic}" alt=""></a>
            </div>
            <div class="d_m_bottom">
                <div class="d_m_bottom_l">
                    <a href="./detail.html?id=${arr[2].s_goods_id}" target="_blank"><img src="${arr[2].pic}" alt=""></a>
                </div>
                <div class="d_m_bottom_r">
                    <a href="./detail.html?id=${arr[3].s_goods_id}" target="_blank"><img src="${arr[3].pic}" alt=""></a>
                </div>
            </div>
        </div>
        <div class="d_s">
            <div class="d_s_top">
                <a href="./detail.html?id=${arr[4].s_goods_id}" target="_blank"><img src="${arr[4].pic}" alt=""></a>
            </div>
            <div class="d_s_bottom">
                <a href="./detail.html?id=${arr[5].s_goods_id}" target="_blank"><img src="${arr[5].pic}" alt=""></a>
            </div>
        </div>
    `;
    daySelect.innerHTML = str;
})();
//floor模块和右侧跟随导航
var floors = document.querySelector('.floors');
var slide = document.querySelector('.right-slide');
(async function () {
    var p = await promiseAjax({
        url: '../php/floor.php'
    })
    var dt = eval('(' + p + ')');
    var str = '';
    var str1 = '';
    for (var i = 0; i < 7; i++) {
        str += `
        <div class="floor main clearfix">
        <h2>
            <p><span>${i+1}F</span><span>${dt[8*i].f_cart_id}</span></p>
            <ul>
                <li>${dt[8*i].f_cart_id}</li>
            </ul>
        </h2>
        `;
        str1 += `
            <li>${i+1}F</li>
        `;
        let arr1 = dt.slice(i * 8, (i + 1) * 8);
        let arr2 = arr1.slice(2, 8);
        var str2 = '';
        for (let attr in arr2) {
            str2 += `
            <li>
            <dl>
                <dt><a href="./detail.html?id=${arr2[attr].f_goods_id}" target="_blank"><img src="${arr2[attr].goods_small_logo}" alt=""></a></dt>
                <dd>
                    <h5><a href="./detail.html?id=${arr2[attr].f_goods_id}" target="_blank">${arr2[attr].goods_name}</a></h5>
                    <p>${arr2[attr].goods_describle}</p>
                    <p>￥<span>${arr2[attr].goods_price}</span></p>
                </dd>
            </dl>
            </li>
            `;
        }
        str += `
            <div class="floor-l">
                <a href="./detail.html?id=${arr1[0].f_goods_id}" target="_blank"><img src="${arr1[0].pic}" alt=""></a>
            </div>
            <div class="floor-c">
                <a href="./detail.html?id=${arr1[1].f_goods_id}" target="_blank"><img src="${arr1[1].pic}" alt=""></a>
            </div>
            <ol class="floor-r">${str2}</ol>
            </div>
            `;
    }
    floors.innerHTML = str;
    slide.innerHTML = str1;
    //侧边导航滚动效果
    var floorH = document.querySelector('.floor').offsetHeight;
    var minH = floors.offsetTop - 360;
    var maxH = floors.offsetTop - 360 + floorH * 7;
    var judgeH = 44;

    for (let i = 0; i < slide.children.length; i++) {
        slide.children[i].onclick = function () {
            if (i == 0) {
                animate(window, minH + 70);
                // debounce(animate(window, minH + 50), 2000);
            } else {
                animate(window, minH + 50 + floorH * i - judgeH * (i - 1));
                // debounce(animate(window, minH + 20 + floorH * i - judgeH * (i - 1)), 2000);
            }
        }
    }
    window.addEventListener('scroll', function () {
        var top;
        top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top >= minH && top <= maxH) {
            slide.style.display = 'block';
            if (top <= minH + floorH) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[0].innerHTML = dt[0].f_cart_id;
                slide.children[0].className = 'slide-style';
            } else if (top <= minH + floorH * 2 - judgeH) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[1].innerHTML = dt[8 * 1].f_cart_id;
                slide.children[1].className = 'slide-style';
            } else if (top <= minH + floorH * 3 - judgeH * 2) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[2].innerHTML = dt[8 * 2].f_cart_id;
                slide.children[2].className = 'slide-style';
            } else if (top <= minH + floorH * 4 - judgeH * 3) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[3].innerHTML = dt[8 * 3].f_cart_id;
                slide.children[3].className = 'slide-style';
            } else if (top <= minH + floorH * 5 - judgeH * 4) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[4].innerHTML = dt[8 * 4].f_cart_id;
                slide.children[4].className = 'slide-style';
            } else if (top <= minH + floorH * 6 - judgeH * 5) {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[5].innerHTML = dt[8 * 5].f_cart_id;
                slide.children[5].className = 'slide-style';
            } else {
                for (let i = 0; i < slide.children.length; i++) {
                    slide.children[i].className = '';
                    slide.children[i].innerHTML = i + 1 + 'F';
                }
                slide.children[6].innerHTML = dt[8 * 6].f_cart_id;
                slide.children[6].className = 'slide-style';
            }
        } else {
            slide.style.display = 'none';
        }
    });
})();
//防抖函数
function debounce(fn, delay) {
    let timer = null //借助闭包
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay) // 简化写法
    }
}
// 动画函数
function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - window.pageYOffset) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (Math.abs(window.pageYOffset - target) <= 10) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        // obj.style.left = window.pageYOffset + step + 'px';
        window.scroll(0, window.pageYOffset + step);
    }, 16);
}
//视频模块
var videoOpen = document.querySelector('.video').querySelectorAll('dt');
var videoBox = document.querySelector('.video-box');
var videoShadow = document.querySelector('.shadow');
for (let i = 0; i < videoOpen.length; i++) {
    videoOpen[i].addEventListener('click', function () {
        videoBox.style.display = 'block';
        videoShadow.style.display = 'block';
        videoBox.children[0].children[0].innerHTML = this.nextElementSibling.innerHTML;
        if (i == 0) {
            videoBox.children[1].innerHTML = '<video src="https://gelimall.oss-cn-shenzhen.aliyuncs.com/multiMedia/mall/video/2020/3/2/dfb51054-433d-440e-9778-4cb09405387a.mp4" controls poster="" oncontextmenu="return false"></video>';
        } else if (i == 1) {
            videoBox.children[1].innerHTML = '<video src="https://gelimall.oss-cn-shenzhen.aliyuncs.com/multiMedia/mall/video/2020/3/2/20269ed1-04ea-4383-98c0-fc39ca1c2586.mp4" controls poster="" oncontextmenu="return false"></video>';
        } else if (i == 2) {
            videoBox.children[1].innerHTML = '<video src="https://gelimall.oss-cn-shenzhen.aliyuncs.com/multiMedia/mall/video/2020/4/28/32781506-2a59-41b1-8551-6eeb96613e57.mp4" controls poster="" oncontextmenu="return false"></video>';
        } else {
            videoBox.children[1].innerHTML = '<video src="https://gelimall.oss-cn-shenzhen.aliyuncs.com/multiMedia/mall/video/2020/3/2/6c67260a-2959-43f8-98a2-60e85af90cdf.mp4" controls poster="" oncontextmenu="return false"></video>';
        }
    });
}
videoBox.children[0].children[1].onclick = function () {
    videoBox.style.display = 'none';
    videoShadow.style.display = 'none';
}