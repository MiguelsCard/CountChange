import { useGlobalContext } from '../context';
import { useEffect } from 'react';

const Hand: React.FC = () => {
  const {
    change,
    correctChange,
    setCorrectChange,
    changeReturned,
    setChangeReturned,
  } = useGlobalContext();
  const calculateChange = (total: number) => {
    const twenties = Math.floor(total / 2000);
    total -= twenties * 2000;
    const tens = Math.floor(total / 1000);
    total -= tens * 1000;
    const fives = Math.floor(total / 500);
    total -= fives * 500;
    const ones = Math.floor(total / 100);
    total -= ones * 100;
    const quarters = Math.floor(total / 25);
    total -= quarters * 25;
    const dimes = Math.floor(total / 10);
    total -= dimes * 10;
    const nickels = Math.floor(total / 5);
    total -= nickels * 5;
    const pennies = total;
    return {
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies,
    };
  };
  useEffect(() => {
    setCorrectChange(calculateChange(change));
  }, [change]);

  return (
    <div className='bg-green-400 h-2/5 flex-col flex justify-center items-center'>
      This is the hand
      <div className='flex'>
        <div className='m-2'>
          <div>Twenties: {changeReturned.twenties}</div>
          <div>Tens: {changeReturned.tens}</div>
          <div>Fives: {changeReturned.fives}</div>
          <div>Ones: {changeReturned.ones}</div>
          <div>Quarters: {changeReturned.quarters}</div>
          <div>Dimes: {changeReturned.dimes}</div>
          <div>Nickels returned: {changeReturned.nickels}</div>
          <div>Pennies: {changeReturned.pennies}</div>
        </div>
        <div className='m-2'>
          <div>Twenties: {correctChange.twenties}</div>
          <div>Tens: {correctChange.tens}</div>
          <div>Fives: {correctChange.fives}</div>
          <div>Ones: {correctChange.ones}</div>
          <div>Quarters: {correctChange.quarters}</div>
          <div>Dimes: {correctChange.dimes}</div>
          <div>Nickels: {correctChange.nickels}</div>
          <div>Pennies: {correctChange.pennies}</div>
        </div>
      </div>
      <div className='flex'>
        {[...Array(changeReturned.twenties)].map((_, i) => (
          <div
            onClick={() => {
              setChangeReturned({
                ...changeReturned,
                twenties: changeReturned.twenties - 1,
              });
            }}
            className={styles.bills}
            key={i}
          >
            20
          </div>
        ))}
        {[...Array(changeReturned.quarters)].map((_, i) => (
          <div
            onClick={() => {
              setChangeReturned({
                ...changeReturned,
                quarters: changeReturned.quarters - 1,
              });
            }}
            className={styles.coins}
            key={i}
          >
            25
          </div>
        ))}
        {[...Array(changeReturned.dimes)].map((_, i) => (
          <div
            onClick={() => {
              setChangeReturned({
                ...changeReturned,
                dimes: changeReturned.dimes - 1,
              });
            }}
            className={styles.coins}
            key={i}
          >
            10
          </div>
        ))}
        {[...Array(changeReturned.nickels)].map((_, i) => (
          <div
            onClick={() => {
              setChangeReturned({
                ...changeReturned,
                nickels: changeReturned.nickels - 1,
              });
            }}
            className={styles.coins}
            key={i}
          >
            5
          </div>
        ))}
        {[...Array(changeReturned.pennies)].map((_, i) => (
          <div
            onClick={() => {
              setChangeReturned({
                ...changeReturned,
                pennies: changeReturned.pennies - 1,
              });
            }}
            className={styles.pennies}
            key={i}
          >
            1
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  bills: 'bg-green-800 m-1',
  coins:
    'bg-gray-400 w-8 h-8 rounded-full flex justify-center items-center m-1',
  pennies:
    'bg-yellow-400 w-8 h-8 rounded-full flex justify-center items-center m-1',
};

export default Hand;
