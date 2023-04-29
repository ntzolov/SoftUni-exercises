function attachGradientEvents() {
  const gradientField = document.getElementById('gradient');

  gradientField.addEventListener('mousemove', percentage);

  function percentage(event) {
    const x = event.offsetX;
    document.getElementById('result').textContent =
      Math.floor((x / 300) * 100) + '%';
  }
}
