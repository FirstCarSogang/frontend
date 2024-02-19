import { useMutation } from '@tanstack/react-query';
import { type ForgetPassword1Payload } from 'src/types/payload';
import { noAuthInstance } from '../instance';

const authEmail = async (payload: ForgetPassword1Payload) => {
  return noAuthInstance.post('/forgetpassword1', payload);
};

export const useAuthEmail = () => {
  const options = {
    mutationFn: authEmail,
  };
  return useMutation(options);
};
