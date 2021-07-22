# 如何部署
新建仓库然后把这个仓库复制过来，直接使用。  
需要更改一些JS文件来完成个性化。
# 如何写博客
创建：/blog/**id**/init.js  
创建：/blog/**id**/style.css  
style.css写你页面要用的css  
init.js写加载页面内容的javascript  
更新：/blog/info.js  
更新规则：在数组中追加编号(int):\[,标题(string),时间戳(int),作者(string)\],  
注意：编号小的在前面，编号大的在后面，渲染页面时会按时间倒着输出  
删博客只要删文件夹然后更新info.js即可  
tips:可以先不管info.js，写好博客文件夹后直接上传，然后访问/read.html?id=编号，查看控制台就得到了info，追加到info.js的对象即可。
# 为什么是fastlyblog而不是fastblog？
此处的fastly不是指访问博客很快，而是指应用(写)博客很快而无需二次编译。  
一般博客：新建文章->写markdown->清空旧文件->重新编译->部署(等待git寻找新加文件)->部署成功  
fastlyblog：新建文章->写JS->更新info.js->上传->部署成功  