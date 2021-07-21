//init
clearContent();
//metadata start
$title("Hello World");
$info("断幺九", 1626870667100);
//metadata end
var content = document.getElementById("content");
const cont=`
<p>这是第一篇博客。</p>
<p>Javascript 博客描述API</p>
<p>clearContent() : 删除画面内容。</p>
<p>$title(title) : 设定画面标题。</p>
<p>$info(author,timestamp) : 设定文章的作者和作成时间。</p>
`;
content.innerHTML+=cont;
