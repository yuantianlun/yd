window.onload=function () {

    let imgs=document.querySelectorAll(".navce li");
    let dians=document.querySelectorAll(".dianhz li");
    let banner=document.querySelector(".navce");
    console.log(banner);
    let btnr=document.querySelector(".bsright");
    let btnl=document.querySelector(".bsleft");
    console.log(btnr);
    console.log(btnl);
    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<dians.length;i++){
                dians[i].classList.remove("active1");
                imgs[i].classList.remove("active")
            }
            this.classList.add("active1");
            imgs[index].classList.add("active")
            next=index;
        }
    })
    let next=0;
    function fn(r="right") {
        if (r=="right") {
            next++;
        }else if (r=="left"){
            next--;
        }
        if (next === dians.length) {
            next = 0;
        }
        if (next===-1){
            next=dians.length-1;
        }
        for(var i=0;i<dians.length;i++){
            dians[i].classList.remove("active1");
            imgs[i].classList.remove("active");
        }
        dians[next].classList.add("active1");
        imgs[next].classList.add("active");
    };
    let t=setInterval(fn,3000);
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(fn,3000);
    }
    let flag=true;
    btnr.onclick=function () {
        if (flag) {
            flag=false;
            fn();
        }
        console.log(flag)
    }
    btnl.onclick=function () {
        if (flag){
            flag=false;
            fn("left");
        }
    }
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}