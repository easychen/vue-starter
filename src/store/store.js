import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'
import $ from 'jquery'


const store = new EventEmitter()
const ApiBase = 'http://api.demo.com';

export default store

/*
store.checkLogin = function()
{
	return new Promise(function( resolve, reject ){
		
		NProgress.start();

		$.ajax({
		    url: pbApiBase+'/login/check',
		    type: 'get',
		    data: {
		        'logintoken': token
		    },
		    headers: {
		        'LP4-Request-Type': 'json' 
		    },
		    dataType: 'json',
		    success: function (data) {
		        
		    	NProgress.done();
		        
		        if( parseInt(data.code) != 0 )
		        	reject( data.message );
		        else
		        	resolve(data.data);
		    }
		});
	});
}
*/