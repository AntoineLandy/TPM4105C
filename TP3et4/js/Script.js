$(document).ready(function() {
	$("a[rel='galerie']").click(function(event){
		event.preventDefault();
		$('.lightbox').fadeIn();
		$('.voile').fadeIn();
		if($(this).index()==0){
			$('.lightbox').html('<img src="' + $(this).attr('href')+'"/>' + '<a class="fleche2" rel="'+($(this).index()+1)+'"> &rsaquo; </a>');
		}
		else if($(this).index()==$("a[rel='galerie']").length-1){
			$('.lightbox').html('<a class="fleche1" rel="'+($(this).index()-1)+'"> &lsaquo; </a>' + '<img src="' + $(this).attr('href')+'"/>');
		}
		else {
			$('.lightbox').html('<a class="fleche1" rel="'+($(this).index()-1)+'"> &lsaquo; </a>' + '<img src="' + $(this).attr('href')+'"/>' + '<a class="fleche2" rel="'+($(this).index()+1)+'"> &rsaquo; </a>');
		}
	});
	$("body").on("click", ".fleche1", function(e){ 
		var indexphoto=$(this).attr('rel');
		console.log(indexphoto);
		$("a[rel='galerie']")[indexphoto].click();
	});
	$("body").on("click", ".fleche2", function(e){ 
		var indexphoto=$(this).attr('rel');
		console.log(indexphoto);
		$("a[rel='galerie']")[indexphoto].click();
	});
	$('.voile').click(function(){
		$('.lightbox').fadeOut();
		$('.voile').fadeOut();
	});
});
    
    
    
    
    /*
    
    
    
	function onDeviceReady() {
		console.log(navigator.contacts);
	}
	
	function onSuccess(contacts) {
		alert('Found ' + contacts.length + ' contacts.');
	};

	function onError(contactError) {
		alert('onError!');
	};

	$(#content).append(){
		
	}
});
    
    
    document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	function checkConnection() {
		var networkState = navigator.connection.type;

		var etat = {};
		etat[Connection.UNKNOWN]  = 'Unknown connection';
		etat[Connection.ETHERNET] = 'Ethernet connection';
		etat[Connection.WIFI]     = 'WiFi connection';
		etat[Connection.CELL_2G]  = 'Connexion 2G';
		etat[Connection.CELL_3G]  = 'Connexion 3G';
		etat[Connection.CELL_4G]  = 'Connexion 4G';
		etat[Connection.CELL]     = 'Cell generic connection';
		etat[Connection.NONE]     = 'No network connection';

		alert('Etat Connexion: ' + etat[networkState]);
	}

	checkConnection();
	
	var lang = document.getElementById('lang');

	
	function checkLanguage(){
		navigator.globalization.getPreferredLanguage(
				function(language){lang.innerHTML = 'language: ' + language.value + '<br />';}
			);
	};
	
	checkLanguage();
	
	
	
	var element = document.getElementById('deviceProperties');

    element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                        'Device Cordova: '  + device.cordova + '<br />' + 
                        'Device Platform: ' + device.platform + '<br />' + 
                        'Device UUID: '     + device.uuid     + '<br />' + 
                        'Device Model: '    + device.model     + '<br />' + 
                        'Device Version: '  + device.version  + '<br />';
    
	function findContact(){
		var options = new ContactFindOptions();
		options.filter = "";
		options.multiple = true;
		
		var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		navigator.contacts.find(fields,onSuccess,onError,options);
	
	
		function onSuccess(contacts){
			for(var i=0; i<contacts.length; i++){
				$(".contact ul").append('<div><li>'+contacts[i].displayName+''+'</li>'+''+'</div>');
			}
		}
		
		function onError(contactError){
			alert('onError');
		}
	}
		
	findContact();
	
}*/