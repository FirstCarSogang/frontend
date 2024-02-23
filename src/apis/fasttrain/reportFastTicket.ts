import { FastTrainReportPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const reportFastTicket = (payload: FastTrainReportPayload) => {
  return instance.post('/fasttrain/report', payload);
};

export const useReportFastTicket = () => {
  return useMutation({ mutationFn: reportFastTicket });
};
