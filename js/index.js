window.onload=function () {
    //平移效果轮播图
    let banner_picture=document.querySelector(".banner")
    let width=parseInt(getComputedStyle(banner_picture,null).width);
    let banner=document.querySelectorAll(".banner-picture li");
    let btnLeft=document.querySelector(".btnLeft");
    let btnRight=document.querySelector(".btnRight");
    let lis=document.querySelectorAll(".spot li");
    let now=next=0;
    let flag=true;
    let t=setInterval(move,2000);
    console.log(banner, lis);

    function move() {
        next++;
        if (next==banner.length){
            next=0;
        }
        banner[next].style.left=width+"px";
        animate (banner[now],{left:-width});
        animate (banner[next],{left:0},function () {
            flag=true;
        });
        lis[now].className="";
        lis[next].className="click";
        now=next;
    }
    function moveL() {
        next--;
        if (next<0){
            next=banner.length-1;
        }
        banner[next].style.left=-width+"px";
        animate (banner[now],{left:width});
        animate (banner[next],{left:0},function () {
            flag=true;
        });
        lis[now].className="";
        lis[next].className="click";
        now=next;
    }
    btnLeft.onclick=function () {
        if (flag==false){
            return;
        }
        if (next==0){
            return;
        }
        flag=false;
        moveL();
    }
    btnRight.onclick=function () {
        if (flag==false){
            return;
        }
        if (next==banner.length-1){
            next=banner.length-1;
            return;
        }
        flag=false;
        move();
    }
    banner_picture.onmouseenter=function () {
        clearInterval(t);
    }
    banner_picture.onmouseleave=function () {
        t=setInterval(move,2000);
    }

    lis.forEach(function (v,i) {
        v.onclick=function () {
            if (i==now){
                return;
            }else if(i<now){
                banner[i].style.left=-width+"px";
                animate (banner[now],{left:width});
                animate (banner[i],{left:0});
                lis[now].classList.remove("click");
                lis[i].classList.add("click");
            }
            else {
                banner[i].style.left=width+"px";
                animate (banner[now],{left:-width});
                animate (banner[i],{left:0});
                lis[now].classList.remove("click");
                lis[i].classList.add("click");
            }
            next=now=i;
        }
    })

}
