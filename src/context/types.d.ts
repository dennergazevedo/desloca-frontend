interface IContext{
  user: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser>>
	cars: ICar[]
	update: () => void
	history: IHistory[]
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

interface IHistory{
	id?: string
  dataAlocacao: Date
  dataDevolucao: Date
  carroPlaca: string
  clienteCnh: string
	ativo: boolean
}