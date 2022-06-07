/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState,
  createContext,
  useEffect,
} from "react";
import api from "../api";

const Context = createContext<IContext>({
  user: {} as IUser,
  setUser: () => {},
  cars: [],
  update: () => {},
  history: []
});

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [cars, setCars] = useState<ICar[]>([] as ICar[]);
  const [history, setHistory] = useState<IHistory[]>([] as IHistory[]);

  function update(){
    loadUser();
    loadCars();
  }

  async function loadHistory(userData: IUser){
    try{
      const response = await api.get(`/history/user/${userData.cnh}`);
      setHistory(response.data);
    }catch(err){
      console.log("History Error:", err);
    }
  }

  function loadUser(){
    const data = localStorage.getItem('user');
    if(!!data){
      const userLocal: IUser = JSON.parse(String(data));
      setUser(userLocal);
      loadHistory(userLocal);
    }
  }

  async function loadCars(){
    try{
      const response = await api.get('/carro/all');
      setCars(response.data);
    }catch(err){
      console.log("Falha ao carregar carros:", err);
    }
  }

  useEffect(() => {
    loadCars();
    loadHistory(user);
  }, [user])

  useEffect(() => {
    update()
  }, [])

  return (
    <Context.Provider value={{ user, setUser, cars, update, history }}>
        {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };