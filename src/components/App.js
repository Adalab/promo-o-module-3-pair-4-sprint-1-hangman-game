import '../styles/App.scss';
import { useState } from 'react';

// Ejercicio 3: pintar los guiones de la solución (fase 2)
// - en renderSolutionLetters:
// - si la letra de word no está en userLetters: <li className="letter"></li>
// - si la letra de word sí está en userLetters: <li className="letter">{letra}</li>
// - pista: .includes() ???

// Ejercicio 4: pintar las letras falladas
// - crear función renderErrorLetters
// - ejecutarla en retorno del componente App debajo del título "Letras falladas"
// - en renderErrorLetters:
// - filtrar las letras de word que no existen en userLetters
// - recorrer letras filtradas con map para pintar <li className="letter">{letra}</li>

// Ejercicio 5: pintar el muñeco
// calcular nº de errores con filter
// actualizar css del muñeco

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const handleClickBtn = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleInput = (event) => {
    let inputValue = event.target.value;
    setLastLetter(inputValue);

    if (inputValue) {
      inputValue = event.target.value.toLowerCase().match('[A-zÁ-úÄ-üñÑ]');

      if (inputValue) {
        const foundLetter = userLetters.find(
          (letter) => letter === inputValue[0]
        );

        if (!foundLetter) {
          userLetters.push(inputValue[0]);
          setUserLetters([...userLetters]);
        }
      }
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      return <li key={index} className="letter"></li>;
    });
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter ? lastLetter : ''}
              onChange={handleInput}
            />
          </form>
        </section>
        <section className={'dummy error-' + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
      <button onClick={handleClickBtn}>Incrementar</button>
    </div>
  );
}

export default App;
