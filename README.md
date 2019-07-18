# award

`award` 是一个类似于 [shields.io](https://shields.io/) 的东西，它可以表示一些数据项和链接。

## 1 安装

```bash
pip install -r requirements.txt

python app.py
```

此时你可以尝试在浏览器中输入：`http://127.0.0.1?left=name&right=Ailln`
你就会得到这样一个图片：![](https://award.dovolopor.com?left=name&right=Ailln)

当然你也可以像我一样，部署在服务器上`https://award.dovolopor.com?left=name&right=Ailln`提供给所有人使用。

## 2 使用

`![](https://award.dovolopor.com?left=<$1>&right=<$2>\)`

- `<$1>`换成你想放在左边的输入，不能有空格。
- `<$2>`换成你想放在右边的输入，同样不能有空格。
