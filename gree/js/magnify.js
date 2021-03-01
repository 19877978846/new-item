var _this;
class Magnify {
    /*
    ele：存放未放大图片的盒子
    scale:设置图片的放大倍数
    */
    constructor(ele, scale) {
        _this = this;
        this.small = document.querySelector(ele);
        this.big = document.querySelector('.goods-img-big');
        this.scale = scale;
        this.width_s = this.small.offsetWidth;
        this.height_s = this.small.offsetHeight;
        this.Init();
    }
    //初始化
    Init() {
        this.createMask();
        this.createImg();
        //给左边盒子添加mousemove响应事件
        this.small.addEventListener('mousemove', function (e) {
            var e = e || window.event;
            _this.move(e);
        })
    }
    //创造遮罩层
    createMask() {
        var mask = document.createElement('div');
        mask.className = 'mask';
        var width_m = this.width_s / this.scale;
        var height_m = this.height_s / this.scale;
        setCss(mask, {
            'width': width_m + 'px',
            'height': height_m + 'px'
        });
        this.small.appendChild(mask);
    }
    //创造大图片
    createImg() {
        var img_b = this.small.children[0].cloneNode(true);
        setCss(img_b, {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'width': this.width_s * this.scale + 'px',
            'height': this.height_s * this.scale + 'px'
        });
        this.big.appendChild(img_b);
    }
    //移动方法
    move(e) {
        var mask = document.querySelector('.mask');
        var img_b = this.big.children[0];
        var x = e.pageX - this.small.offsetLeft - parseInt(mask.offsetWidth / 2);
        var y = e.pageY - this.small.offsetTop - parseInt(mask.offsetHeight / 2);
        var maxX = this.small.offsetWidth - mask.offsetWidth;
        var maxY = this.small.offsetHeight - mask.offsetHeight;
        var X, Y;
        if (x < 0) {
            mask.style.left = 0;
            X = 0;
        } else if (x > maxX) {
            mask.style.left = maxX + 'px';
            X = maxX;
        } else {
            mask.style.left = x + 'px';
            X = x;
        }
        if (y < 0) {
            mask.style.top = 0;
            Y = 0;
        } else if (y > maxY) {
            mask.style.top = maxY + 'px';
            Y = maxY;
        } else {
            mask.style.top = y + 'px';
            Y = y;
        }
        img_b.style.left = -this.scale * X + 'px';
        img_b.style.top = -this.scale * Y + 'px';
    }
}
//用来更好设置CSS样式的函数
function setCss(ele, options) {
    for (var attr in options) {
        ele.style[attr] = options[attr];
    }
}