import { MatchingPageResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../instance';

const matchingPage = async (): Promise<MatchingPageResponse> => {
  return instance.get('/matching');
};

export const useMatchingPage = () => {
  return useQuery({ queryKey: ['matchingPage'], queryFn: matchingPage });
};
