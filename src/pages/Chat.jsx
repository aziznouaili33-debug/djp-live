import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import BottomNav from '../components/layout/BottomNav';
import Header from '../components/layout/Header';
import ChatList from '../components/chat/ChatList';
import ChatWindow from '../components/chat/ChatWindow';
import useAuthStore from '../store/authStore';
import useChatStore from '../store/chatStore';

const Chat = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { chats, selectedChatId, selectChat } = useChatStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chats');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Select first chat by default
    if (chats.length > 0 && !selectedChatId) {
      selectChat(chats[0].id);
    }
  }, [chats, selectedChatId, selectChat]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title="Messages"
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          showSearch
        />

        <div className="flex-1 flex overflow-hidden pb-16 md:pb-0">
          {/* Chat List - Desktop Always Visible, Mobile Hidden When Chat Selected */}
          <div
            className={`w-full md:w-64 border-r border-white/10 overflow-hidden transition-all duration-300 ${
              selectedChatId ? 'hidden md:flex' : 'flex'
            } flex-col`}
          >
            <ChatList
              chats={chats}
              selectedChatId={selectedChatId}
              onSelectChat={(chatId) => {
                selectChat(chatId);
                setSidebarOpen(false);
              }}
            />
          </div>

          {/* Chat Window - Mobile Shows When Chat Selected */}
          {selectedChatId && (
            <div className="flex-1 overflow-hidden flex flex-col">
              <ChatWindow chatId={selectedChatId} />
            </div>
          )}

          {/* Empty State */}
          {!selectedChatId && (
            <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="text-xl mb-2">Select a chat to start messaging</p>
                <p className="text-sm text-gray-500">Choose from your recent conversations</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Chat;
