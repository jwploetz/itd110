//Thanks Alex for the navbar help

directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length-2)

var menuStr =
`<li class="dropdownButton"><a href="`+directoryDepth+`/index.html">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Lessons</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/lessons/minimal_page.html.html">Minimal Page</a>
    <a href="`+directoryDepth+`/lessons/gdw.html.html">Getting Down With HTML</a>
    <a href="`+directoryDepth+`/lessons/block.html.html">Block Level Elements</a>
    <a href="`+directoryDepth+`/lessons/inline.html.html">Inline Elements</a>
    <a href="`+directoryDepth+`/lessons/objects.html.html">Object Elements</a>
    <a href="`+directoryDepth+`/lessons/special.html.html">Special Characters</a>
    <a href="`+directoryDepth+`/lessons/unordered.html.html">Unordered Lists</a>
    <a href="`+directoryDepth+`/lessons/ordered.html.html">Ordered Lists</a>
    <a href="`+directoryDepth+`/lessons/description.html.html">Description Lists</a>
    <a href="`+directoryDepth+`/lessons/learning_webdev.html.html">Learning Web Dev</a>
    <a href="`+directoryDepth+`/lessons/decbinocthex.html.html">Number Types Table</a>
    <a href="`+directoryDepth+`/lessons/mytable.html.html">Courses Table</a>
    <a href="`+directoryDepth+`/lessons/favorite.html.html">Favorite Websites</a>
    <a href="`+directoryDepth+`/lessons/gallery1.html.html">Gallery I</a>
    <a href="`+directoryDepth+`/lessons/gallery2.html.html">Gallery II</a>
  </div>
</li>`;
/*<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Important Links</a>
  <div class="dropdown-content">
    <a href="https://ict.gctaa.net/sections/webdesign/students.html">Other Websites</a>
  </div>
</li>*/
console.log(menuStr);

var menuList = document.getElementById("menuBar");
console.log(menuList);
menuList.innerHTML = menuStr;
