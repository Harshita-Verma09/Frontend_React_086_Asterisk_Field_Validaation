# Asterisk Field Validation 

This project demonstrates a simple email and password form in React, where required fields are marked with an asterisk (`*`). The asterisk color changes based on validation state:
- **Red**: Field has an error
- **Green**: Field is filled and valid
- **Grey**: Default (empty and no error)

## Features

- Email and password validation
- Dynamic asterisk color for required fields
- Inline error messages
- Modern React + TypeScript setup using Vite

## Getting Started

### Install dependencies

```sh
npm install
```

### Run in development mode

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## Project Structure

```
src/
  App.tsx
  component/
    Validate.tsx
  main.tsx
  index.css
public/
  vite.svg
```

- The main form component is [`Validate`](src/component/Validate.tsx).
