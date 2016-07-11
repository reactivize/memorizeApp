import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { Link } from 'react-router';

//
const mapStateToProps = ({ decks, addingDeck }) => ({
  decks,
  addingDeck
});

//
const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});


/**
 * 
 */
const Sidebar = React.createClass({

  getInitialState() {
    return { hover: false };
  },

  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this.refs.add);
    if (el) {
      el.focus();
    }
  },

  handleMouseOver() {
    console.log('handleMouseIn');
    this.setState({ hover: true });
  },

  handleMouseOut() {
    console.log('handleMouseOut');
    this.setState({ hover: false });
  },


  render() {
    let props = this.props;

    return (
      <div className='sidebar'>
        <h2> All The Decks </h2>
        <ul>
          {props.decks.map((deck, i) =>
            <li
              key={i}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              >
              <Link to={`/deck/${deck.id}`}> {deck.name} </Link>
            </li>
          ) }
        </ul>
        { props.addingDeck && <input ref='add' onKeyPress={this.createDeck} /> }
      </div>
    );
  },


  //
  createDeck(evt) {
    if (evt.which !== 13) {
      return;
    }
    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
