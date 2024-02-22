import { SlowTrainCardResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getTicket = async (): Promise<SlowTrainCardResponse> => {
  return instance.get('/slowtrain/ticket');
};

export const useGetTicket = () => {
  return useQuery({ queryKey: ['slowtrainTicket'], queryFn: getTicket });
};
