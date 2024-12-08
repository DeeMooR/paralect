import { useMutation, useQuery } from '@tanstack/react-query';

import { apiService } from 'services';

import queryClient from 'query-client';

import { ApiError, ResponseToVacancy, UpdateResponseToVacancyParams } from 'types';

export const useGetResponseToVacancy = () =>
  useQuery<ResponseToVacancy[]>({
    queryKey: ['responseToVacancy'],
    queryFn: () => apiService.get('/responseToVacancy'),
    staleTime: 5 * 1000,
  });

export const useCreateResponseToVacancy = <T = UpdateResponseToVacancyParams>() =>
  useMutation<void, ApiError, T>({
    mutationFn: (data: T) => apiService.post('/responseToVacancy', data),
    onSuccess: (data) => {
      queryClient.setQueryData(['responseToVacancy'], data);
    },
  });

export const useUpdateResponseToVacancy = <T = UpdateResponseToVacancyParams>() =>
  useMutation<void, ApiError, T>({
    mutationFn: (data: T) => apiService.put('/responseToVacancy', data),
    onSuccess: (data) => {
      queryClient.setQueryData(['responseToVacancy'], data);
    },
  });

export const useRemoveResponseToVacancy = () =>
  useMutation<void, ApiError, string>({
    mutationFn: (id: string) => apiService.delete(`/responseToVacancy/${id}`),
    onSuccess: (data) => {
      queryClient.setQueryData(['responseToVacancy'], data);
    },
  });
