import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios';
import {
  type SignUpSendEmailPayload,
  type SignUpVerifyEmailPayload,
  type LoginPayload,
  type SignUpPayload,
} from '../../types/payload';
import { type LoginResponse } from '../../types/response';
import { instance, noAuthInstance } from '../instance';

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  return noAuthInstance.post('/login', payload);
};

export const useLogin = () => {
  const options: UseMutationOptions<LoginResponse, Error, LoginPayload> = {
    mutationFn: login,
  };

  return useMutation(options);
};

const signUpSendEmail = async (payload: SignUpSendEmailPayload) => {
  return noAuthInstance.post('/signup/mail_otp', payload);
};

export const useSignUpSendEmail = () => {
  const options = {
    mutationFn: signUpSendEmail,
  };

  return useMutation(options);
};

const signUpVerifyEmail = async (payload: SignUpVerifyEmailPayload) => {
  return noAuthInstance.post('/signup/otp_check', payload);
};

export const useSignUpVerifyEmail = () => {
  const options = {
    mutationFn: signUpVerifyEmail,
  };

  return useMutation(options);
};

type SignUpPayloadOrFormData = SignUpPayload | FormData;

const signUp = async (payload: SignUpPayloadOrFormData) => {
  return noAuthInstance.post('/signup/register', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const useSignUp = () => {
  const options = {
    mutationFn: signUp,
  };
  return useMutation(options);
};

const logout = async () => {
  return instance.delete('/logout');
};

export const useLogout = () => {
  const options = {
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('studentId');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  };
  return useMutation(options);
};
