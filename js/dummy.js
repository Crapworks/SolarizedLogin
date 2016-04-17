if (!('lightdm' in window)) {
  window.lightdm = {
	"timed_login_delay":5,
	"hostname":"linux",
	"timed_login_user":"",
	"is_authenticated":false,
	"can_hibernate":true,
	"num_users":2,
	"default_session":"default",
	"can_suspend":true,
	"authentication_user":"",
	"layout":"us",
	"can_shutdown":true,
	"can_restart":true,
	"sessions":[
	{
	"name":"Xfce Session",
	"key":"xfce",
	"comment":"Use this session to run Xfce as your desktop environment"
	}
	],
	"users":[
	{
	"language":"en_US.utf8",
	"image":"/home/user1/.face",
	"display_name":"Lorem Ipsum",
	"name":"lorem",
	"session":"default",
	"real_name":"Lorem Ipsum",
	"layout":null,
	"logged_in":true
	},
	{
	"language":"en_US.utf8",
	"image":"/home/user2/.face",
	"display_name":"Aliquam Non",
	"name":"aliquam",
	"session":"default",
	"real_name":"Aliquam Non",
	"layout":null,
	"logged_in":false
	},
		{
	"language":"en_US.utf8",
	"image":"/home/user2/.face",
	"display_name":"Aptent Taciti",
	"name":"aptent",
	"session":"default",
	"real_name":"Aptent Taciti",
	"layout":null,
	"logged_in":false
	},
		{
	"language":"en_US.utf8",
	"image":"/home/user2/.face",
	"display_name":"Litora Torquent",
	"name":"litora",
	"session":"default",
	"real_name":"Litora Torquent",
	"layout":null,
	"logged_in":false
	}
	],
	"default_layout":"us"
	}

	window.lightdm.cancel_timed_login = function() {};
	window.lightdm.start_authentication = function() {};
	window.lightdm.login = function(user, password) {
		alert('You have logged in!');
		window.location = window.location;
	}
	window.lightdm.provide_secret = function() {
		setTimeout(function() {
			window.lightdm.is_authenticated = Boolean(Math.round(Math.random()));
			window.authentication_complete()
		}, 1000);
	};
}
