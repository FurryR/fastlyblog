# 如何部署
新建仓库然后把这个仓库复制过来，直接使用。  
需要更改一些JS文件来完成个性化。
# 如何写博客
创建：/blog/**id**/init.js  
创建：/blog/**id**/style.css  
style.css写你页面要用的css  
init.js写加载页面内容的javascript  
更新：/blog/info.js  
更新规则：在数组中追加\[编号(int),标题(string),时间戳(int),作者(string)\]  
注意：编号小的在前面，编号大的在后面，渲染页面时会倒着输出  
删博客只要删文件夹然后更新info.js即可  