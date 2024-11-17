const arr = [1,2,3,4,5,6];
const newArr = arr.filter((num)=>num>3);
// console.log(newArr);


const books = [
    {title:'Book1',genre:'Sci-fi',publishDate:1997},
    {title:'Book2',genre:'History',publishDate:2006},
    {title:'Book3',genre:'Drama',publishDate:2018},
    {title:'Book4',genre:'Biography',publishDate:2001},
    {title:'Book4',genre:'History',publishDate:1994},
    {title:'Book4',genre:'Biography',publishDate:1999},
    {title:'Book4',genre:'Drama',publishDate:2014},
    {title:'Book4',genre:'Sci-fi',publishDate:2011}
]
let requiredBooks = books.filter((book)=>book.publishDate>=2000);
requiredBooks = books.filter((book)=>book.genre=='History'&& book.publishDate>=2000);
console.log(requiredBooks);