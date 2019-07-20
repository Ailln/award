# award

🏆 `award` 是一个类似于 [shields.io](https://shields.io/) 的图标生成器，它可以用来表示一些「数据」和「链接」。

![](https://award.dovolopor.com?lt=have&rt=fun&lbc=red&round=true)

## 1 安装

首先你需要有 `node.js` 的开发环境，如果没有可以参考[这个](https://www.v2ai.cn/linux/2018/11/11/LX-10.html)。

```bash
# 克隆代码
git clone https://github.com/HaveTwoBrush/award.git

cd award/expressjs
# 安装依赖
npm install

# 运行
node app.js
```

此时你可以尝试在浏览器中输入： `http://127.0.0.1:3000?lt=🏆&rt=A.M%20Turing%20Award.`，你将会得到这样一个图片：![](https://award.dovolopor.com?lt=🏆&rt=A.M%20Turing%20Award.)

当然你也可以像我一样，将它部署在服务器上 `https://award.dovolopor.com?lt=🏆&rt=A.M%20Turing%20Award.` 供给任何人使用。

## 2 使用

### 2.1 呈现「数据」

`![](https://award.dovolopor.com?$parameters)`

`$parameters` 为参数，和常见的 `GET` 请求参数一致。举个例子：`lt=name&rt=Ailln`。

参数列表：

- `lt`: 即 left text，左侧文本，默认值为 `left`；
- `lbc`: 即 left background color，左侧背景颜色，默认值为 `gray`；
- `ltc`: 即 left text color，左侧文本颜色，默认值为 `white`；
- `rt`: 即 right text，右侧文本，默认值为 `right`；
- `rbc`: 即 right background color，右侧背景颜色，默认值为 `orange`；
- `rtc`: 即 right text color，右侧文本颜色，默认值为 `white`；
- `round`: 即 is round，是否启用圆角，默认值为不启用；

> ⚠️ 
> 1. 如果想输入 `空格`，请用 `%20` 表示。
> 2. 支持输入 `emoji` 表情。

### 2.2 呈现「数据」和「链接」

`[![](https://award.dovolopor.com?$parameters)]($url)`

`$parameters` 为参数，同上文。

`$url` 为跳转的链接，比如 `https://github.com/HaveTwoBrush/award`。

## 3 黎明之前的黑暗

细心的同学会发现，这个项目库里还有一个叫 `flask` 的文件夹，里面也包含里一份代码。它是我在这个想法上的第一次尝试，我先用了比较熟悉的 `Python` 语言开发来第一版，但是效果很差，生成的图标非常的模糊。于是我就仔细研究里一下其他的项目，发现 `javascript` 语言更适合做这个事情，于是就有了现在的代码。

图标效果：![](https://award.dovolopor.com/v1?lt=AM.&rt=Turing%20Award.)

如果你对 `Python`，`Flask` 等技术很感兴趣，可以试着跑下，它是完整可运行的，使用教程如下。

```bash
# 进入文件夹
cd award/flask

# 安装依赖
pip install -r requirements.txt

# 运行
python app.py
```

> ⚠️
> 1. 代码仅支持 `Python 3.6+`。
> 2. 此版本的输入文本不支持 `emoji` 表情。
> 3. 此版本代码仅支持 `lt` 和 `rt` 两个参数。

## 4 后续计划

近期打算继续丰富 `形状`，`颜色`，`字体` 等功能，如果你又什么好想法可以提 [Issue](https://github.com/HaveTwoBrush/award/issues)，我们一同探讨。 

## 5 协议

[![](https://award.dovolopor.com?lt=License&rt=MIT&rbc=green)](./LICENSE)

> ⚠️ 不知道你有没有发现「👆这个图标」就是用本项目生成的。
