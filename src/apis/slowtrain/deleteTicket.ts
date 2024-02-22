import { SlowTrainTicketDeletePayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const deleteTicket = async (payload: SlowTrainTicketDeletePayload) => {
  return instance.delete('/slowtrain/ticket', { data: payload });
};

export const useDeleteTicket = () => {
  return useMutation({ mutationFn: deleteTicket });
};
