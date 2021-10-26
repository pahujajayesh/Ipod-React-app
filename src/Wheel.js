import React from "react";

class Wheel extends React.Component {
  
    render() {
        return (
            <div style = {styles.wheelContainer} className='wheel-container'>
            <div style = {styles.wheel}>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.menuButton}>
                        <span style={styles.text}>MENU</span>
                    </div>

                </div>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.middleButtons}>
                        <img style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/56/56760.png" />
                        <div style={styles.selectBtn}></div> 
                        <img style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/724/724927.png" />
                    </div>
                </div>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.playPause}>
                        <img style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/64/64595.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
}

const styles = {
wheelContainer : {
    height : '13rem',
    width : 'inherit',
    backgroundColor : 'lightgrey',
    alignSelf : 'flex-end',
},
wheel:{
    width : '15rem',
    height : 'inherit',
    backgroundColor : 'white',
    margin : 'auto',
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