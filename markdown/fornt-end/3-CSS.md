# CSS

`W3C`官方网站: https://www.w3.org/TR/?tag=css

> 是为网页添加样式的代码

`CSS`表示层叠样式表, `Cascading Style Sheet`，又称为又称串样式列表、级联样式表、串接样式表、阶层式样式表

## 1. 初识

### 1. css 介绍

`CSS `也不是真正的编程语言，甚至不是标记语言, 它是一门样式表语言, 是一种计算机语言，但是不算是一种编程语言

> 作用

- 实现内容与样式的分离，便于团队开发
- 样式复用，便于网站的后期维护
- 页面的精确控制，让页面更精美

> 美化方式

为`HTML`添加各种各样的样式，比如颜色、字体、大小、下划线等等

对`HTML`进行布局，按照某种结构显示（`CSS`进行布局 – `浮动`、`flex`、`grid`）

### 2. 使用方式

> `外链式CSS`

是将`css`编写一个独立的文件中，并且通过`<link>`元素引入进来

```html
<link href="css文件地址" type="text/css" rel="stylesheet" />
```

> `导入式CSS`

可以在`style`元素或者`CSS`文件中使用`@import`导入其他的`CSS`文件

如果`style`标签中及存在`导入式CSS`, 又存在`嵌入式CSS`, 那么导入时`CSS`的`@import`语法必须在第一行出现, 而且后面需要添加分号`;`.

```css
/* 推荐加上 url 函数的方式*/
@import url('CSS文件地址');
```

可以将多个样式合并引入

> `嵌入式CSS`

将`CSS`放在`HTML`文件`<head>`元素里的`<style>`元素之中。

```css
<style>
	h1 {
  		font-size: 24px;
	}
    p {
  		font-size: 12px;
	}
</style>
```

> `内联式css`

`CSS`样式之间用分号`;`隔开，建议每条`CSS`样式后面都加上分号`;`

```html
<div style="color: red; font-szie: 24px;"></div>
```

### 3. 书写规范

> 基础语法

```css
/* 规则 */
css属性名: css属性值;

/* 举例 */
h1 {
  font-size: 24px;
}
```

> `css` 注释

```css
h1 {
  /*font-size: 24px;*/
}
```

### 4. CSS 历史

早期的网页都是通过`HTML`来编写的，但是我们希望`HTML`页面可以更加丰富, 这个时候就增加了很多具备特殊样式的元素：比如`i`、`strong`、`del`等等, 后来也有不同的浏览器实现各自的样式语言，但是没有统一的规划

`1994`年，哈肯·维姆·莱和伯特·波斯合作设计`CSS`，在`1996`年的时候发布了`CSS1`

`1997年初`，`W3C`组织才专门成立了`CSS`的工作组，`1998年5月`发布了`CSS2`

在2006~2009非常流行 `“DIV+CSS`”布局的方式来替代所有的`html`标签

从 `CSS3 `开始，规范的范围显着增加，不同 `CSS 模块`的进展开始出现很大差异，因此每个模块单独开发和发布建议变得更加有效。每一个“`modules`”都有于`CSS2`中额外增加的功能以及向后兼容。

直到`2011年6月7日`，`CSS 3 Color Module`终于发布为`W3C Recommendation`, 第一个 `CSS`模块发布

所以说 `CSS3` 并不是一个完整的版本, 而是多个模块分开进行更新的

## 2. 属性

### 1. 文本属性

| 属性              | 作用                               | 属性                                                         | 补充                                                         |
| ----------------- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `text-align`      | 设置内容的水平对其方式             | `left  `靠左对齐(默认)	<br>`center `水平居中	<br/>`right  `靠右 | 对块状元素有效                                               |
| `vertical-align`  | 置内容的垂直对其方式               | `top  `顶部对其	<br/>`middle `垂直居中<br/>`bottom `底部  | 对内联元素和表格的单元格元素有效.                            |
| `line-height`     | 设置行高(一行的高度)               |                                                              | 经常讲行高设置为和元素等高,实现单行文本的垂直居中效果.       |
| `text-transform`  | 设置英文的大小写转换方式           | `none  `不做修改(默认值)<br/>	`capitalize  `首字母大写<br/>	`uppercase `全部变为大写字母<br/>	`lowercase `全部变为小写字母 | 实际开发中用`JavaScript`代码转化的更多                       |
| `letter-spacing`  | 设置字母之间的距离                 |                                                              | 汉字作为字符处理,该属性对其生效.                             |
| `word-spacing`    | 设置单词之间的距离                 |                                                              |                                                              |
| `text-indent`     | 设置元素内部第一行和左侧的缩进距离 | 用于设置第一行内容的缩进                                     | `text-indent: 2em;` 刚好是缩进2个文字                        |
| `white-space`     | 设置元素对于空白的处理方式         | `normal `正常处理方式(默认值)<br/>	`pre `显示源代码中的格式,遇到边界不换行<br/>	`nowrap `强制内容不换行(软回车),除非遇到br标签<br/>	`pre-wrap` 显示源代码中的格式,遇到边界换行<br/>	`pre-line`  保持换行字符显示,但是空白字符不显示 |                                                              |
| `text-decoration` | 设置文本修饰属性                   | `none  `没有修饰线<br/>	 `underline  `下划线<br/>	 `overline   `上划线<br/>	 `line-through `贯穿线/删除线 | 取值为 `none`的时候无任何装饰, 可以去除`a`元素默认的下划线, `a`元素有下划线的本质是被添加了`text-decoration`属性 |

> `text-align` 设置行内`inline`元素的对齐方式, 定义行内`inline`元素（例如`文字`, `图片`）如何相对它的块父元素对齐

属性与值:

`left`：左对齐

`right`：右对齐

`center`：正中间显示

`justify`：两端对齐

> `justify` 单独使用时不会生效, 一般使用场景很少, 会使得左右预留的空间消失, 达到两端对齐, 但是对最后一行无效

```html
<style>
  div {
    width: 400px;
    background: black;
    text-align: justify;
    color: white
  }
</style>

<div>
  `text-align` 设置行内`inline`元素的对齐方式, 定义行内`inline`元素（例如`文字`, `图片`）如何相对它的块父元素对齐
</div>
```

![image-20220713092903266](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207130929369.png)

```html
<style>
  div {
    width: 400px;
    background: black;
    text-align: right;
    color: white;
  }
</style>

<div>
  `text-align` 设置行内`inline`元素的对齐方式, 定义行内`inline`元素（例如`文字`, `图片`）如何相对它的块父元素对齐
</div>
```

![image-20220713093014396](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207130930497.png)

但是可以使用`text-align-last`使得最后的一行样式生效

```css
text-align-last: justify;
```

> `line-height`

行高可以先简单理解为一行文字所占据的高度

行高的严格定义是：两行文字基线（`baseline`）之间的间距

基线（`baseline`）：与小写字母`x`最底部对齐的线, 基线的高度永远等于一行的行高 

![image-20220713123439550](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207131235899.png)

可以用于设置一行文字的内容垂直居中, 让`line-height`等同于`height`

> `font`

`font `属性可以用来作为 `font-style`,` font-variant`,` font-weight`, `font-size`, `line-height `和 `font-family` 属性的简写

`font-style、font-variant、font-weight`可以随意调换顺序，也可以省略

`font-size`、`font-family`不可以调换顺序，不可以省略

`/line-height`可以省略，如果不省略，必须跟在`font-size`后面

### 2. 字体属性

| 属性           | 作用                         |
| -------------- | ---------------------------- |
| `font-size`    | 设置字体的大小               |
| `font-family`  | 设置字体的类型               |
| `font-weight`  | 设置字体是否是粗体           |
| `font-style`   | 设置字体是否是斜体           |
| `font-variant` | 设置字体是否变为小型大写字母 |
| `font`         | 设置字体                     |

> `font-size`决定文字的大小

浏览器默认字体 `16px`

- 具体数值+单位

比如`100px`

也可以使用`em`单位(不推荐)：`1em`代表`100%`，`2em`代表`200%`，`0.5em`代表`50%`

- 百分比

基于父元素的`font-size`计算，比如`50%`表示等于父元素`font-size`的`一半`

> `font-family`用于设置文字的字体名称

可以设置1个或者多个字体名称; 

浏览器会选择列表中第一个该计算机上有安装的字体; 

或者是通过 `@font-face` 指定的可以直接下载的字体。

```css
body {
  font-family: "Adobe 宋体 Std L", serif;
}
```

 `Unicode` 编码以及`多个不连续的英文单词`需要使用 `""` 包裹

> `font-weight`

◼ `100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` ：每一个数字表示一个重量

◼ `normal`：等于`400 `

◼ `bold`：等于`700`

`strong`、`b`、`h1~h6`等标签的`font-weight`默认就是`bold`

> `font-variant`

◼ `normal`：常规显示

◼ `small-caps`：将小写字母替换为缩小过的大写字母

### 3. 颜色属性

`color`属性设置前景色, 不仅仅是文本的颜色







### 4. 背景属性

#### 1. background-image

> **`background-image`** 属性用于为一个元素设置一个或者多个背景图像。

默认情况下，背景图像放置在元素的左上角，并在垂直和水平方向重复。

在绘制时，图像以 `z 方向`堆叠的方式进行。

先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。( `三维 z轴`观测 )

```css
background-image: url("../../media/examples/star.png"),
                  url("../../media/examples/lizard.png");
```

然后元素的边框`border` 会在它们之上被绘制，而 `background-color`会在它们之下绘制,官方网站推荐设置  `background-image` 的时候加上对 `background-color` 的设置

当然,最有意思的一个地方在于,可以同时设置多张背景图片,并且同时为他们分别设置他们的样式

```css
body {
  background-image: url(https://image.flaticon.com/icons/svg/748/748122.svg), 
      			   url(https://images.unsplash.com/photo-1478719059408-592965723cbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2212&q=80);
  background-position: center, top;
  background-repeat: repeat, no-repeat;
  background-size: contain, cover;

```

> `background-image`的属性值模式就是用来给它加 “特技” 的。

它的值模式有

1.   `url()模式`

2.   `linear-gradient()模式   `

大多数人最基本的只知道给他传入几个颜色值，他就会依次渲染出这几个颜色渐变,但是在 `<css揭秘> `这本书中可以发现 这个属性`linear-gradient() `其实是有很多细节的

- 第一个参数: 代表的是是方向

- 第二个参数: 代表的是颜色 以及 长度 和 终点

  - ```css
     linear-gradient:(渐变轴的位置（可设置成角度(顺时针)如45deg，或to + [left \ right \ top \bottom] ）， 颜色列表，每个颜色后边可加一个终点位置（可以是百分比或者是沿着渐变轴的长度值）)
    ```


3.   `repeating-linear-gradient()`模式   
4.   `radial-gradient()`模式
5.   `repeating-radial-gradient()`模式
6.   `none特殊值`

-   多值模式多余部分的`background-image`并不会启用。
-   值个数少的多值模式会按照原来的值顺序来循环这个多值以达到需要的多值个数为止。

#### 2. background-repeat

使背景图像在水平和度垂直方向上重复。

1.   `repeat`：默认值代表水平和垂直都平铺                            

2.   `no-repeat` 代表不平铺                           

3.   `repeat-x` 水平平铺                            

4.   `repeat-y `垂直平铺

#### 3. background-position

默认在0 0 或者说是在 left top,此时背景图片将被定位于对象不包括补丁( padding )的内容区域的左上角。

第一个值：水平位置 给具体的px值代表距离左边多少                            

第二个值：垂直位置 给具体的px值代表距离上边多少                            

还可以给百分比,代表图片的百分比要重叠在盒子的百分比那个位置上                                                            

水平方向：`left center right  `                              

垂直方向：`top center bottom`

该属性定位不受对象的补丁属性( `padding `)设置影响。

#### 4. background-attachment

在我看来，背景图片的附着点有三类，分别是浏览器的可视区域、背景容器本身区域和背景容器的内容区域。具体来说，`background-attachment`的值也就有三种，即：

`scroll`：背景图片附着在背景容器上，它是相对于背景容器（元素）固定，它会随着背景容器的滚动，而不是随着它的内容滚动（也可以看成是对元素边框固定）。

`fixed`： 背景图片附着在浏览器的可视区域。因为浏览器的可视区域不具备滚动的性格，所以它是不滚动的。

`local`：这是`CSS3`新增的属性值。背景图片附着在背景容器的内容区域。它会随着内容的滚动而滚动。

有时我们想在背景上添加一些文字，但有的图片太亮，导致字看不清楚，所以这里我们就需要让背景图叠加一些暗色来突出文字效果。

```css
body {
  background-image: 
    linear-gradient(4deg, rgba(38,8,31,0.75) 30%, rgba(213,49,127,0.3) 45%, rgba(232,120,12,0.3) 100%),
    url("https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center
}
```

使用`background-image`与 `background-clip` `color` ，可以实现背景图像对文字的优美效果。

```css
h1 {
  background-image: url("");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

#### 5. background-size

**`length`**，该属性值是设置背景图像的宽度和高度的，第一个值是宽度，第二个值是设置高度的。如果只设置第一个值，那么第二个值会自动转换为 “`auto`”;

**`percentage `**该属性是以父元素的百分比来设置图片的宽度和高度的，第一个值是宽度，第二个值是高度。如果只设置一个值，那么第二个值会被设置为 “`auto`”;

**`cover`：** 有一部分没显示，覆盖的意思，代表图片一定要覆盖盒子,缩放后图片一定会大于等于盒子                                                

只要有一边缩放到了盒子内就停止缩放                                       

**`contain`：**没变形，完全显示了，包含的意思，代表图片一定要被盒子包含，缩放后图片一定小于等于盒子                                                

要两边都缩放到盒子内才停止缩放

> 补充

`img`属于`html`的标签，而`background-image`属于`css样式`，所以浏览器在解析时，会优先加载`img`标签，之后才会加载`background-image`，对于比较重要的图像，如`logo`，可使用`img`标签进行导入，这样会优先显示出来。

如果一个指定的图像无法被绘制 (比如，被指定的 `URI `所表示的文件无法被加载)，浏览器会将此情况等同于其值被设为 `none`。

#### 6. 使用场景

##### 1. 背景适配

```css
body {
  background-image: url('');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
```

案例演示

```css
body {
  margin: 0;
  padding: 0;
  background-image: url('./assets/img/1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
```

![img](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240914963.png)

##### 2. 背景叠加

```css
body {
  background-image: url('./assets/img/7.png'),
      url('./assets/img/2.jpg');
}
```

案例演示

```css
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('./assets/img/7.png'),url('./assets/img/2.jpg');
  background-repeat: repeat,no-repeat;
  background-position: 0 0,center center;
  background-size: 4px 4px,cover;
}
```

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-DvrOcHPU-1636795283603)(D:/start/image-20211113151011712.png)]](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240914474.png)

##### 3. 背景分割

```css
clip-path: polygon(0 30vh,100vw 30vh,100vw 70vh,0 70vh);
```

案例演示: 

```vue
<template>
  <div id="app">
    <div id="left">

    </div>
    <div id="center">

    </div>
    <div id="right">

    </div>
  </div>
</template>
```

```css
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position:relative;
}
#left {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: absolute;
  background-image: url('./assets/img/5.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0 0,100vw 0,100vw 30vh,0 30vh);
}
#center {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: absolute;
  background-image: url('./assets/img/3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0 30vh,100vw 30vh,100vw 70vh,0 70vh);
}
#right {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: absolute;
  background-image: url('./assets/img/1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0 70vh,100vw 70vh,100vw 100vh,0 100vh);
}
```

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-mnnGPLTy-1636795283604)(D:/start/image-20211113152312104.png)]](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240915668.png)

##### 4.渐变色

```css
background-image: linear-gradient(45deg, rgba(251, 194, 235, 0.64) 0%, rgba(49, 106, 199, 0.12) 100%),
url('./assets/img/1.jpg');
```

案例演示

```css
body {
  background-image: linear-gradient(45deg, rgba(251, 194, 235, 0.64) 0%, rgba(49, 106, 199, 0.12) 100%),
  url('./assets/img/1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
```

![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-8w95miyC-1636795283606)(D:/start/image-20211113153138009.png)]](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240915784.png)

##### 5. 文字添加背景

```css
background-image: url("./assets/img/4.jpg");
color: transparent;
-webkit-background-clip: text;
```

案例演示

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 100px;
  background-image: url("./assets/img/4.jpg");
  color: transparent;
  /* background-clip: text; */
  -webkit-background-clip: text;
}
```

![[图片)]](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240915893.png)



### 5. 书写模式

| 属性           | 值                                                           |
| -------------- | ------------------------------------------------------------ |
| `direction`    | `ltr  `文本流从左到右(默认值)<br/>`rtl  `文本流从右到左      |
| `unicode-bidi` | `normal `正常值(默认值)<br/>`bidi-override` 设置文本读进方向和`direction`的方向一致 |

### 6. 列表样式

| 属性                  | 值:                                                          |
| --------------------- | ------------------------------------------------------------ |
| `list-style-type`     | `none  `取消列表标识<br/>`decimal  `使用阿拉伯数字标识<br/>`disc  `使用实心圆标识 |
| `list-style-image`    | `list-style-image: url(图片地址)`;                           |
| `list-style-position` | `outside  `标识在内容外侧(默认值)<br/> `inside   `标识在内容里面 |
| `list-style`          | 所有列表样式值都可以使用,而且没有顺序限制.                   |

### 7. 表格属性

| 属性              | 值                                                           |
| ----------------- | ------------------------------------------------------------ |
| `table-layout`    | `auto  `根据内容多少来分配表格的宽度<br/>`fixed `根据实际情况来分配宽度(不根据内容,而是根据设定) |
| `border-collapse` | `separate   `单元格独立 ->每个单元格有自己独立的边框<br/>`collapse  `单元格合并->所有边框单元格共享. |
| `border-spacing`  | 格式1:  `border-spacing`: 值<br/>		单元格之间横向和纵向的间距都是制定的值<br/>格式2:  ` border-spacing`: 值1 值2;<br/>		单元格之间的横向间距是值1,纵向间距是指2 |
| `caption-side`    | `top   `描述在表格的顶部<br/>`bottom `描述在表格的底部       |
| `empty-cells`     | `hide `隐藏空单元格  <br/>`show `显示空单元格                |

### 8. 定位属性

| 属性       | 值                                                           |
| ---------- | ------------------------------------------------------------ |
| `static`   | 元素默认的定位方式就是静态定位                               |
| `absolute` | 绝对定位元素会使得当前元素脱离文档流,可以在任何范围内移动, 距离当前绝度定位元素外层最近的一个非静态定位元素作为参考点. |
| `relative` | 相对应为元素, 没有脱离文档流, 还在页面当中,可以移动, 相对定位的参考点是当前元素原来的位置(`static`时的位置) |
| `fixed`    | 固定位置                                                     |

| 属性      | 值                                                           |
| --------- | ------------------------------------------------------------ |
| `left`    | 设置定位元素距离定位参考点左侧的距离.                        |
| `top`     |                                                              |
| `right`   |                                                              |
| `bottom`  |                                                              |
| `z-index` | 设置定位元素的层级关系,所有元素的默认`z-index的值时0`; 在相同定位的情况下,谁的`z-index`值越大,显示越考上! |

### 9. 布局属性

`display `属性  设置元素的显示方式

	值: none 不显示元素也不占用物理空间
		inline 显示为行内元素
		block  显示为块状元素
		
		inline-block  显示为行内块状元素
			行内块状元素特征:既可以设置宽高,也可以在一行共存.
	
		list-item  显示为li列表标签的样式
		table  显示为table标签的样式,作为块元素显示
		inline-table 显示table标签的样式,但是作为内联元素显示
		table-row 显示为tr标签的样式
		table-cell 显示为td标签的样式
	
	注意:display仅改变元素的显示效果,对用于的视觉改变,不会改变标签的意义,也不可以使用显示效果对应标签都而元素.

`visibility `属性  设置元素显示与否

	值:
		inherit  继承(默认值)  显示与否由父元素的显示决定
		visible  显示
		hidden  隐藏元素  占用物理空间,需要注意和display:none的区别
		collapse  专门用于表格行和单元格的隐藏设置属性.  IE6以下不支持

`overflow-y`属性 设置元素垂直方向溢出的处理方式

	值:auto 如果内容超过元素,则出现滚动条,不超出则不出现滚动条
	
	   scroll  一直存在滚动条,但是有没有滑块取决于内容的高度
	
	   hidden  对于超出高度的内容进行隐藏处理
	
		visible  对于超出的内容做显示处理(默认值)

`overflow-x`属性  设置元素水平方向溢出的处理方式

	值:auto 如果内容超过元素,则出现滚动条,不超出则不出现滚动条
	
	   scroll  一直存在滚动条,但是有没有滑块取决于内容的宽度
	
	   hidden  对于超出宽度的内容进行隐藏处理
	
		visible  对于超出的内容做显示处理(默认值)
	
	注意:正常情况下内容超过元素水平宽度会自动换行到下一行.
	
		不会换行的情况:
	
		1.如果内层包含的不是文字,而是其他图片,元素等内容,而且这些内容宽度超过外层元素
		2.连续的英文字符,没有空格和标点符号,会被浏览器当做一个完整的单词显示,不会强制换行
		3.设置内容显示效果为white-space:nowrap,强制不换行属性

`overflow`属性  设置元素内容溢出(同时设置水平和垂直方向)的处理方式
	

	值:auto 如果内容超过元素,则出现滚动条,不超出则不出现滚动条
	
	   scroll  一直存在滚动条,但是有没有滑块取决于内容的宽度/高度
	
	   hidden  对于超出宽度/高度的内容进行隐藏处理
	
		visible  对于超出的内容做显示处理(默认值)

`float`属性 设置元素的浮动方式

	值:  none  元素不浮动(默认值)
		left  左浮动
		right 右浮动
	
	注意:浮动属性和定位属性是不同的属性.
	
	浮动元素的特征是从元素原有的位置漂浮起来,可以进行左右漂浮,但是不能设置移动位置
	浮动元素不会脱离文档流,位置处于静态定位元素和决定定位之间.

`clear`属性  清除浮动属性

	值: none 不清除浮动(默认值)
		left 清除左浮动
		right 清除右浮动
		both 清除左右浮动(常用)


注意:浮动和清除浮动属性是在页面布局中最常用的属性.

	常用的浮动位置:水平导航,页面布局,文字环绕.

## 3. 选择器

开发中经常需要找到特定的网页元素进行设置样式, 我们可以通过` css选择器` 按照一定的规则选出符合条件的元素，为之添加`CSS样式`

> 选择器效率比较低，大概可以这么归类

- 通用选择器（`universal selector`） 
- 元素选择器（`type selectors`） 
- 类选择器（`class selectors`） 
- `id`选择器（`id selectors`） 
- 属性选择器（`attribute selectors`） 
- 组合（`combinators`） 
- 伪类（`pseudo-classes`） 
- 伪元素（`pseudo-elements`）

### 1. 通用选择器

所有的元素都会被选中,  使用时一般用于浏览器之间的样式重置操作或者配合关系选择器进行限定选取

```css
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
```

一般用来给所有元素作一些通用性的设置, 会对所有的元素设置属性, 效率比较低，尽量不要使用

> `css reaset`

`normalize.css`

### 2. 元素选择器

直接使用`HTML标签`的名称作为选择器,就可以直接选中页面中同名的`HTML标签`, 统一添加样式.

```html
<div>选中</div>
<p>不选中</p>
<div>选中</div>
<style>
  /* 选中页面中所有的div元素 */
  div{
    color:red;
  }

</style>
```

### 3. 类选择器

通过为制定的标签添加`class`属性,并且定义一个属性值,在选取时使用`.自定义class值`就可以选中所有具有当前`class值`的标签.

```html
	<div class="red">选中</div>	
	<div class="green">不选中</div>	
	<span class="red">选中</span>	
	<style>
		/*选中页面中所有的具有class值为red的元素*/
		.red{
			color:red;
		}

	</style>
```

### 4. id选择器

通过为指定 的标签添加`id属性`并且定义一个`id值`. 一个`HTML`文档里面的`id值`是唯一的，不能重复

`id值`如果由多个单词组成，单词之间可以用中划线`-`、下划线`_`连接，也可以使用`驼峰标识`

最好不要用标签名作为`id值 `

```html
	<div class="red">不选中</div>	
	<div id="select">选中</div>	
	<span class="red">不选中</span>	
	<style>
		/*选中页面中所有的具有id值为select的元素*/
		#select{
			color:red;
		}

	</style>
```

### 5. 属性选择器

属性选择器的标志性符号是 `[]`。

- 拥有某一个`att`属性 `[att]`
- `att`属性等于`value`值 `[att="val"] `

- `E[title]` 选中页面的`E元素`，并且E存在 `title `属性即可。
- `E[title="abc"]`选中页面的`E元素`，并且`E`需要带有`title`属性，且属性值完全等于`abc`。
- `E[attr~=val]`  选择具有 `att `属性且属性值为：用空格分隔的字词列表，其中一个等于 `val `的`E元素`。
- `E[attr|=val]` 表示要么是一个单独的属性值，要么这个属性值是以“`-`”分隔的。
- `E[title^="abc"]` 选中页面的`E`元素，并且`E`需要带有 `title 属性`,属性值以 `abc `开头。
- `E[title$="abc"]` 选中页面的`E`元素，并且`E`需要带有` title 属性`,属性值以 `abc `结尾。
- `E[title*="abc"]` 选中页面的`E`元素，并且`E`需要带有` title 属性`,属性值任意位置包含`abc`。

```css
  [title] {
    color: red;
  }

 /* 中间不能有空格 */ 
  p[title] {
    color: red;
  }

  p[title*="h1-title"] {
    color: red;
  }
```

### 5. 后代选择器

后代选择器是利用标签之间的嵌套关系进行元素的选取,可以很好的限制选取元素的范围.

选择器之间以空格分割

> 所有的后代(直接/间接的后代)  选择器之间以空格分割

```html
<div class="red">
  <span class="red">选中</span>
  <span id="select">选中</span>
</div>
<div class="green">选中</div>

<style>
  /*选中页面中所有的具有class值为red的元素*/
  div.red #select{
    color:red;
  }
</style>
```

> 直接子代选择器(必须是直接自带)

选择器之间以` >` 分割

```css
div > span {
  color: red;
}
```

### 6. 兄弟选择器

> 相邻兄弟选择器 `+`

若果第一个不是选择的元素, 不生效

> 普遍兄弟选择器 `~ `

对所有之后的兄弟选择

### 7. 交集选择器

交集选择器: 需要同时符合两个选择器条件, 在开发中通常为了精准的选择某一个元素

```css
div.box {
    
}
```

### 8. 并集选择器

如果多个选择器使用相同的`CSS`样式,那么我们可以进行`CSS`精简操作,使得`CSS属性`只书写一遍即可.将多个`css`使用逗号分隔即可

```html
	<div class="red">选中</div>	
	<div class="green">选中</div>	
	<span class="red">选中</span>	
	<span id="select">选中</span>	
	<style>
		/*选中页面中所有的.red、.green、#select元素*/
		.red,.green,#select{
			color:red;
		}

	</style>
```

### 9. 伪类选择器

伪类是选择器的一种，它用于选择处于特定状态的元素

![image-20220714151257243](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207141512355.png)

#### 1. 动态伪类

根据不同的状态显示不同的样式，一般多用于`<a></a>`标签

> 一般有四种状态：

`a:link ` 设置正常连接的颜色

`a:hover` 设置鼠标经过时的样式

`a:active` 设置鼠标点击时的样式

`a:visited `设置连接访问过后的状态.

> 使用注意

`:hover`必须放在`:link`和`:visited`后面才能完全生效

`:active`必须放在`:hover`后面才能完全生效

所以建议的编写顺序是 `:link`、`:visited`、`:hover`、`:active`

除了`a`元素，`:hover`、`:active`也能用在其他元素上

> ` :focus`指当前拥有输入焦点的元素

因为链接`a`元素可以被键盘的`Tab`键选中聚焦，所以`:focus`也适用于`a`元素

> 直接给`a`元素设置样式，相当于给`a`元素的所有动态伪类都设置了

相当于`a:link`、`a:visited`、`a:hover`、`a:active`、`a:focus`的`color`都是`red`

#### 2. 目标伪类

`:target` 与 `id` 有关

#### 3. 伪元素选择器

- `:first-letter` 为第一个字符的样式
- `:first-line` 为第一行添加样式
- `:before` 在元素内容的最前面添加的内容，需要配合`content`属性使用
- `:after` 在元素内容的最后面添加的内容，需要配合`content`属性使用

> 注意

为了区分伪元素和伪类，建议伪元素使用`2个冒`号，比如`::first-line`

#### 4. 结构伪类选择器

伪类选择器的标志性符号是 `:`。

`CSS`中有一些伪类选择器，比如`:link`、`:active`、`:visited`、`:hover`，这些是动态伪类选择器。

`CSS3`又新增了其它的伪类选择器。即 `CSS3`中的**`结构伪类选择器`**：即通过结构来进行筛选。


- `E:first-child` 匹配父元素的第一个子元素E。

- `E:last-child` 匹配父元素的最后一个子元素E。

- `E:nth-child(n)` 匹配父元素的第n个子元素E。注意，盒子的编号是从`1`开始算起，不是从`0`开始算起。

- `E:nth-child(odd)` 匹配奇数

- `E:nth-child(even)` 匹配偶数

- `E:nth-last-child(n)` 匹配父元素的倒数第n个子元素E。

- `E:first-of-type` 匹配同类型中的第一个同级兄弟元素E。

- `E:last-of-type` 匹配同类型中的最后一个同级兄弟元素E。

- `E:nth-of-type(n)` 匹配同类型中的第n个同级兄弟元素E。

- `E:nth-last-of-type(n)` 匹配同类型中的倒数第n个同级兄弟元素E。

既然上面这几个选择器带有`type`，我们可以这样理解：先在同级里找到所有的E类型，然后根据 n 进行匹配。

理解：

（1）这里我们要好好理解父元素的含义，它指的是：以 E 元素的父元素为参考。

- 如果选择器写成`li:nth-child(2)`，则表示第2个 `li`。

- 如果选择器写成`li:nth-child(n)`，则表示所有的`li`。因为此时的 `n` 表示 0,1,2,3,4,5,6,7,8.....（当n小于1时无效，因为n = 0 也是不会选中的）

- 如果选择器写成`li:nth-child(2n)`，则表示所有的第偶数个 `li`。

- 如果选择器写成`li:nth-child(2n+1)`，则表示所有的第奇数个 `li`。

- 如果选择器写成`li:nth-child(-n+5)`，则表示前5个 `li`。

- 如果选择器写成`li:nth-last-child(-n+5)`，则表示最后5个 `li`。

- 如果选择器写成`li:nth-child(7n)`，则表示选中7的倍数。。

上面列举的选择器中，我们只要记住： `n` 表示 0,1,2,3,4,5,6,7,8.....就很容易明白了。

### 10. 优先级

#### 1. 优先级的六大分类

下面的优先级依次降低

> **`! important`** 

只需要在属性后面使用`! important`。它会覆盖页面内任何位置定义的元素样式。

不管别的权重是多少, 反正听他的

> 在`html`中给元素标签加`style`，即内联样式。该方法会造成`css`难以管理，所以不推荐使用。

```html
<h1 style="display: 'none';">隐藏</h1>
```

权重为` 1,0,0,0`

> 由一个或多个`id选择器`来定义

权重为 `0,1,0,0`

> 由一个或多个类选择器、属性选择器、伪类选择器定义。

权重为 `0,0,1,0`

> 由一个或多个标签选择器定义。

权重为 `0,0,0,1`

> 通配选择器

优先级最低, 但是会为所有的标签添加属性, 会造成性能的问题

权重为 `0,0,0,0`

> 总结

`! important` > `行内样式` >` id选择器` > `类选择器` > `标签选择器` `伪类选择器` > `通配选择器`

## 4. 属性的特性

### 1. 继承

如果一个属性具备继承性, 那么在该元素上设置后, 它的后代元素都可以继承这个属性

当然, 如果后代元素自己有设置该属性, 那么优先使用后代元素自己的属性(不管继承过来的属性权重多高)

常见的`font-size/font-family/font-weight/line-height/color/text-align`都具有继承性

> 强制继承 `inherit`

```html
<style>
  div {
    color: red;
    border: 1px solid gray;
  }
    
  div > p {
    /*强制继承*/
    border: inherit; 
  }
</style>

<div>
  <p>123</p>
</div>
```

> 最近的祖先样式比其他祖先样式优先级高。

```html
<div style="color: red">
    <div style="color: blue">
        <div class="son"></div>
        <!-- 颜色为 `blue` -->
    </div>
</div>
```

### 2. 层叠

对于一个元素来说, 相同一个属性我们可以通过不同的选择器给它进行多次设置, 属性会被一层层覆盖上去, 但是最终只有一个会生效

> 判断依据

- 选择器的权重, 权重大的生效, 根据权重可以判断出优先级

- 先后顺序, 权重相同时, 后面设置的生效

> 权重计算

按照经验，为了方便比较CSS属性的优先级，可以给CSS属性所处的环境定义一个权值

◼ `!important`：10000

◼ 内联样式：1000

◼ ` id`选择器：100

◼ 类选择器、属性选择器、伪类：10

◼ 元素选择器、伪元素：1 

◼ 通配符：0

> 权重值越大，优先级越高

权值从左到右依次比较, 如果相等, 则比较下一位, 如果最后一位也相等, 谁离得近, 则使用谁的样式

`1,0,22,12` 权值大于 `0,22,23,13`

```html
<head>        
		.red p{
            color: red ;    // 红色
        }
        .blue p{
            color: blue ;    // 蓝色
        }
</head>
<body>
<div class="red">
    <div class="blue">
        <p>我是什么颜色？</p>
    </div>
</div>

<div class="blue">
    <div class="red">
        <p>我是什么颜色？</p>
    </div>
</div>
</body>
```

最后面的颜色都是蓝色, 因为权值相等, `.blue p` 离代码近

但是需要注意的是, 权值的四个位不会互相影响

用一个夸张的例子解释

```html
    <style>
        #id p {
            color: red;
        }

        .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 p {
            color: blue;
        }
    </style>


<div id="id" class="class1">
    <div class="class1">
        <div class="class1">
            <div class="class1">
                <div class="class1">
                    <div class="class1">
                        <div class="class1">
                            <div class="class1">
                                <div class="class1">
                                    <div class="class1">
                                        <div class="class1">
                                            <div class="class1">
                                                <div class="class1">
                                                    <div class="class1">
                                                        <div class="class1">
                                                            <div class="class1">
                                                                <div class="class1">
                                                                    <div class="class1">
                                                                        <div class="class1">
                                                                            <p>123</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

`#id p ` 的权重是 `0,1,0,1`

`.class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 .class1 p` 的权重是 `0,0,19,1`

最后的结果是权重的第二位 `#id p `  大, 因为它的第二权重大

## 5. 元素显示方式

块级元素（`block-level elements`）: 独占父元素的一行

行内级元素（`inline-level elements`）:多个行内级元素可以在父元素的同一行中显示

`div`是块级元素, `span`是行内级元素, `div`之所以是块级元素仅仅是因为浏览器默认设置了`display`属性而已

### 1. display

`block`：让元素显示为块级元素

- 独占父元素的一行
- 可以随意设置宽高
- 高度默认由内容决定

`inline`：让元素显示为行内级元素

- 跟其他行内级元素在同一行显示; 
- 不可以随意设置宽高; 
- 宽高都由内容决定;

`inline-block`：让元素同时具备行内级、块级元素的特征

- 对外来说，它是一个行内级元素
- 对内来说，它是一个块级元素
- 特殊情况，`p`元素不能包含其他块级元素

`none`：隐藏元素

### 2. 设置元素的隐藏方式

◼ 方法一: `display`设置为`none`

元素不显示出来, 并且也不占据位置, 不占据任何空间

◼ 方法二: `visibility`设置为`hidden`

设置为`hidden`, 虽然元素不可见, 但是会占据元素应该占据的空间

默认为`visible`, 元素是可见的; 

◼ 方法三: `rgba`设置颜色, 将`a`的值设置为`0 `

`rgba`的`a`设置的是`alpha`值, 可以设置透明度, 不影响子元素

◼ 方法四: `opacity`设置透明度, 设置为`0 `

设置整个元素的透明度, 会影响所有的子元素

### 3. overflow

◼ `visible`：溢出的内容照样可见

◼ `hidden`：溢出的内容直接裁剪

◼ `scroll`：溢出的内容被裁剪，但可以通过滚动机制查看

◼ 会一直显示滚动条区域，滚动条区域占用的空间属于`width`、`height`

◼ `auto`：自动根据内容是否溢出来决定是否提供滚动机制







## 5. 盒子模型

页面中的任何一个元素在显示和处理时都是以一个盒子的方式进行处理的.

![image-20220715105511971](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207151055089.png)

### 1. width height

宽度设置: `width`

高度设置: `height`

> 另外我们还可以设置如下属性: 

`min-width`：最小宽度，无论内容多少，宽度都大于或等于`min-width`

`max-width`：最大宽度，无论内容多少，宽度都小于或等于`max-width`

`min-height`：最小高度，无论内容多少，高度都大于或等于`min-height`

`max-height`：最大高度，无论内容多少，高度都小于或等于`max-height`

移动端适配时, 可以设置最大宽度和最小宽度; 

### 2. border

| 属性           | 作用                      | 值                                                           |
| -------------- | ------------------------- | ------------------------------------------------------------ |
| `border`       | 用于设置元素的边框        | 设置元素四个边的边框颜色,宽度和风格属性.                     |
| `border-width` | 同时设置4个边的边框的宽度 |                                                              |
| `border-style` | 同时设置4个边的边框风格   | `none `无边框<br/> `solid `实线边框<br/> `dashed` 虚线边框<br/> `double `双线边框<br/>`dotted `点状变量 |
| `border-color` | 同时设置4个边的边框颜色   |                                                              |

### 3. padding

`padding`属性 同时设置四个方向的内补白距离

格式1: `padding`:值   同时设置四个方向的内补白为相同的值.

格式2: `padding`:值1 值2  设置上下方向内补白为值1 ,左右方向内补白为值2.

格式3: `padding`:值1 值2 值3 设置上方向内补白为值1,左右内补白为值2,下方向内补白为值3

格式4: `padding`:值1 值2 值3 值4  上方向内补白值1,右方向内补白值2,下方向内补白值3,左方向内补白值4(顺时针设置)

注意: `padding`属性的增加会导致元素整体宽高的增加.如果希望宽度高度不变,将`padding`属性的值从元素的宽度和高度的设置中减掉.

### 4. margin

`margin`属性   同时设置四个方向的外间距

格式1:`margin`:值   同时设置四个方向的外间距为相同的值.

格式2:`margin`:值1 值2  设置上下方向外间距为值1 ,左右方向外间距为值2.

格式3:`margin`:值1 值2 值3 设置上方向外间距为值1,左右外间距为值2,下方向外间距为值3

格式4:`margin`:值1 值2 值3 值4  上方向外间距值1,右方向外间距值2,下方向外间距值3,左方向外间距值4(顺时针设置)

## 6.  度量单位

`px` 像素单位

	相对单位
		像素的大小由系统的分辨率决定.
		像素的大小 = 物理屏幕的距离/分辨率

`em `相对长度单位

	所有未经调整的浏览器都符合: 1em=16px。
	
	大小和一个汉字的大小相同
	相对于浏览器的默认字体尺寸

`ex `相对长度单位

	一个英文字母x的大小

`cm `厘米

	绝对单位
		就是现实中1厘米的大小
		页面布局禁止使用
		设计用于打印的页面可以使用.

`mm `毫米

	绝对单位
		就是显示中1毫米的大小
		页面布局禁止使用
		设计用于打印的页面可以使用.

`in `英寸

	绝对单位.
	1in = 2.54cm

`point `点

	绝对单位.
	
	1in = 72pt

`pc `派卡

	绝对单位
	
	1in = 6pc

**`rem`** 是`CSS3`新增的一个（`root em`）

```css
相对单位

通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。
与 em 的区别在于使用 rem 为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。
```

**`vm`** 视窗宽度

```css
比如
	1vm 宽度为相对于视窗的宽度的百分之一
```

**`vh`** 视窗高度

```css
比如
	1vh 高度为相对于视窗的高度的百分之一
```

## 7. 布局





## @ 补充知识

### 1. BFC

> 块格式化上下文（`Block Formatting Context`，`BFC`） 是 `Web `页面的`可视 CSS 渲染`的一部分
>
> 是块级盒子的布局过程发生的区域
>
> 也是浮动元素与其他元素交互的区域
>
> 简单地说, `BFC`就是`css`布局的一个概念, 是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。

#### 1.1 BFC 的创建条件

- 根元素（`<html>`）
- 浮动元素(`float` 值不为 `none`）
- 绝对定位元素（`position`) 值为 `absolute` 或 `fixed`）
- 行内块元素（`display`) 值为 `inline-block`）
- 表格单元格（`display`) 值为 `table-cell`，HTML表格单元格默认值）
- 表格标题（``display`) 值为 `table-caption`，HTML表格标题默认值）
- 匿名表格单元格元素（`display`) 值为 `table`、`table-row`、 `table-row-group`、`table-header-group`、`table-footer-group`（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 `inline-table`）
- `overflow` 值不为 `visible`、`clip` 的块元素
- `display`) 值为 `flow-root` 的元素
- `contain`) 值为 `layout`、`content` 或 `paint` 的元素
- 弹性元素（`display`) 值为 `flex` 或 `inline-flex` 元素的直接子元素），如果它们本身既不是[`flex`](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Container)、[`grid`](https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Container)也不是[`table`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Table)容器
- 网格元素（`display`) 值为 `grid` 或 `inline-grid` 元素的直接子元素），如果它们本身既不是[`flex`](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Container)、[`grid`](https://developer.mozilla.org/zh-CN/docs/Glossary/Grid_Container)也不是[`table`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Table)容器
- 多列容器（`column-count`) 或 `column-width`) 值不为 `auto`，包括`column-count` 为 `1`）
- `column-span` 值为 `all` 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中([规范变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51), [Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362))

> 上面的只是为了让你看一眼, 但是不需要记忆呢么多没有用
>
> 一般常见的有

| 条件                                     | 解释       | 补充 |
| ---------------------------------------- | ---------- | ---- |
| 根元素                                   | 即HTML元素 |      |
| `float`的值不为`none`                    |            |      |
| `overflow`的值不为`visible`              |            |      |
| `display`的值为`inline-block`            |            |      |
| `position`的值为`absolute`或`fixed 　　` |            |      |

#### 1.2 BFC  的作用

> 格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 `BFC`，而不是更改布局，因为它将：

- 包含内部浮动, 清除内部浮动
- 排除外部浮动
- 阻止[外边距重叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- 可以阻止元素被浮动元素覆盖
- 自适应两栏布局

#### 1.3 BFC 的布局规则

> 1. 内部的`Box`会在垂直方向，一个接一个地放置。

我们平常说的盒子是由`margin`、`border`、`padding`、`content`组成的，实际上每种类型的四条边定义了一个盒子，分别是分别是**`content box`、`padding box`、`border box`、`margin box`**

这四种类型的盒子一直存在，即使他们的值为`0`. 

决定块盒在包含块中与相邻块盒的垂直间距的便是`margin-box`。




> 2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠



> 3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。



> 4. BFC的区域不会与float box重叠。



> 5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。



> 6. 计算BFC的高度时，浮动元素也参与计算

### 2. css hack

`CSS hack`是通过加入一些特殊的符号，让不同的浏览器识别不同的符号，以达到应用不同的样式的目的。

但是需要注意的是

- `IE10`及以上版本已将条件注释特性移除，使用时需注意。
- 尽可能减少对`CSS Hack`的使用。*`Hack`有风险，使用需谨慎*
- 条件注释只有在IE浏览器下才能执行，这个代码在非IE浏览下被当做注释视而不见。

> 对浏览前的选择

```css
<!--[if <keywords>? IE <version>?]>
HTML代码块
<![endif]-->
```

`if条件 `共包含6种选择方式

| 关键字 | 含义                           |
| ------ | ------------------------------ |
| 空     | 指定是否IE或IE某个版本         |
| `gt`   | 选择大于指定版本的IE版本       |
| `gte`  | 选择大于或等于指定版本的IE版本 |
| `lt`   | 选择小于指定版本的IE版本       |
| `lte`  | 选择小于或等于指定版本的IE版本 |
| `!`    | 选择除指定版本外的所有IE版本   |

```css
/*小于对于 ie7 的版本*/
<!--[if lte IE 7]>
<style>
.test{color:red;}
</style>
<![endif]-->
```

>对属性的选择

```css
selector{<hack>?property:value<hack>?;}
```

不同的浏览前版本需要使用不同的 hack 关键字

| hack关键字 | hack生效的浏览前版本              |
| ---------- | --------------------------------- |
| `_`        | 选择`IE6及以下`。                 |
| `*`        | 选择`IE7及以下`。                 |
| `\9`       | 选择`IE6+`                        |
| `\0`       | 选择`IE8+`和`Opera15以下`的浏览器 |

```css
.test {
	color: #090\9; /* For IE8+ */
	*color: #f00;  /* For IE7 and earlier */
	_color: #ff0;  /* For IE6 and earlier */
}
```

> 对选择器的选择

```css
<hack> selector { 

}
```

| hack关键字 | hack生效的浏览前版本              |
| ---------- | --------------------------------- |
| `_`        | 选择`IE6及以下`。                 |
| `*`        | 选择`IE7及以下`。                 |
| `\9`       | 选择`IE6+`                        |
| `\0`       | 选择`IE8+`和`Opera15以下`的浏览器 |

```css
* html .test { color: #090; }       /* For IE6 and earlier */
* + html .test { color: #ff0; }     /* For IE7 */
.test:lang(zh-cmn-Hans) { color: #f00; }  /* For IE8+ and not IE */
.test:nth-child(1) { color: #0ff; } /* For IE9+ and not IE */
```

> 不推荐使用的原因

`CSS hack`是因为现有浏览器对标准的解析不同，为了兼容各浏览器，所采用的一种补救方法。

现在很多`hacks`已经抛弃了最初的原则，而滥用`hack`会导致浏览器更新之后产生更多的兼容性问题。因此，并不推荐使用`CSS hack`来解决兼容性问题。







# `乱`






##   CSS 布局

css 提供了 3 种机制 来设置盒子的摆放位置，分别是普通流,浮动和定位

1. **普通流**（标准流）
   - **块级元素**会独占一行，**从上向下**顺序排列；
     - 常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table
   - **行内元素**会按照顺序，**从左到右**顺序排列，碰到父元素边缘则自动换行；
     - 常用元素：span、a、i、em等
2. **浮动**
   - 让盒子从普通流中**浮**起来,主要作用让多个块级盒子一行显示。
3. **定位**
   - 将盒子**定**在浏览器的某一个**位**置——CSS 离不开定位，特别是后面的 js 特效。

###  2. float布局的作用

1. **让多个盒子(div)水平排列成一行**，使得浮动成为布局的重要手段。**(核心目的)**
2. 可以实现盒子的左右对齐等等..
3. 浮动最早是用来**控制图片**，实现**文字环绕图片的效果**。

---

> **脱离文档流，但不脱离文本流**

代码举例：

下面这两个并列的`div1`和`div2`，默认是在标准流中的：
![在这里插入图片描述](https://img-blog.csdnimg.cn/a733c110af8d4dc896e35e2c31f96d44.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_18,color_FFFFFF,t_70,g_se,x_16)

在此基础之上，如果给`div1`增加`float: left`属性后，效果如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/59973b95b08748e48344ce5d837dddd1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
上图中，可以看到，`div1`设置为浮动后，会脱离文档流，不会对`div2`的布局造成影响；但是`div1`不会脱离文本流，它会影响`div2`中文字的排列。

**其实，这正是 float 属性的作用。float 本身是用来做图文混排、文字环绕的效果。**

---

### 3. 浮动布局的三个特性

首先在最上面直接说明 `float` 的特性

  1. 漂浮在普通流的上面。`float` 属性会让盒子漂浮在标准流的上面
  2. 浮动的盒子，把自己原来的位置漏给下面标准流的盒子，就是不占有原来位置
  3. 任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。 生成的块级框和我们前面的行内块极其相似。但是元素之间没有空白缝隙
  4. 浮动元素位置尽量靠上

> 先统一页面的布局

```html
<body>
	<div class="one">one</div>
	<div class="two">two</div>
	<div class="three">three</div>
	<div class="four">four</div>
</body>
```

首先要知道，`div` 是块级元素，在页面中独占一行，自上而下排列
![在这里插入图片描述](https://img-blog.csdnimg.cn/4b46b08044d043ebb6fa0b569ba5c276.png)

```css
<style>
    div {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
    }
    .one {
      background-color: gainsboro;
    }
    .two {
      background-color: aquamarine;
    }
    .three {
      background-color: cornflowerblue;
    }
    .four {
      background-color: gray;
    }
  </style>
```

此时的情况就是我们常说的标准流, 可以看出, 即使在宽度足够的情况下, 各个 div 块级元素独占一行

但是如果我们修改 css 样式, 使得 其中一个 div 发生左浮动

```css
.two {
      background-color: aquamarine;
      float: left;
    }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/cffb8d250f894cf480f15f2e9af8956d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
我们再修改 css 样式, 使得其发生右浮动
![在这里插入图片描述](https://img-blog.csdnimg.cn/ba5713cc62bd4763a46a281bcffaf1c2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
在这里,我们就可以解释上面前两条特性了


> 添加了float属性的元素会漂浮在普通流的上面。`float` 属性会让盒子漂浮在标准流的上面

从第一次让 div 开始左浮动时, two 已经脱离了标准文档流, 它以经不占用空间了, three 会上去占用它失去的的空间,重新组成一个流

所有 two 就覆盖了 three

> 浮动的盒子，把自己原来的位置漏给下面标准流的盒子，就是不占有原来位置

接下来, 我们将前三个 `div` 使用 `float` 进行测试

```css
.one {
      float: left;
      background-color: gainsboro;
    }
    .two {
      background-color: aquamarine;
      float: left;
    }
    .three {
      background-color: cornflowerblue;
      float: left;
    }
    .four {
      background-color: gray;
    }
```

结果正如前两条理论一样
![在这里插入图片描述](https://img-blog.csdnimg.cn/fd847529a26842f0937d1260ae686a16.png)

**假如某个div元素A是浮动的，如果A元素上一个元素也是浮动的，那么A元素会跟随在上一个元素的后边(如果一行放不下这两个元素，那么A元素会被挤到下一行)；
如果A元素上一个元素是标准流中的元素，那么A的相对垂直位置不会改变，也就是说A的顶部总是和上一个元素的底部对齐。**

### 4. 浮动的应用

**浮动是脱标的，会影响下面的标准流元素**

此时，我们需要给浮动的元素添加一个标准流的父亲，这样，**最大化的减小了对其他标准流的影响。**

**因为父级盒子很多情况下，不方便给高度，但是子盒子浮动就不占有位置，最后父级盒子高度为0，就影响了下面的标准流盒子。(主要原因)** 

准确地说，并不是清除浮动，而是**清除浮动后造成的影响**

### 5. 清除浮动

**清除浮动主要为了解决父级元素因为子级浮动引起内部高度为0 的问题。清除浮动之后， 父级就会根据浮动的子盒子自动检测高度。
父级有了高度，就不会影响下面的标准流了**

语法：

```css
选择器{clear: 属性值;}  
```

> **对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素。**

| 属性值 | 描述                                       |
| ------ | ------------------------------------------ |
| left   | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right  | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both   | 同时清除左右两侧浮动的影响                 |

### 1).额外标签法(隔墙法)

```html
是W3C推荐的做法是通过在浮动元素末尾添加一个空的标签例如
 <div style=”clear:both”></div>
 或则其他标签br等亦可。
```

- 优点： 通俗易懂，书写方便
- 缺点： 添加许多无意义的标签，结构化较差。

### 2).父级添加overflow属性方法

```css
可以给父级添加： 
overflow为 hidden| auto| scroll  
都可以实现。
```

优点：  代码简洁

缺点：  内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素。

#### 3).使用after伪元素清除浮动

**:after 方式为空元素额外标签法的升级版，好处是不用单独加标签了** 

使用方法：

```css
 .clearfix:after {  
 	content: ""; 
 	display: block; 
 	height: 0; 
 	clear: both; 
 	visibility: hidden;  
 }   

 .clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

- 优点： 符合闭合浮动思想  结构语义化正确
- 缺点： 由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。
- 代表网站： 百度、淘宝网、网易等

#### 4).使用双伪元素清除浮动

使用方法：

```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table; 
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;
}
```

- 优点：  代码更简洁

- 缺点：  由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

- 代表网站： 小米、腾讯等

#### 6. @拓展

做页面的主导航栏, 建议使用 `ul` 的 `li` 里面嵌套 `a `标签, 让 `a` 标签变为块级元素,有利于 seo 优化, 不推荐直接使用大量的 `a` 标签

可通过京东官网验证

![在这里插入图片描述](https://img-blog.csdnimg.cn/c9c368949b664bceb1bf36ee61515f14.png)

## flex

### 1. 如何让一个行内元素水平垂直居中

> 行内元素的居中问题比较简单, 会的可以略过。

#### 1.1 行内元素水平居中

给父容器设置：

```css
    text-align: center;
```

#### 1.2 行内元素垂直居中

让**文字的行高** 等于 **盒子的高度**，可以让单行文本垂直居中。

```css
    .father {
        height: 18px;
        line-height: 18px;
    }
```

> 今天讨论的重点问题



### 2. 如何让一个块级元素水平垂直居中

#### 2.1  方式一：绝对定位 + margin（需要指定子元素的宽高，不推荐）

设置网页的结构

```html
	<div class="father">
        <div class="son">子元素的内容</div>
    </div>
```

设置样式

```css
		.father{
            position: relative;
            height: 500px;
        }
        .son {
            position: absolute;
            width: 200px;
            height: 100px;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -100px;
        }
```

**代码解释**：我们先让子元素的左上角居中，然后向上移动宽度的一半(50px)，就达到了垂直居中的效果；水平居中的原理类似。

**不足之处**：要求指定子元素的宽高，才能写出 `margin-top` 和 `margin-left` 的属性值。

但是，在通常情况下，对那些需要居中的元素来说，其宽高往往是由其内容来决定的，不建议固定宽高。

#### 2.2 方式二：绝对定位 + translate（无需指定子元素的宽高，推荐）

```css
        .father{
            position: relative;
            min-height: 500px;
        }
        .son {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
```

因为 translate() 函数中使用百分比值时，是以这个元素自身的宽度和高度为基准进行换算和移动的（**动态计算宽高**）。


#### 2.3 flex 布局

将父容器设置为 Flex 布局，再给父容器加个属性`justify-content: center`，这样的话，子元素就能水平居中了；再给父容器加个属性 `align-items: center`，这样的话，子元素就能垂直居中了。

```css
        .father{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
```

**不足之处**在于：给父容器设置属性`justify-content: center`和`align-items: center`之后，**导致父容器里的所有子元素们都垂直居中**了（如果父容器里有多个子元素的话）。


#### 2.4  方式4： flex 布局 + margin: auto（推荐）

我们只需写两行声明即可：先给父容器设置 `display: flex`，再给指定的子元素设置我们再熟悉不过的 `margin: auto`，即可让这个指定的子元素在**剩余空间**里，水平垂直居中。

```html
	<div class="father">
        <div class="son">子元素的内容，想水平垂直居中</div>
        <div>这个元素不想水平垂直居中</div>
    </div>
```



```css
        .father{
            display: flex;
            min-height: 100vh;
        }
        .son {
            margin: auto;
        }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/ab9ad5734bb8482abf40a6e14056ee90.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


需要注意，当我们给父容器使用 Flex 布局 时，子元素的`margin: auto`不仅能让其在水平方向上居中，**垂直方向上也是居中的**。

```html
<div class="father">
  <div class="son">子元素的内容，想水平垂直居中</div>
  <div class="son2">这个元素不想水平垂直居中</div>
</div>
```

```css
	  .father{
          display: flex;
          min-height: 100vh;
      }
      .son {
          margin: auto;
      }
      .son2 {
          margin: auto 0;
      }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/789dcfb068f5462d9802129424f8b3ae.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3. flex 布局里的 margin

#### 3.1 最快水平垂直居中一个元素的方法是什么？

> 水平垂直居中也算是 CSS 领域最为常见的一个问题了，不同场景下的方法也各不相同，各有优劣。嗯，下面这种应该算是最便捷的了：

```html
<div class="g-container">
    <div class="g-box"></div>
</div>
```

```css
.g-container {
    display: flex;
}
.g-box {
    margin: auto;
}
```

上面的 `display: flex` 替换成 `display: inline-flex | grid | inline-grid` 也是可以的。

#### 3.2 如何让 `margin: auto` 在垂直方向上居中元素

通常我们会使用这段代码：

```css
div {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
```

让元素相对父元素水平居中。但是如果我们想**让元素相对父元素垂直居中的话，使用 `margin: auto 0` 是不生效的。**

<hr/>

############ 3.2.1 BFC（块格式化上下文) 下 margin: auto 垂直方向无法居中元素的原因:(重要)
**在块格式化上下文中**, 如果 margin-left 和 margin-right 都是 auto，则它们的表达值相等，从而导致元素的水平居中。**( 这里的计算值为元素剩余可用剩余空间的一半)**
而如果 margin-top 和 margin-bottom 都是 auto，则他们的值都为 0，当然也就无法造成垂直方向上的居中。

<hr/>

############ 3.2.2 使用 FFC/GFC 使 margin: auto 在垂直方向上居中元素

要使**单个元素使用 margin: auto 在垂直方向上能够居中元素**，需要让该元素处于 FFC(flex formatting context)，或者 GFC(grid formatting context) 上下文中，也就是这些取值中：

```css
{
    display: flex;
    /* display: inline-flex; */
    /* display: grid; */
    /* display: inline-grid; */
}
```

<hr/>

############ 3.2.3 FFC 下 margin: auto 垂直方向可以居中元素的原因

在 flex 格式化上下文中，设置了 margin: auto 的元素，**在通过 justify-content和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去**

而 `margin: auto` 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

<hr/>


#### 3.3  使用自动 margin 实现 flex 布局下的 space-around

> 在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该维度中的自动 margin 中去

```html
<ul class="g-flex">
    <li>liA</li>
    <li>liB</li>
    <li>liC</li>
    <li>liD</li>
    <li>liE</li>
</ul>
```

```css
	  * {
          margin: 0;
          padding: 0;
      }

      .g-flex {
          list-style: none;
          display: flex;
      }

      .g-flex li {
          padding: 10px 0;
          margin: auto;
      }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/11723500212749cbab1008ee37707c1d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

> 需要注意
> 如果任意方向上的可用空间分配给了该方向的自动 margin ，则对齐属性（justify-content/align-self）在该维度中不起作用，因为 margin 将在排布后窃取该纬度方向剩余的所有可用空间。
> **也就是使用了自动 margin 的 flex 子项目，它们父元素设置的 justify-content 已经它们本身的 align-self 将不再生效，也就是这里存在一个优先级的关系**。

#### 3.4 使用 margin-left: auto 实现不规则两端对齐布局

```html
<ul class="g-nav">
  <li>导航A</li>
  <li>导航B</li>
  <li>导航C</li>
  <li>导航D</li>
  <li class="g-login">登陆</li>
</ul>
```

对最后一个元素使用 `margin-left: auto`，可以很容易实现这个布局：

此时， auto 的计算值就是水平方向上容器排列所有 li 之后的剩余空间。

```css
      * {
          padding: 0;
          margin: 0;
      }
      .g-nav {
          display: flex;
          list-style: none;
          background-color: #############00b9ff;
      }

      .g-nav li {
          padding: 10px 15px;
      }

      .g-login {
          margin-left: auto;
      }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/73e778ff07c14975b6bfe7a70afe88ec.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

当然，不一定是要运用在第一个或者最后一个元素之上，例如这样的布局，也是完全一样的实现：

```html
  <ul class="g-nav">
    <li>导航A</li>
    <li>导航B</li>
    <li>导航C</li>
    <li>导航D</li>
    <li class="g-login">登陆</li>
    <li>注册</li>
    <li>客服</li>
  </ul>
```


```css
      * {
          padding: 0;
          margin: 0;
      }
      .g-nav {
          display: flex;
          list-style: none;
          background-color: #############00b9ff;
      }

      .g-nav li {
          padding: 10px 15px;
      }

      .g-login {
          margin-left: auto;
      }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/03634041680e4e5e91bff400ee030618.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
或者可这么玩

```css
* {
          padding: 0;
          margin: 0;
      }
      ul {
          list-style: none;
          display: flex;
          min-height: 30px;
      }

      ul li {
          padding: 10px 70px;
      }

      ul li:nth-last-child(2) {
          margin-left: auto;
          margin-right: auto;
      }
```

```html
<ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/5327798e264f48c8ac1c319852b85aa7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
明白了原理, 一切好说

#### 3.5 垂直多行居中

这里如果使用 flex 布局，简单的 align-self 或者 align-items 好像都没法快速解决问题。

而使用自动 margin，我们只需要在需要垂直居中的第一个元素上进行 margin-top: auto，最后一个元素上进行 margin-bottom: auto 即可，看看代码示意：

```html
<div class="g-container">
  <p>这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案这是第一段文案</p>
  <p>这是第二行文案</p>
  <p class="s-thirf">1、剩余多行文案需要垂直居中剩余空间1、剩余多行文案需要垂直居中剩余空间1、剩余多行文案需要垂直居中剩余空间1、剩余多行文案需要垂直居中剩余空间1、剩余多行文案需要垂直居中剩余空间1、剩余多行文案需要垂直居中剩余空间</p>
  <p class="s-forth">2、剩余多行文案需要垂直居中剩余空间</p>
  <p>这是最后一行文案</p>
</div>
```


```css
      .g-container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          min-height: 500px;
      }

      .s-thirf {
          margin-top: auto;
      }

      .s-forth {
          margin-bottom: auto;
      }
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/708d06b66dc94963a30ee04dae2fdfb9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 4. 最后强调

块格式化上下文中 `margin-top` 和 `margin-bottom` 的值如果是 auto，则他们的值都为 0

flex 格式化上下文中，**在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去**

单个方向上的自动 margin 也非常有用，它的计算值为该方向上的剩余空间

使用了自动 margin 的 flex 子项目，它们父元素设置的 justify-content 以及它们本身的 align-self 将不再生效

## inline-block 布局的间隙

对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

**思路**：像文本一样去排列 block 元素，没有清除浮动等问题。

**存在的问题**：需要处理间隙。代码举例如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2366a3d3be184a7e984e9a695f37eb93.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

上面的代码，存在两个问题。

**问题一**：如果设置`div2`的宽度为 200px 之后，`div2` 掉下来。

**问题二**：**`div1`和`div2`设置为 inline-block之后，这两个盒子之间存在了间隙**。 **这是因为，此时的 `div1`和`div2` 已经被当成文本了。文本和文本之间，本身就会存在间隙。**

### 间隙的几种解决办法：

办法1：设置父元素`container`的字体大小为0，即`font-size: 0`，然后设置子元素 `div1`、`div2`的字体`font-size: 12px`。

办法2：在写法上，去掉`div1`和`div2`之间的换行。改为：

```html
<div class="div1">div1的inline-block 属性</div><div class="div2">div2的inline-block 属性</div>
```

> 注意, 因为是文字, 所以不能添加空格

## 盒模型中的 box-sizing 属性

CSS3 对盒模型做出了新的定义，即允许开发人员**指定盒子宽度和高度的计算方式**。

这就需要用到 `box-sizing`属性。它的属性值可以是：`content-box`、`border-box`。解释如下。

**外加模式：**（css的默认方式）

```javascript
	box-sizing: content-box;
```

解释：此时设置的 width 和 height 是**内容区域**的宽高。`盒子的实际宽度 = 设置的 width + padding + border`。此时改变 padding 和 border 的大小，也不会改变内容的宽高，而是盒子的总宽高发生变化。


**内减模式：**【需要注意】

```javascript
	box-sizing: border-box;
```


解释：此时设置的 width 和 height 是**盒子**的总宽高。`盒子的实际宽度 = 设置的 width`。此时改变 padding 和 border 的大小，会改变内容的宽高，盒子的总宽高不变。

## 外边距合并

使用margin定义块元素的**垂直外边距**时，可能会出现外边距的合并。

### (1). 相邻块元素垂直外边距的合并

- 当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom
- 下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和
- **取两个值中的较大者**这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

### (2). 嵌套块元素垂直外边距的合并（塌陷）

- 对于两个嵌套关系的块元素，如果父元素没有上内边距及边框
- 父元素的上外边距会与子元素的上外边距发生合并
- 合并后的外边距为两者中的较大者

### **解决方案：**

1. 可以为父元素定义上边框。
2. 可以为父元素定义上内边距
3. 可以为父元素添加overflow:hidden。

## offset scroll client

### 一: offset

> 偏移，补偿，位移。

js中有一套方便的**获取元素尺寸**的办法就是offset家族。offset家族包括：

- offsetWidth

- offsetHight

- offsetLeft

- offsetTop

- offsetParent

#### 1、offsetWidth 和 offsetHight

`offsetWidth` 和 `offsetHight`：获取元素的**宽高 + padding + border**，不包括margin。如下：

- offsetWidth = width + padding + border

- offsetHeight = Height + padding + border

这两个属性，他们绑定在了所有的节点元素上。获取元素之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

#### 2、offsetParent

`offsetParent`：获取当前元素的**定位父元素**。

- 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素。

- 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**。


#### 3、offsetLeft 和 offsetTop

`offsetLeft`：当前元素相对于其**定位父元素**的水平偏移量。

`offsetTop`：当前元素相对于其**定位父元素**的垂直偏移量。

**备注：从父亲的 padding 开始算起，父亲的 border 不算在内。这是只读属性**

#### 4. offsetLeft 和 style.left 区别

offsetLeft 可以返回无定位父元素的偏移量。如果父元素中都没有定位，则body为准。而style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回""（意思是，返回空字符串）;

offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。

```js
div.offsetLeft = 100;
div.style.left = "100px";
```

（3）offsetLeft 和 offsetTop **只读**，而 style.left 和 style.top 可读写（只读是获取值，可写是修改值）


总结：我们一般的做法是：**用offsetLeft 和 offsetTop 获取值，用style.left 和 style.top 赋值**（比较方便）。理由如下：

- style.left：只能获取行内式，获取的值可能为空，容易出现NaN。

- offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值。


### 二: scroll

#### 1、ScrollWidth 和 scrollHeight

`ScrollWidth` 和 `scrollHeight`：获取元素**整个滚动区域**的宽、高。包括 width 和 padding，不包括 border和margin。


**注意**：

`scrollHeight` 的特点是：**如果内容超出了盒子，`scrollHeight`为内容的高**（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。`ScrollWidth`同理。

#### 2、scrollTop 和 scrollLeft

- `scrollLeft`：获取水平滚动条滚动的距离。

- `scrollTop`：获取垂直滚动条滚动的距离。

**实战经验**：

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。

这个实战经验非常有用，可以用来判断用户是否已经将内容滑动到底了。


### 三: client

#### 1. clientWidth 和 clientHeight

元素调用时：

- clientWidth：获取元素的可见宽度（width + padding）。

- clientHeight：获取元素的可见高度（height + padding）。


body/html 调用时：

- clientWidth：获取网页可视区域宽度。

- clientHeight：获取网页可视区域高度。

**声明**：

- `clientWidth` 和 `clientHeight` 属性是只读的，不可修改。

- `clientWidth` 和 `clientHeight` 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。

#### 2. clientX 和 clientY

event调用：

- clientX：鼠标距离可视区域左侧距离。

- clientY：鼠标距离可视区域上侧距离。


### 四: 三者区别

| 方法        | 所占宽度                  |
| ----------- | ------------------------- |
| offsetWidth | width  + padding + border |
| scrollWidth | width  + padding          |
| clientWidth | width  + padding          |

## iconfont 的使用

### 1. 打开官网

[iconfont官网地址](https://www.iconfont.cn/)

![在这里插入图片描述](https://img-blog.csdnimg.cn/9bbfdfd7999f4dda80e6e839e8a3fb35.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 2. 搜索需要的图标

![在这里插入图片描述](https://img-blog.csdnimg.cn/e9f61fb153e4478e9f94b7fe453cfbbc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3. 添加到库, 然后打开收藏夹

![在这里插入图片描述](https://img-blog.csdnimg.cn/30d0fff01376436b8baa17d5cc33d327.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


![在这里插入图片描述](https://img-blog.csdnimg.cn/9d3ac9d6c4104057bb65059377339940.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_13,color_FFFFFF,t_70,g_se,x_16)

### 4. 使用案例

![在这里插入图片描述](https://img-blog.csdnimg.cn/4835c510801549f5b14875326b289980.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

## WebFont 的使用

### 1. [地址](http://iconfont.cn/webfont#!/webfont/index)

![在这里插入图片描述](https://img-blog.csdnimg.cn/4222460149744fba876355df2395e156.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 2. 下载

![在这里插入图片描述](https://img-blog.csdnimg.cn/1b2a97add365413faeff34fba5d03000.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3. 保存到项目文件

然后打开文件夹里的 html 页面

![在这里插入图片描述](https://img-blog.csdnimg.cn/f947eae153f44cc2a4de65e38d205133.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/62f5e03cb5e14816ba20e4bb615c2cc1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 4. 使用实例

![在这里插入图片描述](https://img-blog.csdnimg.cn/ecb8cc08dbac45bbac89b6c462dbc52b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

## 隐藏盒子的方式

（1）方式一：

```css
overflow：hidden;   // 仅仅是隐藏盒子超出的部分
```


（2）**方式二**：

```c's's
display: none;	  // 隐藏盒子，而且不占位置 (用的最多)
```

**一般用于广告的点击后消除效果 (用的最多)**

（3）方式三：

```css
visibility: hidden;   
visibility: visible;   //让盒子重新显示
```

**隐藏盒子，但是需要占据实际的位置。**

（4）方式四：

```c's's
opacity: 0;       
```

设置盒子的透明度（不建议，因为内容也会半透明），占位置


（4）方式五：

//把盒子移得远远的，占位置。

```css
Position/top/left/...-999px   
```

（5）方式六：

//把盒子移得远远的，占位置。

```css
margin-left: 1000px;
```







## 文字移除显示省略号

### 让文字只显示一行，超出显示省略号

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```


## 多行文本, 显示 n 行,剩下的省略号替代

```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
 /*多行在这里修改数字即可 (n)*/
-webkit-line-clamp: 2;
overflow:hidden;
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
```

## ::-webkit-scrollbar

```css
::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
```

## 上下滚动，不显示滚动条

```css
::-webkit-scrollbar {
		display: none;
	}
```

## 扩大点击热区

又是一个无聊的知识点

```css
.click {
	position: relative;
	/* [其余样式] */
}

.click ::before {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	bottom: -10px;
	left: -10px;
}
```

## 消除默认样式 CSS reset

比如下拉框这种比较复杂的元素，是自带默认样式的。

如果没有这个默认样式，则该元素在页面上不会有任何表现，则必然增加一些工作量。

同时，默认样式也会带来一些问题：比如，有些默认样式我们是不需要的；有些默认样式甚至无法去掉。

如果我们不需要默认的样式，这里就需要引入一个概念：**CSS Reset**。

### 常见的 CSS Reset 方案

**方案一**：

CSS Tools: Reset CSS。链接：<https://meyerweb.com/eric/tools/css/reset/>

**方案二**：

雅虎的 CSS Reset。链接：<https://yuilibrary.com/yui/docs/cssreset/>

我们可以直接通过 CDN 的方式引入：

```html
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">
```

**方式三**：（比较有争议）

```css
*{
    margin: 0;
    padding: 0;
}

```

**上面何种写法，比较简洁，但也有争议。有争议的地方在于，可能会导致 css 选择器的性能问题。**

---

### Normalize.css

上面的几种 css reset 的解决思路是：将所有的默认样式清零。

```bash
https://github.com/necolas/normalize.css
```

但是，[Normalize.css](https://necolas.github.io/normalize.css/) 的思路是：既然浏览器提供了这些默认样式，那它就是有意义的。**既然不同浏览器的默认样式不一致，那么，`Normalize.css`就将这些默认样式设置为一致**。

## 获取显示器的分辨率

比如，我的电脑的显示器分辨率是：1920*1080。


获取显示器的分辨率：

```javascript
    window.onresize = function () {
       console.log(window.screen.width + "  :  " + window.screen.height;)
    }
```

## 面试题

### 1.  css reset 和 Normalize.css 有什么区别?

二者都是用来**统一**浏览器的默认样式：

- reset：重置。相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大，讲求跨浏览器的一致性, 会影响性能。（一刀切）
- `Normalize.css` ：标准化。相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。（去伪存真）

---

### 2.  选择器的优先级如何确定

- 选择器越具体，优先级越高。 #xxx 大于 .yyy
- 同样优先级，写在后面的覆盖前面的。
- `!important;` 优先级最高。

---

### 3. 伪类和伪元素的区别是什么？

**概念上的区别：**

- 伪类表示一种状态

- 伪元素是真的有元素。比如 ::after 是真的有元素，可以在页面上显示内容。

**使用上的区别：**

- 伪类：使用单冒号

- 伪元素：使用双冒号

---

### 4. 如何在JS中插入CSS?

代码举例：

```js
new_element = document.createElement("style");
new_element.innerHTML =(".tucao-content p{font-size:18px;}");
document.body.appendChild(new_element);
```

---

### 5. 什么是渐进增强、优雅降级呢？

**渐进增强（progressive enhancement）**：**针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。**（从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能，向页面添加无害于基础浏览器的额外样式和功能。当浏览器支持时，它们会自动地呈现出来并发挥作用。）

**优雅降级（graceful degradation）**：**一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。**（Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了，为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效。）

区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的、能够起作用的版本开始，并不断扩充，以适应未来环境的需要。

## transition

animation 的学习之前 其实需要顺便提一下 transition 

首先强调一下我认为他最大的不足

1.   过渡只关心元素的初始状态和结束状态，没有方法可以获取到元素在过渡中每一帧的状态

下面介绍一下他的四个属性以及简写

### 1.2 transition-property

**不是所有属性都能过渡，只有属性具有一个中间点值才具备过渡效果 !!!**

用于指定应用过渡的属性名称，可以指定多个属性名称，多个属性名称之间用`,` 分隔。

默认值为 `all` 也就是所有的元素都应用过渡效果。

```html
<template>
  <div id="test">
      
  </div>
</template>
<script>
export default {
  name: "Test"
}
</script>
<style scoped>
div{
  width: 200px;
  height: 200px;
  background-color: dodgerblue;
  transition-property: width, height;
}
div:hover {
  width: 400px;
  height: 400px;
}
</style>
```

![\[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-s5i6WknW-1637112573576)(D:/start/image-20211117090918168.png)\]](https://img-blog.csdnimg.cn/c8dbe86dc78047d1afa06fc235549119.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


当鼠标悬浮上去的时候 , 他会立即变成这个样子,**过渡效果不会生效。因为没有设置 transition-duration 属性**,他会立即变成最后的结果

![在这里插入图片描述](https://img-blog.csdnimg.cn/d2052d104765455fbefb5eadc6919c32.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


### 1.3 transition-duration

用于设置过渡的持续时间，属性值以秒`s`或毫秒`ms`为单位，默认值为0 , 为0时，表示变化是瞬时的，看不到过渡效果。

多个每个时长会被应用到由 `transition-property` 指定的对应属性上。

**如果指定的时长个数小于属性个数，那么时长列表会重复.如果时长列表更长，那么该列表会被裁减。**

### 1.4 transiton-timing-function

>   liner
>   ease-in
>   ease-out
>   ease-in-out
>   cubic-bezier

这里先提一下,下面 animation 里会有具体的解释

### 1.5 transition-delay

`transition-delay` 规定了在过渡效果开始作用之前需要等待的时间（延迟时间），值以秒（s）或毫秒（ms）为单位，表明动画过渡效果将在何时开始

**取值为正时会延迟一段时间来响应过渡效果；取值为负时会导致过渡立即开始。**

一个完整的案例

```css
div{
  width: 200px;
  height: 200px;
  background-color: ##000000;
  transition-property: width;
  transition-duration: 3s;
  transition-timing-function: linear;
  transition-delay: 0.5s;
}
div:hover {
  width: 400px;
}
```

### 1.6 简写属性

```css
transiton: 过渡属性 过渡所需要时间 过渡动画函数 过渡延迟时间；
```

### 1.7 transition 的不足

**transition的优点在于简单易用，但是它有几个很大的局限。**
（1）transition需要事件的触发，所以没法在网页加载时自动发生。
（2）transition是一次性的，不能重复发生，除非一再触发。
（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。
CSS Animation就是为了解决这些问题而提出的,完美的解决了这些问题

### 1.8 一个简单的样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS 过渡</title>
  <style>
      body {
          margin: 0;
          padding: 0;
          background-color: #eeeeee;
      }

      .content {
          width: 800px;
          height: 320px;
          padding-left: 20px;
          margin: 80px auto;
      }

      .item {
          width: 230px;
          height: 300px;
          text-align: center;
          margin-right: 20px;
          background-color: #FFF;
          float: left;
          position: relative;
          top: 0;
          overflow: hidden; /* 让溢出的内容隐藏起来。意思是让下方的橙色方形先躲起来 */
          transition: all .5s; /* 从最初到鼠标悬停时的过渡 */
      }

      .item .desc {
          position: absolute;
          left: 0;
          bottom: -80px;
          width: 100%;
          height: 80px;
          background-color: #ff6700;
          transition: all .5s;
      }

      /* 鼠标悬停时，让 item 整体往上移动5px，且加一点阴影 */
      .item:hover {
          top: -5px;
          box-shadow: 0 0 15px #AAA;
      }

      /* 鼠标悬停时，让下方的橙色方形现身 */
      .item:hover .desc {
          bottom: 0;
      }
  </style>
</head>
<body>
<div class="content">
  <div class="item">
    <span class="desc"></span>
  </div>
</div>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/4f0b464cb78945d6a29463ad5b2d89d3.gif#pic_center)





## 2D 转换 (transfrom)

**转换**是 CSS3 中具有颠覆性的一个特征，可以实现元素的**位移、旋转、变形、缩放**，甚至支持矩阵方式。

转换再配合过渡和动画，可以取代大量早期只能靠 Flash 才可以实现的效果。

在 CSS3 当中，通过 `transform` 转换来实现 2D 转换或者 3D 转换。

- 2D转换包括：缩放、移动、旋转。

### 2.1 缩放：`scale`

格式：

```javascript
	transform: scale(x, y);

	transform: scale(2, 0.5);
```

参数解释： x：表示水平方向的缩放倍数。y：表示垂直方向的缩放倍数。如果只写一个值就是等比例缩放。

取值：大于1表示放大，小于1表示缩小。不能为百分比。

### 2.2 位移：translate

格式：


```javascript
	transform: translate(水平位移, 垂直位移);

	transform: translate(-50%, -50%);
```

参数解释：

- 参数为百分比，相对于自身移动。

- 正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

### 2.3 旋转：rotate

格式：

```javascript
	transform: rotate(角度);

	transform: rotate(45deg);
```

参数解释：正值 顺时针；负值：逆时针。

rotate 旋转时，默认是以盒子的正中心为坐标原点的。如果想**改变旋转的坐标原点**，可以用`transform-origin`属性。格式如下：


```javascript
	transform-origin: 水平坐标 垂直坐标;

	transform-origin: 50px 50px;

	transform-origin: center bottom;   //旋转时，以盒子底部的中心为坐标原点
```


## 3D 转换

### 3.1 旋转：rotateX、rotateY、rotateZ

**3D坐标系（左手坐标系）**

**浏览器的这个平面，是X轴、Y轴；垂直于浏览器的平面，是Z轴。**

从上面这句话，我们也能看出：所有的3d旋转，对着正方向去看，都是顺时针旋转。

**格式：**

```javascript
	transform: rotateX(360deg);    //绕 X 轴旋转360度

	transform: rotateY(360deg);    //绕 Y 轴旋转360度

	transform: rotateZ(360deg);    //绕 Z 轴旋转360度

```

### 3.2 移动：translateX、translateY、translateZ

**格式：**

```javascript
	transform: translateX(100px);    //沿着 X 轴移动

	transform: translateY(360px);    //沿着 Y 轴移动

	transform: translateZ(360px);    //沿着 Z 轴移动

```

##### 3.3 透视：perspective

电脑显示屏是一个 2D 平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。

透视可以将一个2D平面，在转换的过程当中，呈现3D效果。但仅仅只是视觉呈现出 3d 效果，并不是正真的3d。

格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有3D转换的子元素

- 作为 transform 属性的一个值，做用于元素自身。

格式举例：

```css
perspective: 500px;
```



## animation

**CSS3的animation属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步**，实现更为复杂的动画效果。ainimation实现动画效果主要由两部分组成：

制作动画分为两步：

1.  定义动画 @keyframes
2.  使用(调用)

### 4.1 定义动画

##### @keyframes(关键帧) 用于 定义动画

```css
@keyframes animation01 {
    0% {
        margin-top: 10px;
    }
    100% {
        margin-top: 20px;
    }
}
```

0%是动画的开始，100%是动画的完成。**中间可以插入任意百分比**
在 @keyframes 中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果
**可以改变任意多的样式任意多的次数。**
或用关键词"from"和"to",等同于0%和100%

两者等同

```css
@keyframes animation01 {
    from {
        margin-top: 10px;
    }
    to {
        margin-top: 20px;
    }
}
```

**部分属性是不可以发生改变的,因为 “不连续”,属性间的变换没有中间值**

### 4.2 调用动画

要调用动画,必须要得给他添加一些必要的属性: 

##### 时间函数（animation-timing-function）

animation-timing-function 属性定义了动画的播放速度曲线。

|                               |                                                              |
| :---------------------------: | :----------------------------------------------------------: |
|              值               |                             描述                             |
|            linear             |                 动画从头到尾的速度是相同的。                 |
|             ease              |        默认。动画以低速开始，然后加快，在结束前变慢。        |
|            ease-in            |                       动画以低速开始。                       |
|           ease-out            |                       动画以低速结束。                       |
|          ease-in-out          |                    动画以低速开始和结束。                    |
|             steps             |              指定了时间函数中的间隔数量（步长）              |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。 |

默认值，如果没有显示写调用的函数，则默认为ease。

**cubic-bezier(*n*,*n*,*n*,*n*)  是生成速度曲线的函数**  


![在这里插入图片描述](https://img-blog.csdnimg.cn/3f8de41fdcdc4ca9ac07eba9d0e7a557.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


从上图中我们可以看到，cubic-bezier有四个点：
两个默认的，即：P0(0,0)，P3(1,1)；
**两个控制点，即 cubic-bezier 函数中传递的四个值,分别依次带入 P1(x1,y1)，P2(x2,y2)**
注：X轴的范围是0~1，超出cubic-bezier将失效，Y轴的取值没有规定，但是也不宜过大。
**我们只要调整两个控制点P1和P2的坐标，最后形成的曲线就是动画曲线。**

举例 cubic-bezier(0.25,0.1,0.25,1)

![在这里插入图片描述](https://img-blog.csdnimg.cn/33e6e8ec905b4ca78e98c4d6180a3386.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


画的丑,下面不手画了

给大家一个地址: https://easings.net/

可以自己去看看 cubic-bezier( ) 函数的演示

![在这里插入图片描述](https://img-blog.csdnimg.cn/f9b92d3cafb8420ba4cd3743d2ae69f0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


and cubic-bezier 可以自己随心所欲地绘制 cubic-bezier( ) 函数

https://cubic-bezier.com/##.17,.67,.83,.67

![在这里插入图片描述](https://img-blog.csdnimg.cn/bb09420f1757434fae48fd5bbad3ce6b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)


**而 steps 会一卡一卡的 生成我们的动画**

---

##### 动画方向（animation-direction）

animation-direction: normal 正序播放  终点=>起点
animation-direction: reverse 倒序播放  终点=>起点
animation-direction: alternate 交替播放  
animation-direction: alternate-reverse 反向交替播放  

---

##### 动画延迟（animation-delay）

animation-delay属性定义动画是从何时开始播放，即动画应用在元素上的到动画开始的这段时间的长度。默认值0s，表示动画在该元素上后立即开始执行。该值以秒(s)或者毫秒(ms)为单位。

---


##### 动画迭代次数（animation-iteration-count）

animation-iteration-count该属性就是定义我们的动画播放的次数。次数可以是1次或者无限循环。默认值只播放一次。

single-animation-iteration-count = infinite | number


---


##### 动画填充模式（animation-fill-mode）

animation-fill-mode是指给定动画播放前后应用元素的样式。

single-animation-fill-mode = none | forwards | backwards | both

animation-fill-mode: none 动画执行前后不改变任何样式
animation-fill-mode: forwards 保持目标动画最后一帧的样式
animation-fill-mode: backwards 保持目标动画第一帧的样式
animation-fill-mode: both 动画将会执行 forwards 和 backwards 执行的动作。


---


##### 动画播放状态（animation-timing-function）

animation-play-state: 定义动画是否运行或者暂停。可以确定查询它来确定动画是否运行。默认值为running

single-animation-timing-function = running | paused

running 动画正常播放
paused 动画暂停播放


---


##### 简写

```css
animation:动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;
```

但是需要注意: 简写属性里面不包含 **animation- play-state**

#### 补充动画

### 5.1 按钮抖动动画

```js
<template>
  <div :class="{ shake: disabled }">
    <button @click="warnDisabled">Click me</button>
    <span v-if="disabled">This feature is disabled!</span>
  </div>
</template>

<script>
export default {
  name: 'ShakeButton',
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 1500)
    }
  }
}
</script>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
```

##### 5.2 背景颜色随鼠标渐变

[演示地址](http://ximingx.com/TransitionColor22_3_24/index.html)

```js
<template>
  <div
      @mousemove="onMousemove"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="movearea"
  >
    <p>Move your mouse across this div...</p>
    <p>x: {{ x }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShakeButton',
  data() {
    return {
      x: 0
    }
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.movearea {
  width: 100vw;
  height: 100vh;
  transition: 0.3s background-color ease;
}
</style>
```

##



## CSS 图片间的缝隙

> 一个缝隙引起的思考
> 关于照片下面会有间隙这件事情, 起初是以为边距或者是填充的原因, 但是测试后发现无果, 决定试试别的方式
> 这是不经意间发现的一个问题, 刚开始是有点疑惑的, 其实写这篇的时候是好无语的, 文章处处有我的无语

---

首先通过代码看一个正常的现象

```html
<body>
    <img src="./public/bg.jpg" alt="">
    <div>1</div>
</body>
```


```css
<style>
        body {
            background: black;
            color: #c1c1c1;
        }

        img {
            width: 150px;
        }

        div {
            width: 300px;
            height: 300px;
            background: aquamarine;
        }
    </style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/3523b77cadc74071bbbd7296f7563772.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
但是在我添加了一个照片之后

```html
<body>
    <img src="./public/bg.jpg" alt="">
    <img src="./public/bg.jpg" alt=""><!-- 改变的地方 -->
    <div>1</div>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/ceabb40df8214251bca73c6be1293e76.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
这个时候的我是相当无语的

为什么, 我不理解, 多多少少有点 ~ ~ ~

上面仅仅是设置了宽高和背景, 并没有额外的样式

```css
<style>
        body {
            background: black;
            color: #c1c1c1;
        }

        img {
            width: 150px;
        }

        div {
            width: 300px;
            height: 300px;
            background: aquamarine;
        }
    </style>
```

哦, 这时候突然想起了 `html` 会识别空格 所以将代码改为了下面的样子

```html
<body>
    <img src="./public/bg.jpg" alt=""><img src="./public/bg.jpg" alt=""><!-- 改变的地方 -->
    <div>1</div>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/a04b2e1b8e374fa59379154981f2123f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
可见这时候的照片之间是没有间隙的

但是这也让我想起了一个额外的问题: 
	
![在这里插入图片描述](https://img-blog.csdnimg.cn/ceabb40df8214251bca73c6be1293e76.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
为什么上下之间也会有间隙, 于是我想到了会不会和 `font-size` 有关,因为之前的空格也算是字符串, 所以有了照片中间的间隙

于是我给 `body` 添加了  `font-size` 的属性

```css
<style>
        body {
            background: black;
            color: #c1c1c1;
            font-size: 150px; // 改变的地方
        }

        img {
            width: 150px;
        }

        div {
            width: 300px;
            height: 300px;
            background: aquamarine;
        }
    </style>
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/ac954e6e2086418a8cce94223898970f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
可以看得出来,  `font-size`  的改变确实会影响他的间隙, 于是我把这一现象归结到和 `font` 有关

于是我决定添加几个文字

```html
<body>
    <img src="./public/bg.jpg" alt="">awegjl <!--awegjl-->
    <div>1</div>
</body>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/b2bec086e63d42b3bf15619601da3997.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
可以看得出, `img` 和后面的文字表现出了基 `baseline` 的样子
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e42d5aaf0b349d0b4d984705324a9b6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
而图片默认是 `inline` 而他的布局也默认是 `baseline`

那么我们是不是可以改变 `vertical-align` 来取消掉它们之间的间隙呢

```html
<style>
        body {
            background: black;
            color: #c1c1c1;
            font-size: 50px;
        }

        img {
            width: 150px;
            vertical-align: bottom; // 改变
        }

        div {
            width: 300px;
            height: 300px;
            background: aquamarine;
        }
    </style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/1b3b749ca79a4d2fa91b0857d9802657.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
所以说, 即使在没有文字的情况下, img 会默认设置属性 `vertical-align: baseline;'`

相应的, 我们也可以设置 `img` 为 `block` 也是可以的

```css
 <style>
        body {
            background: black;
            color: #c1c1c1;
            font-size: 50px;
        }

        img {
            width: 150px;
            display: block;
        }

        div {
            width: 300px;
            height: 300px;
            background: aquamarine;
        }
    </style>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/48099516e1914e8d9f518f4b2596d491.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)

嗯, 无聊的知识又增加了



# less

> Less（代表 Leaner Style Sheets）是一个向后兼容的 CSS 语言扩展。这是 Less 语言和 Less.js 的官方文档，Less.js 是一种将您的 Less 样式转换为 CSS 样式的 JavaScript 工具。

## 1.1  less 的安装

**首先需要安装 node 环境**

使用npm安装

```bash
npm install less -g
```

## 1.2 less用法

### 1.2.1 命令行用法

将 bootstrap.less 编译为 bootstrap.css

```bash
lessc bootstrap.less bootstrap.css
```

### 1.2.2 变量

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

输出

```css
#header {
  width: 10px;
  height: 20px;
}
```

### 1.2.3 混合

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

此时, 类的属性.bordered现在将同时出现在#menu a和.post a中。



### 1.2.4 嵌套

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```



您还可以使用此方法将伪选择器与您的 mixin 捆绑在一起。这是经典的 clearfix hack，重写为 mixin（&代表当前选择器父级）：


```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

诸如@mediaor之类的规则@supports可以以与选择器相同的方式嵌套。at 规则位于顶部，并且与同一规则集中的其他元素的相对顺序保持不变。

这称为冒泡。

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

输出：

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

# Sass

## 2.1 Sass简介

大家都知道，js 中可以自定义变量，**而css 仅仅是一个标记语言，不是编程语言，因此不可以自定义变量、不可以引用等等**。

面对这些问题，我们现在来引入 Sass，简单的说，他是 css 的升级版

相比较于 less, Sass比Less的功能更强大，也更复杂。


### 2.1.1 Sass 的定义

Sass：英文是 Syntactically Awesome Stylesheets Sass。最早由 Hampton Catlin 开发和设计。 一种帮助你简化 CSS 工作流程的方式，帮助你更容易维护和开发 CSS 内容。

官网是：<https://sass-lang.com/>

Sass 是这个世界上最成熟、稳定和强大的专业级 CSS 扩展语言。

**Sass专注的是怎样创建优雅的样式表，而不是内容。**

### 2.1.2 Sass、Compass与CSS

**关系：**

- Less/Sass是语法、Compass是框架、CSS是目标。

**Sass&Compass的好处**：

- 写出更优秀的CSS。

- 解决CSS编写过程中的痛点问题，比如精灵图合图、属性的浏览器前缀处理等。

- 有效组织样式、图片、字体等项目元素。

## 2.2 Sass 的安装

### 2.2.1 安装Ruby（windows环境）

sass引擎是用Ruby语言开发的（但是两者的语法没有关系），因此在安装 Sass 前，需要先安装Ruby（mac下自带Ruby无需再安装Ruby）。

下面来讲一下 Windows 下的安装Sass的步骤。

下载地址：<http://rubyinstaller.org/>

![在这里插入图片描述](https://img-blog.csdnimg.cn/d31acc69baed416e85869d796647bee2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
选择你需要的版本

![在这里插入图片描述](https://img-blog.csdnimg.cn/15d9f2db1a214ab18a6709523b57d69b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_20,color_FFFFFF,t_70,g_se,x_16)
**不一定能下载成功 ~ ~ ~**

然后进行安装

安装时，记得勾选“环境变量”：

 **勾选 <font color="red">Add Ruby executables to your PATH</font>  !important;** 


安装完ruby之后，在命令行中输入`ruby -v`，查看ruby的的版本：

```bash
ruby -v
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/ff3b1cb943f04b41bbbe009020862687.png)

### 2.2.2  Sass的安装

安装完 ruby 之后，在开始菜单中，找到刚才我们安装的 ruby ，打开Start Command Prompt with Ruby。输入`gem install sass`安装Sass。

> Ruby 是使用 gem 来管理它的各种包（比如Sass）。我们安装好ruby之后，gem会自动安装上；**类似于，我们安装完node之后，npm也自动安装好了。**

输入如下命令安装Sass：

如果mac下输入这个命令时没有权限，则需要在前面加上 sudo

```bash
	gem install sass        
```

系统会自动安装上最新版本的Sass。

查看sass版本的命令为:

```bash
	sass -v
```

升级sass版本的命令为：

```bash
	gem update sass
```

你也可以运行帮助命令行来查看你需要的命令：

```bash
	sass -h
```

安装完sass之后，我们在main.scss中写一些代码，然后输入如下命令，就可以将`scss文件`转化为`css文件`：

```bash
	sass main.scss main.css
```



## 2.3  Compass 简介和安装

然而，真正的项目开发中，我们不一定是直接使用 sass 命令，而是使用 Compass。

官网是：<http://compass-style.org/>。

### Compass 安装

输入如下命令安装 Compass：

```bash
	gem isntall compass
```

输入如下命令查看版本：

```bash
	compass -v
```

compass可以直接用来搭建前端项目的样式部分，但并不是常用的方法。

通过 Compass 创建工程目录：


```bash
cd workspace
```

```bash
compass create CompassDemo
```

文件结构如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2044921b300e46fab9692b3c1cee861e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAeGltaW5neA==,size_15,color_FFFFFF,t_70,g_se,x_16)
为了能够让文件实时编译，我们可以通过 copass watch 监听sass文件的变化：

```bash
	cd CompassDemo
```

```bash
	compass watch
```

当.scss文件改动时，会自动生成对应的.css文件。


## 2.4 Sass 语法

### 2.4.1 两种后缀名（两种语法）

sass 有两种后缀名文件：

（1）`.sass`：对空格敏感。不使用大括号和分号，所以每个属性之间是通过换行来分隔。

比如：

```sass
h1
	color: #000
	background: #fff
```

这种语法是类ruby的语法，和CSS的语法相比，相差较大。所以，在3.0版本中就引入了`.scss`的语法。



（2）`.scss`：是css语法的超集，可以使用大括号和分号。

比如：

```ccss
h1 {
	color: #000;
	background: #fff;
}
```


**注意：一个项目中可以混合使用两种语法，但是一个文件中不能同时使用两种语法。**


**两种格式之间的转换：**

我们在工程目录下新建`main.scss`，输入如下代码：

```scss
*{
    margin: 0;
    padding: 0;
}
```

然后输入如下命令，就可以将上面的`main.scss`转化为`main.sass`：

```bash
	sass-convert main.scss main.sass
```


打开生成的`main.sass`，内容如下：

```sass
*
  margin: 0
  padding: 0

```


### 2.4.2  变量语法

Sass 是通过`$`符号来声明变量。

（1）我们新建一个文件`_variables.scss`，这个文件专门用来存放变量，然后在其他的文件中引入`_variables.scss`即可。

因为这个文件只需要存储变量，并不需要它编译出对应的 css 文件，所以我们给文件名的前面加了**下划线**，意思是声明为**局部文件**。

我们在这个文件中，声明两个字体变量：

```css
$font1: sans-serif;

$font2: Arial, sans-serif;
```


（2）新建文件main.scss，在里面引入步骤（1）中的变量文件：

```scss
// 引入变量文件
@import "variables";    

.div1{
    font-family: $font1;
}

.div2{
    font-family: $font2;
}
```

基于 Sass 的既定规则：

- **没有文件后缀名时，Sass 会自动添加 .scss 或者 .sass 的后缀（具体要看已经存在哪个后缀的文件）。**

- 同一目录下，局部文件和非局部文件不能重名。

对应生成的main.css文件如下：

main.css

```css
/* line 9, ../sass/main.scss */
.div1 {
  font-family: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
}

/* line 13, ../sass/main.scss */
.div2 {
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

```



### 2.4.3 注释语法

单行注释：

```scss
//我是单行注释
```

块级注释：

```scss
/*
	我是块级注释
*/
```

二者的区别是：单行注释不会出现在自动生成的css文件中。

### 2.4.4 预处理 watch

**您还可以使用该 --watch标志查看单个文件或目录。**

watch 标志告诉 Sass 监视源文件的更改，并在每次保存 Sass 时重新编译CSS 。如果您想查看（而不是手动构建）您的input.scss文件，您只需将 watch 标志添加到您的命令中，如下所示：

```bash
sass --watch input.scss output.css
```

您可以通过使用文件夹路径作为输入和输出并用冒号分隔它们来监视和输出到目录。在这个例子中：

```bash
sass --watch app/sass:public/stylesheets
```

Sass 会监视文件夹中所有文件的更改，并将 app/sass 编译到 文件夹 public/stylesheets


### 2.4.5 嵌套

在编写HTML时，您可能已经注意到它具有清晰的嵌套和可视层次结构。另一方面，CSS没有。

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```


```css
CSS 输出
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### 2.4.6 模块

**@use您可以根据需要使用规则将其拆分。**

此规则将另一个 Sass 文件作为模块加载，这意味着您可以在 Sass 文件中使用基于文件名的命名空间来引用它的变量、mixins和函数。

```scss
// base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
```

```scss
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

注意, @use 'base'在styles.scss文件中使用, 不需要包含文件base的扩展名。

### 2.4.7 扩展/继承

```scss
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

上面的代码所做的是告诉.message, .success,.error和.warning表现得像%message-shared. 这意味着任何%message-shared出现的地方，.message, .success, .error, & .warning也会出现。

**避免在HTML 元素上编写多个类名。**

# @ 补充

## 1. link 的作用

`link `最常用的链接是 `css`

此外也可以被用来创建站点图标（比如 `favicon` 图标）

> `link `的属性

- `href `: 此属性指定被链接资源的`URL`。 `URL `可以是绝对的，也可以是相对的。

- `rel`：指定链接类型
- - `icon`：站点图标
  - `stylesheet`：`CSS`样式

```html
<link rel="icon" href="./image/1.jpg">
<link rel="stylesheet" href="./1.css">
```

除此之外其他的属性查看 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types

> 性能优化 `DNS-prefetch`

`DNS-prefetch`  是尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。

`href `属性中指要跨域的域名

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/"> 
```

当浏览器从（第三方）服务器请求资源时，必须先将该`跨域域名`解析为 `IP 地址`，然后浏览器才能发出请求。此过程称为 `DNS 解析`。

`DNS 缓存`可以帮助减少此延迟，而 `DNS 解析`可以导致请求增加明显的延迟。

当使用`link` 的  `rel` 为 `dns-prefetch` 时, 可帮助开发人员掩盖 `DNS 解析`延迟。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能。

`dns-prefetch` 仅对跨域上的` DNS 查找`有效

> `link `解析 `css` 的时候不会阻塞 `DOM `树的生成, 但是, 通过`@import` 会造成一些影响

不推荐在 `html` 里使用 `@import` , 会导致先拿到资源, 再去解析



## 2. 进制转换

进位制是一种记数方式，亦称进位计数法或位值计数法, 从 `0` 开始

通俗理解：当数字达到某个值时，进一位

> 常见的进制

`二进制`：当数字到`1`的时候，用一位已经表示不了了，那么就进一位

`八进制`：当数字到`7`的时候，用一位已经表示不了了，那么就进一位

`十进制` : 当数字到`9`的时候，用一位已经表示不了了，那么就进一位

`十六进制`：等等，用一位如何表示十六个数字呢？`a(10)`、`b(11)`、`c(12) `、` d(13) `、` e(14) `、` f(15)`

> 如何表示二进制、八进制、十六进制

二进制（`0b`开头, `binary`）：其中的数字由0、1组成，可以回顾之前学习过的机器语言。

八进制（`0o`开头, `Octonary`）：其中的数字由0~7组成。

十六进制（`0x`开头, `hexadecimal`）：其中的数字由0~9和字母a-f组成（大小写都可以）

> 任何进制转换为十进制采用按权展开法

```js
eg: 10100.01(2) => (10) {
  1 * 2^4 + 1 * 2^2 + 1 * 2^(-2) 
}

eg: 604.01(7) => (10) {
  6 * 7^2 + 4 * 7^0 + 1 * 7^(-2)
}

eg: 678(9) => (10) {
  6 * 9^2 + 7 * 9^1 + 8 * 9^0 = 557
}
```

> 十进制转换任何进制使用短除法

```js
eg: 64(10) => (2) {
	2 64 0
  2 32 0
  2 16 0
  2 8 0
  2 4 0
  2 2 0
  2 1 1
} = 1000000

eg: 79(10) => (8) {
  8 79 7 
  8 9 1
  8 1 1
} = 117

eg: 678(10) => (16) {
  16 678 6
  16 42 A 
  16 2 2
} = 2A6
```

> 二进制 => 八进制 || 二进制 => 十六进制

```js
eg: 10 001 110(2) => (8) {
  2 1 6 
} = 216

eg: 1000 1110(2) => (16) {
  8 E
} = 8E

eg: 101 010 000(2) => (8) {
  5 2 0
} = 520
```

> 八进制 => 十六进制

```js
eg: 145(8) => (16) {
  1 * 8^2 + 4 * 8^1 + 5*8^0 = 101(10)
  16 101 5
  16 6 6
} = 65
```

## 3. CSS 颜色的表示方法

> 颜色关键字

是不区分大小写的标识符，它表示一个具体的颜色

颜色的表示, https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E8%AF%AD%E6%B3%95

> `RGB` 颜色

`RGB`是一种色彩空间，通过`R`（`red`，红色）、`G`（`green`，绿色）、`B`（`blue`，蓝色）三原色来组成了不同的颜色, 也就是通过调整这三个颜色不同的比例，可以组合成其他的颜色

`RGB`各个原色的取值范围是 `0~255`

黑色是最纯洁的颜色, 三色值为 `0,0,0`

> `RGB` 颜色的表示方法

◼ 方式一：十六进制符号：`#RRGGBB`[AA]

`R（红）`、`G（绿）`、`B （蓝）`和`A （alpha）`是十六进制字符（0–9、A–F）；`A`是可选的。`#ff0000`等价于`#ff0000ff`； 

◼ 方式二：十六进制符号缩写：`#RGB[A]`

三位数符号（`#RGB`）是六位数形式（`#RRGGBB`）的减缩版。

比如，`#f09`和`#ff0099`表示同一颜色。

四位数符号（`#RGBA`）是八位数形式（`#RRGGBBAA`）的减缩版。

比如，`#0f38`和`#00ff3388`表示相同颜色。

◼ 方式三：函数符：` rgba`

R（红）、G（绿）、B （蓝）可以是`<number>`（数字），或者`<percentage>`（百分比），`255`相当于`100%`。 

`A（alpha）`可以是`0`到`1`之间的数字，或者百分比，数字`1`相当于`100%`（完全不透明）。

## 4. 浏览器渲染

浏览器主要组件结构

![img](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207112234441.jpeg)

> 浏览器的渲染过程

![image-20220711201849507](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207112018609.png)

解析`HTML`生成`DOM`树。

解析`CSS`生成`CSSOM`规则树。

将`DOM`树与`CSSOM`规则树合并在一起生成渲染树。

遍历渲染树开始布局，计算每个节点的位置大小信息。

将渲染树每个节点绘制到屏幕。

![图片描述](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202207112241715.jpeg)

> 构建`DOM`树

当浏览器接收到服务器响应来的`HTML`文档后，会遍历文档节点，生成`DOM`树。

需要注意的是，`DOM`树的生成过程中可能会被`CSS`和`JS`的加载执行阻塞。

> 构建`CSSOM`规则树

浏览器解析`CSS`文件并生成`CSS`规则树，每个`CSS`文件都被分析成一个`StyleSheet`对象，每个对象都包含`CSS`规则。`CSS`规则对象包含对应于`CSS`语法的选择器和声明对象以及其他对象。

> 渲染阻塞

当浏览器遇到一个 `script `标记时，`DOM `构建将暂停，直至脚本完成执行，然后继续构建`DOM`。每次去执行`JavaScript`脚本都会严重地阻塞`DOM`树的构建，如果`JavaScript`脚本还操作了`CSSOM`，而正好这个`CSSOM`还没有下载和构建，浏览器甚至会延迟脚本执行和构建`DOM`，直至完成其`CSSOM`的下载和构建。

> 构建渲染树

通过`DOM`树和`CSS`规则树我们便可以构建渲染树。浏览器会先从`DOM`树的根节点开始遍历每个可见节点。对每个可见节点，找到其适配的`CSS`样式规则并应用。

渲染树构建完成后，每个节点都是可见节点并且都含有其内容和对应规则的样式。这也是渲染树与`DOM`树的最大区别所在。渲染树是用于显示，那些不可见的元素当然就不会在这棵树中出现了。

除此之外，`display`等于`none`的也不会被显示在这棵树里头，但是`visibility`等于`hidden`的元素是会显示在这棵树里头的。

> 渲染树布局

布局阶段会从渲染树的根节点开始遍历，然后确定每个节点对象在页面上的确切大小与位置，布局阶段的输出是一个盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小。

> 渲染树绘制

在绘制阶段，遍历渲染树，调用渲染器的`paint()`方法在屏幕上显示其内容。渲染树的绘制工作是由浏览器的`UI后端组件`完成的。

## @收藏网站

> 介绍一个实用的 `css `颜色渐变网站 `http://color.oulu.me/`

![](https://raw.githubusercontent.com/ximingx/Figurebed/master/imgs/202205240920679.png)





# X> 面试



## 一. 说说你对元素语义化的理解

元素语义化就是用正确的元素做正确的事情。虽然在理论上，所以的html元素都可以通过css样式实现相同的事情，但是这么做会使事情复杂化，所以我们需要元素语义化来降低复杂度。

元素语义化在我们实际的开发中有很多好处，比如：

* 提高代码的阅读性和可维护性;
* 减少coder之间的沟通成本;
* 能让语音合成工具正确识别网页元素的用途，以便做出正确的反应
* 有利于SEO(Search Engine Optimization)



## 二. 说说你对SEO的理解

SEO就是搜索引擎优化(Search Engine Optimization)，SEO通过了解搜索引擎的运行规则来调整网站，以提高网站的曝光度,以及网站的排名。



Google 搜索引擎的工作流程主要分为三个阶段：

**抓取**：Google 会使用名为“抓取工具”的自动程序搜索网络，以查找新网页或更新后的网页。Google 会将这些网页的地址（即网址）存储在一个大型列表中，以便日后查看。我们会通过许多不同的方法查找网页，但主要方法是跟踪我们已知的网页中的链接。

**编入索引**：Google 会访问它通过抓取得知的网页，并会尝试分析每个网页的主题。Google 会分析网页中的内容、图片和视频文件，尝试了解网页的主题。这些信息存储在 Google 索引中，而 Google 索引是一个存储在海量计算机中的巨大数据库。

**呈现搜索结果**：当用户在 Google 上进行搜索时，Google 会尝试确定最优质的搜索结果。“最佳”结果取决于许多因素，包括用户的位置、语言、设备（桌面设备或手机）以及先前用过的搜索查询。例如，在用户搜索“自行车维修店”后，Google 向巴黎用户显示的答案与向香港用户显示的答案有所不同。支付费用不能提高网页在 Google 搜索结果中的排名，网页排名是完全依靠算法完成的。



## 三. 什么是字符编码？

计算机只认识0和1，但我们各个国家的人都需要在计算机上使用各自的文字，为了在计算机上也能表示、存储和处理像文字、符号等等之类的字符，就必须将这些字符转换成二进制。

于是就出现了字符编码，字符编码将我们的自然语言编码成二进制给计算机看，然后再把这些二进制解码为自然语言给我们看。



## 四. CSS编写样式的方式以及应用场景

css有三种常用的编写方式，分别是内联样式、内部样式表和外部样式表

* 内联样式的应用场景：在Vue的template中某些动态的样式会使用内联样式
* 内部样式表的应用场景：Vue开发中，每个组件都有一个style元素，使用的是内部样式表的方式，不过原理并不相同
* 外部样式表的应用场景：外部样式表是开发中最常用的方式，将所有css文件放在一个独立的文件夹中，然后通过link元素引入到需要的文件中.

* 也可以在index.css文件中通过 @import url(路径) 引入其他css样式



## 五. 最常见的CSS样式以及作用

最常见的css样式有：

* font-size：设置文字大小
* color：设置前景色(颜色)
* background-color：设置背景色
* width：设置宽度
* height：设置高度



## 六. 自行查找2个案例练习

根据之前学习的HTML元素和CSS样式找2个案例练习

* 案例一：登录案例

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        .content {
          background-color: lightblue;
          position: absolute;
          top: 50%;
          /* left: 0; */
          width: 100%;
          height: 400px;
          margin-top: -200px;
          /* overflow: hidden; */
        }
    
        .main {
          text-align: center;
          max-width: 600px;
          height: 400px;
          padding: 100px 0;
          margin: 0 auto;
        }
    
        .main h1 {
          font-size: 80px;
          font-weight: 2px;
        }
    
        form {
          padding: 20px 0;
        }
    
        form input {
          border: 1px solid white;
          display: block;
          margin: 0px auto 10px auto;
          padding: 10px;
          width: 220px;
          border-radius: 30px;
          font-size: 20px;
          font-weight: 300;
          text-align: center;
        }
    
        form input:hover {
          background-color: lightcyan;
        }
    
        form button {
          background-color: lightgreen;
          border-radius: 10px;
          border: 0;
          width: 100px;
          height: 50px;
          padding: 5px 10px
        }
    
        form button:hover {
          background-color: lightcoral;
        }
      </style>
    </head>
    
    <body>
      <div class="content">
        <div class="main">
          <h1>Welcome</h1>
          <form>
            <input type="text" name="" id="" placeholder="请输入账号">
            <input type="password" name="" id="" placeholder="请输入密码">
            <button type="submit">登&nbsp;&nbsp;录</button>
          </form>
        </div>
      </div>
    </body>
    
    </html>
    ```

* 案例二：网页布局案例

  * ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        .header {
          width: 100%;
          height: 100px;
          text-align: center;
          background-color: lightblue;
        }
    
        .main {
          width: 100%;
          height: 600px;
          text-align: center;
          background-color: lightgreen;
        }
    
        .footer {
          width: 100%;
          height: 100px;
          background-color: lightcoral;
        }
      </style>
    </head>
    
    <body>
      <div class="header">
        网页头部信息
      </div>
      <div class="main">
        网页内容信息
      </div>
      <div class="footer">
        网页底部信息
      </div>
    </body>
    
    </html>
    ```



## 七.颜色的表示方式

**1.颜色关键字:**,  例如,  red, yellow 等



**2.RGB有三种表示方式：**

所有颜色都是由三原色R(red)G(green)B(blue)组成，也就是通过调整这三个颜色不同的比例组合成其他的颜色，RGB各个原色的取值是0~255。

- RGB颜色可以通过以#为前缀的十六进制字符和函数（rgb()、rgba()）标记表示。

- **方式一：十六进制符号：**#RRGGBB[AA]

- - R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）；A是可选的。

  - - 比如，#ff0000等价于#ff0000ff；

- **方式二：十六进制符号：**#RGB[A]

- - R（红）、G（绿）、B （蓝）和A （alpha）是十六进制字符（0–9、A–F）；

  - 三位数符号（#RGB）是六位数形式（#RRGGBB）的减缩版。

  - - 比如，#f09和#ff0099表示同一颜色。

  - 四位数符号（#RGBA）是八位数形式（#RRGGBBAA）的减缩版。

  - - 比如，#0f38和#00ff3388表示相同颜色。

- **方式三：函数符：** rgb[a](R, G, B[, A])

- - R（红）、G（绿）、B （蓝）可以是<number>（数字），或者<percentage>（百分比），255相当于100%。
  - A（alpha）可以是0到1之间的数字，或者百分比，数字1相当于100%（完全不透明）。



## 二. 具体说明text-align居中的条件

text-align居中针对是行内级元素(inline-level),比如图片img,文字等.

对于块级元素,想要实现居中,可以通过display:inline-block将块级元素转换成行内块元素



## 三. line-height为什么可以让文字居中？

line-height表示一行文字的高度,也是两行文字基线之间的间距.

当line-height=height,就可以使这行文字在div内部垂直居中.

这是因为行高-文本高度(font-size)=行距,而行距平均分成上下两块,就使文本垂直居中了.



## 四. 总结目前所学过的所有选择器？思考它们的应用场景。

* 通用选择器    *{}
* 简单选择器
  * 类选择器  .box {}
  * id选择器    #box {}
  * 元素选择器    div {}
* 后代选择器
  * 所有的后代(直接或者间接的后代),用空格分割  .box  span {}
  * 直接子代选择器,用>分割   .box>span {}
* 属性选择器    
  * 拥有某一个属性  [attr] {}
  * 属性等于某一个值   [att=val] {}
  * 属性包含某一个值  [attr^=val]{}
* 兄弟选择器
  * 相邻兄弟选择器,用+连接   .one+div {}
  * 普遍兄弟选择器,用~连接     .one~div {}
* 选择器组
  * 交集选择器 ,    需要同时符合两个选择器条件(两个选择器紧密连接).在开发中通常为了精准的选择某一个元素
  * 并集选择器: 符合一个选择器条件即可(两个选择器以,号分割.  在开发中通常为了给多个元素设置相同的样式
* 伪类选择器
  * 动态伪类  ,有:link ,:visited,:hover,:active,:focus
  * 目标伪类  ,有:target
  * 语言伪类,有:lang()
  * 元素状态伪类  :enabled,:disabled,:checked
  * 结构伪类,
    * :nth-child(n),:nth-last-child(n) ,:nth-of-type(n),:nth-last-of-type(n)
    * :first-child,:last-child,:first-of-type,:last-of-type
    * :root,:only-child,:only-of-type ,:empty
  * 否定伪类,有:not



## 五. 预习结构伪类的使用方法。



* E:nth-child(n)   匹配父元素中的第n个子元素E

* E:nth-last-child(n)   匹配父元素下倒数第n个子元素

* E:nth-of-type(n)    匹配父元素下指定类型的第n个子元素

* E:nth-last-of-type(n)    匹配父元素下指定类型的倒数第n个子元素

  

* E:first-child   匹配父元素中的第一个子元素E

* E:last-child   匹配父元素中的最后一个子元素E

* E:first-of-type   匹配父元素下指定类型的第一个子元素

* E:last-of-type  匹配父元素下指定类型的最后一个子元素

  

* :root  匹配文档树的根元素

* :only-child   匹配没有任何兄弟元素的元素

* :only-of-type   代表了任意一个元素，这个元素没有其他相同类型的兄弟元素。

* :empty   代表没有子元素的元素。子元素只可以是元素节点或文本（包括空格）



## 一. 完成课堂所有代码（总结、整理）

### 1.1. text-decoration

- `text-decoration`用于设置文字的装饰线(decoration-装饰) (不是继承属性)
- `text-decoration`有如下常见取值:
  - `none`：无任何装饰线(可以去除a元素默认的下划线)
  - `underline`：下划线
  - `overline`：上划线
  - `line-through`：中划线（删除线）
- `text-decoration`属性是一种简写属性，并且可以使用普通属性三个值中的任何一个。普通属性如下：
  - `text-decoration-line`:文本修饰的位置, 如`下划线underline`，删除线`line-through`
  - `text-decoration-color`:文本修饰的颜色
  - `text-decoration-style`:文本修饰的样式, 如`波浪线wavy`、`实线solid`、`虚线dashed`
  - `text-decoration-thickness`:文本修饰线的粗细(`px`)
- a元素有下划线的本质是被添加了`text-decoration:underline`属性
- 一般会建一个reset.css文件 重置浏览器默认添加的样式

```
/* 消除 a 元素默认的下划线 */
a {
  text-decoration: none;
}
```

- 例子:

```
/* 红色 波浪 下划线 2px */
text-decoration:wavy underline red 2px
```



### 1.2. text-transform(了解)

- `text-transform`用于设置文字的大小写转换 (是继承属性)
- `text-transform`有几个常见的值:
  - `capitalize`：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写
  - `uppercase`：(大写字母)将每个单词的所有字符变为大写
  - `lowercase`：(小写字母)将每个单词的所有字符变为小写
  - `none`：没有任何影响
- 实际开发中用JavaScript代码转化的更多



### 1.3. text-indent

- `text-indent`属性能定义一个块元素首行文本内容之前的缩进量 (是继承属性)
- 属性值:
  - `<length>`:使用固定的<length>值来指定文本的缩进。允许使用负值。
  - `<percentage>`:使用包含块宽度的百分比作为缩进
  - ` each-line(实验中)`:文本缩进会影响第一行，以及使用`<br>`强制断行后的第一行
- `text-indent: 2em`:刚好是缩进2个文字;
- 例子:

```
/* <length> 长度值 */
text-indent: 3mm;
text-indent: 40px;

/* <percentage>百分比值取决于其包含块（containing block）的宽度*/
text-indent: 15%;

/* 关键字 */
text-indent: 5em each-line;
text-indent: 5em hanging each-line;

```



### 1.4. text-align(重要)



- `text-align`: 直接翻译过来设置文本的水平对齐方式 (是继承属性)(是继承属性)

- `text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐

- MDN解释: 定义行内内容（例如文字）如何相对它的块父元素对齐(可以设置图片居中)

- W3C官方文档解释: 设置行内(inline-level)元素(没有填满父元素)在快级父元素的对齐方式

- `text-align`常用的值:

  - `left`：左对齐
  - `right`：右对齐
  - `center`：正中间显示
  - `justify`：对最后一行无效(如果文字只有一行也无效)

- 直接设置对块级元素(例如`<div>`)无效 可以更改`<div>`的`display`为`inline-block`

  - 例如:

  ```
    .box {
    /* 直接设置对快级元素无效*/
      text-align: center;
    }
    div {
      /* 设置为行内元素 */
      display: inline-block;
    }
  ```

- 备注:居中一个块元素且不居中它的行内内容的标准兼容的方法是将它的左、右`margin`设为`auto`, 例如：`margin:auto`; 或`margin:0 auto`; 或m`argin-left:auto`; m`argin-right:auto`;



### 1.5. letter-word-spacing

- `letter-spacing`、`word-spacing`分别用于设置字母、单词之间的间距
- 默认是0，可以设置为负数

```
 p {
    letter-spacing: 5px;
    word-spacing: 10px;
 }
```



### 1.6. font-size

- `font-size`决定文字的大小(是继承属性)
- 属性值:
  - `<length>`:
    - 长度值 px(像素) 用像素字体定义使得字体大小不可由用户的浏览器改变`font-size: 30px`
    - em:em = 希望得到的像素大小 / 父元素字体像素大小  `font-size: 1.5em`  
  - `<relative-size>`，相对大小值
    - 比父元素的字体大或小，使用与上面的关键字的相近缩放比率
    - `font-size: larger`; `font-size: smaller`
  - `<percentage>`:百分比值 父元素字体大小的百分比:`font-size: 80%`
- 技巧:设置body元素的字体大小为62.5% (即默认大小16px的62.5%)，等于10px。现在你可以通过计算基准大小10px的倍数，在任何元素上方便的使用em单位。这样有6px = 0.6em, 8px = 0.8em, 12px = 1.2em等

```
body {
    font-size: 62.5%;
} 
p {
    font: size 1.8em;(相当于18px)
}
```

### 1.7. font-family

- `font-family`用于设置文字的字体名称 一般仅设置一次(是继承属性)
- 可以设置1个或者多个字体名称
- 浏览器会选择列表中第一个该计算机上有安装的字体
- 或者是通过 @font-face 指定的可以直接下载的字体
- 常见的属性:
  - `serif`:带衬线字体，笔画结尾有特殊的装饰线或衬线
  - `sans-serif`:无衬线字体，即笔画结尾是平滑的字体
  - `monospace`:等宽字体，即字体中每个字宽度相同
  - `cursive`:草书字体。这种字体有的有连笔，有的还有特殊的斜体效果
  - `fantasy`:Fantasy 字体主要是那些具有特殊艺术效果的字体
  - `system-ui`:从浏览器所处平台处获取的默认用户界面字体
  - `math`:针对显示数学相关字符的特殊样式问题而设计的字体：支持上标和下标、跨行括号、嵌套表达式和具有不同含义的double struck glyphs
  - `emoji`;专门用于呈现 Emoji 表情符号的字体
  - `fangsong`:一种汉字字体，介于宋体和楷体之间。这种字体常用于某些政府文件
- 备注:一般建一个base.css文件确定整个网页的字体

```
/* 直接设置body的样式 */
body {
  font-family: "Gill Sans", sans-serif;
  /* 京东设置的字体 */
  /* font-family: "Microsoft YaHei", "Heiti SC", tahoma, arial, "Hiragino Sans GB", "\5B8B\4F53", sans-serif; */
}
```

### 1.8. font-weight

- `font-weight`用于设置文字的粗细(重量) (是继承属性)
- 属性值:
  - `normal`:正常粗细。与400等值。
  - `bold`:加粗。 与700等值 
  - `lighter`:比从父元素继承来的值更细(处在字体可行的粗细值范围内)(规则:父元素1-500 lighter=100 父元素600-700 lighter=400 父元素800-900 lighter=700)
  - `bolder`;比从父元素继承来的值更粗 (处在字体可行的粗细值范围内)(规则:父元素1-300 bolder=400 父元素400-500 bolder=700 父元素600-900 bolder=900)
  - `<number>`:一个介于 `1` 和 `1000` (包含) 之间的 `<number>` 类型值
- 如果一个字体只有 `normal` 和 `bold` 两种粗细值选择，指定粗细值为 100-500 时，实际渲染时将使用 `normal`，指定粗细值为 600-900 时，实际渲染时将使用 `bold`
- 例子:

```
/* 关键字值 */
font-weight: normal;
font-weight: bold;

/* 相对于父元素的关键字值 */
font-weight: lighter;
font-weight: bolder;

/* 具体的数值 */
font-weight: 1
font-weight: 100;
font-weight: 100.6;
font-weight: 123;
font-weight: 321;
font-weight: 400;
font-weight: 700;
font-weight: 1000;

```

### 1.9. font-style

- `font-style`用于设置文字的常规、斜体显示 (是继承属性)
- 属性值:
  - `normal`:常规显示
  - `italic`(斜体):用字体的斜体显示(通常会有专门的字体) 
  - `oblique`(倾斜):文本倾斜显示(仅仅是让文字倾斜)
- 例子:

```
  /* oblique，可附加一个可选的角度 */
      font-style: oblique 20deg;
```

### 1.10. font-varient

- `font-variant`可以影响小写字母的显示形式
- 属性值:
  - `normal`:常规显示
  - `small-caps`:将小写字母替换为缩小过的大写字母
- 例子:
  `font-variant: small-caps`

### 1.11. line-height



- `line-height`:两行文字基线(`baseline`)之间的间距 基线(`baseline`):与小写字母x最底部对齐的线
- 行高 - 文本高度  = 行距
- 属性值:
  - `normal`:取决于用户端。桌面浏览器（包括Firefox）使用默认值，约为1.2，这取决于元素的 `font-family`
  - `<数字>`:该属性的应用值是这个无单位数字<数字>乘以该元素的字体大小`这是设置line-height的推荐方法，不会在继承时产生不确定的结果`
  - `<长度>`:指定<长度>用于计算 line box 的高度 以 em 为单位的值可能会产生不确定的结果
  - `<百分比>`:与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。百分比值可能会带来不确定的结果
- `height`:元素的整体高度 `line-height`:元素中每一行文字所占据的高度
- 假设div中只有一行文字，如何让这行文字在div内部垂直居中 让`line-height`等同于`height`



### 1.12. font缩写属性

- `font` 属性可以用来作为 `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height` 和 `font-family` 属性的简写，或将元素的字体设置为系统字体
- 规则:
  - `ont-style`、`font-variant`、`font-weight`可以随意调换顺序，也可以省略 
  - `line-height`可以省略，如果不省略，必须跟在`font-size`后面
  - `font-size`、`font-family`不可以调换顺序，不可以省略
- 例子:

```
    /* 文字属性 */
      font-style: italic;
      font-variant: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.5;
      font-family: cursive;

    /* 缩写 等价于上面的设置*/
      font: italic normal 700 24px/1.5 cursive;
```



## 二. 具体说明text-align居中的条件

- `text-align`: 直接翻译过来设置文本的水平对齐方式 (是继承属性)(是继承属性)

- `text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐

- MDN解释: 定义行内内容（例如文字）如何相对它的块父元素对齐(可以设置图片居中)

- W3C官方文档解释: 设置行内(inline-level)元素(没有填满父元素)在快级父元素的对齐方式


## 三. line-height为什么可以让文字居中？

- `line-height`:两行文字基线(`baseline`)之间的间距 基线(`baseline`):与小写字母x最底部对齐的线
- 一行文本 等于 line-height
- 行高 - 文本高度  = 行距
- 属性值:
  - `normal`:取决于用户端。桌面浏览器（包括Firefox）使用默认值，约为1.2，这取决于元素的 `font-family`
  - `<数字>`:该属性的应用值是这个无单位数字<数字>乘以该元素的字体大小`这是设置line-height的推荐方法，不会在继承时产生不确定的结果`
  - `<长度>`:指定<长度>用于计算 line box 的高度 以 em 为单位的值可能会产生不确定的结果
  - `<百分比>`:与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。百分比值可能会带来不确定的结果
- `height`:元素的整体高度 `line-height`:元素中每一行文字所占据的高度
- 假设div中只有一行文字，如何让这行文字在div内部垂直居中 让`line-height`等同于`height`

## 四. 总结目前所学过的所有选择器？思考它们的应用场景。

### 4.1. 统配选择器

- 通配选择器(universal selector):所有的元素都会被选中

  - 用法: `*{}`
  - 通配选择器是性能最低的一个CSS选择器 不推荐使用
  - 例子:

  ```
   * {
      color: skyblue;
      font-size: 18px;
    }
       
  ```

### 4.2. 简单选择器(重要)

- 简单选择器

  - 元素选择器(type selectors):会匹配该文档中所有此类型的元素

    - 用法:`元素名称{样式声明}`
    - 例子: 

    ```
    span {
      color: skyblue;
      font-size: 16px;
    }
    ```

  - 类选择器(class selectors):类属性被定义为一个以空格分隔的列表项，在这组类名中，包含类选择器中的类名，样式声明才会生效

    - 用法:`.类名 {样式声明} `
    - 例子:

    ```
    .classname {
      color: red;
      font-size: 20px;
    }
    ```

  - id选择器(id selectors):元素 id 属性名必须与选择器中的 id 属性名完全匹配，样式声明才会生效

    - 用法:`#id属性值 {样式声明} `
    - 备注:一个HTML文档里面的id值是唯一的，不能重复，id值如果由多个单词组成，单词之间可以用`中划线-`、`下划线_`连接，也可以使用`驼峰标识`  最好不要用标签名作为id值
    - 例子

    ```
     #idname {
      color: purple;
      font-size: 24px;
    }
    ```



### 4.3. 属性选择器

- 属性选择器(attribute selectors)
- 用法:
  - `[attr]`:表示带有以 attr 命名的属性的元素
  - `[attr=value]`:表示带有以 attr 命名的属性，且属性值为 value 的元素
  - `[attr*=value]`:表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素
  - `[attr^=value]`;表示带有以 attr 命名的属性，且属性值是以 value 开头的元素
  - `[attr$=value]`:表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素
  - `[attr|=value]`:表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀
  - `[attr~=value]`;表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value
- 例子:

```
    /* 存在title属性的<a> 元素 */
a[title] {
  color: purple;
}
/* 存在href属性并且属性值匹配"https://example.org"的<a> 元素 */
a[href="https://example.org"] {
  color: green;
}
/* 存在href属性并且属性值包含"example"的<a> 元素 */
a[href*="example"] {
  font-size: 2em;
}
/* 存在href属性并且属性值结尾是".org"的<a> 元素 */
a[href$=".org"] {
  font-style: italic;
}
/* 存在class属性并且属性值包含以空格分隔的"logo"的<a>元素 */
a[class~="logo"] {
  padding: 2px;
}
/* 以 "#" 开头的页面本地链接 */
a[href^="#"] {
  background-color: gold;
}
/* 包含 "example" 的链接 */
a[href*="example"] {
  background-color: silver;
}
/* 以 ".org" 结尾的链接 */
a[href$=".org"] {
  color: red;
}
/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */
div[lang] {
  font-weight: bold;
}
/* 将所有语言为美国英语的 <div> 元素的文本颜色设为蓝色 */
div[lang~="en-us"] {
  color: blue;
}

```



### 4.4. 后代选择器(重要)

- 后代选择器(descendant combinator)

  - 后代选择器一: 所有的后代(直接/间接的后代)

    - 用法:选择器之间以`空格`分割
    - 例子:

    ```
    .box span{
       color: skyblue;
     }
    ```

  - 后代选择器二: 直接子代选择器(必须是直接自带)

    - 用法:选择器之间以 `>` 分割 
    - 例子:

    ```
    .box > span{
       font-size: 30px;
     }
    ```



### 4.5. 兄弟选择器

- 兄弟选择器(sibling combinator)

  - 通用兄弟选择器:使用符号 `~` 连接 位置无须紧邻，只须同层级，A~B 选择A元素之后所有同层级B元素 

    - 例子:

    ```
     .box~.item{
        font-size: 30px;
        color: skyblue;
      }
    /* p元素后面的同级span都被选中 */
    p ~ span {
        color: red;
      }
    ```

  - 相邻兄弟选择器:使用符号 `+` 连接 第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中

    - 例子:

    ```
     .box+.content {
      color: red;
     }
    /* 图片后面紧跟着的段落将被选中 */
    img + p {
    font-style: bold;
    }
    ```



### 4.6. 选择器组(重要)

- 选择器组

  - 交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)

  - 可以精准的选择某一个元素

    - 例子:

    ```
    div.box {
      color: skyblue;
    }
    .box#second {
      font-size: 30px;
    }
    ```

  - 并集选择器:符合一个选择器条件即可(两个选择器以`,`号分割)

  - 给多个元素设置相同的样式

    - 例子:

    ```
     div.box, p, h2 {
      color: skyblue;
    }
    ```





## 五. 预习结构伪类的使用方法。

- 伪类(pseudo-classes)选择器

  - 动态伪类(dynamic pseudo-classes)

    - 属性值:`:link`、`:visited`、`:hover`、`:active`、`:focus`
    - 用法:

    ```
    /*  a:link 未访问的链接  */
     a:link {
      color: skyblue;
    }
    /*  a:visited 已访问的链接  */
    a:visited {
      color: darkmagenta;
      font-size: 30px;
    }
    /*  a:focus 获得焦点 tab键 */
    a:focus {
      color: green;
    }
    /*  a:hover 鼠标挪动到链接上  */
    a:hover {
      color: blue;
    }
    /*  a:active 激活的链接(鼠标在链接上长按住未松开)  */
    a:active {
      color: red;
      font-size: 24px;
    }
    ```





## 三. 默写出display常见的值，并且说出对应的特性，并且写出测试案例

block：让元素显示为块级元素;可以让元素独占一行,可以设置宽度和高度,高度默认由内容决定

inline：让元素显示为行内级元素 ;可以和其他行内级元素在同一行,不可以设置宽度和高度,宽度和高度由内容决定

inline-block：让元素同时具备行内级、块级元素的特征 ;可以和其他行内级元素在同一行,可以设置宽度和高度,默认宽度和高度由内容决定

none：隐藏元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .one {
        width: 300px;
        height: 300px;
        background-color: pink;
        overflow: hidden;
      }
      .one span {
        display: block;
        width: 200px;
        height: 200px;
        background-color: red;
        margin: 10px auto;
      }
      p {
        display: inline;
        font-size: 20px;
      }
      .two::after {
        /* 插入方块 */
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: green;
      }
      .three {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="one">
      <span>我要变成块级元素</span>
    </div>
    <p>我要变成行内级元素</p>
    <a href="#">百度一下</a>
    <div class="two">在元素前面用伪元素插入123</div>
    <div class="three">我要隐藏</div>
  </body>
</html>

```



## 四. 总结元素隐藏的方法，并且说出他们的区别

* display:none

  * 元素不显示出来, 并且也不占据位置, 不占据任何空间

* visibility:hidden

  * 会占据元素应该占据的空间

* rgba设置颜色,将a的值设置为0

  * rgba的a设置的是alpha值, 可以设置透明度, 不影响子元素

* opacity设置透明度, 设置为0

  * 设置整个元素的透明度, 会影响所有的子元素





## 六. 块级元素在设置padding/border的上下时，有什么特殊的地方？







## 一. 写出案例，证明CSS属性的继承性

当给父元素div(类名为box)设置font-size,color,text-align这些属性时,由于这些属性具有继承性,所以该父元素下的所有子元素(p,span,div)都会默认继承这些属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        /* 如果给某一个元素设置了某个CSS属性,而且这个属性具有继承性,那么该元素的所有子元素会默认继承属性 */
        /* 一般和文本或者字体相关的很多属性都具备继承 */
        width: 400px;
        height: 400px;
        font-size: 30px;
        color: green;
        text-align: center;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="one">鹅鹅鹅<span>床前明月光</span></div>
      <p>我是p元素</p>
    </div>
  </body>
</html>
```



## 二. 写出案例，证明CSS属性的层叠性

一个CSS属性可以多次设置:

* 判断一: 权重, 优先级;

* 判断二: 先后顺序;

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        /* id选择器 100 */
        #first {
          color: green;
        }
        /* 元素选择器 :1 */
        div {
          color: red;
        }
        /* 类选择器10 */
        .one {
          color: blue;
        }
        /* 类选择器10 */
        .two {
          color: orange;
        }
      </style>
    </head>
    <body>
      <div class="one two" id="first">我是div元素</div>
    </body>
  </html>
  
  ```

  

## 三. 默写出display常见的值，并且说出对应的特性，并且写出测试案例

block：让元素显示为块级元素;可以让元素独占一行,可以设置宽度和高度,高度默认由内容决定

inline：让元素显示为行内级元素 ;可以和其他行内级元素在同一行,不可以设置宽度和高度,宽度和高度由内容决定

inline-block：让元素同时具备行内级、块级元素的特征 ;可以和其他行内级元素在同一行,可以设置宽度和高度,默认宽度和高度由内容决定

none：隐藏元素

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .one {
        width: 300px;
        height: 300px;
        background-color: pink;
        overflow: hidden;
      }
      .one span {
        display: block;
        width: 200px;
        height: 200px;
        background-color: red;
        margin: 10px auto;
      }
      p {
        display: inline;
        font-size: 20px;
      }
      .two::after {
        /* 插入方块 */
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: green;
      }
      .three {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="one">
      <span>我要变成块级元素</span>
    </div>
    <p>我要变成行内级元素</p>
    <a href="#">百度一下</a>
    <div class="two">在元素前面用伪元素插入123</div>
    <div class="three">我要隐藏</div>
  </body>
</html>

```



## 四. 总结元素隐藏的方法，并且说出他们的区别

* display:none

  * 元素不显示出来, 并且也不占据位置, 不占据任何空间

* visibility:hidden

  * 会占据元素应该占据的空间

* rgba设置颜色,将a的值设置为0

  * rgba的a设置的是alpha值, 可以设置透明度, 不影响子元素

* opacity设置透明度, 设置为0

  * 设置整个元素的透明度, 会影响所有的子元素

    

## 五.京东案例



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 300px;
        height: 200px;
        margin: 0 auto;
      }
      .item {
        width: 120px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        padding: 0 5px;
        border-radius: 25px;
        background: #e1251b;
      }
      .plus {
        background: #363634;
        color: #e5d790;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="new item">新人福利</div>
      <div class="plus item">PLUS会员</div>
    </div>
  </body>
</html>

```



## 七. 进行下面的案例练习

* 可以先不做两行显示不全的...
* 可以先不做评论的靠右内容

![image-20220330230100029](https://tva1.sinaimg.cn/large/e6c9d24egy1h0sb01sx1yj207p09ydfw.jpg)



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .goods {
        width: 400px;
        margin: 100px auto;
        padding: 10px;
        background-color: #f6f6f6;
      }
      .goods-img {
        /* width: 400px; */
        height: 400px;
        border: 1px solid #ccc;
        overflow: hidden;
      }
      .goods-img img {
        width: 100%;
      }
      .goods-info {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 8px 0;
      }
      .goods-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        color: #999;
      }
      .price {
        display: flex;
        align-items: flex-end;
        font-weight: 700;
      }
      .present-price {
        color: red;
      }
      .present-price span {
        font-size: 24px;
      }
      .origin-price span {
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <div class="goods">
      <div class="goods-img">
        <img
          src="https://img12.360buyimg.com/n1/jfs/t1/159701/38/9948/81556/6040d1d9E6b486d68/5829df13f7b07b58.jpg"
        />
      </div>
      <h2 class="goods-info">
        【轻烟蜜粉】MAKE UP FOR EVER 玫珂菲 HD清晰无痕蜜粉 饼 6.2g（控油定妆粉饼
        补妆便携 雾面哑光）
      </h2>
      <div class="goods-price">
        <div class="price">
          <div class="present-price">￥<span>275</span></div>
          <div class="origin-price">￥<span>380</span></div>
        </div>
        <div class="comment">4934人已经评价</div>
      </div>
    </div>
  </body>
</html>

```





## 一. 完成课堂所有的代码

盒子模型

* 08-盒子模型-margin

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        /* 外边距margin:上右下左,一般用于兄弟元素之间的距离 */
        /* padding一般用于父子元素之间的间距 */
        /* 用inline-block会出现中间一条线(因为换行符),还会出现上下不齐 */
        body {
          /* 解决inline-block问题 */
          font-size: 0;
        }
        .one {
          display: inline-block;
          width: 300px;
          height: 300px;
          background-color: pink;
          /* 一个值:上下左右 */
          /* margin: 30px; */
          /* 两个值:上下 左右 */
          /* margin: 10px 30px; */
          /* 三个值  上   左右  下 */
          margin: 10px 20px 30px;
        }
        .two {
          display: inline-block;
          width: 200px;
          height: 200px;
          background-color: #f00;
        }
      </style>
    </head>
    <body>
      <div class="one">我是第一个</div>
      <div class="two">我是第二个</div>
    </body>
  </html>
  
  ```

  

* 09-盒子模型-padding和margin对比

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        /* 需求:子元素距离父元素左侧/上侧有一定的距离 */
        /* 父子之间的距离用padding,兄弟之间的间距用margin */
        .box {
          width: 500px;
          height: 500px;
          background-color: pink;
          /* 方式一:给父加padding,但是盒子会撑大,通过box-sizing */
          /* padding: 20px 0 0 30px;
          box-sizing: border-box; */
          /* 解决传递问题 */
          overflow: auto;
        }
        .son {
          width: 200px;
          height: 200px;
          color: #fff;
          background-color: red;
          /* 方式二,给子元素加margin */
          margin-left: 20px;
          /* 造成margin-top的传递 */
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="son">我是子元素</div>
      </div>
    </body>
  </html>
  
  ```

  

* 10-盒子模型-margin的传递

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        /* 上下margin的传递 */
        .father {
          width: 400px;
          height: 400px;
          background-color: red;
          /* 解决方式一 */
          /* border: 1px solid rgba(0, 0, 0, 0); */
          /* 方法二 */
          /* overflow: auto; */
          /* 方法三 加padding */
          padding: 20px 0 0 0;
        }
        .son {
          width: 200px;
          height: 200px;
          background-color: pink;
          /* 当子元素(块)的顶线和父元素的顶部线重叠了,那子元素的margin-top传递给父元素 */
          margin-top: 30px;
          /* 左右不会传递 */
          margin-left: 10px;
        }
      </style>
    </head>
    <body>
      <div class="father">
        <div class="son">我是子元素</div>
      </div>
    </body>
  </html>
  
  ```

* 11-盒子模型-margin-bottom的传递 

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .father {
          width: 400px;
          height: auto;
          background-color: red;
          overflow: auto;
        }
        .son {
          width: 200px;
          height: 200px;
          background-color: pink;
          /* 当父元素的底线和子元素(块)的底线重叠时,并且父的height:auto,
          那就会造成margin-bottom传递 */
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="father">
        <div class="son">我是子元素</div>
      </div>
      <div>今天愚人节</div>
    </body>
  </html>
  
  ```

  

* 12-盒子模型-margin的折叠

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .one {
          width: 400px;
          height: 400px;
          background-color: red;
          /* 上下兄弟的折叠 ,取较大值*/
          /* 折叠就是垂直方向的兄弟元素,一个设置margin-bottom,一个设置margin-top,最后合并一个margin */
          margin-bottom: 30px;
        }
        .two {
          width: 200px;
          height: 200px;
          background-color: pink;
          margin-top: 50px;
          /* 水平margin不折叠 */
        }
      </style>
    </head>
    <body>
      <div class="one">大哥</div>
      <div class="two">二弟</div>
    </body>
  </html>
  
  ```

  

* 13-盒子模型-margin的折叠 父子之间

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .one {
          width: 400px;
          height: 400px;
          background-color: red;
          /* 父子块的折叠 ,取较大值*/
          /* overflow: auto; */
          margin-top: 30px;
        }
        .two {
          width: 200px;
          height: 200px;
          background-color: pink;
          margin-top: 50px;
          /* 水平margin不折叠 */
        }
      </style>
    </head>
    <body>
      <div>红红火火恍恍惚惚或或或或或或或或或</div>
      <div class="one">
        <div class="two">二弟</div>
      </div>
    </body>
  </html>
  
  ```

  

* 14-块级水平居中问题

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .one {
          width: 800px;
          height: 300px;
          background-color: red;
          text-align: center;
        }
        .two {
          width: 200px;
          height: 200px;
          background-color: pink;
          /* 水平居中方式一 */
          /* margin: 0 auto; */
          /* 方式二 */
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="one">
        <div class="two">二弟</div>
      </div>
    </body>
  </html>
  
  ```

  

* 15-外轮廓

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 300px;
          height: 300px;
          background-color: pink;
          /* 外轮廓不占位置,和border设置一样 */
          outline: 20px solid rgba(111, 59, 59, 0.8);
        }
        /* 给a设置样式,相当于给a的所有动态伪类都设置了 */
        a,
        input {
          /* 通常给a和input去掉外轮廓 */
          outline: none;
        }
      </style>
    </head>
    <body>
      <div class="box">外轮廓</div>
      <div>我是块</div>
      <span>hhhhhhhh</span>
      <a href="#">百度一下</a>
      <input type="text" />
    </body>
  </html>
  
  ```

  

* 16-盒子阴影

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 300px;
          height: 300px;
          background-color: pink;
          margin: 50px auto;
          /* box-shadow:offset-x offset-y  blue-radius   spread-radius  color inset; */
          box-shadow: 20px 30px 5px 4px red inset, 100px 50px 4px 3px green;
        }
      </style>
    </head>
    <body>
      <div class="box">外轮廓</div>
    </body>
  </html>
  
  ```

  

* 17-文字阴影

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        span {
          /* 文字阴影和盒子阴影差不多,少了向外延伸半径 和 inset */
          text-shadow: 20px 30px 4px blue;
        }
      </style>
    </head>
    <body>
      <span>文字阴影</span>
    </body>
  </html>
  
  ```

  

* 18-行内非替换元素的特殊性

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 200px;
          height: 200px;
          background-color: pink;
        }
        span {
          margin-top: 20px;
          margin-bottom: 30px;
          padding: 30px 50px;
          border: 20px solid #666;
          /* 行内非替换元素对width,height,margin上下无效  ,但是对border上下,padding上下有特殊,会撑开盒子,但是不占空间 */
        }
      </style>
    </head>
    <body>
      <div class="box">11</div>
      <a href="#">百度一下</a>
      <span>
        width、height、margin-top、margin-bottom对行内级非替换元素不起作用</span
      >
      <a href="#">谷歌</a>
      <div class="box">hhhhh</div>
    </body>
  </html>
  
  ```

  

* 19-前景色和背景设置的哪些

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 200px;
          height: 200px;
          background-color: green;
          border: 10px solid;
          /* 如果没有设置border颜色,那就用color前景色代替 */
          color: pink;
        }
      </style>
    </head>
    <body>
      <div class="box">111</div>
    </body>
  </html>
  
  ```

  

* 20-box-sizing

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box,
        .one {
          /* content-box:width指的是内容的宽度,盒子实际占据的宽度=width+padding+border padding、border都布置在width、height外边 */
          /* border-box:width指的是盒子实际占据的宽度  padding、border都布置在width、height里边,*/
          width: 200px;
          height: 200px;
          background-color: green;
          border: 10px solid pink;
          padding: 20px;
        }
        .one {
          box-sizing: border-box;
        }
      </style>
    </head>
    <body>
      <div class="box">111</div>
      <div class="one">111</div>
    </body>
  </html>
  
  ```

  

* 21-案例新人福利

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./css/reset.css" />
      <style>
        .item {
          display: inline-block;
          width: 70px;
          height: 25px;
          text-align: center;
          line-height: 25px;
  
          border-radius: 13px;
        }
        .new {
          color: #fff;
          background-color: #e1251b;
        }
        .vip {
          color: #e5d790;
          background-color: #363634;
        }
        a:hover {
          background-color: #c81623;
          color: #fff;
        }
      </style>
    </head>
    <body>
      <a
        href="https://xinren.jd.com/?channel=99#/home"
        class="item new"
        target="_blank"
        >新人福利</a
      >
      <a
        href="https://passport.jd.com/new/login.aspx"
        class="item vip"
        target="_blank"
        >PLUS会员</a
      >
    </body>
  </html>
  
  ```

  

* 22-模仿小米案例

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/reset.css" />
      <link rel="stylesheet" href="css/xiaomi.css" />
      <title>Document</title>
    </head>
    <body>
      <a href="https://www.mi.com/xiaomipad5pro" class="item">
        <img src="../image/xiaomi01.webp" class="alblm" />
        <h3 class="title">小米平板5 Pro</h3>
        <p class="desc">
          全新12代英特尔处理器，CNC一体精雕工艺，2.5K
          120Hz高清屏，可选MX550独立显卡
        </p>
        <div class="price">
          <span class="old-price">2399元起</span>
          <span class="new-price">2499元</span>
        </div>
      </a>
    </body>
  </html>
  
  ```

  

* 23-B站案例

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./css/reset.css" />
      <style>
        a {
          display: block;
        }
        .item {
          width: 300px;
          margin: 100px auto;
        }
        .item .album img {
          width: 100%;
          border-radius: 5px;
        }
        .item .info h3 {
          font-size: 15px;
          margin-top: 8px;
          /* 单行显示省略号 */
          /* white-space: nowrap; */
  
          /* 多行显示省略号 */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item .anchor {
          font-size: 13px;
          color: #888;
          margin-top: 5px;
        }
        .item .nickname::before {
          content: url(../image/widget-up.svg);
          display: inline-block;
          width: 16px;
          height: 16px;
          position: relative;
          top: 1px;
          margin-right: 8px;
        }
      </style>
    </head>
    <body>
      <div class="item">
        <div class="album">
          <a href="#"
            ><img
              src="https://i0.hdslb.com/bfs/archive/9c763bf06b7765462eac62cc0a9a34b260d3f9c8.jpg@672w_378h_1c.webp"
              referrerpolicy="no-referrer"
          /></a>
        </div>
        <div class="info">
          <a href="#">
            <h3>
              萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？萌化了！谁会不喜欢毛茸茸的小懒懒呢？
            </h3>
          </a>
          <a href="" class="anchor">
            <span class="nickname">Muxi慕喜咩</span>
            <span class="time">3-20</span>
          </a>
        </div>
      </div>
    </body>
  </html>
  
  ```

  二.CSS-背景

  * 01-背景图片

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .box {
            width: 1000px;
            height: 500px;
            background-color: pink;
            background-image: url(../image/diqiu.jpg), url(../image/lyf.png);
            background-repeat: no-repeat;
          }
        </style>
      </head>
      <body>
        <div class="box">哈哈哈</div>
      </body>
    </html>
    
    ```

  * 02-背景平铺

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .box {
            width: 1000px;
            height: 800px;
            background-color: pink;
            background-image: url(../image/diqiu.jpg);
            /* 背景平铺,默认repeat */
            background-repeat: no-repeat;
            background-repeat: repeat-x;
            background-repeat: repeat-y;
          }
        </style>
      </head>
      <body>
        <div class="box">哈哈哈</div>
      </body>
    </html>
    
    ```

    

  * 03-背景平铺练习

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .box {
            width: 300px;
            height: 300px;
            /* 默认平铺 */
            background-image: url(../image/wall.png);
          }
        </style>
      </head>
      <body>
        <div class="box"></div>
      </body>
    </html>
    
    ```

    

  * 04-背景位置

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .box {
            width: 1000px;
            height: 500px;
            background-color: pink;
            background-image: url(../image/diqiu.jpg);
            background-repeat: no-repeat;
            background-position: 20px 60px;
            /* 水平方向还可以设值：left、center、right */
            /* 垂直方向还可以设值：top、center、bottom */
            background-position: left bottom;
            /*只设置了1个方向，另一个方向默认是cente*/
            background-position: right;
          }
        </style>
      </head>
      <body>
        <div class="box">哈哈哈</div>
      </body>
    </html>
    
    ```

    

  * 05-背景尺寸

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .box {
            width: 1000px;
            height: 500px;
            background-color: pink;
            background-image: url(../image/diqiu.jpg);
            background-repeat: no-repeat;
            /* 默认 */
            background-size: auto;
            /* contain:一边铺满,但是图片保持宽高比 */
            background-size: contain;
            /* cover 完全覆盖元素,可能背景图片部分看不见 */
            background-size: cover;
            /* 百分比，相对于背景区 */
            background-size: 50% 40%;
    
            background-size: 100px 200px;
          }
        </style>
      </head>
      <body>
        <div class="box">哈哈哈</div>
      </body>
    </html>
    
    ```

    

  * 05-背景位置练习

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          body {
            padding: 0;
            margin: 0;
          }
          .box {
            width: 300px;
            height: 200px;
            background-image: url(../image/mhxy.jpg);
            background-repeat: no-repeat;
            background-position: center;
          }
        </style>
      </head>
      <body>
        <div class="box"></div>
      </body>
    </html>
    
    ```

    

  * 06-背景附加

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          body {
            padding: 0;
            margin: 0;
          }
          .box {
            width: 300px;
            height: 200px;
            background-image: url(../image/mhxy.jpg);
            background-repeat: no-repeat;
            /*scroll背景不随内容滚动 */
            background-attachment: scroll;
            /* 背景随内容滚动 */
            background-attachment: local;
            background-attachment: fixed;
            overflow: scroll;
            /* 缩写 */
            /* background: url(../image/mhxy.jpg) no-repeat center/cover scroll; */
          }
        </style>
      </head>
      <body>
        <div class="box">
          习近平指出，8年前，我提出中国愿同欧洲一道打造中欧和平、增长、改革、文明四大伙伴关系，中方的这一愿景至今未改变，当前形势下更有现实意义。中欧有着广泛共同利益和深厚合作基础，中方对欧政策保持稳定连贯，希望欧方形成自主的对华认知，奉行自主的对华政策，同中方一道，推动中欧关系行稳致远，为动荡的世界局势提供一些稳定因素。
        </div>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
      </body>
    </html>
    
    ```

    

## 二. 写出盒子模型包含的内容以及如何设置

盒子模型里包含

* 内容
  * 通过宽度和高度设置
* 内边距
  * 通过padding设置
  * padding: padding-top    padding-right   padding-bottom    padding-left;
* 边框
  * 通过border设置
  * border: border-width   border-style   border-color
* 外边距
  * 通过margin设置
  * margin:   margin-top   margin-right   margin-bottom    margin-left



## 三. 说说你对margin的传递和折叠的理解

margin的传递一般是父子块元素之间,有margin-top传递,margin-bottom传递.

* margin-top传递: 当块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素
* margin-bottom传递:当块级元素的底部线和父元素的底部线重叠，那么这个块级元素的margin-bottom值会传递给父元素

折叠:   指的是 垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin.

它有两个兄弟块级元素之间的上下margin的折叠,也有父子块元素之间的margin折叠

## 四. 行内非替换元素在设置padding/border的上下时，有什么特殊的地方？

上下会被撑起来,但是不占空间



## 五. 整理box-sizing的作用，以及content-box和border-box的区别

box-sizing用来设置盒子模型中宽高的行为

content-box:   padding、border都布置在width、height外边

border-box:  padding、border都布置在width、height里边



## 六. 说出元素水平居中的方案以及对应的场景

* 行内块元素(包括inline-block元素)

  * 水平居中：在父元素中设置text-align: center

* 块级元素 

  * 水平居中:margin:0 auto;

  

  



## 七. 练习background-position和background-size（为精灵图做准备）

* background-position

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 1000px;
          height: 500px;
          background-color: pink;
          background-image: url(../image/diqiu.jpg);
          background-repeat: no-repeat;
          background-position: 20px 60px;
          /* 水平方向还可以设值：left、center、right */
          /* 垂直方向还可以设值：top、center、bottom */
          background-position: left bottom;
          /*只设置了1个方向，另一个方向默认是cente*/
          background-position: right;
        }
      </style>
    </head>
    <body>
      <div class="box">哈哈哈</div>
    </body>
  </html>
  ```

* background-size

  ```HTML
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .box {
          width: 1000px;
          height: 500px;
          background-color: pink;
          background-image: url(../image/diqiu.jpg);
          background-repeat: no-repeat;
          /* 默认 */
          background-size: auto;
          /* contain:一边铺满,但是图片保持宽高比 */
          background-size: contain;
          /* cover 完全覆盖元素,可能背景图片部分看不见 */
          background-size: cover;
          /* 百分比，相对于背景区 */
          background-size: 50% 40%;
          background-size: 100px 200px;
        }
      </style>
    </head>
    <body>
      <div class="box">哈哈哈</div>
    </body>
  </html>
  
  ```

  

## 八. 找出三个盒子模型的综合案例进行练习



















当你看到这里的时候, 我其实想说, 最后我觉得, 记笔记现在其实效率远远不如直接看文档, 但是, 之前的笔记确实有过很大的帮助
