# 🎭 Snacx - Modern Meme Sharing Platform

A feature-rich meme sharing platform built with Next.js, featuring real-time chat, achievements, social interactions, and more!

## ✨ Features

### 🎯 Core Features
- **Meme Upload & Sharing** - Upload and share memes with the community
- **Real-time Chat** - Direct messages and group chats with meme sharing
- **Social Interactions** - Like, comment, bookmark, and follow users
- **Achievement System** - Unlock badges and level up with XP
- **Hashtag System** - Organize and discover content with hashtags
- **Leaderboards** - Monthly and all-time top performers

### 🚀 Advanced Features
- **Real-time Notifications** - Instant updates for likes, comments, follows
- **User Profiles** - Customizable avatars and user stats
- **Admin Panel** - Content moderation and user management
- **Responsive Design** - Works perfectly on mobile and desktop
- **Dark/Light Theme** - Toggle between themes
- **Search & Discovery** - Find memes by hashtags and users

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Image Storage**: Cloudinary
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Firebase project
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/snacx-meme-app.git
   cd snacx-meme-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Firebase and Cloudinary credentials in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_DATABASE_URL=your_database_url
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## 📱 Features Overview

### 🎭 Meme Management
- Upload memes with titles and hashtags
- Like and bookmark favorite memes
- Comment and reply to discussions
- Share memes in chat

### 💬 Chat System
- Direct messaging between users
- Group chats with admin controls
- Share memes directly in conversations
- Real-time message notifications

### 🏆 Gamification
- XP system with user levels
- Achievement badges for various activities
- Monthly leaderboards
- User statistics and progress tracking

### 👥 Social Features
- Follow/unfollow users
- User profiles with stats
- Notification system
- Admin moderation tools

## 🚀 Deployment

This app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with Next.js and React
- Powered by Firebase and Cloudinary
- UI components with Tailwind CSS
- Animations with Framer Motion

---

**Made with ❤️ for the meme community**
