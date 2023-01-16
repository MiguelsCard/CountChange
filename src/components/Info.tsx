import { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Info = () => {
  const {
    cost,
    paid,
    setPaid,
    change,
    difficulty,
    setDifficulty,
    setPendingChallenge,
  } = useGlobalContext();
  useEffect(() => {
    if (paid % 100 < cost % 100) {
      setPaid(paid - (paid % 100));
    }
    console.log('Info component rendered');
    console.log(paid);
    // setPaid(Math.floor(Math.random() * 10001 - cost + 1) + cost);
  }, []);
  const handleEasyClick = () => {
    setDifficulty('normal');
    setPendingChallenge(false);
  };
  const handleNightmareClick = () => {
    setDifficulty('nightmare');
    setPendingChallenge(true);
  };
  return (
    <div className='bg-orange-400 h-1/5 flex-col flex justify-center items-center'>
      <div>Cost: {(cost / 100).toFixed(2)}</div>
      <div>Paid: {(paid / 100).toFixed(2)}</div>
      <div>Change: {(change / 100).toFixed(2)}</div>
      <div>
        <button
          className={
            difficulty === 'normal' ? styles.buttonPressed : styles.button
          }
          onClick={() => handleEasyClick()}
        >
          Normal
        </button>
        {/* <button
          className={
            difficulty === 'tricky' ? styles.buttonPressed : styles.button
          }
          onClick={() => setDifficulty('tricky')}
        >
          Tricky
        </button> */}
        <button
          className={
            difficulty === 'nightmare' ? styles.buttonPressed : styles.button
          }
          onClick={() => handleNightmareClick()}
        >
          Nightmare
        </button>
      </div>
    </div>
  );
};

export default Info;

const styles = {
  button:
    'bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-4 m-2 rounded',
  buttonPressed: 'bg-blue-800 text-white font-bold py-1 px-4 m-2 rounded ',
};
