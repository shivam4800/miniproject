import React from 'react';
import './Main.css';


const Main=()=>{
    const imgsrc=[{src:'https://image.dosgamesarchive.com/screenshots/snake2.gif'},{src:'https://toomkygames.com/wp-content/uploads/default/games/screens/Snake-classics-a-640x480.jpg'}
];
    const imgarr=imgsrc.map((img)=>{
        return(
            
            <div class="ui card " style={{display:'inline-block',marginLeft:'40px',maxWidth:'20%'}}>
            <div class="image">
                <img   src={img.src} />
            </div>
            <div class="content">
                <div>abc</div>
    
            <div class="description">
                xys
            </div>
            </div>
            <div class="extra content">
                fun games
            </div>
            </div>
            
        );
    });
    
    return (
        <div className="size">
            <div> 
                <h1>Hotflix </h1>
            </div>
            <div style={{marginTop:'20px'}}>
                {imgarr}
            </div><br/><hr/>
            <div>
                <h1>Action games</h1>
            </div>
            <div style={{marginTop:'20px'}}>
                {imgarr}     
            </div><br/><hr/>

        </div>
    );

};

export default Main;