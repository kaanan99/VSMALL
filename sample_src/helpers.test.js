import {calculateWinner} from './helpers';

test('2 + 2 should return 4', () => {
    expect(2 + 2).toBe(4); // this test fails!
  });

test('should return X as the winner if it has the top row', () => {
  // Arrange the test
  const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('X');
});

test('should return O as the winner', () => {
    // Arrange the test
    const squares = ['X', 'X', 'O', 'O', 'X', 'O', 'X', null, 'O'];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe('O');
});

test('should return null since no winner', () => {
    // Arrange the test
    const squares = ['X', 'X', 'O', 'O', 'X', null, 'X', null, 'O'];
    
    // Act
    const winner = calculateWinner(squares);
  
    // Assert
    expect(winner).toBe(null);
});