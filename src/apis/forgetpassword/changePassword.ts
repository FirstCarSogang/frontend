import { useMutation } from '@tanstack/react-query';
import { ForgetPassword3Payload } from '@/types/payload';
import { noAuthInstance } from '../instance';

const changePassword = async (payload: ForgetPassword3Payload) => {
  return noAuthInstance.post('/forgetpassword3', payload);
};

export const useChangePassword = () => {
  const options = {
    mutationFn: changePassword,
  };

  return useMutation(options);
};
