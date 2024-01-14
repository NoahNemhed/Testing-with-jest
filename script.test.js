const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
        
    })
    
    it('is searching google', () => {
        expect(googleSearch(dbMock,'dog'))
        .toEqual(['dog.com', 'dogpictures.com'])
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(dbMock, undefined))
        .toEqual([])
    
        expect(googleSearch(dbMock, null))
        .toEqual([])
    })
    
    
    it('Does not return more than 3 matches', () => {
        expect(googleSearch(dbMock, '.com').length)
        .toEqual(3)
    })
})


