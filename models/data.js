const customerData = [
  {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    telNo: '1234567890',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    telNo: '9876543210',
  },
  {
    fullName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    telNo: '5551234567',
  },
  {
    fullName: 'Emily Brown',
    email: 'emily.brown@example.com',
    telNo: '5559876543',
  },
  {
    fullName: 'David Wilson',
    email: 'david.wilson@example.com',
    telNo: '5555678901',
  },
  {
    fullName: 'Jessica Taylor',
    email: 'jessica.taylor@example.com',
    telNo: '5558901234',
  },
  {
    fullName: 'Matthew Martinez',
    email: 'matthew.martinez@example.com',
    telNo: '5552345678',
  },
  {
    fullName: 'Sarah Anderson',
    email: 'sarah.anderson@example.com',
    telNo: '5556789012',
  },
  {
    fullName: 'Christopher Thomas',
    email: 'christopher.thomas@example.com',
    telNo: '5554567890',
  },
  {
    fullName: 'Amanda Hernandez',
    email: 'amanda.hernandez@example.com',
    telNo: '5557890123',
  },
];
const reservationData = [
  {
    people: 2,
    reservationDate: '2024-05-01T18:00:00.000Z',
    tableNo: 'A1',
    specialRequest: 'Window seat',
  },
  {
    people: 4,
    reservationDate: '2024-05-02T19:30:00.000Z',
    tableNo: 'B3',
    specialRequest: 'Birthday celebration',
  },
  {
    people: 3,
    reservationDate: '2024-05-03T20:00:00.000Z',
    tableNo: 'A2',
    specialRequest: 'Vegetarian menu',
  },
  {
    people: 5,
    reservationDate: '2024-05-04T17:00:00.000Z',
    tableNo: 'C5',
    specialRequest: 'Anniversary dinner',
  },
  {
    people: 2,
    reservationDate: '2024-05-05T18:30:00.000Z',
    tableNo: 'B1',
    specialRequest: 'No allergies',
  },
  {
    people: 6,
    reservationDate: '2024-05-06T19:00:00.000Z',
    tableNo: 'A3',
    specialRequest: 'Private room',
  },
  {
    people: 4,
    reservationDate: '2024-05-07T18:45:00.000Z',
    tableNo: 'C2',
    specialRequest: 'Extra chairs',
  },
  {
    people: 3,
    reservationDate: '2024-05-08T17:30:00.000Z',
    tableNo: 'B2',
    specialRequest: 'Music preference: Jazz',
  },
  {
    people: 5,
    reservationDate: '2024-05-09T19:15:00.000Z',
    tableNo: 'C3',
    specialRequest: 'Early arrival',
  },
  {
    people: 2,
    reservationDate: '2024-05-10T18:45:00.000Z',
    tableNo: 'A4',
    specialRequest: 'Wheelchair accessible',
  },
];

const contactData = [
  {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    telNo: '1234567890',
    subject: 'Question about product',
    message: 'Hello, I have a question about your product...',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    telNo: '9876543210',
    subject: 'Issue with account',
    message: "Hi, I'm experiencing some issues with my account...",
  },
  {
    fullName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    telNo: '5551234567',
    subject: 'Feedback on service',
    message: 'Hello, I wanted to provide some feedback on your service...',
  },
  {
    fullName: 'Emily Brown',
    email: 'emily.brown@example.com',
    telNo: '5559876543',
    subject: 'Request for information',
    message: "Hi, I'm interested in getting more information about...",
  },
  {
    fullName: 'David Wilson',
    email: 'david.wilson@example.com',
    telNo: '5555678901',
    subject: 'Complaint about order',
    message: "Hello, I'd like to file a complaint about my recent order...",
  },
  {
    fullName: 'Jessica Taylor',
    email: 'jessica.taylor@example.com',
    telNo: '5558901234',
    subject: 'Inquiry about pricing',
    message: 'Hi, I have a question about your pricing...',
  },
  {
    fullName: 'Matthew Martinez',
    email: 'matthew.martinez@example.com',
    telNo: '5552345678',
    subject: 'Suggestion for improvement',
    message: 'Hello, I wanted to suggest an improvement for your website...',
  },
  {
    fullName: 'Sarah Anderson',
    email: 'sarah.anderson@example.com',
    telNo: '5556789012',
    subject: 'Request for support',
    message: 'Hi, I need assistance with...',
  },
  {
    fullName: 'Christopher Thomas',
    email: 'christopher.thomas@example.com',
    telNo: '5554567890',
    subject: 'Question about shipping',
    message: 'Hello, I have a question about shipping options...',
  },
  {
    fullName: 'Amanda Hernandez',
    email: 'amanda.hernandez@example.com',
    telNo: '5557890123',
    subject: 'Issue with website',
    message: 'Hi, I encountered an issue while using your website...',
  },
];

module.exports = { customerData, reservationData,contactData };
