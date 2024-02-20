import { instance } from '../instance';
import { useQuery } from '@tanstack/react-query';
import { MypageResponse } from 'src/types/response';

const setting = async (): Promise<MypageResponse> => {
  return instance.get('/setting');
};

export const useSetting = () => {
  return useQuery({ queryKey: ['setting'], queryFn: setting });
};
