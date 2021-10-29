import React from 'react';

class Coverflow extends React.Component{

   

    render(){
        return(
           
            <div style={styles.settings} >
                 <div style={styles.header}>
                     <span style={styles.heading}>Ipod</span>
        
                </div>  
            <img alt="settings-icon" style={styles.image} src="https://play-lh.googleusercontent.com/uLX_EsD5ny8eWUcp3rSVW1d2BgnPjADZkNnFHp7BSuomwgVyIi_MzjB3yy4xhTFgAg=w412-h220-rw" />
            </div>
        );
    }

}
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    header:{
        position:'absolute',
        margin:0,
        height:'3%',
        width:'85%',
        backgroundImage:'linear-gradient(315deg, #000000 0%, #414141 74%)',
        left:'8%'

    },
    heading:{
        fontSize:'0.6rem',
        position:'absolute',
        fontWeight:'Bold',
        color:'rgb(245,245,245)'
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