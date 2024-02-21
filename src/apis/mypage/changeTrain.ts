import { useMutation } from '@tanstack/react-query';
import { ChangeTrainPayload } from '@/types/payload';
import { ChangeTrainResponse } from '@/types/response';
import { instance } from '../instance';

const changeTrain = async (
  payload: ChangeTrainPayload,
): Promise<ChangeTrainResponse> => {
  return instance.post('/setting/train', payload);
};

export const useChangeTrain = () => {
  const options = {
    mutationFn: changeTrain,
  };
  return useMutation(options);
};
