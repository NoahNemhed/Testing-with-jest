const googleDataBase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com',
    'myfavouritecats2.com'

];

 const googleSearch = (db, searchInput) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}


module.exports = googleSearch;

