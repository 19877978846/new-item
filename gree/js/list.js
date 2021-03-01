var pagination = document.querySelector('.pagination');
var listGoods = document.querySelector('.list-r').querySelector('ul');
var listMenu = document.querySelector('.list-l');
var path = location.search;
var dt;
if (path) {
    (async function () {
        var p1 = await promiseAjax({
            url: '../php/list.php',
            data: path.split('?')[1].split('=')[0] + '=' + path.split('?')[1].split('=')[1]
        })
        var dt = eval('(' + p1 + ')');
        //左边菜单
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
        var str1 = '<dt>所有类别</dt>';
        for (let k in temp) {
            var str2 = '';
            for (let j = 0; j < temp[k].length; j++) {
                if (temp[k][j] != '') {
                    str2 += `
                    <li><a href="./list.html?category_two=${temp[k][j]}"><span class="iconfont">&#xe635;</span>${temp[k][j]}</a></li>
                    `;
                }
            }
            str1 += `
            <dd>
            <h3><a href="./list.html?category_one=${k}">${k}</a><span class="iconfont">&#xe679;</span></h3>
            <ul>${str2}</ul>
            </dd>
            `;
        }
        listMenu.innerHTML = str1;
        //列表商品
        var obj = {
            pageInfo: {
                pagenum: 1,
                pagesize: 16,
                totalsize: dt.length,
                totalpage: Math.ceil(dt.length / 16)
            },
            textInfo: {
                first: '首页',
                prev: '上一页',
                next: '下一页',
                last: '尾页'
            },
            change(m) {
                let ar2 = dt.slice((m - 1) * 16, m * 16);
                var str = '';
                for (var attr in ar2) {
                    str += `
                        <li>
                            <dl>
                                <dt><a href='./detail.html?id=${ar2[attr].goods_id}' target="_blank"><img src="${ar2[attr].goods_small_logo}" alt=""></a>
                                </dt>
                                <dd>
                                    <h3><a href='./detail.html?id=${ar2[attr].goods_id}'>${ar2[attr].goods_name}</a></h3>
                                    <p>￥<span>${ar2[attr].goods_price}</span><i>包邮</i></p>
                                    <p>已有<span>${ar2[attr].buy_num}</span>人购买</p>
                                    <a href="javascript:;" class="add">加入购物车</a>
                                </dd>
                            </dl>
                        </li>
                    `;
                }
                listGoods.innerHTML = str;
                document.querySelector('.list-box').querySelector('h2').children[1].innerHTML = dt.length;
            }
        }
        new Pagination(pagination, obj);
        //左侧菜单交互
        var leftMenu = listMenu.querySelectorAll('dd');
        for (let i = 0; i < leftMenu.length; i++) {
            leftMenu[i].children[0].addEventListener('click', function () {
                if (this.nextElementSibling.style.display == 'none') {
                    this.nextElementSibling.style.display = 'block';
                    this.children[1].innerHTML = '&#xe679;';
                } else {
                    this.nextElementSibling.style.display = 'none';
                    this.children[1].innerHTML = '&#xe672;';
                }
            })
        }
    })();
} else {
    alert('非法进入');
    location.href = './index.html';
}

//商品排序
var sort = document.querySelector('.list-r').children[1];
for (let i = 0; i < sort.children.length; i++) {
    sort.children[i].addEventListener('click', function () {
        for (let j = 0; j < sort.children.length; j++) {
            sort.children[j].className = '';
        }
        this.className = 'sort-click';
        var sortkey = this.firstChild.nodeValue;
        (async function () {
            var p = await promiseAjax({
                url: '../php/list.php',
                data: path.split('?')[1].split('=')[0] + '=' + path.split('?')[1].split('=')[1] + '&sortkey=' + sortkey
            });
            var dt = eval('(' + p + ')');
            var obj = {
                pageInfo: {
                    pagenum: 1,
                    pagesize: 16,
                    totalsize: dt.length,
                    totalpage: Math.ceil(dt.length / 16)
                },
                textInfo: {
                    first: '首页',
                    prev: '上一页',
                    next: '下一页',
                    last: '尾页'
                },
                change(m) {
                    let ar2 = dt.slice((m - 1) * 16, m * 16);
                    var str = '';
                    for (var attr in ar2) {
                        str += `
                            <li>
                                <dl>
                                    <dt><a href='./detail.html?id=${ar2[attr].goods_id}' target="_blank"><img src="${ar2[attr].goods_small_logo}" alt=""></a>
                                    </dt>
                                    <dd>
                                        <h3><a href='./detail.html?id=${ar2[attr].goods_id}'>${ar2[attr].goods_name}</a></h3>
                                        <p>￥<span>${ar2[attr].goods_price}</span><i>包邮</i></p>
                                        <p>已有<span>${ar2[attr].buy_num}</span>人购买</p>
                                        <a href="javascript:;" class="add">加入购物车</a>
                                    </dd>
                                </dl>
                            </li>
                        `;
                    }
                    listGoods.innerHTML = str;
                    document.querySelector('.list-box').querySelector('h2').children[1].innerHTML = dt.length;
                }
            }
            new Pagination(pagination, obj);
        })();
    })
}
//利用事件委托进行加入购物车操作
listGoods.addEventListener('click', function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.innerHTML == '加入购物车') {
        let keyword = target.parentNode.children[0].children[0].innerHTML;
        (async function () {
            var p = await promiseAjax({
                url: '../php/list.php',
                data: 'keyword=' + keyword
            })
            var dt = eval('(' + p + ')')[0];
            console.log(dt);
            var cartList = localStorage.getItem('cartList');
            if (cartList) {
                var a = 0;
                cartList = JSON.parse(cartList);
                cartList.forEach((item) => {
                    if (item.goods_id == dt.goods_id) {
                        item.cart_num = ++item.cart_num;
                        a++;
                        localStorage.setItem('cartList', JSON.stringify(cartList));
                    }
                })
                if (a == 0) {
                    dt.cart_num = 1;
                    cartList.push(dt);
                    localStorage.setItem('cartList', JSON.stringify(cartList));
                }
            } else {
                dt.cart_num = 1;
                localStorage.setItem('cartList', JSON.stringify([dt]));
            }
            document.querySelector('.shadow').style.display = 'block';
            document.querySelector('.go-shop').style.display = 'block';
        })();
    }
})

//点击继续浏览隐
document.querySelector('.go-shop').querySelector('a').addEventListener('click', function () {
    this.parentNode.parentNode.style.display = 'none';
    document.querySelector('.shadow').style.display = 'none';
})