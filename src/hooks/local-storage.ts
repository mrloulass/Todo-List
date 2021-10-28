const useLocalStorage = <TState>(key: string, newState: TState) => {
  const stateString = window.localStorage.getItem(key)
  const state = stateString ? JSON.parse(stateString) as TState : newState;

  const updateState = () =>{
    
  }
  return [state, updateState]
};

export default useLocalStorage;
