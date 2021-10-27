import React from "react";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Games from "./Games";

class MainScreen extends React.Component{
    render(){
        return(
            <div style={styles.mainScreen}>
               {this.props.activePage==='HomeScreen'?<HomeScreen activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<HomeScreen activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games/>: null}
                {this.props.activePage==='Coverflow'?<HomeScreen activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
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