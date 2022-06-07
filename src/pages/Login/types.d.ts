interface ILogin{
  email: string
  password: string
}

interface IResponse{
  data: IUser
}

interface IError{
  status: number
  message: string
}