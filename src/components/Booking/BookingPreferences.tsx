import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { websiteData } from '@/data/websiteData';

interface BookingPreferencesProps {
  onContinue: (preferences: any) => void;
}

const BookingPreferences = ({ onContinue }: BookingPreferencesProps) => {
  const [selectedDate, setSelectedDate] = useState('01 Apr 2025');
  const [selectedCruise, setSelectedCruise] = useState('Sunset Cruise');
  const [selectedDeck, setSelectedDeck] = useState('Upper Deck');
  const [guests, setGuests] = useState({ adults: 2, children: 1, infants: 1 });
  const [gstIncluded, setGstIncluded] = useState(false);

  const handleContinue = () => {
    onContinue({
      date: selectedDate,
      cruise: selectedCruise,
      deck: selectedDeck,
      guests,
      gstIncluded,
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-2">Alfresco Grand</h1>
        <p className="text-gray-600">Select your preferences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">📅 Select Date</h3>
            <div className="flex gap-2">
              {['01 Apr 2025', '02 Apr 2025', '03 Apr 2025'].map((date) => (
                <Button
                  key={date}
                  variant={selectedDate === date ? 'default' : 'outline'}
                  onClick={() => setSelectedDate(date)}
                  className="text-sm bg-blue-500 text-white"
                >
                  {date}
                </Button>
              ))}
            </div>
          </div>

          {/* Cruise Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">🚢 Select Cruise</h3>
            <div className="grid gap-2">
              {websiteData.dailyCruises.section.map((cruise) => (
                <Button
                  key={cruise.id}
                  variant={selectedCruise === cruise.title ? 'default' : 'outline'}
                  onClick={() => setSelectedCruise(cruise.title)}
                  className="justify-start h-auto p-4 "
                >
                  <div className="text-left ">
                    <div className="font-semibold">{cruise.title}</div>
                    <div className="text-sm opacity-70">{cruise.timing}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Deck Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">🛳️ Select Deck</h3>
            <div className="space-y-2">
              {['Upper Deck', 'Middle Deck'].map((deck) => (
                <Card
                  key={deck}
                  className={`cursor-pointer border-2 ${
                    selectedDeck === deck ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedDeck(deck)}
                >
                  <CardContent className="p-4 flex justify-between items-center">
                    <span className="font-medium">{deck}</span>
                    <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs">📷</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Guest Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">👥 Select Number of Guests</h3>
            <div className="space-y-2">
              {['Adults', 'Children', 'Infants'].map((type) => (
                <div key={type} className="flex items-center justify-between">
                  <span>{type}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const key = type.toLowerCase() as keyof typeof guests;
                        setGuests(prev => ({ ...prev, [key]: Math.max(0, prev[key] - 1) }));
                      }}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">
                      {guests[type.toLowerCase() as keyof typeof guests]}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const key = type.toLowerCase() as keyof typeof guests;
                        setGuests(prev => ({ ...prev, [key]: prev[key] + 1 }));
                      }}
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please review your booking preferences before proceeding.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>📅 {selectedDate}</span>
            </div>
            <div className="flex justify-between">
              <span>🚢 {selectedCruise}</span>
            </div>
            <div className="flex justify-between">
              <span>🛳️ {selectedDeck}</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span>👥 Adult(s): x{guests.adults}</span>
                <span>Rs. 213</span>
              </div>
              <div className="flex justify-between">
                <span>👶 Kid(s): x{guests.children}</span>
                <span>Rs. 4124</span>
              </div>
              <div className="flex justify-between">
                <span>🍼 Infant(s): x{guests.infants}</span>
                <span>Rs. 1411</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h4 className="font-semibold mb-2">GST</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={!gstIncluded}
                  onCheckedChange={(checked) => setGstIncluded(!checked)}
                />
                <span>Yes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={gstIncluded}
                  onCheckedChange={setGstIncluded}
                />
                <span>No</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total (Including GST)</span>
              <span>Rs. 4124</span>
            </div>
          </div>

          <Button onClick={handleContinue} className="w-full bg-blue-500 hover:bg-blue-600">
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingPreferences;
