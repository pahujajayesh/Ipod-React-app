import React from "react";
import { ListGroup } from 'react-bootstrap';
class HomeScreen extends React.Component{
    
    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
            <div style={styles.menuList} id='menu-list'>
                <h2 style={{marginLeft:'12px',fontSize:'1.2rem'}}>IPod.js</h2>
                <ListGroup>
                        <ListGroup.Item style={{border:'0' ,fontSize:'0.8rem'}} className={this.props.activeItem==='Music'?'active':''}>
                            Music {this.props.activeItem==='Music'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0' ,fontSize:'0.8rem'}} className={this.props.activeItem==='Games'?'active':''}>
                            Games {this.props.activeItem==='Games'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0' ,fontSize:'0.8rem'}} className={this.props.activeItem==='Settings'?'active':''}>
                            Settings {this.props.activeItem==='Settings'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0' ,fontSize:'0.8rem'}} className={this.props.activeItem==='Coverflow'?'active':''}>
                            Coverflow {this.props.activeItem==='Coverflow'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
            </div>
            <div style={styles.imageContainer} id='image-container'>
                <img alt="background-img" style={{ height:'100%',width:'100%',objectFit:'cover'}}src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"/>
            </div>
        </div>
        )
    }
}
const styles = {
    homeScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        border:'1px solid black',
        height : '100%',
        width : '50%'
    },
    imageContainer : {
        border:'1px solid black',
        height : '100%',
        width : '50%'
    }
}


export default HomeScreen;