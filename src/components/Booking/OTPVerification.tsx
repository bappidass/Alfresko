import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

interface OTPVerificationProps {
  phoneNumber: string;
  onVerify: (otp: string) => void;
  onResend: () => void;
}

const OTPVerification = ({ phoneNumber, onVerify, onResend }: OTPVerificationProps) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      onVerify(otp);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-4">Alfresco Grand</h1>
        <p className="text-gray-600 mb-6">
          Please enter the OTP sent to <span className="font-semibold">{phoneNumber}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={setOtp}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={onResend}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Didn't receive the OTP? <span className="underline">Resend OTP</span>
          </button>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600"
          disabled={otp.length !== 6}
        >
          Verify OTP
        </Button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        *Didn't receive OTP? You can resend after 30 seconds.*
      </p>
    </div>
  );
};

export default OTPVerification;
