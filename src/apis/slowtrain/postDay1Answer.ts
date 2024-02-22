import { SlowTrainDay1AnswerPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const postDay1Answer = (payload: SlowTrainDay1AnswerPayload) => {
  return instance.post('/slowtrain/day1answer', payload);
};

export const usePostDay1Answer = () => {
  return useMutation({ mutationFn: postDay1Answer });
};
