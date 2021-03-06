import React from "react";
//Games Component
class Games extends React.Component{
    render(){
        return(
            <div style={styles.settings} >
                <img alt="Games-gif" style={styles.image} src="https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-m.gif" />
            </div>
        );
    }
}
//Adding styles to the component
    const styles = {
        settings : {
            width : '100%',
            height : '100%',
            display : 'flex',
            flexDirection : 'row',
            justifyContent : 'center'
        },
        image : {
            width:'100%',
            height:'100%',
            alignSelf : 'center'
        }
    }

export default Games;