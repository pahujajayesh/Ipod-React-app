import React from "react";
import MainScreen from './MainScreen';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'Music',
            activePage:'HomeScreen',
            enter : 0
        }
    }
    
    rotateWheel = () => {
        var containerElement = document.getElementById('wheel-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;

        if(self.state.enter < 2){
            activeRegion.bind(childElement, 'rotate', function(event){
                //perform Operations
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        if(newAngle < 0){
            console.log(change);
            change++;
         if(change === 15){
                console.log("change state");
                change = 0;
                if(self.state.activePage === 'HomeScreen'){
                    if(self.state.activeItem === 'Music'){
                        self.setState({
                            activeItem : "Games"
                        })
                    }else if(self.state.activeItem === 'Games'){
                        self.setState({
                            activeItem : "Settings"
                        })
                    }else if(self.state.activeItem === 'Settings'){
                        self.setState({
                            activeItem : "Coverflow"
                        })
                    }else if(self.state.activeItem === 'Coverflow'){
                        self.setState({
                            activeItem : "Music"
                        })
                    }
                }else if(self.state.activePage === 'Music'){
                    if(self.state.activeItem === 'MyMusic'){
                        self.setState({
                            activeItem : "Artists"
                        })
                    }
                    }else if(self.state.activeItem === 'Artists'){
                        self.setState({
                            activeItem : "MyMusic"
                    })
                }
            }
        }
            else{
            console.log(change);
            change++;
            if(change === 15){
                console.log("change state");
                change = 0;
                if(self.state.activePage ==='HomeScreen'){
                    if(self.state.activeItem === 'Music'){
                        self.setState({
                            activeItem : "Coverflow"
                        })
                    }else if(self.state.activeItem === 'Games'){
                        self.setState({
                            activeItem : "Music"
                        })
                    }else if(self.state.activeItem === 'Settings'){
                        self.setState({
                            activeItem : "Games"
                        })
                    }else if(self.state.activeItem === 'Coverflow'){
                        self.setState({
                            activeItem : "Settings"
                        })
                    }
                }else if(self.state.activePage === 'Music'){
                    if(self.state.activeItem === 'MyMusic'){
                        self.setState({
                            activeItem : "Artists"
                        })
                    }
                }else if(self.state.activeItem === 'Artists'){
                        self.setState({
                            activeItem : "MyMusic"
                    })
            }
        }
    }
});
    }else{
        console.log('Not allowed to enter')
    }
}

        

    changePage = () => {

        if(this.state.activeItem === 'Music'){
            this.setState({
                activeItem : 'MyMusic',
                activePage : this.state.activeItem
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }
    }

    changePageToHomeScreen = () => {
        if(this.state.activePage === 'Music' || this.state.activeItem==='Artists' || this.state.activeItem==='MyMusic'){
            this.setState({
                activeItem : 'Music',
                activePage : 'HomeScreen'
            })
        }else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : 'HomeScreen'
            })
        }
    }

    render(){
        return(
            
            <div style={styles.mainConatiner}> 
               <MainScreen activeItem={this.state.activeItem}  activePage={this.state.activePage}/>
               <div style = {styles.wheelContainer} id='wheel-container'>
                <div style = {styles.wheel} id="inner-container" onMouseOver={this.rotateWheel}>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.menuButton}>
                       <img alt="Menu-btn" onClick={this.changePageToHomeScreen} style={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"/>
                    </div>

                </div>
                <div style = {styles.btnConatiner}>
                    <div style = {styles.middleButtons}>
                        <img alt="backward-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/56/56760.png" />
                        <div  onClick={this.changePage}  style={styles.selectBtn}></div> 
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
            </div>
            
        );
    }

}

const styles={
    mainConatiner:{
        position:'relative',
        height : 'auto',
        width : '20rem',
        backgroundColor : 'black',
        margin : 'auto',
        display:'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
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
    }
    
}
export default Ipod;