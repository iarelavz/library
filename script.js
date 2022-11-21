const titleButton = document.querySelector("#title");
const authorButton = document.querySelector("#author");
const pagesButton = document.querySelector("#pages");
const readButton = document.querySelector("#read");
const submitButton = document.querySelector("#submit")


let myLibrary = [];
        
        function Book(title, author, pages, isRead) {
            this.title = title;
            this.author = author;
            this.pages= pages;
            this.isRead = isRead;
        };
        
        submit.addEventListener('click', (event) => {
            title = titleButton.value;
            author = authorButton.value;
            pages = pagesButton.value;
            isRead = readButton.value;
            addBookToLibrary(title,author,pages,isRead);
            loopLibrary(myLibrary)
         })
        function addBookToLibrary(title,author,pages,isRead) {
            
            let newBook = new Book(title,author,pages,isRead);
            myLibrary.push(newBook)
        };

        function loopLibrary(array){
            for(let i=1; i<array.length;i++){
                consol.log(array[i])
            }
        }
        dis= addBookToLibrary('Harry Potter', 'J. K. Rowling' , '300', "read");

       // console.log(myLibrary);
        loopLibrary(myLibrary);
        Book.prototype.bookInfo = function() {
            return "The "+this.title+" by "+this.author+" is "+this.pages+" pages, "+this.isRead+"."
        };

     //   const book1 = new Book('Harry Potter', 'J. K. Rowling' , '300', "read");
       // console.log(book1.bookInfo());

