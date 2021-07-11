console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}
console.log('added 1st album', collection.firstAlbum = addToCollection('Thriller', 'Michael Jackson', 1982));
console.log('added 2nd album', collection.secondAlbum = addToCollection('Thriller', 'Michael Tomson', 1980));
console.log('added 3rd album', collection.thirdAlbum = addToCollection('A title', 'Michael Jackson', 1935));
console.log('added 4th album', collection.forthAlbum = addToCollection('Walking down the street', 'Bob down the street', 1912));
console.log('added 5th album', collection.fifthAlbum = addToCollection('Rolling Thunder', 'Michael Jackson', 1982));
console.log('added 6th album', collection.sixthAlbum = addToCollection('Death', 'Jackson Five', 1912));
console.log (collection);

function showCollection (array){
  console.log(array.length)
  for( let i=0; i<array.length; i++){
    console.log(array[i].title, 'by ', array[i].artist, 'published in ', array[i].yearPublished);
  }
}
showCollection(collection)

function findByArtist(artist){
  for ( let i=0; i<collection.length; i++){
    let limboArray = [];
    if (collection[i].artist === artist){
      limboArray.push(collection[i]);
      return limboArray;
    }
    else{
      console.log('No Results');
      return limboArray;
    }
  }
}
console.log(findByArtist('Q'));
console.log(findByArtist('Jackson Five'));
console.log(findByArtist('Michael Jackson'));
