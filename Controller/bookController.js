import Book1 from "../Model/Book.js";


const fetchAllBooks = async (req, res) => {
    try {
        const allBook = await Book1.find({});
        if (allBook && allBook.length > 0) {
            res.status(200).json({
                success: true,
                message: "All books fetch successfuly ",
                data: allBook
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Cannot find the book "
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Some technical error has been occured "
        });
    }
}
export default fetchAllBooks;