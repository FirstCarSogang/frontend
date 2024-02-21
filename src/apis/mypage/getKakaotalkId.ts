import { MyKakaotalkIdResponse } from '@/types/response';
import { instance } from '../instance';
import { useQuery } from '@tanstack/react-query';

const kakaotalkId = async (): Promise<MyKakaotalkIdResponse> => {
  return instance.get('/setting/kakaotalkid');
};

export const useKakaotalkId = () => {
  return useQuery({ queryKey: ['kakaotalkid'], queryFn: kakaotalkId });
};
