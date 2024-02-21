import { useMutation } from '@tanstack/react-query';
import { ForgetPassword1Payload } from '@/types/payload';
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
