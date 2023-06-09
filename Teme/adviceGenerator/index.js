const button = document.getElementById("button");
const adviceDiv = document.getElementById("adviceDiv");
const adviceNu = document.getElementById("adviceNu");

function renderAdvice(advice) {
  adviceDiv.textContent = advice;
}

function renderId(id) {
  adviceNu.textContent = id;
}

function voicedAdvice(advice) {
  VoiceRSS.speech({
    key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
    src: advice,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function getAdvice() {
  const url =
    "https://api.adviceslip.com/advice";
  let advice = "";
  let id = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log (data)

    if (data.slip && data.slip.advice) {
      advice = `"${data.slip.advice}"`;
      id = `ADVICE # ${data.slip.id}`
    } else {
      advice = data.slip.advice;
      id = data.slip.id;
    }
  } catch (e) {}

  renderId(id);
  renderAdvice(advice);
  voicedAdvice(advice);
}

button.addEventListener("click", getAdvice);
