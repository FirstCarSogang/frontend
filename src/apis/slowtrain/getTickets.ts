import { SlowTrainResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getTickets = async (): Promise<SlowTrainResponse> => {
  return instance.get('/slowtrain/tickets');
};

export const useGetTickets = () => {
  return useQuery({ queryKey: ['slowtrainTickets'], queryFn: getTickets });
};
