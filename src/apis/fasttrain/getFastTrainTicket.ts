import { FastTrainCardResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getFastTrainCardTickets = async (): Promise<FastTrainCardResponse> => {
  return instance.get('/fasttrain/ticket');
};

export const useGetFastTrainCardTickets = () => {
  return useQuery({
    queryKey: ['fasttrainTickets'],
    queryFn: getFastTrainCardTickets,
  });
};
