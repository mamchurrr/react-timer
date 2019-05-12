import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: false,
            countdown: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    startTimer = () => {
        if (this.state.countdown > 0) {
            this.setState({
                minutes: this.state.countdown -1,
                seconds: this.state.seconds === 0 ? 59 : this.state.seconds,
                isOn: true,
            })
            this.timer = () => {
                let seconds = this.state.seconds;
                let minutes = this.state.minutes;
                if (seconds === 0) { 
                    if (minutes === 0) { 
                        this.showMessage(this.timerId);
                    } else {
                        minutes = minutes - 1; 
                        seconds = 59; 
                    }
                } else {
                    seconds = seconds - 1; 
                }
                this.setState({
                    minutes,
                    seconds,
                }); 
            }
            this.timerId = setInterval(this.timer, 1000)
        }
        else {
            alert("Set timer");
        }
        this.showMessage = (timerId) => {
            alert("Time’s up!");
            clearInterval(timerId);
        }
    }

    stopTimer = () => {
        this.setState({ isOn: false })
        clearInterval(this.timerId)
    }

    resetTimer = () => {
        this.stopTimer()
        this.setState({ minutes: 0, seconds: 0, })
    }

    handleChange = (event) => {
        const countdown = Number(event.target.value)
        this.setState({ countdown });
    }

    render() {

        let start = (this.state.seconds === 0) ?
            <button onClick={this.startTimer}>start</button> :
            null

        let stop = (this.state.isOn) ?
            <button onClick={this.stopTimer}>pause</button> :
            null

        let reset = (this.state.seconds !== 0) ?
            <button onClick={this.resetTimer}>reset</button> :
            null

        let resume = (this.state.seconds !== 0 && !this.state.isOn) ?
            <button onClick={this.startTimer}>resume</button> :
            null
        
        let input = (!this.state.isOn) ?
        <input type="number" value={this.countdown} onChange={this.handleChange}/> :
            null

        return (
            <div id="timer" className="page">
                <div className="page__wrap">
                    <h1>Timer</h1>
                    <p>Countdown</p>
                    {input}
                    {start}
                    {reset}
                    <p>Alert</p>
                    <h2>{this.state.minutes} : {this.state.seconds}</h2>
                    {resume}
                    {stop}
                    <div>
                        <button>1X</button>
                        <button>1.5X</button>
                        <button>2X</button>
                    </div>
                    {/* <input type='button' onClick={add} value="add image" /> */}
                </div>
            </div>

        )
    }
}

const mapStateToProps = () => ({
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)