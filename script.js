const body = document.querySelector('#body')
const banner = document.querySelector('#banner')
const container = document.querySelector('#container')

const bannerimg = document.querySelector('.bannerimg')

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

    if(body.clientWidth >= 700){
        
        bannerimg.src = "UpScaledHallstein21x9.jpg"

    }else{

        bannerimg.src = "UpScaledHallstein16x9.jpg"
    };
    console.log(bannerimg.src)

    if((body.clientHeight -= banner.clientHeight) >= 253){

        container.style.minHeight = (body.clientHeight -= banner.clientHeight).toString() + 'px';
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
        
        onlineAuctions.className = 'menu selected topBottom';

        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                menus.className = 'menu opening middle';
            });

        onlineAuctionsInfo.className = 'info opened';

        onlineAuctionsInfo.style.textAlign = 'center'

        leaveFeedback.className = 'menu copyrightClosed opening topBottom'; 

    }else{

        const middleonlineAuctions = [liveAuctions, ourStory, contactUs];
                middleonlineAuctions.forEach(menus => {
                    menus.className = 'menu opening closing middle';   
            }); 

        onlineAuctions.className = 'menu selected deselected topBottom';

        onlineAuctionsInfo.className = 'info opened closed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };     
};

liveAuctions.onclick = () => {

    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){

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

    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){

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
    
    if((onlineAuctionsInfo.clientHeight += liveAuctionsInfo.clientHeight += ourStoryInfo.clientHeight += contactUsInfo.clientHeight) === 0){
        
        onlineAuctions.className = 'menu opening topBottom';

        const middleContactUs = [liveAuctions, ourStory];
                middleContactUs.forEach(menus => {
                menus.className = 'menu opening middle';
        });

        contactUs.className = 'menu selected middle';

        contactUsInfo.className = 'info opened';

        leaveFeedback.className = 'menu copyrightClosed opening topBottom';

    }else{
        
        onlineAuctions.className = 'menu opening closing topBottom'

        const middleOurStory = [liveAuctions, ourStory];
                middleOurStory.forEach(menus => {
                menus.className = 'menu opening closing middle';
            });
           
        contactUs.className = 'menu selected deselected middle';

        contactUsInfo.className = 'info opened closed';

        leaveFeedback.className = 'menu copyright opening closing topBottom';

    };  
};