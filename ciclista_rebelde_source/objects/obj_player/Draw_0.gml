/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor
if keyboard_check(BotAcelerar) and anima_fim == true and sprite_index != spr_player_caindo{
	sprite_index = spr_player;
	if keyboard_check(BotEsquerda){
		sprite_index = spr_player_esquerda;
	}
	if keyboard_check(BotDireita){
		sprite_index = spr_player_direita;
	}
}else if speed < 4 and anima_fim = true and sprite_index != spr_player_caindo{
	image_index = 1;
}

//desenhando macaco
if keyboard_check_pressed(AtaqBanana) and anima_fim == true and ModoInvencivel == false {
	image_index = 0;
	sprite_index = spr_player_macaco;
	anima_fim = false;
}

//desenhando Oleo
if keyboard_check_pressed(AtaqOleo) and anima_fim == true and ModoInvencivel == false {
	image_index = 0;
	sprite_index = spr_player_jogando_oleo;
	anima_fim = false;
}
if image_index >= image_number - 1 and sprite_index == spr_player_jogando_oleo {
	sprite_index = spr_player_jogando_oleofixo;	
}
// encerrando animação do oleo
if keyboard_check_released(AtaqOleo){
	image_index = 0;
	sprite_index = spr_player_parando_oleo;
}
if image_index >= image_number - 1 and sprite_index == spr_player_parando_oleo {
	anima_fim = true;
}


//desenhando Golpe Pra Esquerda
if mouse_check_button_pressed(mb_left) and global.mousenaDireita == false and anima_fim == true and ModoInvencivel == false {
	image_index = 0;
	sprite_index = spr_player_taco_esquerda;
	anima_fim = false;
}
if image_index >= 3.8 and sprite_index == spr_player_taco_esquerda {
	sprite_index = spr_player;
	anima_fim = true;
}

//desenhando Golpe Pra Direita
if mouse_check_button_pressed(mb_left) and global.mousenaDireita == true and anima_fim == true and ModoInvencivel == false{
	image_index = 0;
	sprite_index = spr_player_taco_direita;
	anima_fim = false;
}
if image_index >= 3.8 and sprite_index == spr_player_taco_direita {
	sprite_index = spr_player;
	anima_fim = true;
}




//desenhando Super Motor
if keyboard_check_pressed(AtaqMotor) and anima_fim == true {
	image_index = 0;
	sprite_index = spr_player_moto_ini;
	anima_fim = false;
	//inicio do efeito
	efeitoturbo = true;
	//inicio som
	audio_play_sound(snd_turbobike,1,true);
}
if image_index >= image_number - 1 and sprite_index == spr_player_moto_ini {
	sprite_index = spr_player_motor;
}
// encerrando Super Motor
if keyboard_check_released(AtaqMotor){
	image_index = 0;
	sprite_index = spr_player_moto_fim;
}
if image_index >= image_number - 1 and sprite_index == spr_player_moto_fim {
	efeitoturbo = false; // fim do efeito;
	audio_stop_sound(snd_turbobike)// fim do som;
	anima_fim = true;
}



if image_index >= image_number and anima_fim == false and sprite_index == spr_player_macaco{
	sprite_index = spr_player;
	anima_fim = true;
}

//checando fim da animação caindo
if image_index >= image_number and sprite_index == spr_player_caindo{
	sprite_index = spr_player_caido;
	if keyboard_check(BotAcelerar){
		sprite_index = spr_player;
	}
}


draw_self();









