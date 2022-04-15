const body = document.querySelector('#body')
const banner = document.querySelector('#banner')
const content = document.querySelector('#content')

const bannerimg1 = document.querySelector('#bannerimg1')
const bannerimg2 = document.querySelector('#bannerimg2')
const bannerimg3 = document.querySelector('#bannerimg3')

const onlineAuctions = document.querySelector('#onlineAuctions');
const liveAuctions = document.querySelector('#liveAuctions');
const ourStory = document.querySelector('#ourStory');
const contactUs = document.querySelector('#contactUs');
const leaveFeedback = document.querySelector('#leaveFeedback');

const onlineAuctionsInfo = document.querySelector('#onlineAuctionsInfo');
const liveAuctionsInfo = document.querySelector('#liveAuctionsInfo');
const ourStoryInfo = document.querySelector('#ourStoryInfo');
const contactUsInfo = document.querySelector('#contactUsInfo');

const auctionTimeLink = document.querySelector('#auctionTimeLink'); 
const contactUsLink = document.querySelector('#contactUsLink');

const resizeElem = window.onload = () => {

    if(body.clientWidth >= 750){
        
        const topBottomImg = [bannerimg1, bannerimg3];
        topBottomImg.forEach((banners) => {
            banners.className = 'bannerimg closeBanner'
        })
    
    }else{  
        
        const topBottomImg = [bannerimg1, bannerimg3];
        topBottomImg.forEach((banners) => {
            banners.className = 'bannerimg'
        })
    
    };
    
    if((body.clientHeight -= banner.clientHeight) >= 253){
        
        content.style.minHeight = ((body.clientHeight -= banner.clientHeight) + 1).toString() + 'px';
        body.style.overflowY = 'hidden'

    }else{

        content.style.height = '253px';
        body.style.overflowY = 'auto';

    };  
};

resizeElem()

// I know this looks weird but the page won't load properly if the function
// is not called globally and if the function does not have the window.onload event
// you would think you coud just do what is being done on window.resize but you can't

window.onresize = () => {

    resizeElem()

};

onlineAuctions.onclick = () =>{

    if(onlineAuctions.className != 'menu selected topBottom'){
        
        onlineAuctions.className = 'menu selected topBottom';

        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
            });

        onlineAuctionsInfo.className = 'info opened';

        onlineAuctionsInfo.style.textAlign = 'center';
        
        auctionTimeLink.className = 'linkOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom'; 

    }else{

        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                    menus.className = 'menu opening closing middle';   
            }); 

        onlineAuctions.className = 'menu selected deselected topBottom';

        onlineAuctionsInfo.className = 'info opened closed';

        auctionTimeLink.className = 'linkOpened linkClosed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };     
};

liveAuctions.onclick = () => {

    if(onlineAuctions.className != 'menu opening topBottom'){

        onlineAuctions.className = 'menu opening topBottom';

        const middleLiveAuctions = [ourStory, contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        liveAuctions.className = 'menu selected middle';

        liveAuctionsInfo.className = 'info paragraphOpened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom';

    }else{

        onlineAuctions.className = 'menu opening closing topBottom'

        const middleLiveAuctions = [ourStory, contactUs];
                middleLiveAuctions.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        liveAuctions.className = 'menu selected deselected middle';

        liveAuctionsInfo.className = 'info paragraphOpened closed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };  
};

ourStory.onclick = () =>{

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


contactUs.onclick = () => {
    
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