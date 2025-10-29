# Trip Card Explorer

Simple React app for browsing travel destinations.

## How to Run

```bash
npm install
npm start
```

## Design Decisions

- React with hooks for state management
- Separated dataService for fetching data
- SASS with rem units and BEM naming
- Context API for modals (avoid prop drilling)
- Component structure: FilterControls + TripCard + Modal

## Trade-offs

- Used static JSON instead of API (simplicity)
- Used Basic React state vs better state management