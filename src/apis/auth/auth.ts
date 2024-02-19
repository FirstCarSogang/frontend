import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios';
import { type LoginPayload } from '../../types/payload';
import { type LoginResponse } from '../../types/response';

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  return axios.post('/login', payload);
};

export const useLogin = () => {
  const options: UseMutationOptions<LoginResponse, Error, LoginPayload> = {
    mutationFn: login,
  };

  return useMutation(options);
}