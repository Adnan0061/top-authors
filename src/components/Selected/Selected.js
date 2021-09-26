import SelectedDetails from '../SelectedDetails/SelectedDetails';
import './Selected.css'

const Selected = (props) => {
    const selectedAuthors = props.selectedAuthor

    let totalBook = 0
    const total =() => {
        for (const author of selectedAuthors) {
            totalBook = totalBook + author.totalBooks
        } 
        return totalBook
    }

    
    return (
        <div>
            <div className='box'>
                <h2>Number of books:  <span>{total()}</span></h2>
            </div>
            
            <div>
                <h2>Selected Authors</h2>
                {
                    selectedAuthors.map(author => <SelectedDetails key={author.id} author={author}></SelectedDetails> ) 
                }
            </div>
        </div>
    );
};

export default Selected;
