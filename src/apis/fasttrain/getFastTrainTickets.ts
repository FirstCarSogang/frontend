import { FastTrainResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getFastTrainTickets = async (): Promise<FastTrainResponse> => {
  return instance.get('/fasttrain/tickets');
};

export const useGetFastTrainTickets = () => {
  return useQuery({
    queryKey: ['fasttrainTickets'],
    queryFn: getFastTrainTickets,
  });
};
