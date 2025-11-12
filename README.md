# 🔮 Ghost Binary - O Algoritmo das Sombras Neon

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> 🌃 **Uma experiência cyberpunk interativa para desvendar os segredos matemáticos da Cidade das Luzes Neon**

---

## 📖 Sobre o Desafio

### **O Algoritmo das Sombras Neon**

Numa metrópole onde as luzes de neon cortam a escuridão, dados valiosos preenchem o submundo digital. Você é uma decifradora lendária, conhecida apenas como **"Ghost Binary"**: nada escapa ao seu olhar analítico — nem mesmo os padrões ocultos nos recantos mais obscuros da rede pós-humana.

Entre fumaça e circuitos, corporações e hackers disputam códigos capazes de desbloquear o lendário **"Núcleo Secreto"**, fonte infinita de dados e energia. Apenas quem decifrar os **Números Sombrios do Neon** conseguirá rastrear os segredos da Cidade das Luzes.

### 🎯 Missão

Identificar os chamados **"números da sombra perfeita"** em um intervalo fornecido. Um número da sombra perfeita segue regras enigmáticas:

- ✦ Deve possuir um **número ímpar de dígitos** (assim como os códigos mais protegidos dos hackers noturnos)
- ✦ A **soma de todos os dígitos ímpares** de seu valor deve ser obrigatoriamente um **número primo** (essa energia matematicamente pura ativa portais secretos na infraestrutura da cidade)

**Exemplo:** O código `753` tem três dígitos (ímpar), mas a soma dos dígitos ímpares (7 + 5 + 3 = 15) não é primo — logo, não desbloqueia nada. Já códigos como `131` ou `179` podem conter o padrão procurado.

### 🔐 Entrada e Saída

**Entrada:** Dois inteiros representando o intervalo de análise (exemplo: `100, 999`)

**Saída:** Uma lista de todos os números da sombra perfeita encontrados no intervalo específico

```
Exemplo:
Entrada: 100, 199
Saída: [113, 131, 151, 179]
```

---

## 🧠 Lógica de Solução

### Algoritmo Principal

A solução do desafio é implementada através de três funções principais que trabalham em conjunto:

#### 1. **Verificação de Número Primo** (`isPrime`)
```javascript
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
```
- **Complexidade:** O(√n)
- **Otimização:** Verifica apenas divisores ímpares após eliminar pares
- **Casos especiais:** Trata números menores que 2 e o número 2

#### 2. **Soma de Dígitos Ímpares** (`sumOddDigits`)
```javascript
function sumOddDigits(num) {
    const digits = num.toString().split('').map(Number);
    return digits.filter(d => d % 2 !== 0).reduce((sum, d) => sum + d, 0);
}
```
- **Processo:** Converte número em string → separa dígitos → filtra ímpares → soma
- **Complexidade:** O(d), onde d é o número de dígitos

#### 3. **Validação Completa** (`isShadowPerfect`)
```javascript
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
```

### Fluxo de Execução

```
Input: [100, 199]
    ↓
Para cada número no intervalo:
    ↓
    1. Conta dígitos → É ímpar? ✓/✗
    ↓
    2. Extrai dígitos ímpares → [1,1,3] (para 113)
    ↓
    3. Soma dígitos ímpares → 1+1+3 = 5
    ↓
    4. Verifica se soma é primo → 5 é primo? ✓
    ↓
    5. Ambas condições atendidas? → VÁLIDO ✓
    ↓
Output: [113, 131, 151, 179]
```

### Complexidade Total

- **Tempo:** O(n × d × √s), onde:
  - n = tamanho do intervalo
  - d = número médio de dígitos
  - s = valor médio da soma de dígitos ímpares
  
- **Espaço:** O(n) para armazenar validações e resultados

---

## 🚀 Aplicações em Projetos Reais

### 1. **Sistemas de Criptografia e Segurança**
- Geração de chaves com propriedades matemáticas específicas
- Validação de tokens com padrões numéricos customizados
- Algoritmos de hash com requisitos matemáticos

### 2. **Validação de Dados Complexos**
- Verificação de códigos de produto com regras específicas
- Validação de números de série com propriedades matemáticas
- Sistemas de checksum customizados

### 3. **Análise de Padrões Numéricos**
- Mineração de dados com propriedades específicas
- Detecção de anomalias em sequências numéricas
- Análise forense de dados

### 4. **Jogos e Gamificação**
- Geração de códigos especiais em jogos
- Desafios matemáticos interativos
- Sistemas de recompensa baseados em padrões

### 5. **Educação Matemática**
- Ensino de números primos de forma interativa
- Demonstração de algoritmos de verificação
- Gamificação do aprendizado de conceitos matemáticos

---

## 🎨 Features do Projeto

- ✨ **Interface Cyberpunk:** Design moderno com tema neon
- 🎬 **Background Dinâmico:** Suporte para vídeo em fullscreen
- 🎵 **Áudio Temático:** Controles integrados de reprodução
- 📊 **Validação Detalhada:** Mostra passo a passo de cada número
- 🔍 **Análise Completa:** Exibe todos os cálculos realizados
- 📱 **Responsivo:** Adaptado para desktop, tablet e mobile
- ⚡ **Animações Fluidas:** Efeitos de neon e transições suaves
- 🎯 **UX Intuitiva:** Interface clara e fácil de usar

---

## 📂 Estrutura do Projeto

```
desafio_347/
│
├── assets/
│   ├── background.mp4    # Vídeo de fundo cyberpunk
│   └── theme.mp3          # Música tema
│
├── index.html             # Estrutura HTML
├── styles.css             # Estilos e animações
├── script.js              # Lógica do desafio
└── README.md              # Documentação
```

---

## 🎮 Como Usar

1. **Clone o repositório:**
```bash
git clone https://github.com/luizfxdev/desafio_347.git
cd desafio_347
```

2. **Adicione os assets:**
   - Coloque seu vídeo `background.mp4` na pasta `assets/`
   - Coloque sua música `theme.mp3` na pasta `assets/`

3. **Abra o projeto:**
   - Abra `index.html` em seu navegador
   - Ou use um servidor local (Live Server, Python HTTP Server, etc.)

4. **Interaja com o desafio:**
   - Digite um intervalo (ex: `100, 199`)
   - Clique em **DECIFRAR**
   - Veja os resultados detalhados!

---

## 📊 Exemplos de Uso

### Exemplo 1
```
Entrada: 100, 199
Saída: [113, 131, 151, 179]
Quantidade: 4 códigos
```

### Exemplo 2
```
Entrada: 1, 50
Saída: [3, 5, 7, 11, 13, 17, 23, 29, 31, 41, 43, 47]
Quantidade: 12 códigos
```

### Exemplo 3
```
Entrada: 200, 299
Saída: [223, 227, 229, 241, 263, 269, 281]
Quantidade: 7 códigos
```

### Exemplo 4
```
Entrada: 500, 600
Saída: [533, 557, 577, 599]
Quantidade: 4 códigos
```

### Exemplo 5
```
Entrada: 1000, 1100
Saída: [1009, 1019, 1021, 1031, 1033, 1051, 1061, 1063, 1091, 1093, 1097]
Quantidade: 11 códigos
```

### Exemplo 6
```
Entrada: 10, 20
Saída: [11, 13, 17, 19]
Quantidade: 4 códigos
```

### Exemplo 7
```
Entrada: 700, 750
Saída: [701, 709, 727, 743, 747]
Quantidade: 5 códigos
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e moderna
- **CSS3:** Animações, gradientes e efeitos neon
- **JavaScript (ES6+):** Lógica algorítmica e manipulação do DOM
- **Google Fonts:** Raleway e Orbitron para tipografia temática

---

## 🎯 Conceitos Demonstrados

- ✅ Algoritmos de verificação de números primos
- ✅ Manipulação e análise de dígitos
- ✅ Filtros e operações em arrays
- ✅ Programação funcional (map, filter, reduce)
- ✅ Validação de entrada de usuário
- ✅ Animações CSS avançadas
- ✅ Design responsivo
- ✅ Manipulação de mídia (vídeo/áudio)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---


## 🌟 Mostre seu apoio

Se este projeto foi útil para você, considere dar uma ⭐️!

---

<div align="center">
 <i>Atrás de tudo que a gente acredita, tem uma verdade que não queremos enxergar.</i> (Cyberpunk 2077)
  
</div>

