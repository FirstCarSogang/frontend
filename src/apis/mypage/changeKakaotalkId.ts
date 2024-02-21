import { useMutation } from '@tanstack/react-query';
import { ChangeKakaotalkIdPayload } from '@/types/payload';
import { instance } from '../instance';

const changeKakaotalkId = async (payload: ChangeKakaotalkIdPayload) => {
  return instance.post('/setting/changekakaotalkid', payload);
};

export const useChangeKakaotalkId = () => {
  const options = {
    mutationFn: changeKakaotalkId,
  };
  return useMutation(options);
};
