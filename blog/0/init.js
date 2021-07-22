const word = [
  "千里之行，始于足下。",
  "奇迹和魔法可不是免费的哦。",
  "梦想要实现，不然只是梦想。",
  "人生不能往回走，过去了就是过去了。",
  "行动不一定能带来快乐，但不行动绝对不能带来快乐。",
  "天下无难事，只怕有心人。",
  "好作品要的不是力量，不是技术，而是坚持。",
  "荣！断幺九nomi，1000点です。",
  "人生最大的失败就是放弃。",
  "拥抱开源精神。",
  "知之为知之，不知为不知，是知也。",
  "能力越大，责任越大。",
  "要么庸俗，要么孤独。",
];
function random(min, max) {
  return Math.random() * (max - min) + min;
}
function content_init() {
  document.title=blog_author+"的个人博客";
  var content = document.getElementById("content");
  //Get CSS & Blog List by JSONP
  //Basic code start
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `/blog/0/style.css`;
  css.type = "text/css";
  css.onerror = function (x) {
    var err = document.getElementById("waiting_text");
    console.error(x);
    err.innerText = "Error.For more information,please check the console.";
    return false;
  };
  document.head.appendChild(css);
  //Basic code end
  //Custom code start
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "/blog/info.js?randkey=" + Math.random();
  script.onerror = function (x) {
    var err = document.getElementById("waiting_text");
    console.error(x);
    err.innerText = "Error.For more information,please check the console.";
    return false;
  };
  //callback = getBlogContent(content:array)
  //content's format:[[id,title,date(timestamp)],[id2,title2,date2(timestamp)],...]
  document.head.appendChild(script);
  const content_html = `
    <h1 class="page_title align_center">Hello World</h1>
    <p class="align_center">${word[parseInt(random(0,word.length))]}</p>
    <p>Blogs:</p>
    <p id="waiting_text" class="waiting_text text_3d_effect">Loading...</p>
  `;
  content.innerHTML = content_html;
}
function getBlogContent(data = []) {
  //callback
  var node = document.getElementById("content");
  if (data.length == 0) {
    document.getElementById("waiting_text").innerText = "没有找到博客。";
    return;
  }
  node.removeChild(document.getElementById("waiting_text"));
  Object.entries(data)
    .sort((a, b) => {
      if (a[1][2] > b[1][2]) return -1;
      if (a[1][2] < b[1][2]) return 1;
      return 0;
    })
    .forEach((info) => {
      /*
      info[0] = id(${window.location.origin}/read.html?id=xxx)
      info[1][0] = title
      info[1][1] = date(TimeStamp)
      info[1][2] = author
      */
      var temp = document.createElement("div");
      temp.onclick = function () {
        window.location.href = `/read.html?id=${info[0]}`;
      };
      temp.className = "blog_select_box";
      temp.title = "阅读这篇博客";
      var aele = document.createElement("a");
      aele.href = `/read.html?id=${info[0]}`;
      aele.className = "link";
      var pele = document.createElement("p");
      pele.className = "blog_title";
      pele.innerText = info[1][0];
      aele.appendChild(pele);
      temp.appendChild(aele);
      var date = document.createElement("span");
      date.className = "blog_date";
      date.innerText =
        info[1][2] +
        ` 作于 ${new Date(info[1][1]).toLocaleString()}(UTC+${
          0 - new Date().getTimezoneOffset() / 60
        })`;
      temp.appendChild(date);
      node.appendChild(temp);
    });
}
