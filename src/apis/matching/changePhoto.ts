import { ChangePhotoPayload } from '@/types/payload';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../instance';

const changePhoto = async (payload: ChangePhotoPayload) => {
  return instance.post(`/matching/changephoto/${payload.photoNumber}`, payload);
};

export const useChangePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changePhoto,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['matchingPage'] }),
  });
};
