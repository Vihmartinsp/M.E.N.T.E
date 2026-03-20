// ============================================
// ÁREAS E TÓPICOS ORGANIZADOS
// ============================================
const AREAS = {
  "Álgebra":         ["Conjuntos Numéricos","Divisibilidade","Fatoração","Equações","Inequações","Equações Biquadradas","Polinômios","Sistemas de Equações","Razões e Proporções","Desigualdades"],
  "Funções":         ["Funções 1º e 2º Grau","Funções Exponenciais e Logarítmicas","Funções Polinomiais","Funções Racionais","Funções Trigonométricas","Relações de Dependência","Plano Cartesiano"],
  "Sequências":      ["Progressões (PA e PG)"],
  "Financeira":      ["Porcentagem","Juros Simples","Juros Compostos"],
  "Geometria":       ["Geometria Plana (Áreas)","Geometria Espacial (Volumes)","Comprimentos e Perímetros","Ângulos e Retas","Semelhança de Triângulos","Teorema de Tales","Trigonometria","Circunferências e Círculos","Grandezas e Medidas"],
  "Estatística":     ["Medidas de Tendência Central","Desvios e Variância","Probabilidade"]
};

// ============================================
// BANCO DE QUESTÕES COMPLETO
// ============================================
const questoes = [

  // ========== ÁLGEBRA ==========
  {id:1, area:"Álgebra", topico:"Conjuntos Numéricos", ano:"ENEM 2019",
   enunciado:`Qual dos números a seguir é <mark>irracional</mark>?`,
   alternativas:[{letra:"A",texto:"0,333..."},{letra:"B",texto:"√2"},{letra:"C",texto:"4/7"},{letra:"D",texto:"-3"},{letra:"E",texto:"0"}],
   correta:"B", feedbackErro:"Irracional = não pode ser escrito como fração p/q. √2 ≈ 1,41421... não tem dízima periódica.", feedbackAcerto:"√2 é irracional pois sua expansão decimal não é periódica.",
   passos:[{texto:"Racionais incluem inteiros, frações e dízimas periódicas."},{texto:"√2 = 1,41421356... não repete padrão → <strong>irracional</strong>."}]},

  {id:2, area:"Álgebra", topico:"Conjuntos Numéricos", ano:"ENEM 2020",
   enunciado:`O número <mark>0,7̄ (0,777...)</mark> pode ser escrito como fração?`,
   alternativas:[{letra:"A",texto:"7/10"},{letra:"B",texto:"7/9"},{letra:"C",texto:"7/11"},{letra:"D",texto:"77/100"},{letra:"E",texto:"Não pode"}],
   correta:"B", feedbackErro:"Para dízima periódica simples: x=0,777... → 10x=7,777... → 9x=7 → x=7/9.", feedbackAcerto:"7/9. Dízima periódica sempre é fração!",
   passos:[{texto:"x = 0,777…"},{texto:"10x = 7,777…"},{texto:"10x − x = 7 → 9x = 7 → x = <strong>7/9</strong>."}]},

  {id:3, area:"Álgebra", topico:"Divisibilidade", ano:"ENEM 2021",
   enunciado:`Qual é o <mark>MDC</mark> (Máximo Divisor Comum) de <mark>36 e 48</mark>?`,
   alternativas:[{letra:"A",texto:"6"},{letra:"B",texto:"9"},{letra:"C",texto:"12"},{letra:"D",texto:"18"},{letra:"E",texto:"24"}],
   correta:"C", feedbackErro:"Decomponha em fatores primos: 36=2²×3² e 48=2⁴×3. MDC=produto dos fatores comuns com menor expoente.", feedbackAcerto:"MDC = 2²×3 = 12.",
   passos:[{texto:"36 = 2² × 3²"},{texto:"48 = 2⁴ × 3"},{texto:"MDC = 2² × 3 = <strong>12</strong>."}]},

  {id:4, area:"Álgebra", topico:"Divisibilidade", ano:"ENEM 2022",
   enunciado:`O <mark>MMC</mark> (Mínimo Múltiplo Comum) de <mark>4, 6 e 10</mark> é:`,
   alternativas:[{letra:"A",texto:"20"},{letra:"B",texto:"30"},{letra:"C",texto:"60"},{letra:"D",texto:"120"},{letra:"E",texto:"240"}],
   correta:"C", feedbackErro:"MMC = produto dos fatores primos com maior expoente: 4=2², 6=2×3, 10=2×5.", feedbackAcerto:"MMC = 2²×3×5 = 60.",
   passos:[{texto:"4=2², 6=2×3, 10=2×5."},{texto:"MMC = 2²×3×5 = <strong>60</strong>."}]},

  {id:5, area:"Álgebra", topico:"Fatoração", ano:"ENEM 2020",
   enunciado:`Qual é a forma fatorada de <mark>x² − 9</mark>?`,
   alternativas:[{letra:"A",texto:"(x−3)²"},{letra:"B",texto:"(x+3)(x−3)"},{letra:"C",texto:"(x−9)(x+1)"},{letra:"D",texto:"x(x−9)"},{letra:"E",texto:"(x+9)(x−1)"}],
   correta:"B", feedbackErro:"Diferença de quadrados: a²−b² = (a+b)(a−b). Aqui a=x, b=3.", feedbackAcerto:"x²−9 = (x+3)(x−3). Produto notável clássico!",
   passos:[{texto:"Reconheça: a²−b² = (a+b)(a−b)."},{texto:"x²−3² = <strong>(x+3)(x−3)</strong>."}]},

  {id:6, area:"Álgebra", topico:"Fatoração", ano:"ENEM 2021",
   enunciado:`Fatore completamente: <mark>2x² + 4x</mark>`,
   alternativas:[{letra:"A",texto:"2(x²+2x)"},{letra:"B",texto:"2x(x+2)"},{letra:"C",texto:"x(2x+4)"},{letra:"D",texto:"2(x+2)²"},{letra:"E",texto:"(2x+1)(x+4)"}],
   correta:"B", feedbackErro:"Coloque em evidência o fator comum: 2x é divisor de ambos os termos.", feedbackAcerto:"2x² + 4x = 2x(x+2).",
   passos:[{texto:"Fator comum de 2x² e 4x: <strong>2x</strong>."},{texto:"2x² + 4x = <strong>2x(x+2)</strong>."}]},

  {id:7, area:"Álgebra", topico:"Equações", ano:"ENEM 2019",
   enunciado:`Resolva: <mark>2x + 5 = 13</mark>`,
   alternativas:[{letra:"A",texto:"x = 3"},{letra:"B",texto:"x = 4"},{letra:"C",texto:"x = 5"},{letra:"D",texto:"x = 9"},{letra:"E",texto:"x = 6"}],
   correta:"B", feedbackErro:"Isole x: 2x = 13−5 = 8 → x = 4.", feedbackAcerto:"2x = 8 → x = 4.",
   passos:[{texto:"2x = 13−5 = 8."},{texto:"x = 8/2 = <strong>4</strong>."}]},

  {id:8, area:"Álgebra", topico:"Equações", ano:"ENEM 2022",
   enunciado:`As raízes de <mark>x² − 5x + 6 = 0</mark> são:`,
   alternativas:[{letra:"A",texto:"x=1 e x=6"},{letra:"B",texto:"x=2 e x=3"},{letra:"C",texto:"x=−2 e x=−3"},{letra:"D",texto:"x=0 e x=5"},{letra:"E",texto:"x=1 e x=5"}],
   correta:"B", feedbackErro:"Use Bhaskara ou fatoração. x²−5x+6 = (x−2)(x−3)=0.", feedbackAcerto:"(x−2)(x−3)=0 → x=2 ou x=3.",
   passos:[{texto:"Fatorando: (x−2)(x−3) = 0."},{texto:"x−2=0 → x=2; x−3=0 → x=<strong>3</strong>."}]},

  {id:9, area:"Álgebra", topico:"Inequações", ano:"ENEM 2021",
   enunciado:`Resolva a inequação: <mark>3x − 4 > 5</mark>`,
   alternativas:[{letra:"A",texto:"x > 1"},{letra:"B",texto:"x > 2"},{letra:"C",texto:"x > 3"},{letra:"D",texto:"x < 3"},{letra:"E",texto:"x < 1"}],
   correta:"C", feedbackErro:"3x > 9 → x > 3.", feedbackAcerto:"3x > 9 → x > 3.",
   passos:[{texto:"3x > 5+4 → 3x > 9."},{texto:"x > 9/3 → <strong>x > 3</strong>."}]},

  {id:10, area:"Álgebra", topico:"Inequações", ano:"ENEM 2022",
   enunciado:`Qual o conjunto solução de <mark>|x| ≤ 4</mark>?`,
   alternativas:[{letra:"A",texto:"x ≥ −4"},{letra:"B",texto:"x ≤ 4"},{letra:"C",texto:"−4 ≤ x ≤ 4"},{letra:"D",texto:"x ≤ −4 ou x ≥ 4"},{letra:"E",texto:"x < 4"}],
   correta:"C", feedbackErro:"|x| ≤ a equivale a −a ≤ x ≤ a.", feedbackAcerto:"|x| ≤ 4 → −4 ≤ x ≤ 4.",
   passos:[{texto:"Módulo ≤ a → −a ≤ x ≤ a."},{texto:"Portanto: <strong>−4 ≤ x ≤ 4</strong>."}]},

  {id:11, area:"Álgebra", topico:"Equações Biquadradas", ano:"ENEM 2020",
   enunciado:`Resolva: <mark>x⁴ − 5x² + 4 = 0</mark>. Quantas raízes reais existem?`,
   alternativas:[{letra:"A",texto:"Nenhuma"},{letra:"B",texto:"Uma"},{letra:"C",texto:"Duas"},{letra:"D",texto:"Três"},{letra:"E",texto:"Quatro"}],
   correta:"E", feedbackErro:"Substitua y=x²: y²−5y+4=0 → y=1 ou y=4. Cada y>0 dá 2 raízes reais.", feedbackAcerto:"y=1 → x=±1; y=4 → x=±2. São 4 raízes reais.",
   passos:[{texto:"y = x²: y²−5y+4 = 0."},{texto:"(y−1)(y−4) = 0 → y=1 ou y=4."},{texto:"x²=1 → x=±1; x²=4 → x=±2. Total: <strong>4 raízes</strong>."}]},

  {id:12, area:"Álgebra", topico:"Polinômios", ano:"ENEM 2021",
   enunciado:`Qual o valor de <mark>P(2)</mark> para <mark>P(x) = x³ − 3x + 1</mark>?`,
   alternativas:[{letra:"A",texto:"1"},{letra:"B",texto:"2"},{letra:"C",texto:"3"},{letra:"D",texto:"5"},{letra:"E",texto:"7"}],
   correta:"C", feedbackErro:"Substitua x=2: 8−6+1=3.", feedbackAcerto:"P(2) = 8−6+1 = 3.",
   passos:[{texto:"P(2) = 2³−3(2)+1 = 8−6+1 = <strong>3</strong>."}]},

  {id:13, area:"Álgebra", topico:"Sistemas de Equações", ano:"ENEM 2022",
   enunciado:`Resolva: <mark>x + y = 10</mark> e <mark>x − y = 2</mark>. Qual o valor de x?`,
   alternativas:[{letra:"A",texto:"x = 4"},{letra:"B",texto:"x = 5"},{letra:"C",texto:"x = 6"},{letra:"D",texto:"x = 7"},{letra:"E",texto:"x = 8"}],
   correta:"C", feedbackErro:"Some as equações: 2x=12 → x=6.", feedbackAcerto:"2x=12 → x=6, y=4.",
   passos:[{texto:"Somando: (x+y)+(x−y) = 10+2 → 2x=12."},{texto:"x = <strong>6</strong>; y = 10−6 = 4."}]},

  {id:14, area:"Álgebra", topico:"Sistemas de Equações", ano:"ENEM 2019",
   enunciado:`Uma camiseta + um boné = <mark>R$ 50,00</mark>. Dois bonés = uma camiseta + <mark>R$ 10,00</mark>. Preço da camiseta?`,
   alternativas:[{letra:"A",texto:"R$ 20"},{letra:"B",texto:"R$ 25"},{letra:"C",texto:"R$ 30"},{letra:"D",texto:"R$ 35"},{letra:"E",texto:"R$ 40"}],
   correta:"C", feedbackErro:"c+b=50 e c=2b−10. Substitua: (2b−10)+b=50 → 3b=60 → b=20, c=30.", feedbackAcerto:"c=30 e b=20.",
   passos:[{texto:"c+b=50 e c=2b−10."},{texto:"(2b−10)+b=50 → 3b=60 → b=20."},{texto:"c = 50−20 = <strong>R$30</strong>."}]},

  {id:15, area:"Álgebra", topico:"Razões e Proporções", ano:"ENEM 2020",
   enunciado:`A razão entre alunos e professores numa escola é <mark>25:1</mark>. Se há <mark>600 alunos</mark>, quantos professores há?`,
   alternativas:[{letra:"A",texto:"20"},{letra:"B",texto:"24"},{letra:"C",texto:"25"},{letra:"D",texto:"30"},{letra:"E",texto:"40"}],
   correta:"B", feedbackErro:"600/25 = 24.", feedbackAcerto:"600÷25 = 24 professores.",
   passos:[{texto:"600 / 25 = <strong>24 professores</strong>."}]},

  {id:16, area:"Álgebra", topico:"Razões e Proporções", ano:"ENEM 2021",
   enunciado:`Numa receita para <mark>4 pessoas</mark> usa-se <mark>300g de farinha</mark>. Para 10 pessoas, quantos gramas?`,
   alternativas:[{letra:"A",texto:"600g"},{letra:"B",texto:"700g"},{letra:"C",texto:"750g"},{letra:"D",texto:"800g"},{letra:"E",texto:"900g"}],
   correta:"C", feedbackErro:"Regra de três: 4→300g, 10→x. x = 300×10/4.", feedbackAcerto:"x = 3000/4 = 750g.",
   passos:[{texto:"4 → 300g ; 10 → x."},{texto:"x = 300×10/4 = <strong>750g</strong>."}]},

  {id:17, area:"Álgebra", topico:"Desigualdades", ano:"ENEM 2022",
   enunciado:`Qual o menor inteiro que satisfaz <mark>2x − 1 ≥ 7</mark>?`,
   alternativas:[{letra:"A",texto:"3"},{letra:"B",texto:"4"},{letra:"C",texto:"5"},{letra:"D",texto:"6"},{letra:"E",texto:"7"}],
   correta:"B", feedbackErro:"2x ≥ 8 → x ≥ 4. Menor inteiro é 4.", feedbackAcerto:"x ≥ 4. Menor inteiro = 4.",
   passos:[{texto:"2x ≥ 7+1 = 8."},{texto:"x ≥ 4. Menor inteiro: <strong>4</strong>."}]},

  // ========== FUNÇÕES ==========
  {id:18, area:"Funções", topico:"Funções 1º e 2º Grau", ano:"ENEM 2019",
   enunciado:`Uma bola é arremessada. Altura: <mark>h(t) = −5t² + 20t + 1</mark>. Altura máxima?`,
   alternativas:[{letra:"A",texto:"19m"},{letra:"B",texto:"20m"},{letra:"C",texto:"21m"},{letra:"D",texto:"25m"},{letra:"E",texto:"26m"}],
   correta:"C", feedbackErro:"Vértice: t=−b/2a=2. h(2)=21.", feedbackAcerto:"h(2)=−20+40+1=21m.",
   passos:[{texto:"t=−20/(−10)=2s."},{texto:"h(2)=−20+40+1=<strong>21m</strong>."}]},

  {id:19, area:"Funções", topico:"Funções 1º e 2º Grau", ano:"ENEM 2018",
   enunciado:`Raiz de <mark>f(x) = 3x − 6</mark>?`,
   alternativas:[{letra:"A",texto:"0"},{letra:"B",texto:"1"},{letra:"C",texto:"2"},{letra:"D",texto:"3"},{letra:"E",texto:"6"}],
   correta:"C", feedbackErro:"3x−6=0 → x=2.", feedbackAcerto:"x=2.",
   passos:[{texto:"3x=6 → x=<strong>2</strong>."}]},

  {id:20, area:"Funções", topico:"Funções 1º e 2º Grau", ano:"ENEM 2021",
   enunciado:`Custo <mark>C(x)=200+15x</mark>. Para C≤800, máximo de unidades?`,
   alternativas:[{letra:"A",texto:"30"},{letra:"B",texto:"40"},{letra:"C",texto:"45"},{letra:"D",texto:"50"},{letra:"E",texto:"60"}],
   correta:"B", feedbackErro:"15x≤600 → x≤40.", feedbackAcerto:"x≤40.",
   passos:[{texto:"200+15x≤800 → 15x≤600 → x≤<strong>40</strong>."}]},

  {id:21, area:"Funções", topico:"Funções Exponenciais e Logarítmicas", ano:"ENEM 2022",
   enunciado:`Uma população duplica a cada ano. Começou com <mark>500 indivíduos</mark>. Após <mark>3 anos</mark>, qual a população?`,
   alternativas:[{letra:"A",texto:"1.000"},{letra:"B",texto:"1.500"},{letra:"C",texto:"2.000"},{letra:"D",texto:"3.000"},{letra:"E",texto:"4.000"}],
   correta:"E", feedbackErro:"P(t)=500×2^t. P(3)=500×8=4000.", feedbackAcerto:"500×2³=500×8=4.000.",
   passos:[{texto:"P(t) = 500×2^t."},{texto:"P(3) = 500×8 = <strong>4.000</strong>."}]},

  {id:22, area:"Funções", topico:"Funções Exponenciais e Logarítmicas", ano:"ENEM 2021",
   enunciado:`Calcule <mark>log₂(32)</mark>.`,
   alternativas:[{letra:"A",texto:"4"},{letra:"B",texto:"5"},{letra:"C",texto:"6"},{letra:"D",texto:"16"},{letra:"E",texto:"3"}],
   correta:"B", feedbackErro:"log₂(32)=x → 2^x=32=2^5 → x=5.", feedbackAcerto:"2^5=32 → log₂(32)=5.",
   passos:[{texto:"2^x = 32 = 2^5."},{texto:"x = <strong>5</strong>."}]},

  {id:23, area:"Funções", topico:"Funções Exponenciais e Logarítmicas", ano:"ENEM 2020",
   enunciado:`Um capital triplica a cada 10 anos (crescimento exponencial). Em quantos anos triplicará 2 vezes (fator 9)?`,
   alternativas:[{letra:"A",texto:"15 anos"},{letra:"B",texto:"20 anos"},{letra:"C",texto:"25 anos"},{letra:"D",texto:"30 anos"},{letra:"E",texto:"40 anos"}],
   correta:"B", feedbackErro:"Triplicar 2 vezes = 3² = 9× o valor. Cada triplicação leva 10 anos → 2×10=20.", feedbackAcerto:"2 triplicações × 10 anos = 20 anos.",
   passos:[{texto:"Triplicar 2 vezes leva 2×10 = <strong>20 anos</strong>."}]},

  {id:24, area:"Funções", topico:"Plano Cartesiano", ano:"ENEM 2019",
   enunciado:`A distância entre os pontos <mark>A(1,2)</mark> e <mark>B(4,6)</mark> é:`,
   alternativas:[{letra:"A",texto:"3"},{letra:"B",texto:"4"},{letra:"C",texto:"5"},{letra:"D",texto:"6"},{letra:"E",texto:"7"}],
   correta:"C", feedbackErro:"d=√[(4−1)²+(6−2)²]=√(9+16)=√25=5.", feedbackAcerto:"d=√25=5.",
   passos:[{texto:"d = √[(4−1)²+(6−2)²] = √[9+16] = √25 = <strong>5</strong>."}]},

  {id:25, area:"Funções", topico:"Plano Cartesiano", ano:"ENEM 2020",
   enunciado:`O ponto médio entre <mark>A(2,4)</mark> e <mark>B(6,8)</mark> é:`,
   alternativas:[{letra:"A",texto:"(3,5)"},{letra:"B",texto:"(4,5)"},{letra:"C",texto:"(4,6)"},{letra:"D",texto:"(3,6)"},{letra:"E",texto:"(5,6)"}],
   correta:"C", feedbackErro:"Ponto médio: M=((x₁+x₂)/2,(y₁+y₂)/2).", feedbackAcerto:"M=((2+6)/2,(4+8)/2)=(4,6).",
   passos:[{texto:"M = ((2+6)/2, (4+8)/2) = <strong>(4, 6)</strong>."}]},

  {id:26, area:"Funções", topico:"Relações de Dependência", ano:"ENEM 2021",
   enunciado:`Um carro percorre a velocidade constante de <mark>80 km/h</mark>. A distância d (km) em função do tempo t (h) é:`,
   alternativas:[{letra:"A",texto:"d=t+80"},{letra:"B",texto:"d=80/t"},{letra:"C",texto:"d=80t"},{letra:"D",texto:"d=t/80"},{letra:"E",texto:"d=80−t"}],
   correta:"C", feedbackErro:"d=v×t. v=80.", feedbackAcerto:"d=80t.",
   passos:[{texto:"d = v × t = <strong>80t</strong>."}]},

  // ========== SEQUÊNCIAS ==========
  {id:27, area:"Sequências", topico:"Progressões (PA e PG)", ano:"ENEM 2020",
   enunciado:`PA com <mark>a₁=3, r=4</mark>. 10º termo?`,
   alternativas:[{letra:"A",texto:"33"},{letra:"B",texto:"37"},{letra:"C",texto:"39"},{letra:"D",texto:"40"},{letra:"E",texto:"43"}],
   correta:"C", feedbackErro:"aₙ=a₁+(n−1)r.", feedbackAcerto:"a₁₀=3+36=39.",
   passos:[{texto:"a₁₀=3+(10−1)×4=3+36=<strong>39</strong>."}]},

  {id:28, area:"Sequências", topico:"Progressões (PA e PG)", ano:"ENEM 2019",
   enunciado:`PG com <mark>a₁=2, q=3</mark>. 5º termo?`,
   alternativas:[{letra:"A",texto:"54"},{letra:"B",texto:"81"},{letra:"C",texto:"162"},{letra:"D",texto:"243"},{letra:"E",texto:"486"}],
   correta:"C", feedbackErro:"aₙ=a₁×q^(n−1).", feedbackAcerto:"a₅=2×3⁴=162.",
   passos:[{texto:"a₅=2×81=<strong>162</strong>."}]},

  {id:29, area:"Sequências", topico:"Progressões (PA e PG)", ano:"ENEM 2022",
   enunciado:`PA (2,5,8,11,...). 20º termo?`,
   alternativas:[{letra:"A",texto:"56"},{letra:"B",texto:"57"},{letra:"C",texto:"58"},{letra:"D",texto:"59"},{letra:"E",texto:"60"}],
   correta:"D", feedbackErro:"a₂₀=2+19×3=59.", feedbackAcerto:"a₂₀=59.",
   passos:[{texto:"a₂₀=2+(20−1)×3=2+57=<strong>59</strong>."}]},

  {id:30, area:"Sequências", topico:"Progressões (PA e PG)", ano:"ENEM 2021",
   enunciado:`Soma dos 10 primeiros termos da PA (1,3,5,...)?`,
   alternativas:[{letra:"A",texto:"50"},{letra:"B",texto:"90"},{letra:"C",texto:"100"},{letra:"D",texto:"110"},{letra:"E",texto:"120"}],
   correta:"C", feedbackErro:"S₁₀=n(a₁+a₁₀)/2.", feedbackAcerto:"a₁₀=19. S₁₀=10×10=100.",
   passos:[{texto:"a₁₀=1+9×2=19."},{texto:"S₁₀=10×(1+19)/2=<strong>100</strong>."}]},

  {id:31, area:"Sequências", topico:"Progressões (PA e PG)", ano:"ENEM 2018",
   enunciado:`PG a₁=1, q=2. Soma dos 6 primeiros?`,
   alternativas:[{letra:"A",texto:"32"},{letra:"B",texto:"63"},{letra:"C",texto:"64"},{letra:"D",texto:"127"},{letra:"E",texto:"128"}],
   correta:"B", feedbackErro:"Sₙ=a₁(qⁿ−1)/(q−1).", feedbackAcerto:"S₆=(64−1)=63.",
   passos:[{texto:"S₆=1×(2⁶−1)/1=<strong>63</strong>."}]},

  // ========== FINANCEIRA ==========
  {id:32, area:"Financeira", topico:"Porcentagem", ano:"ENEM 2022",
   enunciado:`Produto R$250. <mark>+20%</mark> depois <mark>−20%</mark>. Preço final?`,
   alternativas:[{letra:"A",texto:"R$250"},{letra:"B",texto:"R$240"},{letra:"C",texto:"R$260"},{letra:"D",texto:"R$245"},{letra:"E",texto:"R$230"}],
   correta:"B", feedbackErro:"250×1,2=300 → 300×0,8=240. Não volta ao original!", feedbackAcerto:"R$240.",
   passos:[{texto:"250×1,20=300 → 300×0,80=<strong>R$240</strong>."}]},

  {id:33, area:"Financeira", topico:"Porcentagem", ano:"ENEM 2021",
   enunciado:`500 alunos, 60% praticam esporte. Quantos <mark>não praticam</mark>?`,
   alternativas:[{letra:"A",texto:"150"},{letra:"B",texto:"200"},{letra:"C",texto:"250"},{letra:"D",texto:"300"},{letra:"E",texto:"350"}],
   correta:"B", feedbackErro:"40% de 500=200.", feedbackAcerto:"200.",
   passos:[{texto:"40%×500=<strong>200</strong>."}]},

  {id:34, area:"Financeira", topico:"Porcentagem", ano:"ENEM 2023",
   enunciado:`Camiseta R$80 com <mark>desconto 15%</mark>. Valor pago?`,
   alternativas:[{letra:"A",texto:"R$12"},{letra:"B",texto:"R$68"},{letra:"C",texto:"R$65"},{letra:"D",texto:"R$74"},{letra:"E",texto:"R$92"}],
   correta:"B", feedbackErro:"0,85×80=68.", feedbackAcerto:"R$68.",
   passos:[{texto:"0,85×80=<strong>R$68</strong>."}]},

  {id:35, area:"Financeira", topico:"Porcentagem", ano:"ENEM 2020",
   enunciado:`Salário R$2.000 com <mark>aumento 25%</mark>. Novo salário?`,
   alternativas:[{letra:"A",texto:"R$2.025"},{letra:"B",texto:"R$2.200"},{letra:"C",texto:"R$2.500"},{letra:"D",texto:"R$2.250"},{letra:"E",texto:"R$2.400"}],
   correta:"C", feedbackErro:"2000×1,25=2500.", feedbackAcerto:"R$2.500.",
   passos:[{texto:"2000×1,25=<strong>R$2.500</strong>."}]},

  {id:36, area:"Financeira", topico:"Juros Simples", ano:"ENEM 2023",
   enunciado:`R$1.000 a <mark>juros simples 5% a.m.</mark> por 6 meses. Montante?`,
   alternativas:[{letra:"A",texto:"R$1.050"},{letra:"B",texto:"R$1.300"},{letra:"C",texto:"R$1.340"},{letra:"D",texto:"R$1.350"},{letra:"E",texto:"R$1.500"}],
   correta:"B", feedbackErro:"J=C×i×t=300. M=1300.", feedbackAcerto:"R$1.300.",
   passos:[{texto:"J=1000×0,05×6=300."},{texto:"M=1000+300=<strong>R$1.300</strong>."}]},

  {id:37, area:"Financeira", topico:"Juros Simples", ano:"ENEM 2020",
   enunciado:`Empréstimo R$2.000 a <mark>3% a.m.</mark> por 4 meses. Juros totais?`,
   alternativas:[{letra:"A",texto:"R$60"},{letra:"B",texto:"R$120"},{letra:"C",texto:"R$180"},{letra:"D",texto:"R$240"},{letra:"E",texto:"R$300"}],
   correta:"D", feedbackErro:"J=2000×0,03×4=240.", feedbackAcerto:"R$240.",
   passos:[{texto:"J=2000×0,03×4=<strong>R$240</strong>."}]},

  {id:38, area:"Financeira", topico:"Juros Compostos", ano:"ENEM 2021",
   enunciado:`R$5.000 a <mark>juros compostos 10% a.a.</mark> por 2 anos. Montante?`,
   alternativas:[{letra:"A",texto:"R$5.500"},{letra:"B",texto:"R$6.000"},{letra:"C",texto:"R$6.050"},{letra:"D",texto:"R$6.100"},{letra:"E",texto:"R$6.500"}],
   correta:"C", feedbackErro:"M=C×(1+i)ⁿ=5000×1,21=6050.", feedbackAcerto:"R$6.050.",
   passos:[{texto:"M=5000×(1,10)²=5000×1,21=<strong>R$6.050</strong>."}]},

  {id:39, area:"Financeira", topico:"Juros Compostos", ano:"ENEM 2022",
   enunciado:`R$1.000 a <mark>juros compostos 20% a.a.</mark> por 2 anos. Montante?`,
   alternativas:[{letra:"A",texto:"R$1.200"},{letra:"B",texto:"R$1.400"},{letra:"C",texto:"R$1.440"},{letra:"D",texto:"R$1.480"},{letra:"E",texto:"R$1.600"}],
   correta:"C", feedbackErro:"M=1000×(1,20)²=1000×1,44=1440.", feedbackAcerto:"R$1.440.",
   passos:[{texto:"M=1000×1,44=<strong>R$1.440</strong>."}]},

  // ========== GEOMETRIA ==========
  {id:40, area:"Geometria", topico:"Geometria Plana (Áreas)", ano:"ENEM 2022",
   enunciado:`Trapézio: base maior <mark>8m</mark>, base menor <mark>5m</mark>, altura <mark>4m</mark>. Área?`,
   alternativas:[{letra:"A",texto:"24m²"},{letra:"B",texto:"26m²"},{letra:"C",texto:"28m²"},{letra:"D",texto:"30m²"},{letra:"E",texto:"32m²"}],
   correta:"B", feedbackErro:"A=(B+b)×h/2.", feedbackAcerto:"A=(8+5)×4/2=26m².",
   passos:[{texto:"A=(8+5)×4/2=<strong>26m²</strong>."}]},

  {id:41, area:"Geometria", topico:"Geometria Plana (Áreas)", ano:"ENEM 2019",
   enunciado:`Setor circular: raio <mark>6cm</mark>, ângulo <mark>90°</mark>. Área? (π≈3,14)`,
   alternativas:[{letra:"A",texto:"9,42cm²"},{letra:"B",texto:"18,84cm²"},{letra:"C",texto:"28,26cm²"},{letra:"D",texto:"113,04cm²"},{letra:"E",texto:"56,52cm²"}],
   correta:"C", feedbackErro:"A=(1/4)×π×r².", feedbackAcerto:"A=(1/4)×3,14×36=28,26cm².",
   passos:[{texto:"A=(90/360)×3,14×36=(1/4)×113,04=<strong>28,26cm²</strong>."}]},

  {id:42, area:"Geometria", topico:"Geometria Espacial (Volumes)", ano:"ENEM 2020",
   enunciado:`Piscina retangular <mark>10m×5m</mark>, profundidade <mark>2m</mark>. Volume?`,
   alternativas:[{letra:"A",texto:"50m³"},{letra:"B",texto:"70m³"},{letra:"C",texto:"100m³"},{letra:"D",texto:"150m³"},{letra:"E",texto:"200m³"}],
   correta:"C", feedbackErro:"V=c×l×h.", feedbackAcerto:"V=10×5×2=100m³.",
   passos:[{texto:"V=10×5×2=<strong>100m³</strong>."}]},

  {id:43, area:"Geometria", topico:"Geometria Espacial (Volumes)", ano:"ENEM 2021",
   enunciado:`Volume de uma esfera de <mark>raio 3cm</mark>? (π≈3,14)`,
   alternativas:[{letra:"A",texto:"28,26cm³"},{letra:"B",texto:"56,52cm³"},{letra:"C",texto:"84,78cm³"},{letra:"D",texto:"113,04cm³"},{letra:"E",texto:"141,3cm³"}],
   correta:"D", feedbackErro:"V=(4/3)×π×r³.", feedbackAcerto:"V=(4/3)×3,14×27=113,04cm³.",
   passos:[{texto:"V=(4/3)×π×3³=(4/3)×3,14×27=<strong>113,04cm³</strong>."}]},

  {id:44, area:"Geometria", topico:"Comprimentos e Perímetros", ano:"ENEM 2021",
   enunciado:`Terreno circular, <mark>raio 7m</mark>. Comprimento da cerca? (π≈3,14)`,
   alternativas:[{letra:"A",texto:"21,98m"},{letra:"B",texto:"43,96m"},{letra:"C",texto:"153,86m"},{letra:"D",texto:"87,92m"},{letra:"E",texto:"38,48m"}],
   correta:"B", feedbackErro:"C=2πr.", feedbackAcerto:"C=2×3,14×7=43,96m.",
   passos:[{texto:"C=2×3,14×7=<strong>43,96m</strong>."}]},

  {id:45, area:"Geometria", topico:"Ângulos e Retas", ano:"ENEM 2020",
   enunciado:`A soma dos ângulos internos de um <mark>hexágono</mark> é:`,
   alternativas:[{letra:"A",texto:"540°"},{letra:"B",texto:"600°"},{letra:"C",texto:"720°"},{letra:"D",texto:"900°"},{letra:"E",texto:"360°"}],
   correta:"C", feedbackErro:"S=(n−2)×180°. n=6: S=4×180=720°.", feedbackAcerto:"(6−2)×180=720°.",
   passos:[{texto:"S=(n−2)×180=(6−2)×180=<strong>720°</strong>."}]},

  {id:46, area:"Geometria", topico:"Ângulos e Retas", ano:"ENEM 2019",
   enunciado:`Dois ângulos são suplementares. Um mede <mark>70°</mark>. O outro mede:`,
   alternativas:[{letra:"A",texto:"20°"},{letra:"B",texto:"70°"},{letra:"C",texto:"90°"},{letra:"D",texto:"110°"},{letra:"E",texto:"180°"}],
   correta:"D", feedbackErro:"Suplementares somam 180°. 180−70=110.", feedbackAcerto:"180−70=110°.",
   passos:[{texto:"Suplementares: soma=180°."},{texto:"180−70=<strong>110°</strong>."}]},

  {id:47, area:"Geometria", topico:"Semelhança de Triângulos", ano:"ENEM 2022",
   enunciado:`Dois triângulos semelhantes têm lados <mark>3, 4, 5</mark> e <mark>6, 8, x</mark>. Valor de x?`,
   alternativas:[{letra:"A",texto:"8"},{letra:"B",texto:"9"},{letra:"C",texto:"10"},{letra:"D",texto:"12"},{letra:"E",texto:"15"}],
   correta:"C", feedbackErro:"Razão de semelhança=2. x=5×2=10.", feedbackAcerto:"Razão=6/3=2. x=5×2=10.",
   passos:[{texto:"Razão = 6/3 = 2."},{texto:"x = 5×2 = <strong>10</strong>."}]},

  {id:48, area:"Geometria", topico:"Relações Métricas nos Triângulos", ano:"ENEM 2023",
   enunciado:`Triângulo retângulo: catetos <mark>6cm e 8cm</mark>. Hipotenusa?`,
   alternativas:[{letra:"A",texto:"10cm"},{letra:"B",texto:"12cm"},{letra:"C",texto:"14cm"},{letra:"D",texto:"√28cm"},{letra:"E",texto:"100cm"}],
   correta:"A", feedbackErro:"h²=6²+8²=100 → h=10.", feedbackAcerto:"h=10cm.",
   passos:[{texto:"h²=36+64=100 → h=<strong>10cm</strong>."}]},

  {id:49, area:"Geometria", topico:"Teorema de Tales", ano:"ENEM 2021",
   enunciado:`Retas paralelas cortadas por transversais formam segmentos <mark>3, 4</mark> e <mark>6, x</mark>. Valor de x?`,
   alternativas:[{letra:"A",texto:"6"},{letra:"B",texto:"7"},{letra:"C",texto:"8"},{letra:"D",texto:"9"},{letra:"E",texto:"12"}],
   correta:"C", feedbackErro:"Tales: 3/4 = 6/x → x = 24/3 = 8.", feedbackAcerto:"x=8.",
   passos:[{texto:"3/4 = 6/x → 3x = 24 → x = <strong>8</strong>."}]},

  {id:50, area:"Geometria", topico:"Trigonometria", ano:"ENEM 2022",
   enunciado:`Num triângulo retângulo, cateto oposto = <mark>3</mark>, hipotenusa = <mark>5</mark>. sen(α) = ?`,
   alternativas:[{letra:"A",texto:"3/5"},{letra:"B",texto:"4/5"},{letra:"C",texto:"3/4"},{letra:"D",texto:"5/3"},{letra:"E",texto:"4/3"}],
   correta:"A", feedbackErro:"sen=oposto/hipotenusa=3/5.", feedbackAcerto:"sen=3/5.",
   passos:[{texto:"sen(α)=oposto/hipotenusa=3/5=<strong>0,6</strong>."}]},

  {id:51, area:"Geometria", topico:"Trigonometria", ano:"ENEM 2021",
   enunciado:`Um poste de <mark>10m</mark> projeta uma sombra de <mark>10m</mark>. Ângulo de elevação do sol? (tan45°=1)`,
   alternativas:[{letra:"A",texto:"30°"},{letra:"B",texto:"45°"},{letra:"C",texto:"60°"},{letra:"D",texto:"90°"},{letra:"E",texto:"75°"}],
   correta:"B", feedbackErro:"tan(θ)=altura/sombra=10/10=1 → θ=45°.", feedbackAcerto:"tan=1 → 45°.",
   passos:[{texto:"tan(θ)=10/10=1 → θ=<strong>45°</strong>."}]},

  {id:52, area:"Geometria", topico:"Circunferências e Círculos", ano:"ENEM 2020",
   enunciado:`Área de um círculo com <mark>raio 5cm</mark>? (π≈3,14)`,
   alternativas:[{letra:"A",texto:"15,70cm²"},{letra:"B",texto:"31,40cm²"},{letra:"C",texto:"78,50cm²"},{letra:"D",texto:"157cm²"},{letra:"E",texto:"25cm²"}],
   correta:"C", feedbackErro:"A=πr²=3,14×25.", feedbackAcerto:"A=3,14×25=78,50cm².",
   passos:[{texto:"A=πr²=3,14×25=<strong>78,50cm²</strong>."}]},

  {id:53, area:"Geometria", topico:"Grandezas e Medidas", ano:"ENEM 2019",
   enunciado:`Um mapa tem escala <mark>1:50.000</mark>. Uma distância de <mark>4cm no mapa</mark> equivale a quantos km reais?`,
   alternativas:[{letra:"A",texto:"0,5km"},{letra:"B",texto:"1km"},{letra:"C",texto:"2km"},{letra:"D",texto:"4km"},{letra:"E",texto:"5km"}],
   correta:"C", feedbackErro:"4cm × 50.000 = 200.000cm = 2km.", feedbackAcerto:"4×50.000=200.000cm=2km.",
   passos:[{texto:"4cm × 50.000 = 200.000cm."},{texto:"200.000cm ÷ 100.000 = <strong>2km</strong>."}]},

  // ========== ESTATÍSTICA ==========
  {id:54, area:"Estatística", topico:"Medidas de Tendência Central", ano:"ENEM 2023",
   enunciado:`Notas de um aluno: <mark>6, 7, 8, 5, 9</mark>. Qual a <mark>média aritmética</mark>?`,
   alternativas:[{letra:"A",texto:"6,5"},{letra:"B",texto:"7,0"},{letra:"C",texto:"7,5"},{letra:"D",texto:"8,0"},{letra:"E",texto:"6,0"}],
   correta:"B", feedbackErro:"Média=(6+7+8+5+9)/5=35/5=7.", feedbackAcerto:"35/5=7.",
   passos:[{texto:"Soma=6+7+8+5+9=35."},{texto:"Média=35/5=<strong>7,0</strong>."}]},

  {id:55, area:"Estatística", topico:"Medidas de Tendência Central", ano:"ENEM 2022",
   enunciado:`Dados: <mark>2, 3, 3, 5, 7, 8, 8, 8, 9</mark>. Qual a <mark>moda</mark>?`,
   alternativas:[{letra:"A",texto:"3"},{letra:"B",texto:"5"},{letra:"C",texto:"7"},{letra:"D",texto:"8"},{letra:"E",texto:"9"}],
   correta:"D", feedbackErro:"Moda = valor que aparece mais vezes.", feedbackAcerto:"8 aparece 3 vezes → moda=8.",
   passos:[{texto:"8 aparece 3 vezes (mais frequente)."},{texto:"Moda = <strong>8</strong>."}]},

  {id:56, area:"Estatística", topico:"Medidas de Tendência Central", ano:"ENEM 2021",
   enunciado:`Dados ordenados: <mark>4, 6, 7, 9, 12</mark>. Qual a <mark>mediana</mark>?`,
   alternativas:[{letra:"A",texto:"4"},{letra:"B",texto:"6"},{letra:"C",texto:"7"},{letra:"D",texto:"9"},{letra:"E",texto:"12"}],
   correta:"C", feedbackErro:"Mediana=valor central. 5 dados → 3º valor=7.", feedbackAcerto:"3º valor=7.",
   passos:[{texto:"5 dados → mediana é o 3º valor."},{texto:"Mediana = <strong>7</strong>."}]},

  {id:57, area:"Estatística", topico:"Desvios e Variância", ano:"ENEM 2022",
   enunciado:`Dados: <mark>2, 4, 4, 6</mark>. Qual a <mark>variância</mark>?`,
   alternativas:[{letra:"A",texto:"1"},{letra:"B",texto:"2"},{letra:"C",texto:"3"},{letra:"D",texto:"4"},{letra:"E",texto:"5"}],
   correta:"B", feedbackErro:"Média=4. Variância=[(2−4)²+(4−4)²+(4−4)²+(6−4)²]/4=(4+0+0+4)/4=2.", feedbackAcerto:"Variância=2.",
   passos:[{texto:"Média=(2+4+4+6)/4=4."},{texto:"Variância=(4+0+0+4)/4=<strong>2</strong>."}]},

  {id:58, area:"Estatística", topico:"Probabilidade", ano:"ENEM 2023",
   enunciado:`Urna: <mark>4 vermelhas, 3 azuis, 3 verdes</mark>. P(azul)?`,
   alternativas:[{letra:"A",texto:"1/4"},{letra:"B",texto:"3/10"},{letra:"C",texto:"1/3"},{letra:"D",texto:"4/10"},{letra:"E",texto:"7/10"}],
   correta:"B", feedbackErro:"P=3/10.", feedbackAcerto:"P=3/10.",
   passos:[{texto:"Total=10. Favoráveis=3."},{texto:"P=3/10."}]},

  {id:59, area:"Estatística", topico:"Probabilidade", ano:"ENEM 2020",
   enunciado:`Dado honesto. P(número par)?`,
   alternativas:[{letra:"A",texto:"1/6"},{letra:"B",texto:"1/3"},{letra:"C",texto:"1/2"},{letra:"D",texto:"2/3"},{letra:"E",texto:"5/6"}],
   correta:"C", feedbackErro:"Pares={2,4,6}=3/6=1/2.", feedbackAcerto:"P=1/2.",
   passos:[{texto:"3/6=<strong>1/2</strong>."}]},

  {id:60, area:"Estatística", topico:"Probabilidade", ano:"ENEM 2021",
   enunciado:`Dois dados. P(soma=7)?`,
   alternativas:[{letra:"A",texto:"1/6"},{letra:"B",texto:"1/9"},{letra:"C",texto:"7/36"},{letra:"D",texto:"5/36"},{letra:"E",texto:"1/12"}],
   correta:"A", feedbackErro:"6 pares somam 7 de 36 possíveis. 6/36=1/6.", feedbackAcerto:"P=1/6.",
   passos:[{texto:"Pares: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1)=6."},{texto:"P=6/36=<strong>1/6</strong>."}]}
];

// ============================================
// ROTEIRO DE ESTUDOS
// ============================================
const roteiro = [
  { semana:"Semana 1", tema:"Álgebra Essencial", cor:"#2563eb", icon:"fas fa-calculator",
    topicos:["Conjuntos Numéricos","Divisibilidade e Fatoração","Equações do 1º e 2º grau","Inequações","Razões e Proporções"],
    meta:"Dominar a base algébrica do ENEM — presente em ~40% das questões." },
  { semana:"Semana 2", tema:"Funções e Gráficos", cor:"#7c3aed", icon:"fas fa-chart-line",
    topicos:["Funções do 1º e 2º grau","Funções Exponenciais e Logarítmicas","Plano Cartesiano","Sistemas de Equações","Relações de Dependência"],
    meta:"Interpretar gráficos e modelar situações reais com funções." },
  { semana:"Semana 3", tema:"Geometria e Trigonometria", cor:"#059669", icon:"fas fa-shapes",
    topicos:["Áreas de figuras planas","Volumes de sólidos","Trigonometria (sen, cos, tan)","Semelhança de triângulos","Teorema de Tales e Pitágoras"],
    meta:"Resolver problemas espaciais e trigonométricos com segurança." },
  { semana:"Semana 4", tema:"Estatística, Probabilidade e Revisão", cor:"#d97706", icon:"fas fa-percentage",
    topicos:["Medidas de tendência central","Probabilidade","Porcentagem e Juros","Progressões (PA e PG)","Revisão geral + simulado"],
    meta:"Consolidar todos os conteúdos e testar com simulado cronometrado." }
];

// ============================================
// MÓDULOS
// ============================================
const modulos = [
  { area:"Álgebra", icon:"fas fa-superscript", cor:"#1d4ed8", items:[
    { titulo:"Equações",   teoria:"Uma equação é uma igualdade que contém uma incógnita. Para resolver, isole a variável usando operações inversas.", formulas:["1º grau: ax+b=0 → x=−b/a","2º grau: x=(−b±√Δ)/2a, Δ=b²−4ac"], topico:"Equações" },
    { titulo:"Fatoração",  teoria:"Fatorar é reescrever uma expressão como produto de fatores. Identifique produtos notáveis e fatores comuns.", formulas:["a²−b²=(a+b)(a−b)","a²±2ab+b²=(a±b)²","ax²+bx=x(ax+b)"], topico:"Fatoração" },
    { titulo:"Razões e Proporções", teoria:"Razão é uma divisão entre duas grandezas. Proporção é a igualdade entre duas razões.", formulas:["Razão: a/b","Proporção: a/b=c/d → ad=bc (produto cruzado)"], topico:"Razões e Proporções" }
  ]},
  { area:"Funções", icon:"fas fa-chart-line", cor:"#7c3aed", items:[
    { titulo:"Funções do 2º Grau", teoria:"f(x)=ax²+bx+c. O gráfico é uma parábola. O vértice indica o ponto de máximo (a<0) ou mínimo (a>0).", formulas:["Vértice: xᵥ=−b/2a","yᵥ=−Δ/4a","Δ=b²−4ac"], topico:"Funções 1º e 2º Grau" },
    { titulo:"Funções Exponenciais", teoria:"f(x)=aˣ. Crescimento ou decaimento exponencial. Base a>1: crescente. 0<a<1: decrescente.", formulas:["f(x)=a^x","log_a(x)=y ↔ a^y=x","log_a(aˣ)=x"], topico:"Funções Exponenciais e Logarítmicas" },
    { titulo:"Plano Cartesiano",   teoria:"Sistema de dois eixos perpendiculares (x e y) para representar pontos como coordenadas (x,y).", formulas:["Distância: d=√[(x₂−x₁)²+(y₂−y₁)²]","Ponto médio: M=((x₁+x₂)/2,(y₁+y₂)/2)"], topico:"Plano Cartesiano" }
  ]},
  { area:"Geometria", icon:"fas fa-shapes", cor:"#059669", items:[
    { titulo:"Áreas Planas",      teoria:"Cada figura plana tem sua fórmula de área. As mais cobradas no ENEM são triângulo, retângulo, trapézio e círculo.", formulas:["Triângulo: b×h/2","Trapézio: (B+b)×h/2","Círculo: πr²"], topico:"Geometria Plana (Áreas)" },
    { titulo:"Trigonometria",     teoria:"Relações entre ângulos e lados de triângulos retângulos. Lembre: SOH CAH TOA.", formulas:["sen=oposto/hipotenusa","cos=adjacente/hipotenusa","tan=oposto/adjacente"], topico:"Trigonometria" },
    { titulo:"Teorema de Pitágoras", teoria:"Em todo triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.", formulas:["h²=a²+b²","Trios: (3,4,5) (5,12,13) (8,15,17)"], topico:"Relações Métricas nos Triângulos" }
  ]},
  { area:"Financeira", icon:"fas fa-coins", cor:"#d97706", items:[
    { titulo:"Juros Simples",   teoria:"O juro é calculado sempre sobre o capital inicial. Cresce linearmente.", formulas:["J=C×i×t","M=C+J=C(1+it)"], topico:"Juros Simples" },
    { titulo:"Juros Compostos", teoria:"O juro é calculado sobre o montante acumulado (juro sobre juro). Crescimento exponencial.", formulas:["M=C×(1+i)ⁿ","i: taxa por período","n: número de períodos"], topico:"Juros Compostos" }
  ]},
  { area:"Estatística", icon:"fas fa-chart-bar", cor:"#dc2626", items:[
    { titulo:"Medidas de Tendência Central", teoria:"Média: soma/n. Mediana: valor central dos dados ordenados. Moda: valor mais frequente.", formulas:["Média: (Σxᵢ)/n","Mediana: valor central","Moda: mais frequente"], topico:"Medidas de Tendência Central" },
    { titulo:"Probabilidade", teoria:"P(A)=casos favoráveis/total de casos. Sempre entre 0 e 1.", formulas:["P(A)=n(A)/n(S)","P(A∪B)=P(A)+P(B)−P(A∩B)","P(A∩B)=P(A)×P(B) (independentes)"], topico:"Probabilidade" }
  ]}
];

// ============================================
// VÍDEO AULAS
// ============================================
const videoaulas = [
  { area:"Álgebra", videos:[
    { titulo:"Equações do 2º Grau – Fórmula de Bhaskara",  canal:"Prof. Ferretto",  link:"https://www.youtube.com/results?search_query=equação+2+grau+bhaskara+enem", duracao:"18 min", thumb:"🔢" },
    { titulo:"Fatoração Completa para o ENEM",             canal:"Matemática Rio",  link:"https://www.youtube.com/results?search_query=fatoração+matemática+enem",       duracao:"22 min", thumb:"✖️" },
    { titulo:"Sistemas de Equações – Todos os métodos",    canal:"Equaciona",       link:"https://www.youtube.com/results?search_query=sistemas+equações+enem",           duracao:"25 min", thumb:"🧮" }
  ]},
  { area:"Funções", videos:[
    { titulo:"Funções do 1º Grau – Do básico ao ENEM",     canal:"Prof. Ferretto",  link:"https://www.youtube.com/results?search_query=função+1+grau+enem",               duracao:"20 min", thumb:"📈" },
    { titulo:"Funções do 2º Grau e Parábolas",             canal:"ENEM Explícito",  link:"https://www.youtube.com/results?search_query=função+quadrática+parábola+enem",  duracao:"30 min", thumb:"📉" },
    { titulo:"Funções Exponenciais e Logarítmicas",        canal:"Matemática Rio",  link:"https://www.youtube.com/results?search_query=funções+exponenciais+logarítmicas+enem", duracao:"28 min", thumb:"📊" }
  ]},
  { area:"Geometria", videos:[
    { titulo:"Áreas e Perímetros – ENEM",                  canal:"Prof. Ferretto",  link:"https://www.youtube.com/results?search_query=áreas+perímetros+enem",            duracao:"24 min", thumb:"📐" },
    { titulo:"Trigonometria do Zero – ENEM",               canal:"ENEM Explícito",  link:"https://www.youtube.com/results?search_query=trigonometria+enem+zero",          duracao:"35 min", thumb:"📏" },
    { titulo:"Geometria Espacial – Volumes",               canal:"Equaciona",       link:"https://www.youtube.com/results?search_query=volumes+geometria+espacial+enem",   duracao:"27 min", thumb:"🧊" }
  ]},
  { area:"Financeira", videos:[
    { titulo:"Juros Simples e Compostos – ENEM",           canal:"Prof. Ferretto",  link:"https://www.youtube.com/results?search_query=juros+simples+compostos+enem",     duracao:"20 min", thumb:"💰" },
    { titulo:"Porcentagem para o ENEM",                    canal:"Matemática Rio",  link:"https://www.youtube.com/results?search_query=porcentagem+enem",                 duracao:"18 min", thumb:"%" }
  ]},
  { area:"Estatística", videos:[
    { titulo:"Estatística Básica – ENEM",                  canal:"Prof. Ferretto",  link:"https://www.youtube.com/results?search_query=estatística+básica+enem",          duracao:"22 min", thumb:"📊" },
    { titulo:"Probabilidade – ENEM",                       canal:"ENEM Explícito",  link:"https://www.youtube.com/results?search_query=probabilidade+enem",               duracao:"25 min", thumb:"🎲" }
  ]}
];

// ============================================
// ESTADO GLOBAL
// ============================================
let estado = {
  pontos:0, acertos:0, erros:0, respondidas:0,
  filtroArea:"", filtroTopico:"", filtroAno:"", filtroStatus:"todas",
  listaFiltrada:[], qAtualIdx:0, respondeu:false, uid:null,
  simAtivo:false, simQuestoes:[], simIdx:0, simAcertos:0, simTimer:null
};

function getQStatus() {
  const k = estado.uid ? `mente_qs_${estado.uid}` : "mente_qs_guest";
  return JSON.parse(localStorage.getItem(k) || "{}");
}
function setQStatus(id, val) {
  const k = estado.uid ? `mente_qs_${estado.uid}` : "mente_qs_guest";
  const o = getQStatus(); o[id]=val;
  localStorage.setItem(k, JSON.stringify(o));
}

// ============================================
// FIREBASE
// ============================================
fbAuth.onAuthStateChanged(user => {
  estado.uid = user ? user.uid : null;
  atualizarNavUsuario(user);
  if (user) carregarProgresso(user.uid, d => {
    estado.pontos=d.pontos||0; estado.acertos=d.acertos||0;
    estado.erros=d.erros||0;  estado.respondidas=d.respondidas||0;
    atualizarScorePill();
  });
});

// ============================================
// DOMContentLoaded
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  preencherFiltros();
  renderLista();

  document.getElementById("sideToggle").addEventListener("click", () =>
    document.getElementById("shellSidebar").classList.toggle("open"));

  document.querySelectorAll("[data-page]").forEach(el =>
    el.addEventListener("click", e => {
      e.preventDefault();
      navegarPara(el.dataset.page);
      document.getElementById("userDropdown").classList.remove("open");
      document.getElementById("shellSidebar").classList.remove("open");
    }));

  document.getElementById("userBtn").addEventListener("click", e => {
    e.stopPropagation();
    document.getElementById("userDropdown").classList.toggle("open");
  });
  document.addEventListener("click", () =>
    document.getElementById("userDropdown").classList.remove("open"));

  ["sideLogoutBtn","dropLogoutBtn"].forEach(id =>
    document.getElementById(id)?.addEventListener("click", e => {
      e.preventDefault();
      fbAuth.signOut().then(() => window.location.href="auth.html");
    }));

  document.getElementById("buscarBtn").addEventListener("click", () => {
    estado.filtroArea   = document.getElementById("filterArea").value;
    estado.filtroTopico = document.getElementById("filterTopico").value;
    estado.filtroAno    = document.getElementById("filterAno").value;
    renderLista();
  });

  document.querySelectorAll(".ftab").forEach(b =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".ftab").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      estado.filtroStatus = b.dataset.status;
      renderLista();
    }));

  document.getElementById("filterArea").addEventListener("change", () => {
    const area = document.getElementById("filterArea").value;
    estado.filtroArea = area;
    preencherTopicosPorArea(area);
    renderLista();
  });

  document.getElementById("filterTopico").addEventListener("change", () => {
    estado.filtroTopico = document.getElementById("filterTopico").value;
    renderLista();
  });
  document.getElementById("filterAno").addEventListener("change", () => {
    estado.filtroAno = document.getElementById("filterAno").value;
    renderLista();
  });

  document.getElementById("backToListBtn").addEventListener("click", voltarLista);
  document.getElementById("qvNextBtn").addEventListener("click", avancarQuestao);
  document.getElementById("qvShowStepsBtn").addEventListener("click", mostrarPassos);
});

// ============================================
// FILTROS
// ============================================
function preencherFiltros() {
  const selArea = document.getElementById("filterArea");
  Object.keys(AREAS).forEach(a => {
    const o=document.createElement("option"); o.value=a; o.textContent=a;
    selArea.appendChild(o);
  });
  preencherTopicosPorArea("");

  const anos=[...new Set(questoes.map(q=>q.ano))].sort();
  const selAno=document.getElementById("filterAno");
  anos.forEach(a => {
    const o=document.createElement("option"); o.value=a; o.textContent=a;
    selAno.appendChild(o);
  });
}

function preencherTopicosPorArea(area) {
  const sel=document.getElementById("filterTopico");
  sel.innerHTML='<option value="">Todos os tópicos</option>';
  const lista = area ? AREAS[area] : Object.values(AREAS).flat();
  lista.forEach(t => {
    const o=document.createElement("option"); o.value=t; o.textContent=t;
    sel.appendChild(o);
  });
  estado.filtroTopico="";
}

// ============================================
// NAVEGAÇÃO
// ============================================
function navegarPara(pagina) {
  document.querySelectorAll(".page").forEach(p => { p.classList.remove("active"); p.style.display="none"; });
  document.querySelectorAll(".snav-item").forEach(i => i.classList.remove("active"));

  const cap = pagina.charAt(0).toUpperCase()+pagina.slice(1);
  const el  = document.getElementById("page"+cap);
  if (el) { el.style.display="block"; el.classList.add("active"); }

  const side=document.querySelector(`.snav-item[data-page="${pagina}"]`);
  if (side) side.classList.add("active");

  const titles={questoes:"Busca de Questões",roteiro:"Roteiro de Estudos",
                modulos:"Módulos de Estudos",simulados:"Simulados",
                videoaulas:"Vídeo Aulas",desempenho:"Meu Desempenho"};
  document.getElementById("topbarTitle").textContent=titles[pagina]||pagina;

  if (pagina==="desempenho")  renderDesempenho(fbAuth.currentUser);
  if (pagina==="roteiro")     renderRoteiro();
  if (pagina==="modulos")     renderModulos();
  if (pagina==="simulados")   renderSimuladosMenu();
  if (pagina==="videoaulas")  renderVideoaulas();
}

// ============================================
// LISTA DE QUESTÕES
// ============================================
function renderLista() {
  const qs=getQStatus();
  let lista=questoes.filter(q => {
    if (estado.filtroArea   && q.area   !== estado.filtroArea)   return false;
    if (estado.filtroTopico && q.topico !== estado.filtroTopico) return false;
    if (estado.filtroAno    && q.ano    !== estado.filtroAno)     return false;
    const st=qs[q.id];
    if (estado.filtroStatus==="acertei"         && st!=="correct") return false;
    if (estado.filtroStatus==="errei"           && st!=="wrong")   return false;
    if (estado.filtroStatus==="nao-respondidas" && st)             return false;
    return true;
  });
  estado.listaFiltrada=lista;

  const area=document.getElementById("questionListArea");
  if (!lista.length) {
    area.innerHTML=`<div class="empty-state"><i class="fas fa-search"></i><p>Nenhuma questão encontrada para esse filtro.</p></div>`;
    return;
  }
  area.innerHTML=`
    <div class="qlist-header">
      <span class="qlist-count">${lista.length} questão(ões) encontrada(s)</span>
    </div>
    <div class="qlist-grid" id="qlistGrid"></div>`;

  const grid=document.getElementById("qlistGrid");
  lista.forEach((q,idx) => {
    const st=qs[q.id];
    const card=document.createElement("div");
    card.className=`qlist-card${st==="correct"?" status-correct":st==="wrong"?" status-wrong":""}`;
    const preview=q.enunciado.replace(/<[^>]+>/g,"").substring(0,90)+"…";
    const stLabel=st==="correct"?`<span class="qcard-status">✅ Acertei</span>`:
                  st==="wrong"  ?`<span class="qcard-status">❌ Errei</span>`:"";
    card.innerHTML=`
      <div class="qcard-tags">
        <span class="qcard-tag" style="background:#e0f2fe;color:#0369a1">${q.area}</span>
        <span class="qcard-tag">${q.topico}</span>
        <span class="qcard-tag qcard-tag-year">${q.ano}</span>
        ${stLabel}
      </div>
      <p class="qcard-preview">${preview}</p>
      <div class="qcard-footer"><span class="qcard-open"><i class="fas fa-arrow-right"></i> Resolver</span></div>`;
    card.addEventListener("click",()=>abrirQuestao(idx));
    grid.appendChild(card);
  });
}

function abrirQuestao(idx) {
  estado.qAtualIdx=idx; estado.respondeu=false;
  document.getElementById("questionListArea").style.display="none";
  document.getElementById("activeQuestionArea").style.display="block";
  renderQuestao();
}

function renderQuestao() {
  const q=estado.listaFiltrada[estado.qAtualIdx];
  if (!q) { voltarLista(); return; }
  estado.respondeu=false;
  document.getElementById("qvTopic").textContent=q.topico;
  document.getElementById("qvYear").textContent=q.ano;
  document.getElementById("qvCounter").textContent=`Questão ${estado.qAtualIdx+1} de ${estado.listaFiltrada.length}`;
  document.getElementById("qvText").innerHTML=q.enunciado;

  const opts=document.getElementById("qvOptions");
  opts.innerHTML="";
  q.alternativas.forEach(alt=>{
    const btn=document.createElement("button");
    btn.className="option-btn"; btn.dataset.letra=alt.letra;
    btn.innerHTML=`<span class="option-letter">${alt.letra}</span><span>${alt.texto}</span>`;
    btn.addEventListener("click",()=>responder(alt.letra));
    opts.appendChild(btn);
  });

  const fb=document.getElementById("qvFeedback");
  fb.style.display="none"; fb.className="feedback-box";
  document.getElementById("qvStepsSection").style.display="none";
  document.getElementById("qvShowStepsBtn").style.display="inline";

  const st=getQStatus()[q.id];
  if (st) exibirFeedbackPre(q,st);
  document.querySelector(".shell-content").scrollTop=0;
}

function exibirFeedbackPre(q,st) {
  document.querySelectorAll(".option-btn").forEach(b=>{
    b.disabled=true;
    if (b.dataset.letra===q.correta) b.classList.add("correct");
  });
  const fb=document.getElementById("qvFeedback");
  fb.style.display="block";
  fb.className=`feedback-box ${st==="correct"?"fb-correct":"fb-wrong"}`;
  document.getElementById("qvFeedbackHeader").textContent=
    st==="correct"?"✅ Você acertou anteriormente!":"❌ Você errou anteriormente.";
  document.getElementById("qvFeedbackBody").innerHTML=
    st==="correct"?q.feedbackAcerto:q.feedbackErro;
  document.getElementById("qvStepsSection").style.display="block";
  renderPassos(q.passos,"qvStepsList");
  estado.respondeu=true;
}

function responder(letra) {
  if (estado.respondeu) return;
  estado.respondeu=true;
  const q=estado.listaFiltrada[estado.qAtualIdx];
  const ok=letra===q.correta;
  document.querySelectorAll(".option-btn").forEach(b=>{
    b.disabled=true;
    if (b.dataset.letra===q.correta) b.classList.add("correct");
    else if (b.dataset.letra===letra&&!ok) b.classList.add("wrong");
  });
  const fb=document.getElementById("qvFeedback");
  fb.style.display="block"; fb.className=`feedback-box ${ok?"fb-correct":"fb-wrong"}`;
  document.getElementById("qvFeedbackHeader").textContent=ok?"✅ Você acertou!":"❌ Resposta incorreta";
  document.getElementById("qvFeedbackBody").innerHTML=ok?q.feedbackAcerto:q.feedbackErro;
  document.getElementById("qvStepsSection").style.display="block";
  renderPassos(q.passos,"qvStepsList");

  if (!getQStatus()[q.id]) {
    estado.respondidas++;
    if (ok){estado.acertos++;estado.pontos+=10;mostrarToast("+10 pts 🎯","toast-pts");}
    else    {estado.erros++;                  mostrarToast("Revise! 📖","toast-wrong");}
    salvarProgresso({pontos:estado.pontos,acertos:estado.acertos,erros:estado.erros,respondidas:estado.respondidas});
    atualizarScorePill();
  }
  setQStatus(q.id,ok?"correct":"wrong");
  fb.scrollIntoView({behavior:"smooth",block:"nearest"});
}

function avancarQuestao() {
  if (estado.qAtualIdx<estado.listaFiltrada.length-1){estado.qAtualIdx++;renderQuestao();}
  else {voltarLista();mostrarToast("Tópico concluído! 🏆","toast-pts");}
}

function voltarLista() {
  document.getElementById("activeQuestionArea").style.display="none";
  document.getElementById("questionListArea").style.display="block";
  renderLista();
}

function renderPassos(passos,listId) {
  const lista=document.getElementById(listId);
  lista.innerHTML="";
  passos.forEach((p,i)=>{
    const div=document.createElement("div");
    div.className="step-item"; div.style.display="none";
    div.innerHTML=`<span class="step-num">${i+1}</span><span class="step-text">${p.texto}</span>`;
    lista.appendChild(div);
  });
}

function mostrarPassos() {
  document.querySelectorAll("#qvStepsList .step-item").forEach(e=>e.style.display="flex");
  document.getElementById("qvShowStepsBtn").style.display="none";
}

// ============================================
// ROTEIRO DE ESTUDOS
// ============================================
function renderRoteiro() {
  const c=document.getElementById("roteiroContent");
  c.innerHTML="";
  roteiro.forEach((sem,i)=>{
    const card=document.createElement("div");
    card.className="roteiro-card";
    card.style.borderLeftColor=sem.cor;
    card.innerHTML=`
      <div class="roteiro-header" style="color:${sem.cor}">
        <i class="${sem.icon}"></i>
        <span class="roteiro-semana">${sem.semana}</span>
        <span class="roteiro-tema">${sem.tema}</span>
      </div>
      <p class="roteiro-meta">${sem.meta}</p>
      <div class="roteiro-topics">
        ${sem.topicos.map(t=>`
          <div class="roteiro-topic">
            <span class="rt-bullet" style="background:${sem.cor}"></span>
            <span>${t}</span>
            <button class="rt-btn" onclick="irParaTopico('${t}')" style="border-color:${sem.cor};color:${sem.cor}">
              Praticar <i class="fas fa-arrow-right"></i>
            </button>
          </div>`).join("")}
      </div>`;
    c.appendChild(card);
  });
}

function irParaTopico(topico) {
  estado.filtroTopico=topico; estado.filtroArea=""; estado.filtroAno=""; estado.filtroStatus="todas";
  document.getElementById("filterTopico").value=topico;
  document.getElementById("filterArea").value="";
  document.getElementById("filterAno").value="";
  document.querySelectorAll(".ftab").forEach(b=>b.classList.remove("active"));
  document.querySelector('.ftab[data-status="todas"]').classList.add("active");
  navegarPara("questoes");
}

// ============================================
// MÓDULOS DE ESTUDOS
// ============================================
function renderModulos() {
  const c=document.getElementById("modulosContent");
  c.innerHTML="";
  modulos.forEach(area=>{
    const section=document.createElement("div");
    section.className="modulo-section";
    section.innerHTML=`
      <div class="modulo-area-header">
        <i class="${area.icon}" style="color:${area.cor}"></i>
        <h3>${area.area}</h3>
      </div>
      <div class="modulo-grid">
        ${area.items.map(m=>`
          <div class="modulo-card">
            <div class="modulo-title" style="color:${area.cor}">${m.titulo}</div>
            <p class="modulo-teoria">${m.teoria}</p>
            <div class="modulo-formulas">
              <div class="mf-label">Fórmulas-chave</div>
              ${m.formulas.map(f=>`<div class="mf-item"><code>${f}</code></div>`).join("")}
            </div>
            <button class="modulo-btn" style="background:${area.cor}" onclick="irParaTopico('${m.topico}')">
              <i class="fas fa-pencil-alt"></i> Praticar questões
            </button>
          </div>`).join("")}
      </div>`;
    c.appendChild(section);
  });
}

// ============================================
// SIMULADOS
// ============================================
function renderSimuladosMenu() {
  document.getElementById("simuladoAtivo").style.display="none";
  const c=document.getElementById("simuladosContent");
  c.style.display="block";
  c.innerHTML=`
    <div class="sim-menu-grid">
      <div class="sim-menu-card" onclick="iniciarSimulado('rapido')">
        <div class="sim-icon" style="background:#dbeafe;color:#1d4ed8"><i class="fas fa-bolt"></i></div>
        <h3>Simulado Rápido</h3>
        <p>5 questões · ~10 minutos · Tópicos variados</p>
        <button class="sim-start-btn" style="background:#1d4ed8">Iniciar</button>
      </div>
      <div class="sim-menu-card" onclick="iniciarSimulado('completo')">
        <div class="sim-icon" style="background:#d1fae5;color:#059669"><i class="fas fa-file-alt"></i></div>
        <h3>Simulado Completo</h3>
        <p>10 questões · ~20 minutos · Todas as áreas</p>
        <button class="sim-start-btn" style="background:#059669">Iniciar</button>
      </div>
      <div class="sim-menu-card" onclick="iniciarSimulado('algebra')">
        <div class="sim-icon" style="background:#ede9fe;color:#7c3aed"><i class="fas fa-superscript"></i></div>
        <h3>Álgebra</h3>
        <p>5 questões · Foco em equações e funções</p>
        <button class="sim-start-btn" style="background:#7c3aed">Iniciar</button>
      </div>
      <div class="sim-menu-card" onclick="iniciarSimulado('geometria')">
        <div class="sim-icon" style="background:#fef9c3;color:#d97706"><i class="fas fa-shapes"></i></div>
        <h3>Geometria</h3>
        <p>5 questões · Foco em geometria e trigonometria</p>
        <button class="sim-start-btn" style="background:#d97706">Iniciar</button>
      </div>
    </div>`;
}

function iniciarSimulado(tipo) {
  let pool;
  if      (tipo==="rapido")    pool=[...questoes].sort(()=>Math.random()-.5).slice(0,5);
  else if (tipo==="completo")  pool=[...questoes].sort(()=>Math.random()-.5).slice(0,10);
  else if (tipo==="algebra")   pool=questoes.filter(q=>q.area==="Álgebra").sort(()=>Math.random()-.5).slice(0,5);
  else if (tipo==="geometria") pool=questoes.filter(q=>q.area==="Geometria").sort(()=>Math.random()-.5).slice(0,5);

  estado.simQuestoes=pool; estado.simIdx=0; estado.simAcertos=0; estado.simAtivo=true;
  const minutos=pool.length*2; let segundos=minutos*60;

  document.getElementById("simuladosContent").style.display="none";
  const sa=document.getElementById("simuladoAtivo");
  sa.style.display="block";
  sa.innerHTML=`
    <div class="sim-topbar">
      <button class="btn-back" onclick="renderSimuladosMenu()"><i class="fas fa-times"></i> Encerrar</button>
      <span class="sim-progress-text" id="simProgress">Questão 1 de ${pool.length}</span>
      <div class="sim-timer" id="simTimer"><i class="fas fa-clock"></i> ${String(minutos).padStart(2,"0")}:00</div>
    </div>
    <div id="simQuestaoBox"></div>`;

  clearInterval(estado.simTimer);
  estado.simTimer=setInterval(()=>{
    segundos--;
    const m=Math.floor(segundos/60), s=segundos%60;
    const el=document.getElementById("simTimer");
    if (el) el.innerHTML=`<i class="fas fa-clock"></i> ${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    if (segundos<=0){clearInterval(estado.simTimer);finalizarSimulado();}
  },1000);

  renderSimQuestao();
}

function renderSimQuestao() {
  const q=estado.simQuestoes[estado.simIdx];
  document.getElementById("simProgress").textContent=
    `Questão ${estado.simIdx+1} de ${estado.simQuestoes.length}`;

  const box=document.getElementById("simQuestaoBox");
  box.innerHTML=`
    <div class="sim-progress-bar">
      <div class="sim-bar-fill" style="width:${(estado.simIdx/estado.simQuestoes.length)*100}%"></div>
    </div>
    <div class="qview-card" style="margin-top:16px">
      <div class="qview-meta" style="margin-bottom:14px">
        <span class="q-badge">${q.topico}</span>
        <span class="q-badge q-badge-year">${q.ano}</span>
      </div>
      <p class="qview-text" style="margin-bottom:20px">${q.enunciado}</p>
      <div class="options-grid" id="simOpts"></div>
      <div id="simFeedback" style="display:none;margin-top:16px"></div>
    </div>`;

  const opts=document.getElementById("simOpts");
  q.alternativas.forEach(alt=>{
    const btn=document.createElement("button");
    btn.className="option-btn"; btn.dataset.letra=alt.letra;
    btn.innerHTML=`<span class="option-letter">${alt.letra}</span><span>${alt.texto}</span>`;
    btn.addEventListener("click",()=>responderSim(alt.letra,q));
    opts.appendChild(btn);
  });
}

function responderSim(letra,q) {
  const ok=letra===q.correta;
  if (ok) estado.simAcertos++;
  document.querySelectorAll("#simOpts .option-btn").forEach(b=>{
    b.disabled=true;
    if (b.dataset.letra===q.correta) b.classList.add("correct");
    else if (b.dataset.letra===letra&&!ok) b.classList.add("wrong");
  });
  const fb=document.getElementById("simFeedback");
  fb.style.display="block";
  fb.innerHTML=`
    <div class="feedback-box ${ok?"fb-correct":"fb-wrong"}">
      <div class="feedback-header">${ok?"✅ Correto!":"❌ Incorreto"}</div>
      <div class="feedback-body">${ok?q.feedbackAcerto:q.feedbackErro}</div>
      <div class="feedback-actions">
        <button class="btn-next" onclick="${estado.simIdx<estado.simQuestoes.length-1?'proximaSimQuestao()':'finalizarSimulado()'}">
          ${estado.simIdx<estado.simQuestoes.length-1?"Próxima →":"Ver resultado →"}
        </button>
      </div>
    </div>`;
}

function proximaSimQuestao() { estado.simIdx++; renderSimQuestao(); }

function finalizarSimulado() {
  clearInterval(estado.simTimer);
  const total=estado.simQuestoes.length, acertos=estado.simAcertos;
  const pct=Math.round((acertos/total)*100);
  const emoji=pct>=80?"🏆":pct>=60?"👍":"📚";
  const msg=pct>=80?"Excelente desempenho!":pct>=60?"Bom trabalho, continue praticando!":"Revise os conteúdos e tente novamente!";
  document.getElementById("simQuestaoBox").innerHTML=`
    <div class="sim-result">
      <div style="font-size:64px">${emoji}</div>
      <h2>Simulado concluído!</h2>
      <p>${msg}</p>
      <div class="sim-result-stats">
        <div class="sim-stat"><span>${acertos}/${total}</span><small>Acertos</small></div>
        <div class="sim-stat" style="color:var(--blue-600)"><span>${pct}%</span><small>Aproveitamento</small></div>
      </div>
      <button class="btn-next" onclick="renderSimuladosMenu()" style="margin-top:20px">
        ← Novo Simulado
      </button>
    </div>`;
}

// ============================================
// VÍDEO AULAS
// ============================================
function renderVideoaulas() {
  const c=document.getElementById("videoContent");
  c.innerHTML="";
  videoaulas.forEach(area=>{
    const sec=document.createElement("div");
    sec.className="video-section";
    sec.innerHTML=`
      <h3 class="video-area-title">${area.area}</h3>
      <div class="video-grid">
        ${area.videos.map(v=>`
          <a href="${v.link}" target="_blank" class="video-card">
            <div class="video-thumb">${v.thumb}</div>
            <div class="video-info">
              <div class="video-title">${v.titulo}</div>
              <div class="video-meta">
                <span><i class="fas fa-user"></i> ${v.canal}</span>
                <span><i class="fas fa-clock"></i> ${v.duracao}</span>
              </div>
              <div class="video-cta"><i class="fab fa-youtube"></i> Assistir no YouTube</div>
            </div>
          </a>`).join("")}
      </div>`;
    c.appendChild(sec);
  });
}

// ============================================
// DESEMPENHO
// ============================================
function renderDesempenho(user) {
  const nome=user?(user.displayName||user.email.split("@")[0]):"Visitante";
  const email=user?user.email:"–";
  document.getElementById("perfAvatar").textContent=nome.charAt(0).toUpperCase();
  document.getElementById("perfName").textContent=nome;
  document.getElementById("perfEmail").textContent=email;
  const pct=estado.respondidas>0?Math.round((estado.acertos/estado.respondidas)*100):0;
  document.getElementById("perfPontos").textContent=estado.pontos;
  document.getElementById("perfAcertos").textContent=estado.acertos;
  document.getElementById("perfErros").textContent=estado.erros;
  document.getElementById("perfPct").textContent=`${pct}%`;

  const qs=getQStatus();
  const list=document.getElementById("topicPerfList");
  list.innerHTML="";
  const allTopics=[...new Set(questoes.map(q=>q.topico))];
  allTopics.forEach(t=>{
    const tqs=questoes.filter(q=>q.topico===t);
    const ok=tqs.filter(q=>qs[q.id]==="correct").length;
    const tot=tqs.filter(q=>!!qs[q.id]).length;
    const p=tot>0?Math.round((ok/tot)*100):0;
    const row=document.createElement("div");
    row.className="tp-row";
    row.innerHTML=`
      <span class="tp-name">${t}</span>
      <div class="tp-bar-wrap"><div class="tp-bar-fill" style="width:${p}%"></div></div>
      <span class="tp-pct">${p}%</span>
      <span class="tp-count">${ok}/${tqs.length}</span>`;
    list.appendChild(row);
  });
}

function atualizarNavUsuario(user) {
  const nome=user?(user.displayName||user.email.split("@")[0]):"Visitante";
  document.getElementById("userAvatar").textContent=nome.charAt(0).toUpperCase();
  document.getElementById("userNameDisplay").textContent=nome;
  document.getElementById("dropdownName").textContent=user?(user.displayName||nome):"–";
  document.getElementById("dropdownEmail").textContent=user?user.email:"–";
  document.getElementById("perfAvatar").textContent=nome.charAt(0).toUpperCase();
}

function atualizarScorePill() {
  document.getElementById("scoreDisplay").textContent=`${estado.pontos} pts`;
}

function mostrarToast(msg,tipo) {
  const t=document.getElementById("toast");
  t.textContent=msg; t.className=`toast ${tipo} show`;
  clearTimeout(window._tTimer);
  window._tTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
