# Olin Guan - Expo React Native Web App

## Overview
This is an Expo React Native application configured to run on web in the Replit environment. The project showcases a collection of custom icon components organized by categories (Money, Location, Car, Weather, etc.) using React Navigation with bottom tabs.

## Recent Changes
- **2025-10-27**: Initial GitHub import and Replit environment setup
  - Upgraded Node.js from 20.19.3 to 22.17.0 to meet React Native 0.81.5 engine requirements
  - Updated dependencies to match Expo 54.0.20 compatibility (expo, react-native-reanimated, react-native-safe-area-context)
  - Created favicon and splash icon assets to resolve 404 errors
  - Configured Expo web server to run on port 5000 with proper environment variables
  - Added .gitignore for Expo/React Native project

## Project Architecture

### Tech Stack
- **Framework**: Expo 54.0.20
- **React**: 19.1.0
- **React Native**: 0.81.5
- **Routing**: Expo Router 6.0.13 (file-based routing)
- **Navigation**: React Navigation 7.x (bottom tabs)
- **Styling**: NativeWind 4.2.1 (Tailwind CSS for React Native)
- **Bundler**: Metro (for web and native)

### Project Structure
```
/
├── app/                    # Expo Router file-based routing
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── _layout.tsx    # Tab navigation layout
│   │   ├── index.tsx      # Home screen
│   │   └── explore.tsx    # Explore screen
│   ├── _layout.tsx        # Root layout
│   └── modal.tsx          # Modal screen
├── components/            # Reusable components
│   └── icons/            # Custom icon components (Money, Location, Car, Weather)
├── assets/               # Static assets
│   └── images/          # Images (favicon, splash-icon)
├── scripts/             # Utility scripts
├── metro.config.js      # Metro bundler configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── app.json            # Expo app configuration
└── package.json        # Dependencies and scripts
```

### Key Features
- **File-based routing** using Expo Router
- **Bottom tab navigation** with Home and Explore screens
- **Custom icon library** with categorized SVG icons
- **NativeWind styling** for responsive design
- **React Compiler** enabled for performance optimizations

## Development

### Running the App
The app runs automatically via the "Web Server" workflow on port 5000.

### Environment Variables
- `EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0` - Allows external connections to dev tools

### Known Issues
- Minor console warning: "props.pointerEvents is deprecated" - This is from the upstream React Navigation Bottom Tabs library and does not affect functionality. Will be resolved when the library updates.

## Deployment Configuration
Configured for Replit deployment with static web output using Metro bundler.

## User Preferences
None configured yet.
