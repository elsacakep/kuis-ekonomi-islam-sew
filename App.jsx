import { useState, useEffect } from "react";

const questions = [
  {
    question: "Terdapat tiga sistem pengelolaan zakat di Indonesia, yaitu surplus zakat budget, in kind, dan resolving fund.",
    answer: "BENAR"
  },
  {
    question: "Kurva Isowelfare adalah kurva yang menggambarkan gabungan kemakmuran dari semua orang.",
    answer: "BENAR"
  },
  {
    question: "Islamic world view disebut juga al-mabda’ al-islami.",
    answer: "BENAR"
  },
  {
    question: "Salah satu tujuan ekonomi Islam adalah menciptakan masyarakat sebagai khalifah dalam pembangunan ekonomi.",
    answer: "BENAR"
  },
  {
    question: "Bank syariah pertama di dunia adalah MitGhamr Bank.",
    answer: "BENAR"
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [current]);

  const handleAnswer = (answer) => {
    if (answer === questions[current].answer) {
      setScore(score + 1);
    }
    handleNext();
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setTimer(10);
    } else {
      alert(`Kuis selesai! Skor akhir Anda: ${score}/${questions.length}`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Kuis Ekonomi Islam</h1>
      <p>{questions[current].question}</p>
      <div>
        <button onClick={() => handleAnswer("BENAR")}>Benar</button>
        <button onClick={() => handleAnswer("SALAH")}>Salah</button>
      </div>
      <p>Sisa waktu: {timer} detik</p>
      <p>Skor: {score}</p>
    </div>
  );
}
