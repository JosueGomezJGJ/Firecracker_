// mockData.ts

export const mockUsers = [
  {
    id: "user1",
    firstName: "Asmin",
    lastName: "Pothula",
    email: "asmin@example.com",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: "user2",
    firstName: "Josue",
    lastName: "Gomez",
    email: "josue@example.com",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: "user3",
    firstName: "Jess",
    lastName: "Doe",
    email: "jess@example.com",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: "user4",
    firstName: "Johnny",
    lastName: "Doe",
    email: "johnny@example.com",
    imageUrl: "https://via.placeholder.com/40",
  },
  {
    id: "user5",
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    imageUrl: "https://via.placeholder.com/40",
  },
];

interface Message {
  id: string;
  senderId: string;
  content: string;
  createdAt: string;
}

// Add an index signature to handle dynamic user IDs
export const mockMessages: { [key: string]: Message[] } = {
  user1: [
    { id: "1", senderId: "user1", content: "Hey, how's it going?", createdAt: new Date().toISOString() },
    { id: "2", senderId: "user2", content: "All good! How about you?", createdAt: new Date().toISOString() },
  ],
  user2: [
    { id: "1", senderId: "user2", content: "What's up?", createdAt: new Date().toISOString() },
    { id: "2", senderId: "user1", content: "Just working on a project.", createdAt: new Date().toISOString() },
  ],
  user3: [
    { id: "1", senderId: "user3", content: "Hello there!", createdAt: new Date().toISOString() },
    { id: "2", senderId: "user1", content: "Hi Jess!", createdAt: new Date().toISOString() },
  ],
  user4: [
    { id: "1", senderId: "user4", content: "Good morning!", createdAt: new Date().toISOString() },
    { id: "2", senderId: "user1", content: "Morning, Johnny!", createdAt: new Date().toISOString() },
  ],
  user5: [
    { id: "1", senderId: "user5", content: "Need help with the project?", createdAt: new Date().toISOString() },
    { id: "2", senderId: "user1", content: "Yes, please.", createdAt: new Date().toISOString() },
  ],
};

// Define and export the `getLastMessage` function
export const getLastMessage = (userId: string): string => {
  const messages = mockMessages[userId] || [];
  return messages.length > 0 ? messages[messages.length - 1].content : "No messages yet";
};
