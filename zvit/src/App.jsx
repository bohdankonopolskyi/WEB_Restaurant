import React, {useState} from 'react';
import Lab1 from './labs/Lab1';
import Lab2 from './labs/Lab2';

export default function App() {
  const [lab, setLab] = useState(null);

  function getLab() {
    switch (lab) {
      case 1:
        return <Lab1 />;
      case 2:
        return <Lab2 />
      default:
        return <div>Оберіть лабораторну роботу</div>
    }
  }

  return (
    <>
      <h1>Звіти з лабораторних робіт<br/>з дисципліни "Розроблення WEB-застосувань"</h1>
      <h2>Бригада №2, студенти групи: Конопольський Богдан, Поліщук Дарія, Пушкарьов Максим, Шинкаренко Денис</h2>

      <div>
        <button type="button" onClick={() => setLab(1)}>
          <span>Лабораторна робота №1</span>
        </button>
        <button type="button" onClick={() => setLab(2)}>
          <span>Лабораторна робота №2</span>
        </button>
      </div>

      {getLab()}
    </>
  )
}
