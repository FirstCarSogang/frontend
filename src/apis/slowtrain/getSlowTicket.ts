import { SlowTrainCardResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getSlowTicket = async (): Promise<SlowTrainCardResponse> => {
  return instance.get('/slowtrain/ticket');
};

export const useGetSlowTicket = () => {
  return useQuery({ queryKey: ['slowtrainTicket'], queryFn: getSlowTicket });
};
