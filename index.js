(function () {
  const pickFont = () => ['SS01', 'SS02', 'SS03', 'SS04'][Math.floor(Math.random() * 4)];
  const elements = document.body.querySelectorAll(
    'div, p, h1, h2, h3, h4, h5, h6, li, span, button, a'
  );

  const styleText = (el) => {
    el.innerHTML = el.textContent
      .split('')
      .map((letter) =>
        letter.match(/[A-Z0-9]|[^A-Za-z0-9 ]/g)
          ? `<span style="font-family:${pickFont()};">${letter}</span>`
          : letter
      )
      .join('');
  };

  elements.forEach(styleText);
})();


// minified
// document.body.querySelectorAll("div, p, h1, h2, h3, h4, h5, h6, li, span, button, a").forEach(t=>{t.innerHTML=t.textContent.split("").map(t=>t.match(/[A-Z0-9]|[^A-Za-z0-9 ]/g)?`<span style="font-family:${(()=>["SS01","SS02","SS03","SS04"][Math.floor(4*Math.random())])()};">${t}</span>`:t).join("")});