import { create } from 'zustand';

const useUserStore = create((set) => ({
  users: [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      status: 'online',
      bio: 'UX Designer | Coffee Lover ☕',
      joinedDate: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'Alex Chen',
      email: 'alex@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      status: 'online',
      bio: 'Full Stack Developer 💻',
      joinedDate: new Date('2024-02-20'),
    },
    {
      id: '3',
      name: 'Emma Williams',
      email: 'emma@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      status: 'offline',
      bio: 'Product Manager | Tech Enthusiast',
      joinedDate: new Date('2024-03-10'),
    },
  ],

  // Get all users
  getUsers: () => get().users,

  // Get user by ID
  getUser: (userId) => get().users.find(user => user.id === userId),

  // Search users
  searchUsers: (query) => {
    return get().users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Add user
  addUser: (user) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },

  // Update user status
  updateUserStatus: (userId, status) => {
    set((state) => ({
      users: state.users.map(user =>
        user.id === userId ? { ...user, status } : user
      ),
    }));
  },
}));

export default useUserStore;
