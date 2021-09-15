// ховає вміст всіх лабораторних
function hideLabs() {
  const classes = ['description', 'meta', 'code', 'sumup'];
  for (let c of classes) {
    let el = document.querySelectorAll(`div.${c}`);
    for (let i of el) {
      i.style.visibility = 'hidden';
    }
  }
}

function showLab(labId) {
  window.location.hash = `lab${labId}`;

  document.getElementById('emptyLab').style.visibility = 'hidden';
  document.getElementById('emptySection').style.visibility = 'visible';
  hideLabs()
}

function showSection(section) {
  const labId = window.location.hash; // наприклад '#lab1'

  if (!labId) { // show #emptyLab
    document.getElementById('emptyLab').style.visibility = 'visible';
    return;
  }

  // ховаємо всі інші елементи
  document.getElementById('emptySection').style.visibility = 'hidden';
  hideLabs()

  // відображаємо лише вибрану
  document.querySelector(`${labId} > .${section.className}`).style.visibility = 'visible';
}

