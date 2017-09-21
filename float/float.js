function Float(obj){
	this.obj=obj;
	this.maxY=window.innerHeight-obj.offsetHeight;
	this.maxX=innerWidth-obj.offsetWidth;
	this.speed=15;
	this.speedx=10;
}
Float.prototype.stop=function(){
	clearInterval(this.t);
}
Float.prototype.resize=function(){
	this.maxY=innerHeight-obj.offsetHeight;
	this.maxX=innerWidth-obj.offsetWidth;
}
Float.prototype.move=function(){
	let thst=this;
	this.t=setInterval(function(){
		let objy=thst.obj.offsetTop+thst.speed;
		let objx=thst.obj.offsetLeft+thst.speedx;
		if(objy>=thst.maxY){
			objy=thst.maxY;
			thst.speed*=-1;
		}
		if(objy<=0){
			objy=0;
			thst.speed*=-1;
		}
		if(objx>=thst.maxX){
			objx=thst.maxX;
			thst.speedx*=-1;
		}
		if(objx<=0){
			objx=0;
			thst.speedx*=-1;
		}
		thst.obj.style.top=objy+'px';
		thst.obj.style.left=objx+'px';
	}, 30)
	

}