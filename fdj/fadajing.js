$(function(){
	let small=$('.small')[0];
	let big=$('.big')[0];
	let imgs=$('img',big)[0];
	let mask=$('.zhezhao')[0];
	let imgss=imgs.offsetWidth;
	let par=parseInt(getComputedStyle(small,null).width);
	let bei=imgss/par;
	let mw=mask.offsetWidth;
		mh=mask.offsetHeight;
		sw=small.offsetWidth;
		sh=small.offsetHeight;
		bw=big.offsetWidth;
		bh=big.offsetHeight;

		// mask      big
		// small     imgs
	small.addEventListener('mousemove',function(e){
		let ox=e.offsetX-mw/2,    oy=e.offsetY-mh/2;
		if(ox>=sw-mw){
			ox=sw-mw;
		}
		if(oy<=0){
			oy=0;
		}
		if(oy>=sh-mh){
			oy=sh-mh;
		}
		if(ox<=0){
			ox=0;
		}
		mask.style.left=`${ox}px`;
		mask.style.top=`${oy}px`;

		imgs.style.width=`${sw/mw*bw}px`;
		imgs.style.height=`${sh/mh*bh}px`;

		imgs.style.left=`${-sw*ox/mw}px`;
		imgs.style.top=`${-sh*oy/mh}px`;
		
	});

})
