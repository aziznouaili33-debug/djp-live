import { create } from 'zustand';

const useChatStore = create((set, get) => ({
  chats: [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      status: 'online',
      lastMessage: 'That sounds amazing! 🎉',
      timestamp: new Date(Date.now() - 5 * 60000),
      unread: 2,
      messages: [
        {
          id: 'm1',
          senderId: '1',
          text: 'Hey, how are you?',
          timestamp: new Date(Date.now() - 3600000),
          read: true,
        },
        {
          id: 'm2',
          senderId: 'me',
          text: 'Great! Just finished the project',
          timestamp: new Date(Date.now() - 1800000),
          read: true,
        },
        {
          id: 'm3',
          senderId: '1',
          text: 'That sounds amazing! 🎉',
          timestamp: new Date(Date.now() - 5 * 60000),
          read: false,
        },
      ],
    },
    {
      id: '2',
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      status: 'online',
      lastMessage: 'See you tomorrow!',
      timestamp: new Date(Date.now() - 30 * 60000),
      unread: 0,
      messages: [
        {
          id: 'm4',
          senderId: '2',
          text: 'Did you finish the design?',
          timestamp: new Date(Date.now() - 7200000),
          read: true,
        },
        {
          id: 'm5',
          senderId: 'me',
          text: 'Yes! Will send it soon',
          timestamp: new Date(Date.now() - 6000000),
          read: true,
        },
        {
          id: 'm6',
          senderId: '2',
          text: 'See you tomorrow!',
          timestamp: new Date(Date.now() - 30 * 60000),
          read: true,
        },
      ],
    },
    {
      id: '3',
      name: 'Emma Williams',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      status: 'offline',
      lastMessage: 'Thanks for your help!',
      timestamp: new Date(Date.now() - 120 * 60000),
      unread: 0,
      messages: [
        {
          id: 'm7',
          senderId: 'me',
          text: 'Happy to help anytime',
          timestamp: new Date(Date.now() - 120 * 60000),
          read: true,
        },
      ],
    },
  ],
  selectedChatId: null,
  typing: false,
  typingUser: null,

  // Get all chats
  getChats: () => get().chats,

  // Get single chat
  getChat: (chatId) => get().chats.find(chat => chat.id === chatId),

  // Select chat
  selectChat: (chatId) => set({ selectedChatId: chatId }),

  // Send message
  sendMessage: (chatId, text) => {
    set((state) => {
      const updatedChats = state.chats.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id: `m${Date.now()}`,
                senderId: 'me',
                text,
                timestamp: new Date(),
                read: true,
              },
            ],
            lastMessage: text,
            timestamp: new Date(),
          };
        }
        return chat;
      });
      return { chats: updatedChats };
    });
  },

  // Simulate typing indicator
  setTyping: (typing, userName = null) => {
    set({ typing, typingUser: userName });
  },

  // Mark messages as read
  markAsRead: (chatId) => {
    set((state) => {
      const updatedChats = state.chats.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: chat.messages.map(msg => ({
              ...msg,
              read: true,
            })),
            unread: 0,
          };
        }
        return chat;
      });
      return { chats: updatedChats };
    });
  },

  // Update chat status
  updateChatStatus: (chatId, status) => {
    set((state) => {
      const updatedChats = state.chats.map(chat => {
        if (chat.id === chatId) {
          return { ...chat, status };
        }
        return chat;
      });
      return { chats: updatedChats };
    });
  },
}));

export default useChatStore;
