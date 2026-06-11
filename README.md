# Attendance Check

A modern, responsive Angular application for managing class attendance. Built with Angular 21, Material Design, and Tailwind CSS.

## 🎯 Features

- **Class Event Management** - Create and manage attendance events for classes
- **Real-time Check-in** - Mark students as present/absent with instant UI updates
- **Event History** - View upcoming and previous attendance events
- **Material UI** - Modern Material Design 3 components
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Event Grouping** - Automatically groups events by date, sorted from newest to oldest

## 🚀 Live Demo

[**View Live Demo**](https://attendance-check-demo.vercel.app) *(Replace with your actual deployment URL)*

## 💻 Tech Stack

- **Framework**: Angular 21.2
- **UI Library**: Angular Material 21.2
- **Styling**: Tailwind CSS 4.1
- **Routing**: Angular Router
- **State Management**: Angular Signals
- **Date Handling**: Day.js
- **Testing**: Vitest + Jasmine
- **Package Manager**: npm 11.14.1

## 📦 Prerequisites

- Node.js 18+ 
- npm 11.14.1+

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/attendance-check.git
cd attendance-check
```

2. Install dependencies:
```bash
npm install
```

## 🎮 Development

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 📊 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── upcoming-page/     # Display upcoming events
│   │   ├── prev-event-page/   # View previous events
│   │   ├── event-card/        # Event card component
│   │   └── user-check-in/     # User check-in toggle
│   ├── services/
│   │   ├── events/            # Event management service
│   │   └── users/             # User management service
│   ├── app.config.ts          # Application configuration
│   ├── app.routes.ts          # Route definitions
│   └── app.ts                 # Root component
├── styles.css                 # Global styles
└── main.ts                    # Application entry point
```

## 🔑 Key Components

### Upcoming Page (`upcoming-page`)
Shows upcoming events with real-time attendance tracking. Users can mark students as present/absent and save the event.

### Previous Events Page (`prev-event-page`)
Displays completed events with final attendance records.

### User Check-in (`user-check-in`)
Reusable component for toggling student attendance status with Material Design toggle switch.

### Event Card (`event-card`)
Compact event card showing event details and attendance summary.

## 🔄 Usage

1. **Create Event**: Click "Create Event" to start a new attendance session
2. **Check-in Students**: Toggle the switch next to each student to mark them present
3. **View Count**: See real-time count of checked-in students
4. **Save Event**: Click "Save" to finalize the attendance record
5. **View History**: Navigate to "Previous" tab to see completed events

## 🏗️ Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run unit tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run watch
```

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `npm run ng -- [command]` - Run Angular CLI commands

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Angular Material 3** for themed components
- **Custom theme** configured in `src/material-theme.scss`

## 🔗 Imports

The project uses path aliases for cleaner imports:
```typescript
// Instead of
import { EventsService } from '../../../services/events/events.service';

// Use
import { EventsService } from '@/services/events/events.service';
```

Configured in `tsconfig.app.json`.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created with ❤️ for attendance management.

---

For more information about Angular, check the [Angular documentation](https://angular.dev).
