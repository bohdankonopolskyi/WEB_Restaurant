import React from 'react';

export default function Lab2() {
  const [section, setSection] = React.useState(null);
  const [codeSubsection, setSubsection] = React.useState(null);

  function getSection() {
    switch (section) {
      case "meta":
        return (
          <div className="meta">
            <h1>ПОСТАНОВКА ЗАДАЧІ<br />Лабороторної роботи №2</h1>
            <ol>
              <li>
                <span>У програмному коді лабораторної работи №2 застосувати селектори тегу і класу на свій розсуд. Вміти пояснити викладачу. Програмний код  даного пункту відобразити у звітному HTML-документі</span>
              </li>
              <li>
                <span>У програмному коду лабораторної роботи №2  застосувати ідентифікатори. Вміти пояснити викладачу. Програмний код даного пункту відобразити у звітному HTML-документі.</span>
              </li>
              <li>
                <span>На свій розсуд застосувати сусідні, дочірні селектори, селектор атрибута та універсальний селектор. Програмні коди даного пункту відобразити у звітному HTML-документі.</span>
              </li>
              <li>
                <span>За допомогою каскадних таблиць стилів виконати на свій розсуд стильове оформлення текстових елементів. Показати як оформлюються:</span>
                <ul>
                  <li>списки</li>
                  <li>різноманітні властивості кольору і фону</li>
                  <li>зовнішні та внутрішні  відступи</li>
                  <li>плаваючі елементи</li>
                  Програмні коди даного пункту відобразити у звітному HTML-документі.
                </ul>
              </li>
              <li>
                <span>У звітному HTML-документі оформити звіт лабораторної роботи №2</span>
              </li>
            </ol>
          </div>
        )
      case "lists":
        return (
          <div className="lists">
            <h1>Списки</h1>
            <h2>Невпорядкований список</h2>
            <img src="assets/Lab2/ul-html.jpg" alt="unordered list html" />
            <img src="assets/Lab2/ul-img.jpg" alt="unordered list screenshot" />
            <img src="assets/Lab2/ul-css.jpg" alt="unordered list css" />
            <h2>Нумерований список</h2>
            <img src="assets/Lab2/ol-html.jpg" alt="unordered list html" />
            <img src="assets/Lab2/ol-img.jpg" alt="unordered list screenshot" />
          </div>
        )
      case "ids":
        return (
          <div className="ids">
            <h1>Ідентифікатори</h1>
            <img src="assets/Lab2/id-html.jpg" alt="id html" />
            <img src="assets/Lab2/id-css.jpg" alt="id css" />
          </div>
        )
      case "margin-float":
        return (
          <div className="margin-float">
            <h1>Відступи і плаваючі елементи</h1>
            <img src="assets/Lab2/float.jpg" alt="float & margin css" />
          </div>
        )
      case "selectors":
        return (
          <div className="selectors">
            <h1>Селектори</h1>
            {getCodeSubsection()}
          </div>
        )
      case "resume":
        return (
          <div className="resume">
            <span>Для вирішення задачі лабораторної роботи було використано:</span>
            <ol>
              <li>селектори різного класу, які застосовувалися в css файлі для задання стилів елементам хтмл сторінки</li>
              <li>ідентифікатори</li>
              <li>плаваючі елементи для розміщення блоків</li>
              <li>списки</li>
              <li>зовнішні та внутрішні відступи</li>
            </ol>
          </div>
        )
      default:
        return (
          <div>Оберіть розділ</div>
        )
    }
  }

  function getCodeSubsection() {
    switch (codeSubsection) {
      case "tag-class":
        return (
          <div>
            <h2>Селектори тегу і класу</h2>
            <h3>Селектори тегу</h3>
            <img src="assets/Lab2/selectors-tag.jpg" alt="tag selectors css" />
            <h3>Селектори класу</h3>
            <img src="assets/Lab2/selectors-class.jpg" alt="class selectors css" />
          </div>
        )
      case "other-selectors":
        return (
          <div>
            <h2>Інші селектори</h2>
            <h3>Дочірні селектори</h3>
            <img src="assets/Lab2/selectors-child-text.jpg" alt="child selectors text" />
            <img src="assets/Lab2/selectors-child-html.jpg" alt="child selectors html" />
            <img src="assets/Lab2/selectors-child-css.jpg" alt="child selectors css" />
            <h3>Сусідні селектори</h3>
            <img src="assets/Lab2/selectors-sibling-text.jpg" alt="sibling selectors text" />
            <img src="assets/Lab2/selectors-sibling-html.jpg" alt="sibling selectors html" />
            <img src="assets/Lab2/selectors-sibling-css.jpg" alt="sibling selectors css" />
          </div>
        )
      case "grouping-selectors":
        return (
          <div>
            <h2>Групування селекторів</h2>
            <img src="assets/Lab2/selectors-group-css.jpg" alt="selectors grouping css" />
          </div>
        )
      default:
        return (
          <div>Оберіть зліва підрозділ</div>
        )
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <nav>
        <ul>
          <li><button onClick={() => setSection("meta")}>ПОСТАНОВКА ЗАДАЧІ<br />Лабороторної роботи №2</button></li>
          <li><button onClick={() => setSection("lists")}>Списки</button></li>
          <li><button onClick={() => { setSection("ids") }}>Ідентифікатори</button></li>
          <li><button onClick={() => { setSection("margin-float") }}>Відступи і Плаваючі елементи</button></li>
          <li>
            <button onClick={() => { setSection("selectors") }}>Селектори</button>
            <ul>
              <li>
                <button onClick={() => { setSection("selectors"); setSubsection("tag-class") }}>
                  Селектори тегу і класу
                </button>
              </li>
              <li>
                <button onClick={() => { setSection("selectors"); setSubsection("other-selectors") }}>
                  Інші селектори
                </button>
              </li>
              <li>
                <button onClick={() => { setSection("selectors"); setSubsection("grouping-selectors") }}>
                  Групування селекторів
                </button>
              </li>
            </ul>
          </li>
          <li><button onClick={() => { setSection("resume") }}>Висновок</button></li>
        </ul>
      </nav>

      {getSection()}
    </div>
  )
}
