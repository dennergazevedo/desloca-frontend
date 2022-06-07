interface IContext{
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
	cars: ICar[]
	update: () => void
}

interface IUser{
  nome: string
	cnh: string
	telefone: string
	email: string
	isAdmin: boolean
}

interface ICar{
	modelo: string
	marca: string
	placa: string
	status: string
	cor: string
	image: string
	price: number
	ano: number
	motor: number
}