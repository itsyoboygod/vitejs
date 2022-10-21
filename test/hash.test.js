const { createHash } = require('crypto')

// ------------------HASH------------------
function hash(input){
    return createHash('sha256').update(input).digest('hex')
}

let password = 'Mario'
const hash1 = hash(password)
    password = 'Mario'
const hash2 = hash(password)


class Hash {
    constructor(){
        this.hash_1 = hash1
        this.hash_2 = hash2
    }
}
// ------------------HASH------------------



describe('Hashing data', () => {
     it('Hashed data should match', () =>{
        const hash = new Hash();

        expect(hash.hash_1).toBe(hash.hash_2)
    })
    it('Hashed data should have the same length', () =>{
        const hash = new Hash();

        expect(hash.hash_1.length).toHaveLength(hash.hash_2.length)
    })
})