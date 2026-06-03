/// @description Insert description here
// You can write your code in this editor

if room == rm_jogo {
	if instance_number(obj_player2) < num_bots -1 {
		instance_create_layer(_pth_x, _pth_y,"Instances",obj_player2)
	}

	show_debug_message("total de voltas:" + string(global.pontos));

	if global.voltas-1 == 3 game_restart();


	if keyboard_check_pressed(ord("R")) {
		game_restart();
	}
}