const body = document.querySelector('.body')
const banner = document.querySelector('.banner')
const container = document.querySelector('.container')

const onlineAuctions = document.querySelector('#onlineAuctions');
const liveAuctions = document.querySelector('#liveAuctions');
const ourStory = document.querySelector('#ourStory');
const contactUs = document.querySelector('#contactUs');
const leaveFeedback = document.querySelector('#leaveFeedback');

const onlineAuctionsInfo = document.querySelector('#onlineAuctionsInfo');
const liveAuctionsInfo = document.querySelector('#liveAuctionsInfo');
const ourStoryInfo = document.querySelector('#ourStoryInfo');
const contactUsInfo = document.querySelector('#contactUsInfo');

const auctionTimeLink = document.querySelector('.auctionTimeLink')

const resizeElem = window.onload = () =>{

    if((body.clientHeight -= banner.clientHeight) >= 253){
        container.style.minHeight = (body.clientHeight -= banner.clientHeight).toString() + 'px';
        container.style.minWidth = body.clientWidth.toString() + 'px'
        body.style.overflowY = 'hidden'

    }else{
        container.style.height = '253px';
        body.style.overflowY = 'auto';
    };
};

window.onresize = () =>{
    resizeElem()
};

onlineAuctions.onclick = () =>{
    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){
    
        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
            });

            onlineAuctions.className = 'menu selected topBottom';

            onlineAuctionsInfo.className = 'info opened';

            onlineAuctionsInfo.style.textAlign = 'center'
            // onlineAuctionsInfo.style.padding = '0 20px 0'

            leaveFeedback.className = 'menu opening topBottom'; 

    }else{

        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                    menus.className = 'menu opening closing middle';   
            }); 

        onlineAuctions.className = 'menu selected deselected topBottom';

        onlineAuctionsInfo.className = 'info opened closed';

        leaveFeedback.className = 'menu opening closing topBottom';

    };     
};

// to make your elements not bounce set minHeight not Height

liveAuctions.onclick = () => {
    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){
        liveAuctionsInfo.style.alignItems = 'start'
        liveAuctionsInfo.style.textAlign = 'center'
        liveAuctionsInfo.style.fontSize = '20px'
        liveAuctionsInfo.style.padding = '0px 20px 0px'

        const topBottomLiveAuctions = [onlineAuctions, leaveFeedback];
            topBottomLiveAuctions.forEach(menus => {
            menus.className = 'menu opening topBottom';
        });

        const middleLiveAuctions = [ourStory, contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
        });

            liveAuctions.className = 'menu selected middle';

            liveAuctionsInfo.className = 'info opened';

    }else{

        const topBottomLiveAuctions = [onlineAuctions, leaveFeedback];
            topBottomLiveAuctions.forEach(menus => {
            menus.className = 'menu opening closing topBottom';
        });

        const middleLiveAuctions = [ourStory, contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        liveAuctions.className = 'menu selected deselected middle';

        liveAuctionsInfo.style.fontSize = '0px';

        liveAuctionsInfo.className = 'info opened closed';

    };  
};

ourStory.onclick = () =>{
    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){

        const topBottomOurStory = [onlineAuctions, leaveFeedback];
            topBottomOurStory.forEach(menus => {
            menus.className = 'menu opening topBottom';
        });

        const middleOurStory = [liveAuctions, contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening middle';
        });

            ourStory.className = 'menu selected middle';

            ourStoryInfo.style.alignItems = 'start'
            ourStoryInfo.style.textAlign = 'center'
            ourStoryInfo.style.fontSize = '20px'
            ourStoryInfo.style.padding = '0px 20px 0px'

            ourStoryInfo.className = 'info opened';

    }else{

        const topBottomOurStory = [onlineAuctions, leaveFeedback];
            topBottomOurStory.forEach(menus => {
            menus.className = 'menu opening closing topBottom';
        });

        const middleOurStory = [liveAuctions, contactUs];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        ourStory.className = 'menu selected deselected middle';

        ourStoryInfo.style.fontSize = '0px';

        ourStoryInfo.className = 'info opened closed';

    };       
};


contactUs.onclick = () => {
    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){

        const topBottomContactUs = [onlineAuctions, leaveFeedback];
            topBottomContactUs.forEach(menus => {
            menus.className = 'menu opening topBottom';
        });

        const middleContactUs = [liveAuctions, ourStory];
                middleContactUs.forEach(menus => {
                menus.className = 'menu opening middle';
        });

            contactUs.className = 'menu selected middle';

            contactUsInfo.className = 'info opened';

    }else{

        const topBottomOurStory = [onlineAuctions, leaveFeedback];
            topBottomOurStory.forEach(menus => {
            menus.className = 'menu opening closing topBottom';
        });

        const middleOurStory = [liveAuctions, ourStory];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        contactUs.className = 'menu selected deselected middle';

        contactUsInfo.className = 'info opened closed';

    };  
};

// const ContactUsOpenSetMenusHeight = [onlineAuctions, liveAuctions, ourStory, contactUs, leaveFeedback];
//         ContactUsOpenSetMenusHeight.forEach(Menus => {
//                     Menus.style.minHeight = (container.clientHeight /= 5).toString() + 'px';
//             });
    
//             // below we are setting the height of the liveAuctionsInfo so when it transforms
//             // there is an animation. If the height is not set prior it has no idea where to
//             // transition
    
//         contactUsInfo.style.minHeight = (container.clientHeight -= (container.clientHeight /= 5)).toString() + 'px';
    
//         const  ContactUsRemoveFlexGrow = [onlineAuctions, liveAuctions, ourStory, contactUs, leaveFeedback];
//             ContactUsRemoveFlexGrow.forEach(Menus => {
//                     Menus.style.flexGrow = '0'
//             });