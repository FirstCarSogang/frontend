import { SlowTrainResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const getSlowTickets = async (): Promise<SlowTrainResponse> => {
  return instance.get('/slowtrain/tickets');
};

export const useGetSlowTickets = () => {
  return useQuery({ queryKey: ['slowtrainTickets'], queryFn: getSlowTickets });
};
