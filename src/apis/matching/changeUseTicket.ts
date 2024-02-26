import { ChangeUseTicketPayload } from '@/types/payload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../instance';

const changeUseTicket = async (payload: ChangeUseTicketPayload) => {
  return instance.post('/matching/ticketuse', payload);
};

export const useChangeUseTicket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUseTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matchingPage'] });
    },
  });
};
