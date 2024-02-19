import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../../apis/auth/auth';
import Step1 from './Step1';
import Step2 from './Step2';

interface SignUpForm {
  name: string;
  password1: string;
  password2?: string;
  studentId: string;
  kakaotalkID: string;
  email: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
}

export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();
  const toast = useToast();
  const method = useForm<SignUpForm>({ mode: 'onBlur' });
  const { mutate: signUp, isPending } = useSignUp();
  const submitHandler: SubmitHandler<SignUpForm> = async (data) => {
    const submitData = { ...data, train: selectedTrain };
    delete submitData.password2;
    signUp(submitData, {
      onSuccess: (data) => {
        toast({
          title: '회원가입 성공',
          description: '회원가입에 성공했습니다. 로그인해주세요.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/login');
      },
      onError: (error) => {
        console.log(submitData);
        console.log(error);
      },
    });
  };
  const [selectedTrain, setSelectedTrain] = React.useState<'slow' | 'fast'>(
    'slow',
  );

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(submitHandler)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        {step === 1 ? (
          <Step1 onNext={() => setStep((prev) => prev + 1)} />
        ) : (
          <Step2
            selectedTrain={selectedTrain}
            setSelectedTrain={setSelectedTrain}
          />
        )}
      </form>
    </FormProvider>
  );
}
