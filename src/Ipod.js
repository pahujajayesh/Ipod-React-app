import React from "react";
import Wheel from './Wheel'

class Ipod extends React.Component{
    
    render(){
        return(
            <div style={styles.mainConatiner}> 
               <Wheel/>
            </div>
        );
    }

}
const styles={
    mainConatiner:{
        height : '20rem',
        width : '17rem',
        backgroundColor : 'black',
        margin : 'auto',
        display : 'flex',
        flexDirection : 'coloumn',
        justifyContent : 'center'
    }
}
export default Ipod;