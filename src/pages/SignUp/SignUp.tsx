import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Step1 from './Step1';
import Step2 from './Step2';

interface SignUpForm {
  name: string;
  password1: string;
  password2: string;
  studentId: string;
  kakaotalkID: string;
  email: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
}

export default function SignUp() {
  const [step, setStep] = useState<number>(1);
  const method = useForm<SignUpForm>({ mode: 'onBlur' });

  const submitHandler: SubmitHandler<SignUpForm> = async (data) => {
    console.log(data, selectedTrain);
  };
  const [selectedTrain, setSelectedTrain] = React.useState<'normal' | 'fast'>(
    'normal',
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
