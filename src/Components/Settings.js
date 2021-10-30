import React from 'react';

// Setting Component
class Settings extends React.Component{

    render(){
        return(
           
        <div style={styles.settings}>    
            <img alt="settings-icon" style={styles.image} src="https://p.kindpng.com/picc/s/543-5439191_configuration-control-gear-preferences-repair-setting-gear-and.png" />
        </div>
        );
    }

}
//Adding styles to settings component
const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    image : {
        width:'75%',
        height:'75%',
        alignSelf : 'center'
    },

}



export default Settings;