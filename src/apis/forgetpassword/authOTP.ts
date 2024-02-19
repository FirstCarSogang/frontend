import { useMutation } from '@tanstack/react-query';
import { type ForgetPassword2Payload } from 'src/types/payload';
import { noAuthInstance } from '../instance';

const authOTP = async (payload: ForgetPassword2Payload) => {
  return noAuthInstance.post('/forgetpassword2', payload);
};

export const useAuthOTP = () => {
  const options = {
    mutationFn: authOTP,
  };

  return useMutation(options);
};
