# 004 - Sorting Algorithm

## Description
Implement the sorting logic that tallies house points and determines the final house placement.

## Acceptance Criteria
- [x] Track points for each house throughout the quiz
- [x] Calculate final house based on highest score
- [x] Handle ties with a dramatic "hatstall" moment
- [x] Store the result for the reveal screen

## Status
✅ COMPLETE

## Technical Notes
- Create a custom hook `useSortingHat` for state management
- Point system: Each answer can give 0-3 points to each house
- Tie-breaker: Random choice with special "hatstall" message

## Data Structure
```javascript
{
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0
}
```
