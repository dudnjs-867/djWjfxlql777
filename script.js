function pickRandom() {
  const total = 25;
  const count = 4;
  const numbers = [];

  while (numbers.length < count) {
    const rand = Math.floor(Math.random() * total) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }

  numbers.sort((a, b) => a - b);

  const resultText = `🎉 오늘의 청소당번은<br><strong>${numbers.join(', ')}번</strong>입니다! 열심히 청소하세요 :)`;

  // SweetAlert2 팝업 표시
  Swal.fire({
    title: '✨ 당번 추첨 결과!',
    html: resultText,
    icon: 'success',
    confirmButtonText: '확인!',
    confirmButtonColor: '#6366f1',
    background: '#f9fafb',
    customClass: {
      popup: 'rounded-xl shadow-lg text-lg'
    }
  });

  // DOM에도 결과 표시
  document.getElementById("result").innerText = `👉 ${numbers.join(', ')}번 당첨!`;
}
