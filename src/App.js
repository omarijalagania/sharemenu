import React, { useState } from 'react';

function App() {
  const [icon, setIcon] = useState(false)



  const arrowClick = () => {
    setIcon(!icon)
  }

  return (
      <section className="share-container">
        <input className="input" type="text" placeholder="What's happening?"/>
        <div className="social-privacy">
            <div className="icons"><ion-icon name="image-outline" className="social-btn" size="large"></ion-icon><ion-icon name="gift-outline" className="social-btn" size="large"></ion-icon><ion-icon name="happy-outline" size="large" className="social-btn"></ion-icon></div>
            <div className="privacy">
                <button className="privacy-btn">...Everyone can view & reply</button>
            </div>
        </div>
        <div className="add-gif">
            <button className="gif-btn">Add a GIF to your post</button>
            <hr></hr>
        </div>
        <div className="share-now">
            <button className="share-btn" onClick={() => arrowClick()}>Share now {icon?<ion-icon name="chevron-up-outline"></ion-icon>:<ion-icon name="chevron-down-outline"></ion-icon>}</button>
            {icon && <span className="sub-menu">
                <div className="draft"><ion-icon name="trash-outline"></ion-icon> Draft</div>
                <div className="schedule"><ion-icon name="alarm-outline"></ion-icon>Schedule for later </div>
            </span>}
        </div>
    </section>
  );
}

export default App;
