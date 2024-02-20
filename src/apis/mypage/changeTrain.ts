import { useMutation } from '@tanstack/react-query';
import { ChangeTrainPayload } from 'src/types/payload';
import { ChangeTrainResponse } from 'src/types/response';
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
