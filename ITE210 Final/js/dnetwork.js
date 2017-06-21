window.onload = function(){
    
var imgNames = ["7sede", 
                "alertide", 
                "gastrolax",
                "rafeata",
                "dmund"];
var prices =[600,650,700,750,800];

var a = {
	a : function(){
		var texts = "";
		var links = document.getElementById("abc");
		for (var i = 0; i < imgNames.length; i++){
			texts += "<li class='text-center'><img style='height:250px;weight:200px;'class='img-responsive' src='images/"+imgNames[i]+".png'><br><span style=''>"+imgNames[i]+"<span style='fontsize:12px;' class='label label-default'> "+prices[i]+" Bath</span></span><form method='post' action='https://www.sandbox.paypal.com/cgi-bin/webscr' target='paypal'><fieldset><input type='hidden' name='cmd' value='_cart'><input type='hidden' name='add' value='1'><input type='hidden' name='business' value=''><input type='hidden' name='item_name' value='Baseball Hat'><input type='hidden' name='item_number' value='123'><input type='hidden' name='amount' value='5.95'><input type='hidden' name='shipping' value='1.00'><input type='hidden' name='shipping2' value='0.50'><input type='hidden' name='handling' value='2.00 '><input type='hidden' name='currency_code' value='USD'><input type='hidden' name='return' value=''><input type='hidden' name='undefined_quantity' value='1'><input type='image' src='http://www.paypalobjects.com/en_US/i/btn/x-click-but22.gif' border='0' name='submit' width='87' height='23' alt='Make payments with PayPal - its fast, free and secure!'></fieldset></form></li>";
		}
        links.innerHTML = texts;
}
}
a.a();
}