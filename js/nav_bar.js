//Thanks Alex for the navbar help

directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length-2)

var menuStr =
`<li class="dropdownButton"><a href="`+directoryDepth+`/index.html">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Lessons</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/lessons/minimal_page.html">Minimal Page</a>
    <a href="`+directoryDepth+`/lessons/gdw.html">Getting Down With HTML</a>
    <a href="`+directoryDepth+`/lessons/block.html">Block Level Elements</a>
    <a href="`+directoryDepth+`/lessons/inline.html">Inline Elements</a>
    <a href="`+directoryDepth+`/lessons/objects.html">Object Elements</a>
    <a href="`+directoryDepth+`/lessons/special.html">Special Characters</a>
    <a href="`+directoryDepth+`/lessons/unordered.html">Unordered Lists</a>
    <a href="`+directoryDepth+`/lessons/ordered.html">Ordered Lists</a>
    <a href="`+directoryDepth+`/lessons/description.html">Description Lists</a>
    <a href="`+directoryDepth+`/lessons/learning_webdev.html">Learning Web Dev</a>
    <a href="`+directoryDepth+`/lessons/decbinocthex.html">Number Types Table</a>
    <a href="`+directoryDepth+`/lessons/mytable.html">Courses Table</a>
    <a href="`+directoryDepth+`/lessons/favorite.html">Favorite Websites</a>
    <a href="`+directoryDepth+`/lessons/gallery1.html">Gallery I</a>
    <a href="`+directoryDepth+`/lessons/gallery2.html">Gallery II</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Other Links</a>
  <div class="dropdown-content">
    <a href="https://ict.gctaa.net/sections/webdesign/students.html">Other Websites</a>
    <a href="http://www.openbookproject.net/tutorials/getdown/index.html">Getting Down With Series</a>
    <a href="https://en.wikipedia.org/wiki/special:random" target="_blank">Random Wikipedia Page</a>
  </div>
</li>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;