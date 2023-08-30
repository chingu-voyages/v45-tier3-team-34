export type RegisterFormType = {
  userName?: string
  email: string
  password: string
  confirmPassword?: string
  avatar?: string
  role?: string
}

export type UserCardType = {
  avatar: string
  date: string
  email: string
  role: string
  userName: string
  _id: string
}

export type GeneralActionType = {
  payload: string
  type: string
}

export type ProjectCardType = {
  id: string
  title: string
  reviews: number
  price: number
  description: string
  stars: number
  img: string
}

export type UserType = {
  avatar: string
  date: string
  email: string
  password: null
  role: string
  userName: string
  _id: string
  __v?: number
}

export type CompanyProjectType = {
  category: string

  country: string

  description: string

  difficulty: string

  image: string
  price: string

  skills: string[]

  title: string

  urgent: string

  user_id: string
}
