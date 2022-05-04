export const clickMe = liveAuctions.onclick = () => {
    const body = document.querySelector('#body')
    const banner = document.querySelector('#banner')
    const content = document.querySelector('#content')

    const onlineAuctions = document.querySelector('#onlineAuctions');
    const liveAuctions = document.querySelector('#liveAuctions');
    const ourStory = document.querySelector('#ourStory');
    const contactUs = document.querySelector('#contactUs');
    const leaveFeedback = document.querySelector('#leaveFeedback');

    const liveAuctionsInfo = document.querySelector('#liveAuctionsInfo');

    if(onlineAuctions.className != 'menu opening topBottom'){

        onlineAuctions.className = 'menu opening topBottom';

        const middleLiveAuctions = [ourStory, contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening middle';       
        });

        liveAuctions.className = 'menu selected middle';

        liveAuctionsInfo.className = 'info paragraphOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom';

        setTimeout(() => {
            body.style.overflowY = 'auto'
        }, 750)
        
    }else{
        window.scrollTo(0, 0);

        setTimeout(() => {
            let bodyHeight = body.clientHeight;
            let bannerHeight = banner.clientHeight;

            let containerHeight = (bodyHeight -= bannerHeight);

            console.log(containerHeight)

            if(containerHeight >= 253){
                body.style.overflowY = 'hidden'       
            }

            onlineAuctions.className = 'menu opening closing topBottom'

            const middleLiveAuctions = [ourStory, contactUs];
                    middleLiveAuctions.forEach(menus => {
                    menus.className = 'menu opening closing middle';
                });
            
            liveAuctions.className = 'menu selected deselected middle';

            liveAuctionsInfo.className = 'info paragraphOpened closed';

            leaveFeedback.className = 'menu copyright opening closing topBottom';

            // body.style.overflowY = 'hidden'
            
        }, 250);      
    };   
};