import { FastTrainReportPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';
import { useReportTicket } from '../slowtrain/reportTicket';

const reportFastTrain = (payload: FastTrainReportPayload) => {
  return instance.post('/fasttrain/report', payload);
};

export const useReportFastTrain = () => {
  return useMutation({ mutationFn: reportFastTrain });
};
