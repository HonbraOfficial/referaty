var apptitle = "Jan Brabec";

function header() {
  document.write('<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">');
  document.write('  <header class="mdl-layout__header">');
  document.write('    <div class="mdl-layout__header-row">');
  document.write('      <div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button">');
  document.write('        <i class="material-icons">menu</i>');
  document.write("      </div>");
  document.write('      <span class="mdl-layout-title">' + apptitle + '</span>');
  document.write("    </div>");
  document.write("  </header>");
  document.write('  <div class="mdl-layout__drawer">');
  document.write('    <span class="mdl-layout-title">' + apptitle + '</span>');
  document.write('    <nav class="mdl-navigation">');
  document.write('      <a class="mdl-navigation__link" href="index.html">Domů</a>');
  document.write('      <a class="mdl-navigation__link" target="_blank" href="https://mensagymnazium.cz/">Mensa gymnázium</a>');
  document.write("    </nav>");
  document.write("  </div>");
  document.write('  <main class="mdl-layout__content" id="main">');
  document.write('    <div class="page-content">');
  document.write('      <div class="mdl-card mdl-shadow--2dp article">');
  document.getElementById("title").innerHTML = apptitle;
}

function footer() {
  document.write('<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate loading-bottom" id="loading"></div>');
  document.write("      </div>");
  document.write("    </div>");
  document.write("  </main>");
  document.write("</div>");
}