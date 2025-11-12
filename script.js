// Elementos do DOM
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const themeAudio = document.getElementById('theme-audio');
const intervalInput = document.getElementById('interval-input');
const decipherBtn = document.getElementById('decipher-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função para verificar se um número é primo
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função para contar dígitos de um número
function countDigits(num) {
  return num.toString().length;
}

// Função para somar apenas os dígitos ímpares de um número
function sumOddDigits(num) {
  const digits = num.toString().split('').map(Number);
  return digits.filter(d => d % 2 !== 0).reduce((sum, d) => sum + d, 0);
}

// Função para verificar se é um número da sombra perfeita
function isShadowPerfect(num) {
  const digitCount = countDigits(num);
  const oddDigitsSum = sumOddDigits(num);

  const hasOddDigits = digitCount % 2 !== 0;
  const hasPrimeSum = isPrime(oddDigitsSum);

  return {
    number: num,
    digitCount: digitCount,
    hasOddDigits: hasOddDigits,
    oddDigitsSum: oddDigitsSum,
    hasPrimeSum: hasPrimeSum,
    isValid: hasOddDigits && hasPrimeSum
  };
}

// Função para encontrar todos os números da sombra perfeita no intervalo
function findShadowPerfectNumbers(start, end) {
  const results = [];
  const validations = [];

  for (let num = start; num <= end; num++) {
    const validation = isShadowPerfect(num);
    validations.push(validation);

    if (validation.isValid) {
      results.push(num);
    }
  }

  return { results, validations };
}

// Função para exibir o resultado
function displayResult(start, end, data) {
  const { results, validations } = data;

  let html = `<p><strong>🔍 Analisando intervalo:</strong> ${start} a ${end}</p><br>`;
  html += `<p><strong>📊 VALIDAÇÃO DETALHADA:</strong></p><br>`;

  // Mostra validação de alguns números (primeiros 10 e últimos 10 para não sobrecarregar)
  const samplesToShow =
    validations.length > 20 ? [...validations.slice(0, 10), ...validations.slice(-10)] : validations;

  samplesToShow.forEach((v, index) => {
    if (index === 10 && validations.length > 20) {
      html += `<p style="text-align: center; margin: 15px 0; color: #fc0fc0;">... ${
        validations.length - 20
      } números não exibidos ...</p>`;
    }

    const validClass = v.isValid ? 'valid' : 'invalid';
    const statusIcon = v.isValid ? '✓' : '✗';

    html += `
            <div class="validation-item ${validClass}">
                <strong>${statusIcon} Número ${v.number}:</strong><br>
                → Quantidade de dígitos: <span style="color: ${v.hasOddDigits ? '#0ff' : '#ff1744'}">${v.digitCount} (${
      v.hasOddDigits ? 'ÍMPAR ✓' : 'PAR ✗'
    })</span><br>
                → Soma dos dígitos ímpares: <span style="color: ${v.hasPrimeSum ? '#0ff' : '#ff1744'}">${
      v.oddDigitsSum
    } (${v.hasPrimeSum ? 'PRIMO ✓' : 'NÃO PRIMO ✗'})</span><br>
                → Status: <span style="color: ${v.isValid ? '#0ff' : '#ff1744'}; font-weight: bold;">${
      v.isValid ? 'CÓDIGO VÁLIDO 🔓' : 'CÓDIGO INVÁLIDO 🔒'
    }</span>
            </div>
        `;
  });

  // Resultado final
  html += `
        <div class="final-output">
            <p>⚡ SAÍDA ESPERADA ⚡</p>
            <p style="margin-top: 10px; font-size: 1.3rem;">
                ${results.length > 0 ? `[${results.join(', ')}]` : 'Nenhum número da sombra perfeita encontrado'}
            </p>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #e0e0e0;">
                ${results.length} código${results.length !== 1 ? 's' : ''} desbloqueado${
    results.length !== 1 ? 's' : ''
  }!
            </p>
        </div>
    `;

  resultContent.innerHTML = html;
  resultSection.classList.remove('hidden');

  // Scroll suave para o resultado
  setTimeout(() => {
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Evento do botão DECIFRAR
decipherBtn.addEventListener('click', () => {
  const input = intervalInput.value.trim();

  if (!input) {
    alert('⚠️ Por favor, digite um intervalo válido!');
    return;
  }

  // Parse do input
  const parts = input.split(',').map(p => p.trim());

  if (parts.length !== 2) {
    alert('⚠️ Formato inválido! Use: início, fim (ex: 100, 199)');
    return;
  }

  const start = parseInt(parts[0]);
  const end = parseInt(parts[1]);

  if (isNaN(start) || isNaN(end)) {
    alert('⚠️ Os valores devem ser números inteiros!');
    return;
  }

  if (start > end) {
    alert('⚠️ O valor inicial deve ser menor ou igual ao valor final!');
    return;
  }

  if (end - start > 10000) {
    alert('⚠️ Intervalo muito grande! Use intervalos menores que 10.000 números.');
    return;
  }

  // Processa e exibe resultado
  const data = findShadowPerfectNumbers(start, end);
  displayResult(start, end, data);
});

// Evento do botão RETORNAR
returnBtn.addEventListener('click', () => {
  intervalInput.value = '';
  resultSection.classList.add('hidden');
  resultContent.innerHTML = '';
  intervalInput.focus();
});

// Permite pressionar Enter no input para decifrar
intervalInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    decipherBtn.click();
  }
});
