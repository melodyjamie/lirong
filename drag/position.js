window.addEventListener('load',function(){
	let box=document.querySelector('.box');
	
	box.addEventListener('mousedown',function(e){
		let oy=e.offsetY;
			ox=e.offsetX;
		document.addEventListener('mousemove',fn);
		box.addEventListener('mouseup',function(){
			document.removeEventListener('mousemove',fn);
		})
		function fn(e){
			let lefts=e.clientX-ox;
				tops=e.clientY-oy;
			box.style.left=lefts+'px';
			box.style.top=tops+'px';
		}
	})	
})

