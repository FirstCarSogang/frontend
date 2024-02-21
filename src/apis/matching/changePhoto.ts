import { ChangePhotoPayload } from '@/types/payload';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../instance';

const changePhoto = async (payload: ChangePhotoPayload) => {
  return instance.post(`/matching/changephoto/${payload.photoNumber}`, payload);
};

export const useChangePhoto = () => {
  return useMutation({ mutationFn: changePhoto });
};
