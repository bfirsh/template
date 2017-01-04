export default `
dt-article {
  color: rgba(0, 0, 0, 0.8);
  font: 15px/1.55em -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
}

@media(min-width: 1024px) {
  dt-article {
    font-size: 20px;
  }
}

dt-article h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1em;
  /*-webkit-font-smoothing: antialiased;*/
}

@media(min-width: 1024px) {
  dt-article h1 {
    font-size: 50px;
    margin-bottom: 12px;
    letter-spacing: -0.025em;
  }
}

@media(min-width: 1024px) {
  dt-article > h1:first-of-type {
    margin-top: 100px;
  }
}

dt-article h2 {
  font-weight: 400;
  font-size: 28px;
  line-height: 1.25em;
  margin-top: 12px;
  margin-bottom: 24px;
}

dt-article h1 + h2 {
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

dt-article h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4em;
  margin-top: 24px;
  margin-bottom: 24px;
}

dt-article h4 {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.4em;
}

dt-article a {
  color: inherit;
}

dt-article p {
  margin-bottom: 24px;
  -webkit-font-smoothing: antialiased;
  /*font-family: Georgia, serif;*/
}

dt-article p a {
  /*text-decoration: none;*/
  /*background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0) 50%);*/
  /*background-repeat: repeat-x;*/
  /*background-size: 2px 1em;*/
  /*background-position: 0 1.25em;*/
}

dt-article p .link {
  text-decoration: underline;
  cursor: pointer;
}



dt-article ul {
  padding-left: 20px;
}

dt-article li {
  /*margin-bottom: 24px;*/
}

dt-article pre {
  font-size: 14px;
  margin-bottom: 20px;
}


dt-article hr {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 60px;
  margin-bottom: 60px;
}

dt-article section {
  margin-top: 60px;
  margin-bottom: 60px;
}


/* Figure */

dt-article figure {
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
}

@media(min-width: 1024px) {
  dt-article figure {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

dt-article figure img {
  width: 100%;
}

dt-article figure svg text,
dt-article figure svg tspan {
}

dt-article figure figcaption {
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1.5em;
}
@media(min-width: 1024px) {
  dt-article figure figcaption {
    font-size: 13px;
  }
}

dt-article figure.external img {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 18px;
  box-sizing: border-box;
}

dt-article figure figcaption a {
  color: rgba(0, 0, 0, 0.6);
}

/*dt-article figure figcaption::before {
  position: relative;
  display: block;
  top: -20px;
  content: "";
  width: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}*/

dt-article span.equation-mimic {
  font-family: georgia;
  font-size: 115%;
  font-style: italic;
}

dt-article figure figcaption b {
  font-weight: 600;
  color: rgba(0, 0, 0, 1.0);
}

`