    const textInput = document.getElementById('textInput');
    const charCounter = document.getElementById('charCounter');
    const maxChars = 200;

    textInput.addEventListener('input', () => {
      const remaining = maxChars - textInput.value.length;
      charCounter.textContent = `${remaining} characters remaining`;
    });
  