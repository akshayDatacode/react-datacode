import React, { Component } from 'react';
class QuestionCard extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="card bg-primary text-white mb-3">
                <div className="card-body"> 
                    <h5>{this.props.question}</h5>
                    <p>{this.props.answer}</p>
               </div>
            </div>   
            </>
         );
    }
}
 
export default QuestionCard;