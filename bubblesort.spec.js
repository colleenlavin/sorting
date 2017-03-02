describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
describe('oneItem', function(){
  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
});
describe('manyItems', function(){
  it('handles an array with many items', function(){
    expect( bubbleSort([3, 5, 1 , 9, 7,8,2,6,4]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });
});
