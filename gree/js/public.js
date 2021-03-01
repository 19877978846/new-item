//搜索栏
var searchIpt = document.querySelector('.s_box').querySelector('[type="text"]');
var searchBtn = document.querySelector('.s_box').querySelector('[type="submit"]');
var tipsBox = document.querySelector('.s_box').querySelector('.tips-box');
searchIpt.addEventListener('input', showTips);
searchIpt.addEventListener('focus', showTips);

function showTips() {
    var val = this.value;
    if (val) {
        tipsBox.style.display = 'block';
        (async function () {
            var p = await promiseAjax({
                url: '../php/search.php',
                data: `kw=${val}`,
            })
            var dt = eval('(' + p + ')');
            var str = '';
            var arr = [];
            for (var i in dt) {
                var arrV = val.split('');
                for (let j = 0; j < arrV.length; j++) {
                    if (dt[i].goods_name.split(' ')[0].indexOf(arrV[j]) > -1) {
                        arr.push(dt[i].goods_name.split(' ')[0]);
                    }
                }
                arr = [...new Set(arr)];
            }
            if (arr) {
                for (let n = 0; n < arr.length; n++) {
                    if (n < 10) {
                        str += `
                        <li><a href='./list.html?keyword=${arr[n]}'>${arr[n]}</a></li>
                        `;
                    } else {
                        break;
                    }
                }
            }
            tipsBox.innerHTML = str;
        })()
    } else {
        tipsBox.style.display = 'none';
    }
}
searchBtn.addEventListener('click', function () {
    var val = searchIpt.value;
    if (val) {
        location.href = './list.html?keyword=' + val;
    }
});

//进入购物车
var goCart = document.querySelector('.car');
var cartMessage = document.querySelector('.car-message');
(function () {
    var cartList_i = localStorage.getItem('cartList') || [];
    cartList_i = JSON.parse(cartList_i);
    var carNum = 0;
    cartList_i.forEach(item => {
        carNum += parseInt(item.cart_num);
    })
    var str = '';
    if (cartList_i.length > 0) {
        cartMessage.innerHTML = '';
        str += '<h3>最新加入的商品</h3><ul>';
        var str1 = '';
        for (let i = 0; i < cartList_i.length; i++) {
            str1 += `
            <li>
			<ol>
				<li><input type="checkbox"></li>
				<li><a href="./detail.html?id=${cartList_i[i].goods_id}" target="_blank"><img src="${cartList_i[i].goods_small_logo}" alt=""></a></li>
				<li><h5><a href="./detail.html?id=${cartList_i[i].goods_id}" target="_blank">${cartList_i[i].goods_name}</a></h5></li>
				<li><p><span>${cartList_i[i].goods_price}</span>*<span>${cartList_i[i].cart_num}</span></p><a href="javascript:;">删除</a></li>
			</ol>
		</li>
            `;
        }
        str += str1;
        str += `
        </ul>
        `;
        cartMessage.innerHTML = str;
    } else {
        cartMessage.innerHTML = '';
        str += `
        <h3>最新加入的商品</h3>
        <p class="nothing">购物车还没有商品</p>
        `;
        cartMessage.innerHTML = str;
    }
    goCart.querySelector('i').innerHTML = carNum;
})();
goCart.addEventListener('mouseover', function () {
    cartMessage.style.display = 'block';
})
goCart.addEventListener('mouseout', function () {
    cartMessage.style.display = 'none';
})

//侧边菜单
var goodsMenu = document.querySelector('.all-goods-slide');
for (let i = 0; i < goodsMenu.children.length; i++) {
    goodsMenu.children[i].addEventListener('mouseover', function () {
        if (this.children.length == 3) {
            var category = this.children[1].innerHTML;
            (async function () {
                var p = await promiseAjax({
                    url: '../php/menu.php',
                    data: 'category=' + category
                })
                var dt = eval('(' + p + ')');
                var arr = [];
                for (let i = 0; i < dt.length; i++) {
                    if (arr.indexOf(`${dt[i].cart_id_one.split(' ')[0]},${dt[i].cart_id_two}`) === -1) {
                        arr.push(`${dt[i].cart_id_one.split(' ')[0]},${dt[i].cart_id_two}`);
                    }
                }
                var obj = {};
                for (let i = 0; i < arr.length; i++) {
                    obj[arr[i].split(',')[0]] += arr[i].split(',')[1] + ' ';
                }
                var temp = {};
                for (let k in obj) {
                    temp[k] = obj[k].split('undefined')[1].split(' ');
                }
                var str1 = '';
                for (let k in temp) {
                    var str2 = '';
                    for (let j = 0; j < temp[k].length; j++) {
                        if (temp[k][j] != ' ') {
                            str2 += `
                    <a href="./list.html?category_two=${temp[k][j]}" target="_blank">${temp[k][j]}</a>
                    `;
                        }
                    }
                    str1 += `
            <li class="clearfix">
            <div>
            <h3><a href="./list.html?category_one=${k}" target="_blank">${k}</a></h3>
            </div>
            <p>${str2}</p>
            </li>
            `;
                }
                var ul = document.createElement('ul');
                ul.innerHTML = str1;
                goodsMenu.children[i].appendChild(ul);
            })();
        }
    });
}