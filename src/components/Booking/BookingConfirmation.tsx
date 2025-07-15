import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface BookingConfirmationProps {
  onConfirm: (data: any) => void;
}

const BookingConfirmation = ({ onConfirm }: BookingConfirmationProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notificationAccepted, setNotificationAccepted] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: 'Rajdeepam Das',
      phoneNumber: '+91 9876543210',
      email: 'helloworld@gmail.com',
      referralCode: '',
    },
  });

  const handleSubmit = (data: any) => {
    if (termsAccepted && notificationAccepted) {
      onConfirm(data);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Alfresco Grand</h1>
        <p className="text-gray-600">Confirm Your Booking Details</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email ID (Optional)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referralCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Referral Code</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <h3 className="font-semibold">Terms & Conditions Acknowledgment:</h3>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                checked={termsAccepted}
                onCheckedChange={setTermsAccepted}
                className="mt-1"
              />
              <span className="text-sm">
                I have read and agree to Alfresco Grand's Terms and Conditions.
              </span>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                checked={notificationAccepted}
                onCheckedChange={setNotificationAccepted}
                className="mt-1"
              />
              <span className="text-sm">
                After booking, please ensure you receive your ticket via SMS/WhatsApp. 
                If you do not receive it, kindly call 9435558001 / 9854958549.
              </span>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={!termsAccepted || !notificationAccepted}
          >
            CONTINUE TO PAYMENT
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingConfirmation;
