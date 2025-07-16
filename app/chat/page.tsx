"use client";

import { useState, useEffect, Suspense } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { ChatRoom, ChatService } from "@/lib/chatService";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import NewGroupModal from "../components/NewGroupModal";
import { useUnreadMessages } from "../hooks/useUnreadMessages";

function ChatPageContent() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedChat, setSelectedChat] = useState<ChatRoom | null>(null);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { refreshUnreadCount } = useUnreadMessages();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Handle chatId from URL parameters (from notifications)
  useEffect(() => {
    const chatId = searchParams.get('chatId');
    if (chatId && user) {
      // Load the specific chat
      const loadSpecificChat = async () => {
        try {
          const chat = await ChatService.getChatRoom(chatId);
          if (chat && chat.participants.includes(user.uid)) {
            setSelectedChat(chat);
          }
        } catch (error) {
          console.error('Error loading specific chat:', error);
        }
      };
      loadSpecificChat();
    }
  }, [searchParams, user]);

  // Refresh unread count when a chat is selected (user is reading messages)
  useEffect(() => {
    if (selectedChat && user) {
      // Delay to allow messages to be marked as read
      const timer = setTimeout(() => {
        refreshUnreadCount();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [selectedChat, user, refreshUnreadCount]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChatSelect = (chat: ChatRoom) => {
    setSelectedChat(chat);
  };

  const handleBackToSidebar = () => {
    setSelectedChat(null);
  };

  const handleGroupCreated = (newGroup: ChatRoom) => {
    setSelectedChat(newGroup);
    setShowNewGroupModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`${isMobile ? (selectedChat ? 'hidden' : 'w-full') : 'w-80'} border-r border-border bg-card`}>
          <ChatSidebar
            onChatSelect={handleChatSelect}
            selectedChatId={selectedChat?.id}
            onNewGroup={() => setShowNewGroupModal(true)}
          />
        </div>

        {/* Chat Window */}
        <div className={`${isMobile ? (selectedChat ? 'w-full' : 'hidden') : 'flex-1'} bg-background`}>
          {selectedChat ? (
            <ChatWindow
              chat={selectedChat}
              onBack={isMobile ? handleBackToSidebar : undefined}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Select a chat to start messaging
                </h2>
                <p className="text-text-secondary">
                  Choose from your existing conversations or start a new one
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* New Group Modal */}
      <NewGroupModal
        isOpen={showNewGroupModal}
        onClose={() => setShowNewGroupModal(false)}
        onGroupCreated={handleGroupCreated}
      />
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading chat...</p>
        </div>
      </div>
    }>
      <ChatPageContent />
    </Suspense>
  );
}
