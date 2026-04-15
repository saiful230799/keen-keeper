# 🤝 KeenKeeper - Relationship Management App

KeenKeeper is a personal connection tracker designed to help users nurture and maintain meaningful relationships. Built with **React**, **React Router**, and **Tailwind CSS**.

## 🚀 Key Features & Requirements

### 1. Home Page & Branding
* **Professional Banner:** Displaying the mission statement "Friends to keep close in your life."
* **Stats Overview:** A dashboard showing:
    * Total Friends (Current: 12)
    * On Track
    * Need Attention
    * Interactions This Month
* **Friend Grid:** Displaying a list of friends using card layouts.

### 2. Navigation & Footer
* **Main Navbar:** Top navigation for Home, Timeline, and Stats.
* **Conditional Sub-Nav:** A special sub-navigation area (white background) with the logo that **only appears on the Home Page**.
* **Dynamic Footer:** A clean, dark-themed footer (`#244D3F`) with social links and legal information.

### 3. Friend Details Page
* **Quick Check-In Card:**
    * 3 Interactive buttons: **Call**, **Text**, and **Video**.
    * **Functionality:** * Clicking any button automatically adds a new entry to the user's **Timeline**.
        * Timeline entries include the current date and a title (e.g., *"Call with Alex Johnson"*).
    * **Feedback:** A **Toast Notification** appears immediately upon clicking any check-in button to confirm the action.

### 4. Interactive Elements
* **React Toastify:** Integrated for real-time user feedback on actions like recording interactions or managing friends.
* **React Icons:** Professional iconography using `lucide-react` (via `react-icons`) for intuitive UI.

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS & DaisyUI
* **Routing:** React Router v7
* **Notifications:** React Toastify
* **Icons:** React Icons (Lu/Lucide)

## 📂 Project Structure
```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FooterSubNav.jsx   <-- Conditional Component
│   └── FriendCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── FriendDetails.jsx  <-- Quick Check-In logic here
│   ├── Timeline.jsx
│   └── Stats.jsx
└── App.jsx               <-- ToastContainer setup