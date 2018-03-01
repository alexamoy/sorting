console.log("****")

describe('Bubble Sort', function(){

    let sortedArray;

    beforeEach(function(){
        sortedArray = bubbleSort();
    });

    it('returns an array', function(){
        expect( Array.isArray(sortedArray)).toBe('true');
    });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual([]);
    });

    it ('handles an array of one element', function(){
        expect( bubbleSort([5])).toEqual([5]); 
    })

    it('handles an array of multiple elements', function(){
        expect( bubbleSort([4,5,2,13,3,27,41])).toEqual([2,3,4,5,13,27,41]);
    })

  });