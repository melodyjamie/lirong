window.onload=function(){
/*
单元格td 
保存值    清楚值
创建input
将值给了input
更新值   保存值    
清楚input
将input的值给了td 
 */
let table=document.querySelector('table');

let student=[{name:'张三',age:'20',sex:'男',phone:'123456',address:'山西太原'},
	{name:'李四',age:'20',sex:'男',phone:'123456',address:'山西太原'},
	{name:'王五',age:'18',sex:'男',phone:'25416',address:'山西大同'},
	{name:'小丽',age:'22',sex:'女',phone:'9854120',address:'山西临汾'},
	{name:'小明',age:'17',sex:'女',phone:'562314',address:'山西吕梁'},
	{name:'李泽宙',age:'20',sex:'男',phone:'123456',address:'山西太原'},
	{name:'李泽宙',age:'20',sex:'男',phone:'123456',address:'山西太原'}];


//添加
 creatTr(student);
/*function creatTr(arr){
	let add=document.querySelector('.addBut');
	add.onclick=function(){
	for(let i=0;i<arr.length;i++){
		let Tr=document.createElement('tr');
		Tr.innerHTML=`
				<td>${arr[i].name}</td>
				<td>${arr[i].age}</td>
				<td>${arr[i].sex}</td>
				<td>${arr[i].phone}</td>
				<td>${arr[i].address}</td>
				<td>
					<button>删除</button>
				</td>
		`
		table.appendChild(Tr);
	}
  }
}*/

function creatTr(arr){
	let i=0;
	let add=document.querySelector('.addBut');
	add.onclick=function(){
		let Tr=document.createElement('tr');
		Tr.innerHTML=`
				<td>${arr[i].name}</td>
				<td>${arr[i].age}</td>
				<td>${arr[i].sex}</td>
				<td>${arr[i].phone}</td>
				<td>${arr[i].address}</td>
				<td>
					<button>删除</button>
				</td>
		`
		table.appendChild(Tr);
	i++;
	if(i>=arr,length){
		return;
	}
  }
}

/*student.forEach(element=>{
	creatTr(element);
})*/

/*function creatTr(obj){ 
	let add=document.querySelector('.addBut');
	add.onclick=function(){
		let Tr=document.createElement('tr');
		Tr.innerHTML=`
				<td>${obj.name}</td>
				<td>${obj.age}</td>
				<td>${obj.sex}</td>
				<td>${obj.phone}</td>
				<td>${obj.address}</td>
				<td>
					<button>删除</button>
				</td>
		`
		table.appendChild(Tr);
	}
}*/


//删除  修改
 table.ondblclick=function(e){
 	let element=e.target;
 	if(element.nodeName=='TD'){
 		let text=element.innerText;
 		element.innerText='';
	 	let input=document.createElement('input');
	 	element.appendChild(input);
	 	input.value=text;
	 	input.onblur=function(){     //失去焦点时
	 		let newtext=this.value;
	 		element.removeChild(input);
	 		if(newtext){
	 			element.innerText=newtext;
	 		}else{
	 			element.innerText=text;
	 		}
	 	}
 	 }else if(element.nodeName=='BUTTON'){
 	 	let trs=element.parentNode.parentNode;
 	 	table.removeChild(trs);
 	 }
 }
}
