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
  update: () => {}
});

const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [cars, setCars] = useState<ICar[]>([] as ICar[]);

  function loadUser(){
    const data = localStorage.getItem('user');
    if(!!data){
      const userLocal: IUser = JSON.parse(String(data));
      setUser(userLocal);
    }
  }

  function update(){
    loadUser();
    loadCars();
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
    console.log("TESTE");
    update()
  }, [])

  return (
    <Context.Provider value={{ user, setUser, cars, update }}>
        {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };