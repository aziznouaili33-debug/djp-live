import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import Button from '../common/Button';

const MessageInput = ({ onSend, isTyping }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="glass p-4 rounded-t-xl md:rounded-lg md:m-4 flex items-end gap-3">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="flex-1 bg-dark-700 text-white rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-neon-purple max-h-24"
        rows="1"
      />
      <Button
        onClick={handleSend}
        disabled={!message.trim()}
        className="p-3 rounded-lg bg-neon-purple hover:bg-neon-purple/80 disabled:bg-dark-600 disabled:cursor-not-allowed transition-colors"
      >
        <Send size={20} />
      </Button>
    </div>
  );
};

export default MessageInput;
