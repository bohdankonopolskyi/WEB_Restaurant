import React from 'react';

export default function Lab1() {
  const [section, setSection] = React.useState(null);
  const [codeSubsection, setCodeSubsection] = React.useState(null);

  function getSection() {
    switch (section) {
      case "meta":
        return (
          <div className="meta">
            <h1>Тема, Мета та Посилання</h1>
            <div>Предметна галузь: Ресторанний бізнес</div>
            <div>Тема: розвиток ресторанного бізнесу на прикладі піцерії</div>
            <div>Основна діяльність: До основної діяльності сайту мережевої піцерії відноситься автоматизація продажів.</div>
          </div>
        )
      case "description":
        return (
          <div className="description">
            <h1>Опис предметного середовища</h1>
            <p>
              <span>У задачі автоматизується процес замовлення страв в ресторані, що необхідно для швидкого пошуку, обробки інформації про страви і продукти, що використовуються в них.</span>
              <span>Автоматизувавши процес, ресторан зможе виявити саму куповану і популярну продукцію, що дозволить, згодом, стежити за зміною попиту і відповідно складати більш вигідний план закупівель сировини.</span>
              <span>Дотримання смакам споживачів підвищить популярність організації серед споживачів і збільшить виручку.</span>
            </p>
            <h2>Функціонал</h2>
            <ul>
              <li>Візитівка</li>
              <li>Меню</li>
              <li>Рахунок</li>
              <li>Історія замовлень</li>
              <li>Доставка</li>
              <li>Кошик</li>
              <li>Контакти (+ вакансії)</li>
              <li>Вибіркові/основні інгредієнти</li>
              <li>Акції, подарункові карти</li>
              <li>Авторизація</li>
              <li>Відгуки</li>
            </ul>
          </div>
        )
      case "code":
        return (
          <div className="code">
            <h1>Структура документа</h1>
            {getCodeSubsection()}
          </div>
        )
      case "resume":
        return (
          <div className="resume">
            <h1>Висновок</h1>
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
      case "html-table":
        return (
          <div>
            <img src="assets/Lab1/photo-table.jpg" alt="table" />
            <img src="assets/Lab1/html-table.jpg" alt="html of table" />
          </div>
        )
      case "html-form":
        return (
          <div>
            <img src="assets/Lab1/photo-form.jpg" alt="form" />
            <img src="assets/Lab1/html-form.jpg" alt="html of form" />
          </div>
        )
      case "html-img":
        return (
          <div>
            <img src="assets/Lab1/photo-img.jpg" alt="img" />
            <img src="assets/Lab1/html-img.jpeg" alt="html of img" />
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
          <li><button onClick={() => setSection("meta")}>Тема, Мета та Посилання</button></li>
          <li><button onClick={() => setSection("description")}>Опис предметного середовища</button></li>
          <li>
            <button onClick={() => { setSection("code"); setCodeSubsection(null) }}>
              Структура документа
            </button>
            <ul>
              <li>
                <button onClick={() => { setSection("code"); setCodeSubsection("html-table") }}>
                  HTML-код таблиць
                </button>
              </li>
              <li><button onClick={() => { setSection("code"); setCodeSubsection("html-form") }}>HTML-код форм</button></li>
              <li><button onClick={() => { setSection("code"); setCodeSubsection("html-img") }}>HTML-код зображення</button></li>
            </ul>
          </li>
          <li><button onClick={() => setSection("resume")}>Висновки</button></li>
        </ul>
      </nav>

      {getSection()}
    </>
  )
}
