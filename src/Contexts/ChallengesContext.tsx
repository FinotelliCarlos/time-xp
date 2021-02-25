import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
    startNewChallenge: () => void;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children} : ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('New Challenge!')
    }

    return (
        <ChallengesContext.Provider 
        value={{
            startNewChallenge,
            level,
            currentExperience,
            challengesCompleted,
            levelUp
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}
