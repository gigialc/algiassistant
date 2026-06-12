// Fills each .mosaic-band with rows of small irregular tiles ("tesserae"),
// echoing the sea-glass mosaic palette: mostly teals with streaks of gold
// and the occasional coral piece.
(function () {
  var palette = [
    // [color, weight]
    ["#1e6f6b", 5],
    ["#2a7f78", 5],
    ["#56a89f", 4],
    ["#3d8f87", 4],
    ["#86c2b8", 3],
    ["#cfe6e1", 2],
    ["#d9a441", 2],
    ["#e8c376", 1.5],
    ["#c4502f", 0.8],
    ["#e07a3f", 0.6],
  ];

  var weighted = [];
  palette.forEach(function (entry) {
    var n = Math.round(entry[1] * 10);
    for (var i = 0; i < n; i++) weighted.push(entry[0]);
  });

  function pick() {
    return weighted[Math.floor(Math.random() * weighted.length)];
  }

  document.querySelectorAll(".mosaic-band").forEach(function (band) {
    // Enough tiles to cover wide screens across 3 wrapped rows.
    var frag = document.createDocumentFragment();
    for (var i = 0; i < 360; i++) {
      var t = document.createElement("span");
      t.className = "tess";
      t.style.background = pick();
      // Irregular widths + slight tilt make it feel hand-laid.
      t.style.flexBasis = 10 + Math.random() * 26 + "px";
      t.style.transform = "rotate(" + (Math.random() * 4 - 2) + "deg)";
      t.style.opacity = (0.82 + Math.random() * 0.18).toFixed(2);
      frag.appendChild(t);
    }
    band.appendChild(frag);
  });
})();
