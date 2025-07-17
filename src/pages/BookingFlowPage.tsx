import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '@/components/Booking/BookingForm';
import OTPVerification from '@/components/Booking/OTPVerification';
import BookingPreferences from '@/components/Booking/BookingPreferences';
import BookingConfirmation from '@/components/Booking/BookingConfirmation';
import BookingSuccess from '@/components/Booking/BookingSuccess';

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<any>({});
  const navigate = useNavigate();

  const handleBookingSubmit = (data: any) => {
    setBookingData({ ...bookingData, ...data });
    setStep(2);
  };

  const handleOTPVerify = (otp: string) => {
    setBookingData({ ...bookingData, otp });
    setStep(3);
  };

  const handlePreferencesSubmit = (preferences: any) => {
    setBookingData({ ...bookingData, ...preferences });
    setStep(4);
  };

  const handleConfirmation = (confirmationData: any) => {
    setBookingData({ ...bookingData, ...confirmationData });
    setStep(5);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const handleResendOTP = () => {
    console.log('Resending OTP...');
  };

  return (
    <div className="min-h-screen  py-8">
      {step === 1 && <BookingForm onSubmit={handleBookingSubmit} />}
      {step === 2 && (
        <OTPVerification
          phoneNumber={bookingData.phoneNumber}
          onVerify={handleOTPVerify}
          onResend={handleResendOTP}
        />
      )}
      {step === 3 && <BookingPreferences onContinue={handlePreferencesSubmit} />}
      {step === 4 && <BookingConfirmation onConfirm={handleConfirmation} />}
      {step === 5 && <BookingSuccess onReturnHome={handleReturnHome} />}
    </div>
  );
};

export default BookingFlow;
