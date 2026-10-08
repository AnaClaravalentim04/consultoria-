const quizForm = document.querySelector('.quiz-box');
const resultBox = document.createElement('div');
resultBox.className = 'result-box';
quizForm.appendChild(resultBox);

const careerMap = {
  tecnologia: '💻 Carreira em Tecnologia: você pode se destacar em programação, inteligência artificial ou design digital.',
  criacao: '🎨 Carreira em Criatividade: você tem perfil para design, publicidade, audiovisual ou arte digital.',
  ajuda: '🩺 Carreira em Cuidado e Serviço: áreas como saúde, educação e psicologia podem ser um grande caminho para você.',
  natureza: '🌿 Carreira em Sustentabilidade: você pode seguir em meio ambiente, agronomia, engenharia ambiental ou pesquisa.',
};

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const selects = quizForm.querySelectorAll('select');
  const answers = Array.from(selects).map((select) => select.value.toLowerCase());

  let match = 'tecnologia';

  if (answers.some((answer) => answer.includes('desenhar') || answer.includes('arte') || answer.includes('comunicação'))) {
    match = 'criacao';
  }

  if (answers.some((answer) => answer.includes('ajudar') || answer.includes('saúde') || answer.includes('bem-estar'))) {
    match = 'ajuda';
  }

  if (answers.some((answer) => answer.includes('natureza') || answer.includes('sustentabilidade'))) {
    match = 'natureza';
  }

  resultBox.textContent = careerMap[match];
  resultBox.style.display = 'block';
});
