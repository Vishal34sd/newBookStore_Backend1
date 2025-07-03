import Book1 from "../Model/Book.js";

const addBookData = async(req, res)=>{
    try{
        const {title ,author , category  } = req.body ;
        const newBook =  new Book1({
            title , author , category
        });
        const newData = await newBook.save();
        if(!newData){
            res.status(400).json({
                success : false ,
                message : "Book didnt saved"
            });

        }
        return res.status(200).json({
            success : true ,
            message : "Book added successfully",
            data : newData 
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success : false ,
            message : "Internal server error "
        });
    }
}

const updateBook = async(req , res)=>{
    try{
        const updateBookData = req.body;
        const bookId = req.params.bookId ;
        const updateBook = await Book1.findByIdAndUpdate(bookId ,updateBookData ,{new : true} );
        if(!updateBook){
            return res.status(402).json({
                success : false ,
                message : "Book do not found with this id "
            });
        }
        return res.status(200).json({
            success : true ,
            message : "Book updated successfully ",
            data : updateBook
        });
    }
    catch(err){
      console.log(err);
      res.status(500).json({
        success : false ,
        message : "Internal server issue "
      })  
    }
}

const deleteBookData = async(req, res)=>{
    try{
        const currentBookId = req.params.bookId;
        const deleteBook = await Book1.findByIdAndDelete(currentBookId);
        if(!deleteBook){
            return res.status(404).json({
                success : false ,
                message : "Book not found "
            });

        }
        res.status(200).json({
            success  : true ,
            message : "Book deleted successfully",
            data : deleteBook 
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        });
    }
}

export {addBookData, updateBook, deleteBookData};