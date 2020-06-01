import React from 'react';
import { Button } from '@material-ui/core';
import skull from '../resources/skull.svg';
import Modal from '@material-ui/core/Modal';
const reqSvgs = require.context ( '../resources/sweet/', true, /\.svg$/ );
const paths = reqSvgs.keys ();




class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        let res=this.state.v1+this.state.v2;
        const svgs = paths.map( path => reqSvgs ( path ) )
        let item = svgs[Math.floor(Math.random() * svgs.length)];
        if(res.toString()=== this.state.value){
            this.setState({
              Solved: 'correct',
              imgsrc: item
          });
        }
        else{
            this.setState({
              Solved: 'wrong',
              imgsrc: item
          });
        }
        // SimpleModal();
      event.preventDefault();

    }
    componentWillMount(){
        this.setState({
            v1: this.randomizer(),
            v2: this.randomizer2()
          });
    }

    randomizer(){
        return Math.floor(Math.random() * 101);
    }
    randomizer2(){
        return Math.floor(Math.random()  * 10) + 1;
    }
    render() {
        let xButton=<Button className="chbutton" variant="contained" color="primary" onClick={this.handleSubmit} >Check Answer</Button>
        if(this.state.Solved==="correct"){

           xButton= <Button className="chbutton correct" variant="contained" onClick={this.handleSubmit} ><img src={this.state.imgsrc} className='butsvg' alt='correct'/></Button>
        }
        if(this.state.Solved==="wrong"){

           xButton= <Button className="chbutton wrong" variant="contained" onClick={this.handleSubmit} ><img src={skull} className='butsvg' alt='wrong'/></Button>
        }
      return (
          <div className='main'>
            <b>{this.state.v1} + {this.state.v2} =</b><input className="result_box" type="text" value={this.state.value} onChange={this.handleChange} />
            {xButton}
            {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <img src={this.state.imgsrc} alt='correct'/>
          </Modal> */}
        </div>        
      );
    }
  }

  
export default NameForm;