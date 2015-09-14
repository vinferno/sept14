function add_game(name_value){
   var new_game = name_value;
   if (new_game===''|| new_game===null){
   	return ;
   }
   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_unordered_list.appendChild(new_li);
	new_li.innerText = name_value; 
	new_li.classList.toggle("game_list_item");
};

function get_event_target(event_name) {
    event_name = event_name || window.event;
    return event_name.target || event_name.srcElement; 
};

function get_index(target){
	target_parent= target.parentElement;
	for (i=0;i<target_parent.children.length;i++){
		if (target_parent.children[i] === target){		
		};
	};
};

function make_minus(target){
	function_loop_mouse_enter();
	if (target.parentNode == game_unordered_list){
		if (target.children.length == 0){
			if (target != target_parent.children[0]){
			var new_minus = document.createElement('button');
		  	target.appendChild(new_minus);
			new_minus.innerText = "-"; 
			new_minus.classList.toggle("minus");
			add_minus_listener();
			};
		}else{if(target.children.length == 1){target.removeChild(target.children[0])};}
	};
};

var function_minus = function(target) {  
	if (target.innerText === "-"){ 
	target.parentNode.parentNode.removeChild(target.parentNode);
   }
};

var add_minus_listener = function(){
	var class_minus = document.getElementsByClassName("minus");
    for(var i=0;i<class_minus.length;i++){
        class_minus[i].addEventListener('click', function_minus, false);
    }
}

var function_loop_mouse_enter = function(){
	for (var i= 0;i<game_list_item.length;i++){
		game_list_item[i].addEventListener('mouseenter', function(){
		   	for (var i = 0;i < games.length; i++) {
		   			//alert(games[i]);
			   	if (games[i].children.length>0){
			   		games[i].removeChild(games[i].children[0]);
				   	
				};
   			};
		});
	};
};
