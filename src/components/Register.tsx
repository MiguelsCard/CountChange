import { useGlobalContext } from '../context';
import * as _ from 'lodash';

type CashType = {
  twenties: number;
  tens: number;
  fives: number;
  ones: number;
  quarters: number;
  dimes: number;
  nickels: number;
  pennies: number;
};

const Register: React.FC = () => {
  const {
    cost,
    paid,
    setPaid,
    correctChange,
    changeReturned,
    setChangeReturned,
    showMessage,
    setShowMessage,
    difficulty,
    pendingChallenge,
    setPendingChallenge,
  } = useGlobalContext();
  const calculateValue = (change: CashType) => {
    let value = 0;
    value += change.twenties * 2000;
    value += change.tens * 1000;
    value += change.fives * 500;
    value += change.ones * 100;
    value += change.quarters * 25;
    value += change.dimes * 10;
    value += change.nickels * 5;
    value += change.pennies;
    return value;
  };

  const result = _.isEqual(correctChange, changeReturned);
  let newChange: any = null;

  const initiateChallenge = () => {
    //Figure out how many quarters to add to get right under the dollar
    const quartersToAdd = paid % 100;
    newChange = {
      ...changeReturned,
      quarters: changeReturned.quarters + 2,
    };

    return 'THIS IS THE CHALLENGE';
  };

  const messageDisplayed = () => {
    return calculateValue(changeReturned) === calculateValue(correctChange)
      ? result
        ? difficulty === 'nightmare'
          ? pendingChallenge
            ? initiateChallenge()
            : 'You got it right!'
          : 'You got it right!'
        : `Why don't you just change all their cash for pennies too? >:(`
      : 'You got it wrong :(';
  };
  return (
    <div className='bg-red-800 h-2/5 text-xl flex-col flex justify-center items-center'>
      <div>Click these to add up change!</div>
      <div className='bg-gray-200'>
        Test vALUE:{calculateValue(changeReturned)}
      </div>
      <div className='bg-gray-400'>
        TEST change: {result ? 'true' : 'false'}
      </div>
      <div>
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              twenties: prevState.twenties + 1,
            }));
          }}
          className={styles.button}
        >
          $20
        </button>{' '}
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              tens: prevState.tens + 1,
            }));
          }}
          className={styles.button}
        >
          $10
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              fives: prevState.fives + 1,
            }));
          }}
          className={styles.button}
        >
          $5
        </button>{' '}
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              ones: prevState.ones + 1,
            }));
          }}
          className={styles.button}
        >
          $1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              quarters: prevState.quarters + 1,
            }));
          }}
          className={styles.button}
        >
          $0.25
        </button>{' '}
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              dimes: prevState.dimes + 1,
            }));
          }}
          className={styles.button}
        >
          $0.10
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              nickels: prevState.nickels + 1,
            }));
          }}
          className={styles.button}
        >
          $0.05
        </button>{' '}
        <button
          onClick={() => {
            setChangeReturned((prevState) => ({
              ...prevState,
              pennies: prevState.pennies + 1,
            }));
          }}
          className={styles.button}
        >
          $0.01
        </button>
      </div>
      <button
        onClick={() => {
          setShowMessage(true);
        }}
        className={styles.submit}
      >
        Submit
      </button>
      {showMessage ? (
        <button
          onClick={() => {
            setShowMessage(false);
            newChange ? setChangeReturned(newChange) : null;
          }}
          className={styles.message}
        >
          {messageDisplayed()}
          <div>(Click to try again)</div>
        </button>
      ) : null}
    </div>
  );
};

export default Register;

const styles = {
  button: 'bg-green-800 rounded-lg w-20 h-10 m-1',
  submit: 'bg-gray-500 rounded-lg py-2 px-10',
  message:
    'bg-gray-500 rounded-lg p-2 h-40 w-60 border-2 border-black absolute bottom-0 right-0 left-0 top-0 m-auto',
};
