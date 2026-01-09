import { _axios } from '@/services/axios'
import { useMutation } from '@tanstack/react-query'

export const useCreateUser = () => {
  return useMutation({
    mutationFn: async (params: CreateUserParams) => {
      return await createUser(params)
    },
    onSuccess: (data) => {
      console.log('[ signUp.mutation.tsx - 17 ] - data:', data)
    },
    onError: (error) => {
      console.error('[ signUp.mutation.tsx - 17 ] - error:', error)
    },
  })
}

const createUser = async (params: CreateUserParams) => {
  const { firstName, lastName, password, passwordConfirm, email } = params

  console.log('[ signUp.mutation.tsx - 17 ] - params:', params)
  const res = await _axios.post(`/auth/signup`, {
    firstName,
    lastName,
    password,
    passwordConfirm,
    email,
  })

  return res
}

type CreateUserParams = {
  firstName: string
  lastName: string
  password: string
  email: string
  passwordConfirm: string
}
