import React,{Component} from 'react';
import BookList from './BookList'
import ShippingDetails from './ShippingDetails'
import DeliveryDetails from './DeliveryDetails'

class BookStore extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      currentStep : 1 
	    }
	}
	render() {
		switch (this.state.currentStep) {
			case 1:
//				alert("returning booklist")
				return <BookList />;
			case 2:
				return <ShippingDetails />;
			case 3:
				return <DeliveryDetails />;
		}
	}
};

module.exports = BookStore 
