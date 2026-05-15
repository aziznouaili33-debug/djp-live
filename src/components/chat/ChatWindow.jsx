import React, { useState, useEffect, useRef } from 'react';
import useChatStore from '../../store/chatStore';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';

const ChatWindow = ({ chatId }) => {
  const { getChat, sendMessage, markAsRead } = useChatStore();
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chat = getChat(chatId);

  useEffect(() => {
    markAsRead(chatId);
  }, [chatId, markAsRead]);

  useEffect(() => {
    // Scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  useEffect(() => {
    // Simulate typing indicator
    const timer = setTimeout(() => setTyping(false), 3000);
    return () => clearTimeout(timer);
  }, [chat?.messages]);

  const handleSendMessage = (text) => {
    sendMessage(chatId, text);
    setTyping(true);
  };

  if (!chat) {
    return <div className="flex items-center justify-center h-full text-gray-400">Chat not found</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader chat={chat} />

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chat.messages.map(message => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.senderId === 'me'}
          />
        ))}
        <TypingIndicator isTyping={typing} userName={chat.name} />
        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
