import { ChangeUseTicketPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const changeUseTicket = async (payload: ChangeUseTicketPayload) => {
  return instance.post('/matching/ticketuse/', payload);
};

export const useChangeUseTicket = () => {
  return useMutation({ mutationFn: changeUseTicket });
};
