import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Custom = (props) => {
   

    if (props.location.pathname === "/crea") {
        var background = document.getElementById('background');
        background.style.backgroundImage = 'url(/images/backgroundcustom.jpg)';
    }

    const handleClickEars = (index) => {
        if (props.ears+index >= 1 && props.ears+index <= 7) {
            props.setEars(props.ears+index);
        }else if (props.ears+index < 1) {
            props.setEars(7);
        } else if(props.ears+index > 7){
            props.setEars(1);
        }
    }

    const handleClickEyes = (index) => {
        if (props.eyes+index >= 1 && props.eyes+index <= 7) {
            props.setEyes(props.eyes+index);
        }else if (props.eyes+index < 1) {
            props.setEyes(7);
        } else if(props.eyes+index > 7){
            props.setEyes(1);
        }
    }

    const handleClickMouth = (index) => {
        if (props.mouth+index >= 1 && props.mouth+index <= 7) {
            props.setMouth(props.mouth+index);
        }else if (props.mouth+index < 1) {
            props.setMouth(7);
        } else if(props.mouth+index > 7){
            props.setMouth(1);
        }
    }

    const handleClickChin = (index) => {
        if (props.chin+index >= 1 && props.chin+index <= 4) {
            props.setChin(props.chin+index);
        }else if (props.chin+index < 1) {
            props.setChin(4);
        } else if(props.chin+index > 4){
            props.setChin(1);
        }
    }



    return <div className="custom">
        <div className="custom__btnnav">
            <img src="./images/Buttons/btnojo.png" alt="" />
            <img src="./images/Buttons/btnoir.png" alt="" />
        </div>

        <div className="custom_preview">
            <div className="custom__btnSel">
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickEyes(+1)} alt="" />
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickEars(+1)} alt="" />
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickMouth(+1)} alt="" />
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickChin(+1)} alt="" />
            </div>

            <div className="custom_prevAnimorph">
                <img className="custom_skinPrev" src={'./images/Animorphs/skin' + props.skin + '.png'} alt="" />
                <img className="custom_chin" src={'./images/Animorphs/Chin/barbilla' + props.chin + '.png'} alt="" />
                <img className="custom_eyes" src={'./images/Animorphs/Eyes/ojos' + props.eyes + '.png'} alt="" />
                <img className="custom_ears" src={'./images/Animorphs/Ears/orejas' + props.ears + '.png'} alt="" />
                <img className="custom_mouth" src={'./images/Animorphs/Mouth/boca' + props.mouth + '.png'} alt="" />
            </div>

            <div className="custom__btnSel right">
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickEyes(-1)} alt="" />
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickEars(-1)} alt="" />
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickMouth(-1)} alt=""/>
                <img src="./images/Buttons/btnflecha.png" onClick={()=>handleClickChin(-1)} alt="" />
            </div>

        </div>




    </div>
}

Custom.propTypes = {
    skin: PropTypes.number,
    setSkin: PropTypes.func,
    ears: PropTypes.number,
    setEars: PropTypes.func,
    eyes: PropTypes.number,
    setEyes: PropTypes.func,
    mouth: PropTypes.number,
    setMouth: PropTypes.func,
    chin: PropTypes.number,
    setChin: PropTypes.func,

};

export default Custom;