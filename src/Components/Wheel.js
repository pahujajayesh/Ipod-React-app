import React from "react";
import ZingTouch from'zingtouch';

class Wheel extends React.Component {

    rotateWheel=()=>{
       
    }
    
  
    render(){
        return (
            <div style = {styles.wheelContainer} id='wheel-container'>
            <div style = {styles.wheel} id="inner-container" onMouseOver={this.rotateWheel}>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.menuButton}>
                        <span style={styles.text}>MENU</span>
                    </div>

                </div>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.middleButtons}>
                        <img alt="backward-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/56/56760.png" />
                        <div style={styles.selectBtn}></div> 
                        <img alt="fwd-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/724/724927.png" />
                    </div>
                </div>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.playPause}>
                        <img alt="play-pause-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/64/64595.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
}

const styles = {
wheelContainer : {
    height : '15rem',
    width : '100%',
    backgroundColor : 'lightgrey',
},
wheel:{
    width : '80%',
    height : '90%',
    backgroundColor : 'white',
    margin : '1rem auto',
    borderRadius : '50%',
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'center'
 },
btnConatiner: {
    width : '85%',
    height : '30%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
},
menuButton : {
    alignSelf:'center'
},
text:{
    fontSize:'1.3rem',
    fontWeight:500

},
playPause : {
    alignSelf:'center'
},
middleButtons : {
    alignSelf:'center',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
},
selectBtn:{
    backgroundColor : 'lightgrey' , 
    width : '5rem' , 
    height : '5rem' , 
    borderRadius : '50%'
},
icon: {
    alignSelf : 'center',
    width : '1.5rem',
    height : '1.5rem',
},

}


export default Wheel;