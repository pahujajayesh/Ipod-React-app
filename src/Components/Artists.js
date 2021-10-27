import React from 'react';

class Artists extends React.Component{


    render(){
        return(
            <div style={styles.artistsContainer}>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                        <img alt="artist-img"style={{ marginLeft:-15,height:'8rem',width:"8rem",borderRadius : '50%'}}  src="https://i.pinimg.com/originals/3f/05/d5/3f05d54ebe11c415fed5da297bd5ff0f.jpg"/>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{marginLeft:10,fontSize:'1.3rem'}}>Moosetape<span><img alt="music-logo" style={styles.image} src="https://cdn-icons.flaticon.com/png/512/461/premium/461146.png?token=exp=1635321599~hmac=752cdbbb3c32d93c71e6437eb30d3f5e" /></span></h4>
                        <p style={{marginLeft:10}}> Sidhu Mossewala</p>
                    </div>

                </div>


               
            </div>
        );
    }

}

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '55%',
        width : '30%',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    subInfo : {

        alignSelf : 'center'
    },
}

export default Artists; 