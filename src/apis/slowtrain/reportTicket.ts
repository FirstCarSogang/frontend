import { SlowTrainReportPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const reportTicet = async (payload: SlowTrainReportPayload) => {
  return instance.post('/slowtrain/report', payload);
};

export const useReportTicket = () => {
  return useMutation({ mutationFn: reportTicet });
};
