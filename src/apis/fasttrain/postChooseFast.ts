import { FastTrainChoosePayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const postChooseFast = (payload: FastTrainChoosePayload) => {
  return instance.post('/fasttrain/choose', payload);
};

export const usePostChooseFast = () => {
  return useMutation({ mutationFn: postChooseFast });
};
