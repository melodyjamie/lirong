$(function(){
	let wenben=$('.wenben')[0];
	let tijiao=$('.tijiao');
	let box1=$('.box1')[0];
	let sub=$('.submit')[0];
	let ming=$('.ming')[0];
	let liu=$('.liu')[0];
	console.log(wenben);

	wenben.onkeyup=function(){
		let text=this.value;
		let num=text.length;
		let max=this.maxLength;
		box1.innerHTML=`${num}/${max}`;
		if(num>=max){
			return;
		}
	}

	sub.onclick=function(){
		
		liu.innerHTML+=`
		<li>
			<div class="tu"><img src="img/1.jpg" alt=""></div>
			<div class="masseg">
				<h3>${ming.value}</h3>
				<p>${wenben.value}</p>
			</div>
		</li>`
		ming.value=null;
		wenben.value=null;
		box1.innerHTML=`0`;
	}

	liu.onmouseover=function(e){
		let element=e.target;
		if(element.nodeName == 'LI'){
			element.style.background='rgba(88,35,74,0.4)';
		}
	}
	liu.onmouseout=function(e){
		let element=e.target;
		if(element.nodeName == 'LI'){
			element.style.background='#e6b8b8';
		}
	}


})
