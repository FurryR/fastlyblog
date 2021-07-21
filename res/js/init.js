const blog_author = "你"; //replace it with your name!
function init() {
  //constant values
  const header_html = `
  <a href="/" id="header.home_link" title="返回主页" class="padd_10px home_link header_title">${blog_author}的小站</span>
  <!--
  <a href="https://example.com/" id="header.github_link" title="写上备注" class="padd_10px link">写上显示的内容</a>
  -->
  
  `;
  const footer_html = `
  <span id="footer.createdby" class="footer_elem">Powered by <a href="https://github.com/Fox-Awa/fastlyblog">FastlyBlog</a></span>
  `;
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  var init_header = document.createElement("header");
  var init_footer = document.createElement("footer");
  init_header.setAttribute("class", "header");
  init_footer.setAttribute("class", "footer");
  init_header.innerHTML = header_html;
  init_footer.innerHTML = footer_html;
  header.appendChild(init_header);
  footer.appendChild(init_footer);
  //console.log("[Info]Sync init finished");
}
