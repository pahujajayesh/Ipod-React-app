//Main Screen Page 
import React from "react";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Games from "./Games";
import Music from './Music';
import Coverflow from "./Coverflow";
import MyMusic from './MyMusic';
import Artists from "./Artists";

class MainScreen extends React.Component{
    render(){
        return(
            // Active Menu
            <div style={styles.mainScreen}>
               {this.props.activePage==='HomeScreen'?<HomeScreen activeItem={this.props.activeItem}/> : null}
               {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games/>: null}
                {this.props.activePage==='Coverflow'?<Coverflow/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio} /> : null}
                {this.props.activePage==='Artists'?<Artists /> : null}

            </div>
        )
    }
}
const styles={
    mainScreen:{
        marginTop:'3%',
        height : '12rem',
        width : '85%',
        backgroundColor:'rgb(245,245,245)',
        border : '2px solid lightgrey'  
    }
}
export default MainScreen;