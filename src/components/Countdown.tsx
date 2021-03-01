import { useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const { minutes, secunds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    //torna os minutos em string,se não houver 2 casas inserir zero,separa os minutos em array (esquerdo e direito)
    const [secundLeft, secundRight] = String(secunds).padStart(2,'0').split('');
    //torna os segundos em string,se não houver 2 casas inserir zero,separa os segundos em array (esquerdo e direito)

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo Encerrado <img src="icons/checked.png" alt="Checked"/>
                </button>
            ) : (
                <div>
                {isActive ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar Ciclo <img src="icons/closecount.svg" alt="Close"/>
                    </button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                        Iniciar um ciclo <img src="icons/play.svg" alt="Play"/>
                    </button>
                )}
                </div>
            )}
        </div>
    )
}
