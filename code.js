window.onscroll = () => {
    let main = document.documentElement;
    const sc = main.scrollHeight/7; // здесь мы получаем единицу деления на скролле
    // console.log(main.clientWidth);

    // console.log(main.innerWidth);
    // console.log(main.clientHeight);
    console.log(main.scrollHeight);
    // console.log(main.scrollTop);
    console.log(window.pageYOffset);
    // console.log(main.innerHeight);
    if(window.pageYOffset > main.scrollHeight/7){
        document.querySelector("h3").classList.add("cool_h3");
        document.querySelector(".img__wrap").classList.add("fadeIn");
        setTimeout(() => {
            document.querySelector(".img__wrap").classList.add("visible");
            document.querySelector("h3").classList.add("visible");
        }, 300);
    } 

    if(window.pageYOffset > main.scrollHeight/5){
        // document.querySelector(".p_wrapper").classList.add("visible");
        document.querySelector(".p_wrapper").classList.add("fadeIn");
        setTimeout(() => {
            document.querySelector("p_wrapper").classList.add("visible");
        }, 300);
    }
    console.warn(sc);
    if( window.pageYOffset > (main.scrollHeight/8)*2){
       blocks =  document.querySelectorAll(".blocks");
       blocks[0].classList.add("slideInRight");
       blocks[1].classList.add("slideInLeft");
    }
}
// window.onload = () => {
   
// }
// document.documentElement.scrollHeight/2




