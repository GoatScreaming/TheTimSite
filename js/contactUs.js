export const clickMe = contactUs.onclick = () => {

    const onlineAuctions = document.querySelector('#onlineAuctions');
    const liveAuctions = document.querySelector('#liveAuctions');
    const ourStory = document.querySelector('#ourStory');
    const contactUs = document.querySelector('#contactUs');
    const leaveFeedback = document.querySelector('#leaveFeedback');

    const contactUsInfo = document.querySelector('#contactUsInfo');

    const contactUsLink = document.querySelector('#contactUsLink');
    
    if(onlineAuctions.className != 'menu opening topBottom'){
        
        onlineAuctions.className = 'menu opening topBottom';

        const middleContactUs = [liveAuctions, ourStory];
                middleContactUs.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        contactUs.className = 'menu selected middle';

        contactUsInfo.className = 'info opened';

        contactUsLink.className = 'linkOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom';

    }else{
        
        onlineAuctions.className = 'menu opening closing topBottom'

        const middleOurStory = [liveAuctions, ourStory];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        contactUs.className = 'menu selected deselected middle';

        contactUsInfo.className = 'info opened closed';

        contactUsLink.className = 'linkOpened linkClosed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };  
};