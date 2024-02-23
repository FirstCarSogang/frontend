import { SlowTrainReportPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const reportSlowTicket = async (payload: SlowTrainReportPayload) => {
  return instance.post('/slowtrain/report', payload);
};

export const useReportSlowTicket = () => {
  return useMutation({ mutationFn: reportSlowTicket });
};
