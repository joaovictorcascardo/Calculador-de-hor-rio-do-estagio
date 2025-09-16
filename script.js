document.addEventListener("DOMContentLoaded", () => {
  const startTimeInput = document.getElementById("startTime");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");

  calculateBtn.addEventListener("click", () => {
    const startTimeValue = startTimeInput.value;

    if (!startTimeValue) {
      resultDiv.textContent = "Por favor, informe a hora de entrada.";
      return;
    }

    const [hours, minutes] = startTimeValue.split(":").map(Number);

    const entryTime = new Date();
    entryTime.setHours(hours);
    entryTime.setMinutes(minutes);
    entryTime.setSeconds(0);

    entryTime.setHours(entryTime.getHours() + 6);

    const exitHours = String(entryTime.getHours()).padStart(2, "0");
    const exitMinutes = String(entryTime.getMinutes()).padStart(2, "0");

    resultDiv.innerHTML = `Horário de saída será às <strong>${exitHours}:${exitMinutes}</strong>`;
  });
});
