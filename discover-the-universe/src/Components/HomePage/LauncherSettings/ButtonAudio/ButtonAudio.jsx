import React, { Component } from 'react';
import './ButtonAudio.css';
import '../../../../Grid.css';
import { connect } from 'react-redux';
import { SELECT_AUDIO_ACTIVATE, SELECT_AUDIO_DESACTIVATE } from '../../../actionTypes';

class ButtonAudio extends Component {
    constructor(props) {
        super(props);

    }


    handleClick = (action) => {

        if (this.props.audioIsActivate) {
            let checkbox = true;
            let check = { type: "check_checkbox", checkbox: checkbox }
            this.props.dispatch(check);

            let audio = false;
            let notbutton = { type: "select_audio_desactivate", audio }
            this.props.dispatch(notbutton)
        }

        if (this.props.audioIsActivate === false) {
            

            let uncheckbox = true;
            let uncheck = { type: "uncheck_checkbox", uncheckbox: uncheckbox }
            this.props.dispatch(uncheck);
            
            let audio = true;
            let notbutton = { type: "select_audio_activate", audio }
            this.props.dispatch(notbutton)
        }
    }


    render() {

        console.log("checkbox", this.props.checkbox)
        console.log("uncheckbox", this.props.uncheckbox)
        return (
            <>
                <div className="section-audio">
                    <div className="activate">
                        <div className="div-audio-img">
                            <img className="audio-img" src="/images/audio.png" />
                        </div>

                        <div className="radio-activate">
                            <label className="activate btn-radio"> {this.props.lang.audio[0]} </label>
                            <input onClick={() => this.handleClick(SELECT_AUDIO_ACTIVATE)} type="radio" name="audio" className="btn-audio" checked={this.props.checkbox ? "checked" : ""} />
                            <span className="slider round"></span>
                        </div>

                    </div>

                    <div className="radio-desactivate">
                        <label className="desactivate btn-radio">{this.props.lang.audio[1]} </label>
                        <input onClick={() => this.handleClick(SELECT_AUDIO_DESACTIVATE)} type="radio" name="audio" className="btn-audio" checked={this.props.uncheckbox ? "checked" : ""} />
                        <span className="slider round"></span>
                    </div>



                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
        lang: state.lang,
        audioIsActivate: state.audioIsActivate,
        checkbox: state.checkbox,
        uncheckbox: state.uncheckbox
    })
};

export default connect(mapStateToProps)(ButtonAudio);
