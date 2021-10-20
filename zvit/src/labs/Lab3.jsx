import React from 'react';

export default function Lab2() {
  const [section, setSection] = React.useState(null);
  const [codeSubsection, setSubsection] = React.useState(null);

  function getSection() {
    switch (section) {
      case "meta":
        return (
          <div className="meta">
            <p>БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
            <h3>Мета</h3>
            <ul>
              <li>придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</li>
              <li>придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>
          </div>
        )
      case "overview":
        return (
          <div className="overview">
            <img src="assets/Lab3/screen2.png" alt="screenshot 2" />
            <img src="assets/Lab3/screen1.png" alt="screenshot 1" />
          </div>
        )
        case "markup":
          return (
            <div className="markup">
              {getCodeSubsection()}
            </div>
        )
      case "resume":
        return (
          <div className="resume">
            <p>
              Виконавши лабораторну роботу, ми здобули навички практичної роботи 
              з блочною версткою HTML-сторінок. Ми придбали практичні навички створення HTML-документів
              засобами CSS, верстки на основі плаваючих елементів, з'ясували переваги та недоліки типів
              макетів HTML-сторінок. Також ми отримали навички верстки за допомогою Flexbox.
            </p>

            <p>
              У результаті було створено макет власного сайту (інтернет магазину). Також кожен студент
              створив свої власні макети (відповідно до варіанту) за допомогою таблиць, плаваючих елементів та
              Flexbox.
            </p>
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
      case "markup-table":
        return (
          <div>
            <h3>Богдан Конопольський</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Пушкарьов Максим</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Поліщук Дарія</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Шинкаренко Денис</h3>
            <p>Посилання на <a href="#">макет</a></p>
          </div>
        )
      case "markup-float":
        return (
          <div>
            <h3>Богдан Конопольський</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Пушкарьов Максим</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Поліщук Дарія</h3>
            <p>Посилання на <a href="#">макет</a></p>
            <h3>Шинкаренко Денис</h3>
            <p>Посилання на <a href="#">макет</a></p>
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
          <li><button onClick={() => setSection("meta")}>Тема, Мета, Розташування</button></li>
          <li><button onClick={() => setSection("overview")}>Зовнішній вигляд макету</button></li>
          <li>
            <button onClick={() => { setSection("markup") }}>Розмітка сторінки за допомогою таблиць</button>
            <ul>
              <li>
                <button onClick={() => { setSection("markup"); setSubsection("markup-table") }}>
                  Розмітка сторінки за допомогою плаваючих блоків
                </button>
              </li>
              <li>
                <button onClick={() => { setSection("markup"); setSubsection("markup-float") }}>
                  Розмітка сторінки за допомогою flexbox
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
