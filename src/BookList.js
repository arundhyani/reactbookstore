import React,{Component} from 'react';

class BookList extends Component {
	constructor (props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			books : [
					{ name: 'Zero to One', author: 'Peter Thiel' },
					{ name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
					{ name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
				]
			selectedBooks : []
		}
	}

	_renderBook(book) {
		return(<div className="checkbox">
				<label>
					<input type="checkbox" /> {book.name} -- {book.author}
				</label>
			</div>);
	}
	
	handleSubmit (event) {
		event.preventDefault();
		alert("form submitted")
	}

	render() {
		return(	<h1>
				Choose from wide variety of books available in our store.
			<form	onSubmit={this.handleSubmit}>
				{this.state.books.map((book) => {
					return this._renderBook(book); })
				}
				<input type="submit" className="btn btn-success" />
			</form>
			</h1>);
	}
}

module.exports = BookList 
