import  { useState, useEffect } from 'react';

function Countdown() {
  const [targetSeconds, setTargetSeconds] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  useEffect(() => {
    let interval;

    if (targetSeconds !== null) {
      setElapsedSeconds(0);
      interval = setInterval(() => {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [targetSeconds]);

  function parseForm(ev) {
    ev.preventDefault();
    const seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds));
  }

  if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return (
      <>
        <p>Terminó el conteo</p>
        <button onClick={() => setTargetSeconds(null)}>Reiniciar</button>
      </>
    );
  }

  if (targetSeconds !== null) {
    return (
      <p>Faltan {targetSeconds - elapsedSeconds} segundos</p>
    );
  }

  return (
    <>
      <p>¿Cuantos segundos quieres contar?</p>
      <form onSubmit={(ev) => parseForm(ev)}>
        <input type="number" name="seconds" />
        <button>Iniciar</button>
      </form>
    </>
  );
}
export default Countdown;
