function checkQuiz() {
    const answer = document.querySelector('input[name="question"]:checked');
    const result = document.getElementById("result");

    if (!answer) {
        result.textContent = "Por favor, selecione uma resposta.";
        return;
    }

    if (answer.value === "c") {
        result.textContent = "✅ Correto! A geopolítica analisa poder, território e relações internacionais.";
    } else {
        result.textContent = "❌ Incorreto. Tente novamente!";
    }
}
