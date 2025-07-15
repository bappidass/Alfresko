import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Instagram } from 'lucide-react';

interface BookingSuccessProps {
  onReturnHome: () => void;
}

const BookingSuccess = ({ onReturnHome }: BookingSuccessProps) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-serif text-gray-900 mb-2">Alfresco Grand</h1>
      <h2 className="text-xl text-gray-700 mb-8">Thank You for Booking with Alfresco Grand!</h2>

      <div className="mb-8">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Your booking has been confirmed.</h3>
        <p className="text-sm text-gray-600 mb-4">
          Your ticket has been sent to: <br />
          SMS & WhatsApp on <strong>+91-9876543210</strong>
        </p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-8 text-left">
        <h4 className="font-semibold mb-3">Booking Summary</h4>
        <div className="space-y-1 text-sm">
          <p>Cruise: Sunset Cruise</p>
          <p>Date: 27 April 2025</p>
          <p>Time: 5:00 PM - 6:00 PM</p>
          <p>Deck: Upper Deck</p>
          <p>Guests: 3 Adults, 1 Child</p>
          <p className="font-semibold">Total Paid: ₹6600</p>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          If you do not receive it within 5 minutes, please call: <br />
          📞 9435558001 / 9854958649
        </p>
      </div>

      <Button onClick={onReturnHome} className="w-full bg-blue-500 hover:bg-blue-600 mb-4">
        Return to Homepage
      </Button>

      <div className="flex items-center justify-center text-sm text-gray-600">
        <Instagram className="w-4 h-4 mr-2" />
        Follow us on Instagram
      </div>
    </div>
  );
};

export default BookingSuccess;
