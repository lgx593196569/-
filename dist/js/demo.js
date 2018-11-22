document.getElementById("test").innerHTML = "存储表v请修HTML、CSS等文件，查看效果。";
function msg(obj){
	this.body=document.querySelector('body');
	this.div=document.createElement("div");
	this.txt = document.createElement("p");
	this.val=obj.txt_Val;
	this.color = obj.color || "#666";
	this.fs = obj.fs || "13px";
	this._w = obj.Width || "200px";
	this._h = obj.Height || "100px";
	this.bd = obj.b_Color || "1px solid #737373";
	this.Left = obj.Left;
	this.Top = obj.Top;
	this.Stop_time = obj.Stop_time || 2000;
	this.bg = obj.bg || "rgba(200,200,200,.8)";
	this.flag = true;
	this.fun();
	this.Time();
}
msg.prototype.fun = function(){
	this.div.style.position = "fixed";
	this.div.style.width = this._w;
	this.div.style.height = this._h;
	this.div.style.border = this.bd;
	this.div.style.left = this.Left;
	this.div.style.top = this.Top;
	this.div.style.backgroundColor = this.bg;
	this.div.style.textAlign = "center";
	this.div.style.padding = "0px";
	this.div.style.transition = "all .5s 2s";
	this.div.style.lineHeight = this._h;
	this.txt.style.fontSize = this.fs;
 	this.txt.innerHTML = this.val;
 	this.txt.style.margin = "0";
 	this.txt.style.color = this.color;
	this.div.appendChild(this.txt);
	this.body.appendChild(this.div);
}
msg.prototype.Time = function(){
	var that = this;
	if(this.flag == true){
		var t = setTimeout(function(){
			that.div.style.display = "none";
			btn1.disabled = false;
			btn2.disabled = false;
			btn3.disabled = false;
		},this.Stop_time);
	}
}