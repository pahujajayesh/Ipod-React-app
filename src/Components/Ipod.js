import React from "react";
import MainScreen from './MainScreen';
import ZingTouch from 'zingtouch';
import sound from '../Assets/295.mp3'

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            activeItem : 'Music',
            activePage:'HomeScreen',
            enter : 0,
            play:true
        }
    }
    //Rotate wheel using Zingtouch
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
            
        if(newAngle < 0){
            change++;
         if(change === 15){
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
            change++;
            if(change === 15){
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
        if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
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
    toggle = () =>{
        if(this.state.activePage === 'MyMusic'){
            if(this.state.play === true){
                this.state.audio.pause();
                this.setState({
                    play : false
                })
            }else{
                this.state.audio.play();
                this.setState({
                    play : true
                })
            }
        }
    }

    componentDidMount(){
        let audio = document.getElementsByClassName("audio-element")[0];
       
        this.setState({
            audio : audio,
        })
        
    }
    render(){
        return(
            
            <div style={styles.mainConatiner}> 
            {/* Music will Play in background even if you are not in the Mymusic component   */}
                <audio className="audio-element">
                    <source src={sound}></source>
                </audio>
               <MainScreen activeItem={this.state.activeItem}  activePage={this.state.activePage} audio={this.state.audio} />
               <div style = {styles.wheelContainer} id='wheel-container'>
                <div style = {styles.wheel} id="inner-container" onMouseOver={this.rotateWheel}>
                <div style = {styles.btnConatiner}>
                    {/* Menu Button */}
                    <div style = {styles.menuButton}>
                       <img alt="Menu-btn" onClick={this.changePageToHomeScreen} style={styles.icon} src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"/>
                    </div>

                </div>
                {/* Forward and backward Buttons  */}
                <div style = {styles.btnConatiner}>
                    <div style = {styles.middleButtons}>
                        <img alt="backward-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/56/56760.png" />
                        <div  onClick={this.changePage}  style={styles.selectBtn}></div> 
                        <img alt="fwd-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/724/724927.png" />
                    </div>
                </div>
        
                <div style = {styles.btnConatiner}>
                    {/* click on the button to play or pause the music */}
                    <div onClick={this.toggle} style = {styles.playPause}>
                        <img alt="play-pause-icon" style = {styles.icon} src="https://cdn-icons-png.flaticon.com/512/64/64595.png" />
                    </div>
                </div>
            </div>
        </div>
            </div>
            
        );
    }

}
// Adding Styles to wheel component
const styles={
    mainConatiner:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        height : 'auto',
        width : '15rem',
backgroundImage:'linear-gradient(315deg, #000000 0%, #414141 74%)',
        margin : 'auto',
        display:'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius:'20px'
    },
    wheelContainer : {
        height : '13rem',
        width : '85%',
        backgroundImage:'linear-gradient(315deg, #000000 0%, #414141 74%)',

    },
    wheel:{
        width : '85%',
        height : '80%',
        backgroundColor : 'rgb(245,245,245)',
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
        backgroundImage:'linear-gradient(315deg, #000000 0%, #414141 74%)',
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