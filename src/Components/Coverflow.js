import React from 'react';
//Coverflow Component 
class Coverflow extends React.Component{
    render(){
        return(
            <div style={styles.settings} >
                <img alt="settings-icon" style={styles.image} src="https://play-lh.googleusercontent.com/uLX_EsD5ny8eWUcp3rSVW1d2BgnPjADZkNnFHp7BSuomwgVyIi_MzjB3yy4xhTFgAg=w412-h220-rw" />
            </div>
        );
    }

}
//Add styles to the component
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'85%',
        height:'85%',
        borderRadius:'35%',
        alignSelf : 'center',
        color:'white'
    }
}



export default Coverflow;