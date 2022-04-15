export const clickMe = ourStory.onclick = () =>{

    const onlineAuctions = document.querySelector('#onlineAuctions');
    const liveAuctions = document.querySelector('#liveAuctions');
    const ourStory = document.querySelector('#ourStory');
    const contactUs = document.querySelector('#contactUs');
    const leaveFeedback = document.querySelector('#leaveFeedback');

    const ourStoryInfo = document.querySelector('#ourStoryInfo');

    if(onlineAuctions.className != 'menu opening topBottom'){

        onlineAuctions.className = 'menu opening topBottom';

        const middleOurStory = [liveAuctions, contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        ourStory.className = 'menu selected middle';

        ourStoryInfo.className = 'info paragraphOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom';

    }else{

        onlineAuctions.className = 'menu opening closing topBottom'

        const middleOurStory = [liveAuctions, contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        ourStory.className = 'menu selected deselected middle';

        ourStoryInfo.className = 'info paragraphOpened closed';

        leaveFeedback.className = 'menu copyright opening closing topBottom'; 

    };       
};


