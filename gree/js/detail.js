var goodsL = document.querySelector('.goods-l');
var goodsC = document.querySelector('.goods-c');
var goodsT = document.querySelector('.goods-title');
var goodsI = document.querySelector('.goods-introduce');
var path = location.search;
var dt;
if (path) {
    var id = path.split('?')[1].split('=')[1];
    (async function () {
        var p1 = await promiseAjax({
            url: '../php/detail.php',
            data: 'id=' + id
        })
        dt = eval('(' + p1 + ')');
        //将历史记录写入localStorage
        var historyList = localStorage.getItem('historyList') || '[]';
        historyList = JSON.parse(historyList);
        if (historyList.length > 0) {
            let a = 0;
            for (let i = 0; i < historyList.length; i++) {
                if (dt.goods_id != historyList[i].goods_id) {
                    a++;
                } else {
                    historyList.splice(i, 1);
                    historyList.push(dt);
                }
            }
            if (a == historyList.length) {
                historyList.push(dt);
            }
            //防止localStorage存储过大，设定最大存储长度
            if (historyList.length > 5) {
                historyList.shift();
            }
            localStorage.setItem('historyList', JSON.stringify(historyList));
        } else {
            localStorage.setItem('historyList', JSON.stringify([dt]));
        }
        var str1 = `
        <div class="goods-img-small">
            <img src="${dt.goods_small_logo}" alt="">
            <div class="goods-img-big"></div>
        </div>
        <ul class="goods-img-choice clearfix">
            <li><img src="${dt.goods_small_logo}" alt=""></li>
            <li><img src="${dt.goods_small_logo_one}" alt=""></li>
            <li><img src="${dt.goods_small_logo_two}" alt=""></li>
            <li><img src="${dt.goods_small_logo_three}" alt=""></li>
        </ul>
        <p><a href="javascript:;"><span class="iconfont">&#xe60e;</span>收藏店铺</a></p>
        `;
        var str2 = `
        <h2>${dt.goods_name}</h2>
        <p>${dt.goods_describle}</p>
        <ul>
            <li><i>售价：</i>￥<span>${dt.goods_price}</span></li>
            <li><i>商品评分：</i><span class="iconfont">&#xe61a;&#xe61a;&#xe61a;&#xe61a;&#xe61a;</span></li>
            <li><i>好评率：</i><span>100%</span></li>
            <li><i>累计销量：</i><span>${dt.buy_num}</span>件</li>
            <li><i>配送至：</i>
                <option></option>
            </li>
            <li><i>欢迎光临：</i><span>格力官方</span></li>
            <li><i>数量：</i><button>-</button><input type="text" value="1" class="add-num"><button>+</button>有货</li>
        </ul>
        <div class="goods-buy">
            <button class="into-cart"><span class="iconfont">&#xe611;</span>加入购物车</button>
            <button>立即购买</button>
        </div>
        <p>支付：<span class="iconfont">&#xe60f;</span>立即支付</p>
        <p><a href="#">移动端商品链接</a></p>
        `;
        var str3 = `
            <h3><a href="./list.html?category=${dt.cart_id}">${dt.cart_id}</a></h3>
            &nbsp;>&nbsp;
            <h4><a href="./list.html?category_one=${dt.cart_id_one.split(' ')[0]}">${dt.cart_id_one.split(' ')[0]}</a></h4>
            &nbsp;>&nbsp;
            <h5><a href="./list.html?category_two=${dt.cart_id_two}">${dt.cart_id_two}</a></h5>
            &nbsp;>&nbsp;
            <h6><a href="javascript:;">${dt.goods_name}</a></h6>
        `;
        goodsL.innerHTML = str1;
        goodsC.innerHTML = str2;
        goodsT.innerHTML = str3;
        goodsI.innerHTML = dt.goods_introduce;
        goodsI.style.display = 'block';
        new Magnify('.goods-img-small', 2);
        var imgChoice = document.querySelector('.goods-img-choice');
        for (let n = 0; n < imgChoice.children.length; n++) {
            imgChoice.children[n].addEventListener('mouseover', function () {
                this.parentNode.previousElementSibling.innerHTML = `
                <img src="${dt.goods_small_logo}" alt="">
                <div class="goods-img-big"></div>
                `;
                this.parentNode.previousElementSibling.children[0].src = this.children[0].src;
                new Magnify('.goods-img-small', 2);
            })
        }
    })()
} else {
    alert('非法进入');
    location.href = './list.html';
}
//tab栏选项卡
var tab = document.querySelector('.gt-r-box').querySelectorAll('h5');
var content = document.querySelector('.gt-r').querySelectorAll('div');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function () {
        for (let j = 0; j < tab.length; j++) {
            tab[j].className = '';
            content[j + 1].style.display = 'none';
        }
        this.className = 'gt-r-li-click';
        content[i + 1].style.display = 'block';
    })
}

//tab栏到页面顶部时
var tabList = document.querySelector('.gt-r-box');
document.addEventListener('scroll', function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top - document.querySelector('.gt-r').offsetTop >= 0) {
        tabList.style.position = 'fixed';
        tabList.style.top = 0 + 'px';
        tabList.style.zIndex = 10;
    } else {
        tabList.style.position = 'static';
    }
})
goodsC.onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    //加减需要的商品数量
    //减
    if (target.innerHTML == '-') {
        var addNum = document.querySelector('.add-num');
        if (addNum.value > 1) {
            addNum.value = --addNum.value;
        } else {
            addNum.value = 1;
        }
    }
    //加
    if (target.innerHTML == '+') {
        var addNum = document.querySelector('.add-num');
        var val = parseInt(addNum.value);
        var maxNum = dt.goods_num;
        if (val < maxNum) {
            addNum.value = val + 1;
        } else {
            addNum.value = maxNum;
        }
    }
    //加入购物车
    if (target.className == 'into-cart') {
        var addVal = parseInt(document.querySelector('.add-num').value);
        // console.log(addVal)
        var cartList = localStorage.getItem('cartList');
        if (cartList) {
            var a = 0;
            cartList = JSON.parse(cartList);
            cartList.forEach((item) => {
                if (item.goods_id == dt.goods_id) {
                    if (item.cart_num + addVal < dt.goods_num) {
                        item.cart_num = item.cart_num + addVal;
                    } else {
                        item.cart_num = dt.goods_num;
                    }
                    a += addVal;
                    localStorage.setItem('cartList', JSON.stringify(cartList));
                }
            })
            if (a == 0) {
                if (addVal < dt.goods_num) {
                    dt.cart_num = addVal;
                } else {
                    dt.cart_num = dt.goods_num;
                }
                cartList.push(dt);
                localStorage.setItem('cartList', JSON.stringify(cartList));
            }
        } else {
            if (addVal < dt.goods_num) {
                dt.cart_num = addVal;
            } else {
                dt.cart_num = dt.goods_num;
            }
            localStorage.setItem('cartList', JSON.stringify([dt]));
        }
        document.querySelector('.shadow').style.display = 'block';
        document.querySelector('.go-shop').style.display = 'block';
    }
    //立即购买
    if (target.innerHTML == '立即购买') {
        var uname = getCookie('name');
        if (uname) {
            //确认是否购买
            if (confirm("你确定要购买吗？")) {
                alert("你要支付：" + target.parentNode.previousElementSibling.children[0].children[1].innerHTML + '元');
                location.reload();
            }
        } else {
            if (confirm('请先登录')) {
                var thisUrl = location.href;
                location.href = './login.html?url=' + thisUrl;
            }
        }
    }
}

document.querySelector('.go-shop').querySelector('a').addEventListener('click', function () {
    this.parentNode.parentNode.style.display = 'none';
    document.querySelector('.shadow').style.display = 'none';
})