import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        background: var(--color-background);
        color: var(--color-foreground);
        --color-primary: #06080D;
        --color-secondary: #fff;
        --color-title-primary: #A6588A;
        --color-title-secondary: #c18aad;
        --font-heading: "Trebuchet MS", "Lucida Sans", Arial, sans-serif;
        --font-body: 'Merriweather', 'Georgia', serif;
    }

    [data-theme="light"] {
        --color-foreground-accent: #111111;
        --color-foreground: #000000;
        --color-background: #ffffff;
        --color-background-accent: #bbbbbb;
    }

    [data-theme="dark"] {
        --color-foreground-accent: #eeeeee;
        --color-foreground: #ffffff;
        --color-background: #000000;
        --color-background-accent: #444444;
    }

    .app {
      background: var(--color-background);
      color: var(--color-foreground);
    }

/* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

      html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      font-family: var(--font-body);
      //color: var(--color-primary);
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
h3,
label,
button {
  //color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 32px;
  text-align: center;
}
h2 {
  font-size: 26px;
}
h3 {
  font-size: 22px;
}
h4 {
  font-size: 18px;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}
.dark-mode {
  //background-color: var(--color-primary);
  //color: var(--color-secondary);
}
.header {
  //color: var(--color-title-primary);
  color: var(--color-foreground);
  font-size: 1.4rem;
  text-decoration: none;

  &:hover {
    //color: var(--color-title-secondary);
    color: var(--color-foreground);
    text-decoration: none;
  }
  &:link {
  }
  &:active {
  }
}
`;
