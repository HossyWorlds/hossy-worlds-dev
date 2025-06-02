# Components Directory

This directory contains reusable components that can be used across the application.

## Directory Structure

```
components/
├── ui/           # Basic UI components (Button, Input, Card, etc.)
├── layout/       # Layout components (Header, Footer, Sidebar, etc.)
└── features/     # Feature-specific components that are still reusable
```

## Usage Guidelines

1. Each component should be in its own directory with the following structure:
   ```
   ComponentName/
   ├── index.tsx        # Main component file
   ├── styles.module.css # Component-specific styles (if needed)
   └── types.ts         # TypeScript types/interfaces (if needed)
   ```

2. Use TypeScript for all components
3. Include proper documentation and prop types
4. Follow the naming convention: PascalCase for component names
5. Keep components small and focused on a single responsibility 
