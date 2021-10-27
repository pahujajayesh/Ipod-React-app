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
            <div style={styles.mainScreen}>
               {this.props.activePage==='HomeScreen'?<HomeScreen activeItem={this.props.activeItem}/> : null}
               {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games/>: null}
                {this.props.activePage==='Coverflow'?<Coverflow/> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic /> : null}
                {this.props.activePage==='Artists'?<Artists /> : null}

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