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


    let sou=document.querySelector(".sou_top");
    let btns=document.querySelectorAll(".t_ul_li");
    let lou=document.querySelectorAll(".xyhbox");
    let hz=document.querySelector(".tiao");
    let span=document.querySelectorAll(".t_ul_li span");
    console.log(span);
    window.onscroll=function(){
            let st=document.documentElement.scrollTop;
            if (st>500){
                sou.style.display="block";
            }else{
                sou.style.display="none";
            }
            if(st>600){
                hz.style.display="block";
            }else{
                hz.style.display="none"
            }
            lou.forEach(function (ele,index) {
                if(st>ele.offsetTop-150){
                    for(var i=0;i<btns.length;i++){
                        // btns[i].classList.remove("active");
                        span[i].style.display="none";
                    }
                    // btns[index].classList.add("active");
                    span[index].style.display="block";
                }

            })
            let totop=document.querySelector(".blak");
            totop.onclick=function () {
                let st=document.documentElement.scrollTop;
                let speed=st*30/500;
                let t=setInterval(function () {
                    st-=speed;
                    if(st<=0){
                        st=0;
                        clearInterval(t);
                    }
                    document.documentElement.scrollTop=st;
                },20);

            };

            btns.forEach(function (ele,index) {
                ele.onclick=function(){
                    let ot=lou[index].offsetTop;
                    let now=document.documentElement.scrollTop;
                    console.log(ot,now);
                    let speed=(ot-now)*30/300;
                    let item=0;
                    let t=setInterval(function(){
                        now+=speed;
                        item+=30;
                        if (item===300){
                            clearInterval(t);
                            now=ot;
                        }
                        document.documentElement.scrollTop=now-50;
                    },30)

                }
            })

        }

}