import { SlowtrainChoosePayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const postChooseSlow = async (payload: SlowtrainChoosePayload) => {
  return instance.post('/slowtrain/choose', payload);
};

export const usePostChoose = () => {
  return useMutation({ mutationFn: postChooseSlow });
};
