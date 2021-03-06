//Thanks Alex for the navbar help

// directoryDepth = "..".repeat(window.location.href.replace(/[^/A]/g, "").length-2)

var menuStr =
`<li class="dropdownButton"><a href="/index.html">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Head First JS</a>
  <div class="dropdown-content">
    <a href="/headFirst/playlist/playlist.html">Webville Tunes</a>
    <a href="/headFirst/sticky/notetoself.html>Note To Self
  </div
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Lessons 1-4</a>
  <div class="dropdown-content">
    <a href="/lessons/minimal_page.html">Minimal Page</a>
    <a href="/lessons/gdw.html">Getting Down With HTML</a>
    <a href="/lessons/block.html">Block Level Elements</a>
    <a href="/lessons/inline.html">Inline Elements</a>
    <a href="/lessons/objects.html">Object Elements</a>
    <a href="/lessons/special.html">Special Characters</a>
    <a href="/lessons/unordered.html">Unordered Lists</a>
    <a href="/lessons/ordered.html">Ordered Lists</a>
    <a href="/lessons/description.html">Description Lists</a>
    <a href="/lessons/learning_webdev.html">Learning Web Dev</a>
  </div
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Lessons 5-8</a>
  <div class="dropdown-content">
    <a href="/lessons/decbinocthex.html">Number Types Table</a>
    <a href="/lessons/mytable.html">Courses Table</a>
    <a href="/lessons/favorite.html">Favorite Websites</a>
    <a href="/lessons/gallery1.html">Gallery I</a>
    <a href="/lessons/gallery2.html">Gallery II</a>
    <a href="/lessons/forms1.html">Form 1</a>
    <a href="/lessons/forms2.html">Form 2</a>
    <a href="/lessons/forms3.html">Form 3</a>
    <a href="/lessons/forms4.html">Form 4</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Experiments</a>
  <div class="dropdown-content">
    <a href="/experiments/navidad/index.html">Navidad</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Other Links</a>
  <div class="dropdown-content">
    <a href="https://ciw.jackploetz.com" target="_blank">CIW Labs</a>
    <a href="https://github.com/jwploetz/ciw" target="_blank">CIW GitHub Repo</a>
    <a href="https://github.com/jwploetz/jwploetz.github.io" target="_blank">Website GitHub Repo</a>
    <a href="https://koibots.com" target="_blank"> KoiBots Website</a>
    <a href="https://ict.gctaa.net/sections/webdesign/students.html" target="_blank">Other Websites</a>
    <a href="http://www.openbookproject.net/tutorials/getdown/index.html" target="_blank">Getting Down With Series</a>
    <a href="https://en.wikipedia.org/wiki/special:random" target="_blank">Random Wikipedia Page</a>
  </div>
</li>`;

var menuList = document.getElementById("menuBar");
menuList.innerHTML = menuStr;
