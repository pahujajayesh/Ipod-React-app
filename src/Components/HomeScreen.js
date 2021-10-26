import React from "react";

class HomeScreen extends React.Component{
    render(){
        return(
            <div style={styles.homeScreen} id='home-screen'>
            <div style={styles.menuList} id='menu-list'>
                <h2 style={{marginLeft:'12px'}}>IPod.js</h2>
                <ul class="list-group">
                    <li class="list-group-item active" >Music</li>
                    <li class="list-group-item">games</li>
                    <li class="list-group-item">Settings</li>
                    <li class="list-group-item">Coverflow</li>

                </ul>
            </div>
            <div style={styles.imageContainer} id='image-container'>
                <img style={{ height:'100%',width:'100%',objectFit:'cover'}}src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"/>
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