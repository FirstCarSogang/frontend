import { SlowTrainCommentPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const postComment = async (payload: SlowTrainCommentPayload) => {
  return instance.post('/slowtrain/comment', payload);
};

export const usePostComment = () => {
  return useMutation({ mutationFn: postComment });
};
