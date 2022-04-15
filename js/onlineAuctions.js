import * as ids from './ids.js';

export const clickMe = onlineAuctions.onclick = () => {
    const onlineAuctions = document.querySelector('#onlineAuctions');
    const liveAuctions = document.querySelector('#liveAuctions');
    const ourStory = document.querySelector('#ourStory');
    const contactUs = document.querySelector('#contactUs');
    const leaveFeedback = document.querySelector('#leaveFeedback');

    const onlineAuctionsInfo = document.querySelector('#onlineAuctionsInfo');

    const auctionTimeLink = document.querySelector('#auctionTimeLink'); 
    
    if(onlineAuctions.className != 'menu selected topBottom'){
        
        onlineAuctions.className = 'menu selected topBottom';

        const middleOnlineAuctions = [liveAuctions, ourStory, contactUs];
            middleOnlineAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
            });

        onlineAuctionsInfo.className = 'info opened';

        onlineAuctionsInfo.style.textAlign = 'center';
        
        auctionTimeLink.className = 'linkOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom'; 

    }else{

        const middleOnlineAuctions = [liveAuctions, ourStory, contactUs];
            middleOnlineAuctions.forEach(menus => {
                menus.className = 'menu opening closing middle';   
            }); 

        onlineAuctions.className = 'menu selected deselected topBottom';

        onlineAuctionsInfo.className = 'info opened closed';

        auctionTimeLink.className = 'linkOpened linkClosed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };     
};