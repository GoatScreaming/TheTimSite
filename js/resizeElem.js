export const resizeElem = window.onload = () => {
    
    const body = document.querySelector('#body')
    const banner = document.querySelector('#banner')
    const content = document.querySelector('#content')

    const bannerimg1 = document.querySelector('#bannerimg1')
    const bannerimg3 = document.querySelector('#bannerimg3')

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

    let bodyHeight = body.clientHeight
    let bannerHeight = banner.clientHeight

    let containerHeight = (bodyHeight -= bannerHeight)
    
    if(containerHeight >= 253){
        
        content.style.minHeight = (containerHeight += 1).toString() + 'px';
        body.style.overflowY = 'hidden'

    }else{

        content.style.height = '253px';
        body.style.overflowY = 'auto';

    };  
};

// I know this looks weird but the page won't load properly if the function
// is not called globally and if the function does not have the window.onload event
// you would think you coud just do what is being done on window.resize but you can't

export const resize = window.onresize = () => {

    resizeElem()

};