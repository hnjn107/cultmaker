const mems = [];
let targetId = 1;

function initGrid() {
  const grid = document.getElementById('grid');
  for (let i = 0; i < 10; i++) {
    const target = document.createElement('div');
    target.className = 'target';
    target.textContent = `T${targetId}`;
    target.dataset.loyalty = Math.floor(Math.random() * 50) + 50; // loyalty example
    target.addEventListener('click', () => convertTarget(target));
    grid.appendChild(target);
    targetId++;
  }
}

function convertTarget(element) {
  // Remove target from grid
  element.remove();

  // Create mem object
  const mem = {
    name: element.textContent,
    loyalty: Number(element.dataset.loyalty)
  };
  mems.push(mem);

  // Place mems in mem-circle
  placeMems();
}

function placeMems() {
  const circle = document.getElementById('mem-circle');
  circle.innerHTML = '';
  mems.forEach((m, idx) => {
    const memEl = document.createElement('div');
    memEl.className = 'mem';
    memEl.textContent = m.name;
    circle.appendChild(memEl);
  });
}

document.addEventListener('DOMContentLoaded', initGrid);
