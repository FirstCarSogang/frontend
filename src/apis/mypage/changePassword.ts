import { useMutation } from '@tanstack/react-query';
import { ChangePasswordPayload } from '@/types/payload';
import { instance } from '../instance';

const changePassword = async (payload: ChangePasswordPayload) => {
  return instance.post('/setting/changepassword', payload);
};

export const useChangePassword = () => {
  const options = {
    mutationFn: changePassword,
  };
  return useMutation(options);
};
