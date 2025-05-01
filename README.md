# FinixCode Event Platform

A responsive event management interface built with Next.js, implementing the FinixCode design specification.

<img src="/public/assets/readme.png" width="800" alt="Event Platform Screenshot" />

## Live Demo

[live link]()

## Features

- Pixel-perfect implementation of the FinixCode Figma design
- Responsive layout for desktop, tablet, and mobile
- Interactive components with:
  - Photo gallery
  - Tab navigation
  - Payment popup
  - Player management
  - Comment system
- Modern UI with smooth animations

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: React Icons
- **Date Picking**: React Date Picker
- **Image Optimization**: Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mdabdullah3/finixcode_frontend_assignment.git
   cd inixcode_frontend_assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:3000` to see the application.

## Project Structure

The project is organized into the following directories:

```
finixcode-event-platform/
├── app/                    # Next.js app router
│   ├── (main)/             # Main page routes
│   ├── components/         # Reusable components
│   ├── lib/                # Utilities and constants
│   └── styles/             # Global styles
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## Key Components

- **PhotoGallery** : Responsive image gallery with Swiper.js
- **EventHeader** : Event title and metadata display
- **TabNavigation** : Info/Players/Comments tab system
- **BookingCard** : Event booking widget with payment popup
- **PaymentPopup** : Payment method selection modal
- **PlayersList** : Interactive player management
- **CommentThread** : Event comment system

## Implementation Notes

- Followed Figma design specifications precisely
- Used CSS variables for consistent theming
- Optimized images with Next.js Image component
- Implemented accessibility best practices
- Added smooth transitions and animations

### Submission for FinixCode Frontend Developer Assignment

- Completed by: Md Abdullah
- Submission Date: 01-05-2025
- Figma Design: [Link](https://www.google.com/url?q=https://www.figma.com/design/DJdC4C38XsUmUzyEiuwqUX/Finixcode-Frontend-Assignment&source=gmail&ust=1746165252310000&usg=AOvVaw1QIdRPaIRlSZqSFuwqdGr8)
