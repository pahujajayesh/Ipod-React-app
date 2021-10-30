import React from 'react';
//Artists Component 
class Artists extends React.Component{
    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.info}>
                    {/* Artists Image  */}
                    <div style={styles.imageContainer}>
                        <img alt="artist-img"style={{ height:'5rem',width:"5rem",borderRadius :'50%'}}  src="https://i.pinimg.com/originals/3f/05/d5/3f05d54ebe11c415fed5da297bd5ff0f.jpg"/>
                    </div>

                    <div style={styles.subInfo}>
                        <h4 style={{marginLeft:10,fontSize:'1.2rem'}}>Moosetape<span><img alt="music-logo" style={styles.image} src="https://cdn-icons.flaticon.com/png/512/461/premium/461146.png?token=exp=1635321599~hmac=752cdbbb3c32d93c71e6437eb30d3f5e" /></span></h4>
                        <p style={{fontSize:'0.9rem'}}> Sidhu Mossewala</p>
                    </div>

                </div>
            </div>
        );
    }

}
//Add styles to the component

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection:'row'
    },
    imageContainer : {
        position:'absolute',
        left:'20%',
        height : '10%',
        width : '30%'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        position:'absolute',
        height : '100%',
        width : '100%',
    },
    subInfo : {
        position:'absolute',
        top:'20%',
        left:'10%',
        textAlign:'center',
        alignSelf : 'center'
    },
}

export default Artists; 