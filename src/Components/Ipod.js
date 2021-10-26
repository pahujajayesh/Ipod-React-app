import React from "react";
import Wheel from './Wheel';
import MainScreen from './MainScreen';
class Ipod extends React.Component{
    
    render(){
        return(
            <div style={styles.mainConatiner}> 
                <MainScreen/>
               <Wheel/>
            </div>
        );
    }

}
const styles={
    mainConatiner:{
        height : '30rem',
        width : '20rem',
        backgroundColor : 'black',
        margin : 'auto',
        display:'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    }
}
export default Ipod;