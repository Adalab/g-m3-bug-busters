import React from 'react';
import './scss/main.scss';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewData : {
        name: '',
        career: '',
        photo: '',
        paletteValue: 1,
        email: '',
        tel: '',
        linkedin: '',
        github: ''        
      },
      id : 'first'
    };
		 this.defaultData = {
			name: 'Horse Luis Palomino',
			career: 'Front-pony developer',
			photo: '',
			paletteValue: 1,
			email: '',
			tel: '',
			linkedin: '',
			github: '' 
		};	

    this.getInputValue = this.getInputValue.bind(this);
    this.getRadioValue = this.getRadioValue.bind(this);
    this.getCollapsable = this.getCollapsable.bind(this);
    this.addCollapsableClass = this.addCollapsableClass.bind(this);
		this.cleanData = this.cleanData.bind(this);
  }

	cleanData(){
  this.setState({previewData: this.defaultData});
		localStorage.clear()
	} 

  getInputValue(event) {
    const targetId = event.currentTarget.id;
    const targetValue = event.currentTarget.value;
		this.setState(prevState => {
			return {
				previewData: {...prevState.previewData, 
				[targetId]: targetValue
				}
			}	
  	}
	)
}

	getRadioValue(event) {
  const getRadioValue = parseInt(event.currentTarget.value); 

  this.setState(prevState => {
    return {
      previewData: {
        ...prevState.previewData,
        paletteValue: getRadioValue
      }
    };
  });
  }

  addCollapsableClass(id, data_id) {
    /* console.log(id, data_id) */
    return (id === data_id ? null :  'collapsed')
  }

  getCollapsable(event){
    const targetCollapsableID = event.currentTarget.id;
 
    this.setState (
      prevState => {
      if (prevState.id === null) {
        return(
          {
            id: targetCollapsableID 
          }
        )
      }
      else if (
        prevState.id === targetCollapsableID 
      ) {
        return (
          {
            id: null
          }
        )
      }
      else{
        return {
          id: targetCollapsableID
        }
      }
      }
    )
  }
  
 render() {
    return (
        <Cards 
        addClass = {this.addCollapsableClass}
        id = {this.state.id}
        divAction = {this.getCollapsable}
        inputAction={this.getInputValue}
        getRadioValue={this.getRadioValue}
        previewData={this.state.previewData}
				cleanData={this.cleanData} 
				/>
		)
  }
}	

export default App;