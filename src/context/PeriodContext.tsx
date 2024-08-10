import React, {createContext, ReactNode, useState} from 'react';

interface PeriodContextType {
    year: number,
    month: number,
    setYear: (year: number) => void,
    setMonth: (month: number) => void,
}

export const PeriodContext = createContext<PeriodContextType | undefined>(undefined)

export const PeriodProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

    return (
        <PeriodContext.Provider value={{year, month, setYear, setMonth}}>
            {children}
        </PeriodContext.Provider>
    );
};