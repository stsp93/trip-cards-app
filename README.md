# Trip Card Explorer
### [DEMO](https://stsp93.github.io/trip-cards-app/)

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
- Search through both trip name and description, highlighting the term
- Using Shared button component with a ripple effect
- Light/Dark theme Toggle 

## Trade-offs

- Used static JSON instead of API
- Used Basic React state vs better state management