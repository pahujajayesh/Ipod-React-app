import React from 'react';
import sound from '../Assets/295.mp3';

class MyMusic extends React.Component{

    constructor(){
        super();
        this.state = {
            isMounted:true
        }
    }


    componentDidMount(){
        let self=this;
        self.props.audio.play();
        self.props.audio.addEventListener("timeupdate",function(){
            if(self.state.isMounted){
                var pos = self.props.audio.currentTime/self.props.audio.duration;
                self.updateTime();
                let fill = document.getElementById("fill");
                if(fill !== null){
                    fill.style.width = pos*100 + "%";
                }
            }
        })

    }
    updateTime = () =>{
        this.setState({
            audio : this.props.audio
        })
    }

    render(){
        let audio = this.props.audio;

        return(
            <div style={styles.myMusicContainer}>

                <div style={styles.info}>
                    <img alt="song-img"style={styles.image} src="https://cover.djpunjab.org/50413/300x700/295-Sidhu-Moose-Wala.jpg"></img>
                <div style={styles.subInfo}>
                    <h4 >295</h4>
                        <p style={{marginTop:'0.2rem'}}>Moosetape</p>
                </div>

            </div>

                <div style={styles.statusBar}>
                   
                    <p style={styles.currTime}>{audio !== null ? Math.floor(audio.currentTime) : '0 / 0'}</p>
                    <div style={styles.seekBar}>
                        <div style={styles.fill} id='fill'></div>
                    </div>
                    <p style={styles.dur}>{audio != null ? Math.floor(audio.duration) : '0 / 0'}</p>
                </div>

            </div>
        );
    }

}

const styles = {
    myMusicContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    image : {
        height : '55%',
        width : '40%',
        marginRight:'1rem',
        alignSelf:'center'
    },
    info : {
        height : '75%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    statusBar : {
        width:'100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly'
    },
    subInfo : {
        alignSelf : 'center'
    },
    seekBar : {
        width:'70%',
        height:'20%',
        border : '1px solid grey',
        cursor: 'pointer',
        alignSelf : 'center',
        display: 'flex',
    },
    fill : {
        height: '100%',
        backgroundColor: 'darkgray',
    },
    currTime : {
        margin : '0',
        alignSelf : 'center'
    },
    dur : {
        margin : '0',
        alignSelf : 'center'
    }
}


export default MyMusic;