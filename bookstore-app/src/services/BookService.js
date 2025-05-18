let books=[
    {id:'1', name:"Billy", title:"Billy Mini Monster", author: "Zanna Davidson" , year:1983, buy:10 , image:'Book1.jpg'},
    {id:'2', name:"Story Book", title:"Write Your Own Story", author: "R.K. Narayan" , year:1978, buy:12 , image:'Book2.jpg'},
    {id:'3', name:"100 Paper", title:"Dragons to fold & fly", author: "Vikram Seth" ,            year:1999, buy:15 , image:'Book3.jpg'},
    {id:'4', name:"Biggest Fastest", title:"Biggest Fastest Tallest", author: "Anita Desa" ,     year:2010, buy:20 , image:'Book4.jpg'},
    {id:'5', name:"First English", title:"First Illustrated English", author: "Zanna Davidson" , year:1988, buy:23 , image:'Book5.jpg'},
    {id:'6', name:"Shark", title:"The Shark Caller", author: "Anita Desa" ,                     year:1976, buy:18 , image:'Book6.jpg'},
    {id:'7', name:"Poppy Lamb", title:"Poppy and Sam Lamp", author: "R.K. Narayan" ,year:1985, buy:16 , image:'Book7.jpg'},
    {id:'8', name:"Springtime", title:"First Colourig Springtimer", author: "Zanna Davidson" ,   year:1990, buy:13 , image:'Book8.jpg'},
    {id:'9', name:"Spanish", title:"Spanish for Beginners", author: "Vikram Seth" ,             year:2000, buy:19 , image:'Book9.jpg'},
    {id:'10', name:"Fat cat", title:"Fat cat on me", author:"Anita Desa",                        year:2013, buy:5 , image:'Book10.jpg'},
    {id:'11', name:"Animals", title:"FingureSprint Animals", author:"Zanna Davidson",year:1983, buy:17 , image:'Book11.jpg'},
    {id:'12', name:"Maths", title:"Maths Scribble Book", author:"R.K. Narayan",                 year:1985, buy:20 , image:'Book12.jpg'},
    {id:'13', name:"Our Planet", title:"Looking After our Planet", author:"Anita Desan",         year:1991, buy:4 , image:'Book13.jpg'},
    {id:'14', name:"Sleeping Princes", title:"The Sleeping Princes", author:"Zanna Davidson", year:1980, buy:10 , image:'Book14.jpg'},
    {id:'15', name:"Book Brain", title:"Book or the Brain", author:"Vikram Seth",                year:1981, buy:15 , image:'Book15.jpg'},
    {id:'16', name:"Unhurry", title:"The Unhurry Book", author:"Anita Desa",                     year:1999, buy:12 , image:'Book16.jpg'},
    {id:'17', name:"Infinity", title:"The Infinity Files", author:"R.K. Narayan",                year:2005, buy:18 , image:'Book17.jpg'},
    {id:'18', name:"Stone Age", title:"24 Hours in stone Age", author:"Zanna Davidson",          year:1990, buy:20 , image:'Book18.jpg'},
    {id:'19', name:"Bunny", title:"That's not my Bunnyr", author:"Anita Desa", year:1985, buy:16 , image:'Book19.jpg'},
    {id:'20', name:"Pig", title:"Dont tickle the Pig", author:"Vikram Seth",                     year:1989, buy:11 , image:'Book20.jpg'},
    {id:'21', name:"Reading", title:"Ready for Reading", author:"Zanna Davidson",               year:1995, buy:14 , image:'Book21.jpg'},
    {id:'22', name:"Virus", title:"What is Virus", author:"R.K. Narayan",  year:1980, buy:16 , image:'Book22.jpg'}]

export const getBooks=()=>(books);

export const getBookById =(id)=>{
    let temp= books.filter((rec)=>(rec.id == id));
    if(temp.length > 0)     return temp[0];
    else return {};
}
 export const searchBook = (bookName, searchBook) =>{
    let temp = books.filter((rec)=>(rec[bookName].toLowerCase().startWith(searchBook.toLowerCase())))
    return temp;
}