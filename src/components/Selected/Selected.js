import SelectedDetails from '../SelectedDetails/SelectedDetails';
import './Selected.css'

const Selected = (props) => {
    const selectedAuthors = props.selectedAuthor
    const remove = props.remove
    let totalBook = 0
    let counter = 0;
    const total =() => {
        for (const author of selectedAuthors) {
            totalBook = totalBook + author.totalBooks
            counter += 1;
        } 
        return totalBook
    }
    
    return (
        <div>
            <div className='box'>
                <h2>Number of books:  <span>{total()}</span></h2>
                <h3>Number of person:  <span>{counter}</span></h3>
            </div>
            
            <div>
                <h2>Selected Authors</h2>
                {
                    selectedAuthors.map(author => <SelectedDetails key={author.id} author={author} remove={remove}></SelectedDetails> ) 
                }
            </div>
        </div>
    );
};

export default Selected;
