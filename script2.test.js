const fetch = require('node-fetch');
const swapi = require('./script2')



it('calls swapi to get people using async / await', async () => {
    expect.assertions(1);
    const data = await swapi.getPeopleAsync(fetch);
    expect(data.count).toEqual(82);
}, 10000); 


it('calls swapi to get people using Promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch)
        .then(data => {
            expect(data.count).toEqual(82);
            expect(data.results.length).toBeGreaterThan(5);
        });
}, 10000);

it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 82,
                results: [0,1,2,3,4,5]
                    
            })
        }))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch)
    .then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(25);
    })
}, 10000 )

