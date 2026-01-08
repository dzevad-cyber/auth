import { _axios } from '@/services/axios'
import { useMutation } from '@tanstack/react-query'

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (params: CreateUserParams) => {
      return createUser(params)
    },
  })
}

const createUser = async (params: CreateUserParams) => {
  // const { firstName, lastName, password, confirmPassword, email } = params

  console.log('[ signUp.mutation.tsx - 17 ] - params:', params)
  // const res = await _axios.post('/signUp', {
  //   firstName,
  //   lastName,
  //   password,
  //   confirmPassword,
  //   email,
  // })
}

type CreateUserParams = {
  firstName: string
  lastName: string
  password: string
  email: string
  confirmPassword: string
}
