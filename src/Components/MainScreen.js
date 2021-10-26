import React from "react";
import HomeScreen from "./HomeScreen";

class MainScreen extends React.Component{
    render(){
        return(
            <div style={styles.mainScreen}>
                 <HomeScreen activeItem={this.props.activeItem}/>
            </div>
        )
    }
}
const styles={
    mainScreen:{
        height : '15rem',
        width : '100%',
        backgroundColor : 'white',
        border : '2px solid lightgrey'  
    }
}
export default MainScreen;