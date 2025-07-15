import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required').optional().or(z.literal('')),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void;
}

const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
    },
  });

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Alfresco Grand</h1>
        <p className="text-gray-600">Welcome! Please log in to book your Cruise</p>
      </div>

   <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="fullName"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Full Name</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter your Full Name"
              {...field}
           className="border border-blue-600 rounded-md !outline-none focus:!outline-none focus:!ring-1 focus:!ring-blue-600 focus:!border-blue-600"


            />
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
            <div className="flex">
              <div className="flex items-center px-3 w-[80px] border  rounded-l-md border-blue-500 bg-gray-50 border-r-2">
                <p className="text-sm flex ">🇮🇳 +91</p>
              </div>
              <Input
                placeholder="Enter your Mobile Number"
                {...field}
                 className="border-l-0 border-blue-600 rounded-tl-none rounded-bl-none  !outline-none focus:!outline-none focus:!ring-1 focus:!ring-blue-600 focus:!border-blue-600"

              />
            </div>
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
            <Input
              placeholder="Enter Email ID (Optional)"
              {...field}
               className="border border-blue-600 rounded-md !outline-none focus:!outline-none focus:!ring-1 focus:!ring-blue-600 focus:!border-blue-600"

            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
      SEND OTP
    </Button>
  </form>
</Form>


      <p className="text-xs text-gray-500 text-center mt-4">
        *Your phone number will be used to send your booking ticket.*
      </p>
    </div>
  );
};

export default BookingForm;
