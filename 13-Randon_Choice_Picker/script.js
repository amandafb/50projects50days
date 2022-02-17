const tagsEl = document.getElementById('tags');
const choices = document.getElementById('choices');

choices.focus();

choices.addEventListener('keyup', (e) => {
  creatTags(e.target.value);

  if (e.key == 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

function creatTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  // Ilumina as tags de forma aleatória
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    addHighlightTag(randomTag);

    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  }, 100);

  // Para em uma das tags
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      addHighlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function addHighlightTag(tag) {
  tag.classList.add('highlight');
}

function removeHighlightTag(tag) {
  tag.classList.remove('highlight');
}
