/**
 * Created by Vika on 30.03.2017.
 */
import React, { Component } from 'react';
import './../css/StarRating.css'

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0%',
            sumValue: 0,
            count: 0,
            selectedOption: 0
        };
    }


    handleOptionChange(changeEvent) {
        /*changeEvent.persist();
        this.setState(
            (prevState, props) => {
                return {
                    selectedOption: changeEvent.target.value/!*,
                    sumValue: parseInt(prevState.sumValue, 10) +  parseInt(this.state.selectedOption, 10)*!/
                }
            }
        );*/
    }

    handleInputClick(changeEvent){
        //var newSumValue, newCount, newValue;
        changeEvent.persist();
        this.setState(
            (prevState, props) => {
                return {
                    selectedOption: changeEvent.target.value
                }
            }
        );
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        });
        this.setState(
            (prevState, props) => {
                return {
                    sumValue: parseInt(prevState.sumValue, 10) +  parseInt(prevState.selectedOption, 10)
                }});
        this.setState(
        (prevState, props) => {
            return {
                value: parseInt(prevState.sumValue, 10)/parseInt(prevState.count, 10)*20 + "%"
            }});
    }
    render() {
        return (
            <div className="main">
                <div className="stars">
                    <button className="counter">
                        {this.state.count}
                    </button>
                    <div className="star-rating">

                        <div className="star-bottom">
                            <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
                        </div>
                        <div className="star-top" style={{"width" : this.state.value}}>
                            <span>1</span><span>1</span><span>1</span><span>1</span><span>1</span>
                        </div>
                    </div>

                    <input id="rate1-star5" type="radio" name="rate1" value='5'
                           onClick={this.handleInputClick.bind(this)}/>
                    <label htmlFor="rate1-star5" title="Excellent">5</label>

                    <input id="rate1-star4" type="radio" name="rate1" value='4'
                           onClick={this.handleInputClick.bind(this)}/>
                    <label htmlFor="rate1-star4" title="Good">4</label>

                    <input id="rate1-star3" type="radio" name="rate1" value='3'
                           onClick={this.handleInputClick.bind(this)}/>
                    <label htmlFor="rate1-star3" title="Satisfactory">3</label>

                    <input id="rate1-star2" type="radio" name="rate1" value='2'
                           onClick={this.handleInputClick.bind(this)}/>
                    <label htmlFor="rate1-star2" title="Bad">2</label>

                    <input id="rate1-star1" type="radio" name="rate1" value='1'
                           onClick={this.handleInputClick.bind(this)}/>
                    <label htmlFor="rate1-star1" title="Very bad">1</label>

                </div>

            </div>);
    }
}

export default StarRating;