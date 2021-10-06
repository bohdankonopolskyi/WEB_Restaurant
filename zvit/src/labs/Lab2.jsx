import React from 'react';

export default function Lab2() {
  const [section, setSection] = React.useState(null);
  const [codeSubsection, setCodeSubsection] = React.useState(null);

  function getSection() {
    switch (section) {
      case "meta":
        return (
          <div className="meta">
            <h1>ПОСТАНОВКА ЗАДАЧІ<br />Лабороторної роботи №2</h1>
            {/* TODO */}
          </div>
        )
      case "lists":
        return (
          <div className="lists">
            <h1>Списки</h1>
            <h2>Невпорядкований список</h2>
            <img src="assets/ul-html.jpg" alt="unordered list html" />
            <img src="assets/ul-img.jpg" alt="unordered list screenshot" />
            <img src="assets/ul-css.jpg" alt="unordered list css" />
            <h2>Нумерований список</h2>
            <img src="assets/ol-html.jpg" alt="unordered list html" />
            <img src="assets/ol-img.jpg" alt="unordered list screenshot" />
          </div>
        )
      case "ids":
        return (
          <div className="ids">
            <h1>Ідентифікатори</h1>
            <img src="assets/id-html.jpg" alt="id html" />
            <img src="assets/id-css.jpg" alt="id css" />
          </div>
        )
      case "margin-float":
        return (
          <div className="margin-float">
            <h1>Відступи і плаваючі елементи</h1>
            <img src="assets/float.jpg" alt="float & margin css" />
          </div>
        )
      case "selectors":
        return (
          <div className="selectors">
            <h1>Селектори</h1>
            {getCodeSubsection()}
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
            <img src="assets/selectors-tag.jpg" alt="tag selectors css" />
            <h3>Селектори класу</h3>
            <img src="assets/selectors-class.jpg" alt="class selectors css" />
          </div>
        )
      case "other-selectors":
        return (
          <div>
            <h2>Інші селектори</h2>
            <h3>Дочірні селектори</h3>
            <img src="assets/selectors-child-text.jpg" alt="child selectors text" />
            <img src="assets/selectors-child-html.jpg" alt="child selectors html" />
            <img src="assets/selectors-child-css.jpg" alt="child selectors css" />
            <h3>Сусідні селектори</h3>
            <img src="assets/selectors-sibling-text.jpg" alt="sibling selectors text" />
            <img src="assets/selectors-sibling-html.jpg" alt="sibling selectors html" />
            <img src="assets/selectors-sibling-css.jpg" alt="sibling selectors css" />
          </div>
        )
      case "grouping-selectors":
        return (
          <div>
            <h2>Групування селекторів</h2>
            <img src="assets/selectors-group-css.jpg" alt="selectors grouping css" />
          </div>
        )
      default:
        return (
          <div>Оберіть зліва підрозділ</div>
        )
    }
  }

  return (
    <>
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
                <button onClick={() => { setSection("selectors"); setCodeSubsection("tag-class") }}>
                  Селектори тегу і класу
                </button>
              </li>
              <li>
                <button onClick={() => { setSection("selectors"); setCodeSubsection("other-selectors") }}>
                  Інші селектори
                </button>
              </li>
              <li>
                <button onClick={() => { setSection("selectors"); setCodeSubsection("grouping-selectors") }}>
                  Групування селекторів
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {getSection()}
    </>
  )
}
