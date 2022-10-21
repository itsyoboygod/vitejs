class Stack{
    constructor(){
        this.top = -1;
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop(value) {
        this.top -= 1;
        this.items[this.top] = value
    }
}

describe('My stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack()
    })

    it('is created empty', () =>{
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    });

    it('pushes a item to the top', () => {

        stack.push('🚀')
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('🚀');

    })
})