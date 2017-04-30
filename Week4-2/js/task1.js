window.onload = function() {
var word = "Web 2 is awesome!"
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
        document.getElementById("screenHeight").textContent = window.innerHeight;
        document.getElementById("location").textContent = document.lastModified;
        document.getElementById("word").textContent = word;
        if (word.indexOf('awesome') > -1){
            var check = "YES!";
        }
        else{
            var check = "NO!";
        }
        document.getElementById("locate").textContent = check;
	},resize : function() {
        window.addEventListener("resize", this.render);
    },
    devInfo: function() {
        var ele = document.getElementById("dev-info");
        var info = document.getElementById("myinfo");
        ele.addEventListener("click", function(){
            info.innerHTML = "Iyke <b>Nwachukwu</b> <p>KEEP FIGHTING, SUSU!</p> <a href='https://www.google.co.th/?gws_rd=cr&ei=7gb_WOz4DML3vAT4m7i4CA'>google.com</a>";
        })
    }
};
task1.render();
    task1.resize();
        task1.devInfo();

}