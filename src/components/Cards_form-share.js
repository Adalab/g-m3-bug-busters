import React from 'react';

class CardsFormShare extends React.Component {
  getCollapsable(id, data_id) {
    console.log(id, data_id)
    return (id === data_id ? '' :  'collapsed')
  }
  render() {
    return (
      <div className={`js__submit-container ${this.props.addClass(this.props.id, 'third')}`} id = "third">
        <div className="submit-share js__collapsable" onClick={this.props.divAction} id="third">
          <h2 className="submit-share form-title title-3">comparte</h2>
        </div>
        <div className= {`submit-container collapsable-container`} data-id = "third">
          <button
            className="button-create collapsebtn js__submit"
            type="submit"
            id="submit"
            disabled = {this.props.cardUrl}
          >
					crear tarjeta
          </button>
        </div>
      </div>
    );
  }
}

export default CardsFormShare;