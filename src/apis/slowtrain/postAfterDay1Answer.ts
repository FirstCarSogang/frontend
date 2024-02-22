import { SlowTrainAfterDay1AnswerPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const postAfterDay1Answer = (payload: SlowTrainAfterDay1AnswerPayload) => {
  return instance.post('/slowtrain/afterday1answer', payload);
};

export const usePostAfterDay1Answer = () => {
  return useMutation({ mutationFn: postAfterDay1Answer });
};
