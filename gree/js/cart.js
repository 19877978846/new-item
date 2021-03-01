var myCart = document.querySelector('.cart-box');
var cartList = localStorage.getItem('cartList') || '[]';
cartList = JSON.parse(cartList);
//浏览记录
(function () {
    var historyList = localStorage.getItem('historyList') || '[]';
    historyList = JSON.parse(historyList);
    var historyBox = document.querySelector('.history').querySelector('ol');
    var strH = '';
    var a = 0;
    for (let i = historyList.length - 1; i >= 0; i--) {
        strH += `
        <li>
        <dl>
            <dt><a href="./detail?id=${historyList[i].goods_id}"><img src="${historyList[i].goods_small_logo}" alt=""></a></dt>
            <dd>
                <p><a href="./detail?id=${historyList[i].goods_id}">${historyList[i].goods_name}</a></p>
            </dd>
        </dl>
        </li>
        `;
        a++;
        if (a == 5) {
            break;
        }
    }
    historyBox.innerHTML = strH;
})();

show();

function show() {
    if (cartList.length > 0) {
        //验证全选框是否被选中
        var checkAll = cartList.every(item => {
            return item.is_select == 1
        })
        var tl = total()
        //创建变量，拼接所有商品信息
        var str = `
        <ol class="cart-title clearfix">
        <li><input type="checkbox" name="checkAll" ${checkAll?'checked':''}>全选</li>
        <li>商品信息</li>
        <li>单价</li>
        <li>数量</li>
        <li>合计</li>
        <li>操作</li>
        </ol>
        <div class="cart-main">
            <h3>格力董明珠店</h3>
        `;
        //遍历数组中所有的商品信息
        cartList.forEach(item => {
            str += `
            <ul class="clearfix">
            <li><input type="checkbox" ${item.is_select==1?'checked':''} name="checkThis" data-id="${item.goods_id}"></li>
            <li>
                <a href="./detail.html?id=${item.goods_id}"><img src="${item.goods_small_logo}" alt=""></a>
                <p><a href="./detail.html?id=${item.goods_id}">${item.goods_name}</a></p>
            </li>
            <li>￥<span>${item.goods_price}</span></li>
            <li><button type="button" data-id=${item.goods_id} ${item.cart_num<=1? 'disabled':''}>-</button><input type="text" value="${item.cart_num}"><button data-id=${item.goods_id} ${item.cart_num>=item.goods_number?'disabled':''} type="button">+</button><span>有货</span></li>
            <li>￥<span>${(parseInt(item.cart_num)*parseFloat(item.goods_price)).toFixed(2)}</span></li>
            <li><a href="javascript:;" data-id=${item.goods_id}>【删除】</a></li>
        </ul>
        `
        })
        str += `
            </div>
            <ol class="cart-bottom clearfix">
                <li><input type="checkbox" name="checkAll" ${checkAll?'checked':''}>全选</li>
                <li><a href="javascript:;">【批量删除】</a></li>
                <li>“去结算”查看满减/折扣优惠</li>
                <li>
                    共选中<span>${tl[0]}</span>件商品，总计（不含运费）：
                    <span>￥<i>${tl[1]}</i></span>
                </li>
                <li><button>￥去结算</button></li>
            </ol>
        `;
        //在把拼接好的内容添加到大盒子中
        myCart.innerHTML = str;
    } else {
        var str1 = `
        <ol class="cart-title clearfix">
        <li><input type="checkbox" class="check-all">全选</li>
        <li>商品信息</li>
        <li>单价</li>
        <li>数量</li>
        <li>合计</li>
        <li>操作</li>
        </ol>
        <div class="no-goods">
        <p>亲，购物车内暂时没有商品......</p>
        <a href="./index.html">去逛逛>></a>
        </div>
    `
        //把当前字符串添加到大盒子中
        myCart.innerHTML = str1
    }
}
//給大盒子绑定点击事件
myCart.onclick = function (e) {
    // console.log(cartlist)
    var e = e || window.event
    var target = e.target || e.srcElement
    //加法
    if (target.innerHTML == "+") {
        //获取当前商品的id
        var id1 = target.getAttribute('data-id')
        //遍历数组元素
        cartList.forEach(item => {
            //判断是否为当前操作的商品
            if (item.goods_id == id1) {
                item.cart_num += 1
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show()
    }
    //减法
    if (target.innerHTML == '-') {
        //获取id
        var id1 = target.getAttribute('data-id')
        //遍历数组元素
        cartList.forEach(item => {
            //判断是否为当前操作的商品
            if (item.goods_id == id1) {
                item.cart_num -= 1
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show()
    }
    //删除一行
    if (target.innerHTML == '【删除】') {
        if (confirm('真的要删除该商品吗？')) {
            //获取id
            var id1 = target.getAttribute('data-id')
            //遍历数据元素，把满足条件的数据过滤，不满足条件的元素保留
            cartlist2 = cartList.filter(item => {
                return item.goods_id != id1
            })
            //重置localStrong
            localStorage.setItem('cartList', JSON.stringify(cartlist2))
            //刷新
            location.reload()
        }
    }
    //全选
    if (target.getAttribute('name') == 'checkAll') {
        //遍历数组中所有的数据
        cartList.forEach(item => {
            //判断全选框是否被选中
            if (target.checked) {
                //修改所有商品选中框的is_select
                item.is_select = 1
            } else {
                item.is_select = 0
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show()
    }
    //选中框
    if (target.getAttribute('name') == 'checkThis') {
        //获取当前商品id
        var id1 = target.getAttribute('data-id')
        //遍历数据元素
        cartList.forEach(item => {
            //判断是否为当前操作商品
            if (item.goods_id == id1) {
                //    item.is_select=item.is_select?0:1
                if (item.is_select == 1) {
                    item.is_select = 0
                } else {
                    item.is_select = 1
                }
            }
        })
        //重置localStrong
        localStorage.setItem('cartList', JSON.stringify(cartList))
        show()
    }
    //结算
    if (target.innerHTML == '￥去结算') {
        //检查是否已经登录
        var uname = getCookie('name');
        if (uname) {
            //确认是否购买
            if (confirm("你确定要购买吗？")) {
                alert("你要支付：" + total()[1])
                //过滤数组元素
                var cartlist3 = cartList.filter(item => {
                    return item.is_select != 1
                })
                //重置localStrong
                localStorage.setItem('cartList', JSON.stringify(cartlist3))
                location.reload()
            }
        } else {
            if (confirm('请先登录')) {
                var thisUrl = location.href;
                location.href = './login.html?url=' + thisUrl;
            }
        }
    }
    //批量删除
    if (target.innerHTML == '【批量删除】') {
        if (confirm('真的要删除所选商品吗？')) {
            var arr = [];
            cartList.forEach(item => {
                if (item.is_select != 1) {
                    arr.push(item);
                }
            });
            //重置localStrong
            localStorage.setItem('cartList', JSON.stringify(arr));
            //刷新
            location.reload()
        }
    }

}
//商品总数量、总价格
function total() {
    var num = 0 //总数量
    var price = 0 //总价格
    //遍历cartlist数组
    cartList.forEach(item => {
        //判断该商品是否被选中
        if (item.is_select == 1) {
            //统计商品总数量
            num += item.cart_num
            //统计总计
            price += parseInt(item.cart_num) * parseFloat(item.goods_price)
        }
    })
    return [num, price.toFixed(2)]
}