var msgConfig = {
	color:"red",
	timeout:2000,
	fontsize:"14px",
}
document.getElementById("test").innerHTML = "存储表v请修HTML、CSS等文件，查看效果。";
function Message(config){
	this.color = config.color || "#fff";
	this.timeOut = config.timeout || "2000";
	this.fontSize = config.fontsize || "14px";
	this.init();
}
Message.prototype = {
	create:function(){
		//创建Dom,并设置样式
		this.div = document.createElement("div");
		this.p = document.createElement("p");
		this.div.appendChild(this.p);
		window.document.body.appendChild(this.div);
		this.div.style.cssText = `
								width:60%;
								position: fixed;
								left: 50%;
								top: 50%;
								border: 1px solid #737373;
								background-color: rgba(200,200,200,.8);
								text-align: center;
								border-radius: .05rem;
								font-size: ${this.fontSize};
								line-height: .4rem;
								color: #000;
								display: none;`;
	},
	show:function(msg){
		var that = this;
		this.div.style.display = "block";
		this.p.innerHTML = msg;
		var t = setTimeout(function(){
			//window.body.removeChild(that.div);
			that.div.style.display = "none";
		},2000)
	},
	init:function(){
		this.create();
	}
}