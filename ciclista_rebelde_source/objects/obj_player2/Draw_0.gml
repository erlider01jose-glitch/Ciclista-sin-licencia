/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor
if anima_fim = true and sprite_index != spr_inimigo_caindo{
	sprite_index = spr_inimigo;
	//if direita{
	//	sprite_index = spr_player_esquerda;
	//}
	//if esquerda{
	//	sprite_index = spr_player_direita;
	//}
}else if speed < 4 and anima_fim = true and sprite_index != spr_inimigo_caindo{
	image_index = 1;
}



////desenhando Golpe Pra Esquerda
//if keyboard_check_pressed(ord("C")) and keyboard_check(vk_left) and anima_fim = true {
//	image_index = 0;
//	sprite_index = spr_player_taco_esquerda;
//	anima_fim = false;
//}
//if image_index >= 3.8 and sprite_index == spr_player_taco_esquerda {
//	sprite_index = spr_player;
//	anima_fim = true;
//}

////desenhando Golpe Pra Direita
//if keyboard_check_pressed(ord("C")) and keyboard_check(vk_right) and anima_fim = true {
//	image_index = 0;
//	sprite_index = spr_player_taco_direita;
//	anima_fim = false;
//}
//if image_index >= 3.8 and sprite_index == spr_player_taco_direita {
//	sprite_index = spr_player;
//	anima_fim = true;
//}




////desenhando Super Motor
//if keyboard_check_pressed(ord("V")) and anima_fim = true {
//	image_index = 0;
//	sprite_index = spr_player_moto_ini;
//	anima_fim = false;
//	//inicio do efeito
//	efeitoturbo = true;
//	//inicio som
//	audio_play_sound(snd_turbobike,1,true);
//}
//if image_index >= image_number - 1 and sprite_index == spr_player_moto_ini {
//	sprite_index = spr_player_motor;
//}
//// encerrando Super Motor
//if keyboard_check_released(ord("V")){
//	image_index = 0;
//	sprite_index = spr_player_moto_fim;
//}
//if image_index >= image_number - 1 and sprite_index == spr_player_moto_fim {
//	efeitoturbo = false; // fim do efeito;
//	audio_stop_sound(snd_turbobike)// fim do som;
//	anima_fim = true;
//}



//if image_index >= image_number and anima_fim = false and sprite_index == spr_player_macaco{
//	sprite_index = spr_player;
//	anima_fim = true;
//}

//checando fim da animação caindo
if image_index >= image_number and sprite_index == spr_inimigo_caindo{
	sprite_index = spr_inimigo_caido;
	path_speed = 0;
	anima_fim = false;
	global.pontos += 500;
	if path_position + 0.1 > 1{
		randomize()
		obj_controlador._new_enemy_pos =random(1)
	}else {
		obj_controlador._new_enemy_pos += path_position + 0.1;
	}
	
	obj_controlador._pth_x = path_get_x(path_index,obj_controlador._new_enemy_pos)
	obj_controlador._pth_y = path_get_y(path_index,obj_controlador._new_enemy_pos)

	
	var lucas = "TATU"
	show_debug_message(lucas);
}


draw_self();













