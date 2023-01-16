import React, { useState } from 'react';

type MoneyType = {
  cost: number;
  setCost: React.Dispatch<React.SetStateAction<number>>;
  paid: number;
  setPaid: React.Dispatch<React.SetStateAction<number>>;
  change: number;
  correctChange: CashType;
  setCorrectChange: React.Dispatch<React.SetStateAction<CashType>>;
  changeReturned: CashType;
  setChangeReturned: React.Dispatch<React.SetStateAction<CashType>>;
  difficulty: DifficultyType;
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyType>>;
  showMessage: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
  pendingChallenge: boolean;
  setPendingChallenge: React.Dispatch<React.SetStateAction<boolean>>;
};

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

type DifficultyType = 'normal' | 'tricky' | 'nightmare';

const Context = React.createContext<MoneyType>({} as MoneyType);

const ContextProvider: React.FC = ({ children }) => {
  const [cost, setCost] = useState<number>(Math.floor(Math.random() * 10001));
  const [paid, setPaid] = useState<number>(
    Math.floor(Math.random() * (10001 - cost + 1)) + cost
  );
  const [change, setChange] = useState<number>(paid - cost);
  const [correctChange, setCorrectChange] = useState<CashType>({
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  });
  const [changeReturned, setChangeReturned] = useState<CashType>(correctChange);
  const [difficulty, setDifficulty] = useState<DifficultyType>('normal');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [pendingChallenge, setPendingChallenge] = useState<boolean>(false);
  return (
    <Context.Provider
      value={{
        cost,
        setCost,
        paid,
        setPaid,
        change,
        correctChange,
        setCorrectChange,
        changeReturned,
        setChangeReturned,
        difficulty,
        setDifficulty,
        showMessage,
        setShowMessage,
        pendingChallenge,
        setPendingChallenge,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useGlobalContext = () => React.useContext(Context);
