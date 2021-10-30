import React from 'react';
//importing listgroup from react bootstrap
import { ListGroup } from 'react-bootstrap';
//Music Component
class Music extends React.Component{

    render(){
        return(
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'>
                    <h2 style={{marginLeft:'12px',fontSize:'1.2rem'}}>IPod.js</h2>
                    <ListGroup>
        {/* Adding My Music and Artists in the Music Menu */}
                        <ListGroup.Item style={{border:'0',fontSize:'0.8rem'}} className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',fontSize:'0.8rem'}} className={this.props.activeItem==='Artists'?'active':''}>
                        Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>

                </div>
                {/* Background image */}
                <div style={styles.imageContainer} id='image-container'>
                <img alt="background-img" style={{ height:'100%',width:'100%',objectFit:'cover'}}src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"/>

                </div>
            </div>
        );
    }

}
//Adding styles to Music Component
const styles = {
    musicScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        height : '100%',
        width : '50%'
    },
    imageContainer : {
        height : '100%',
        width : '50%'
    }
}


export default Music;