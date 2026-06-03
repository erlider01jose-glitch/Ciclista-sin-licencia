/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor


///Checando se esta em movimento
if keyboard_check(BotAcelerar) and sprite_index != spr_player_caindo{
	speed = lerp(speed, 4, 0.04);
		
	///--- verificando se esta na direção correta, para ir para o lado certo
	//checando a esquerda
	if keyboard_check(BotEsquerda){
		if direction == 90
			x -= veloc;
		if direction == 0
			y -= veloc;
		if direction == 270
			x += veloc; 
		if direction == 180
			y += veloc;
	}/// checando as curvas da corrida da setinha esquerda
	if keyboard_check(BotEsquerda){
		if direction > 0 and direction < 90{
			y -= veloccurva*sin((direction*3.14)/180);
			x -= veloccurva*cos((direction*3.14)/180);
		}
		
		if direction > 270 and direction < 360{
			y += veloccurva*sin((direction*3.14)/180);
			x += veloccurva*cos((direction*3.14)/180);
		}
		
		if direction > 180 and direction < 270{
			y -= veloccurva*sin((direction*3.14)/180);
			x -= veloccurva*cos((direction*3.14)/180);
		}
		
		if direction > 90 and direction < 180{
			y += veloccurva*sin((direction*3.14)/180);
			x += veloccurva*cos((direction*3.14)/180);
		}
	}

	//checando a direita
	if keyboard_check(BotDireita){
		if direction == 90
			x += veloc;
		if direction == 0
			y += veloc;
		if direction == 270
			x -= veloc; 
		if direction == 180
			y -= veloc;
	}/// checando as curvas da corrida da setinha esquerda
	if keyboard_check(BotDireita){
		if direction > 0 and direction < 90{
			y += veloc*sin((direction*3.14)/180);
			x += veloc*cos((direction*3.14)/180);
		}
		
		if direction > 270 and direction < 360{
			y -= veloc*sin((direction*3.14)/180);
			x -= veloc*cos((direction*3.14)/180);
		}
		
		if direction > 180 and direction < 270{
			y += veloc*sin((direction*3.14)/180);
			x += veloc*cos((direction*3.14)/180);
		}
		
		if direction > 90 and direction < 180{
			y -= veloc*sin((direction*3.14)/180);
			x -= veloc*cos((direction*3.14)/180);
		}
	}

	
}else if sprite_index == spr_player_caindo{
	speed = 0;
}else {
	speed = lerp(speed, 0, 0.03);
	//if speed < 4   image_index = 1;
}


///Checando Ataque de Banana
if keyboard_check_pressed(AtaqBanana) and anima_fim == true and ModoInvencivel == false{
	id_banana = instance_create_layer(x, y, "Instances", obj_banana);
}

///Checando Ataque de Oleo
if keyboard_check(AtaqOleo) and alarm[0] <= 0 and ModoInvencivel == false{
	instance_create_layer(x, y, "Instances", obj_oleo);
	//espaço entre um oleo e outro
	alarm [0] = 4
}

//desenhando Golpe
if mouse_check_button_pressed(mb_left) and ModoInvencivel == false{
	//alarme cria a hitbox na hora do golpe
	alarm[1] = tempohitbox;
}


//checando velocidade turbo
if keyboard_check(AtaqMotor){
	ModoInvencivel = true;
	speed = lerp(speed, 15, 0.05)
}else {
	ModoInvencivel = false;
}

//audio_stop_sound(snd_bike);
if speed > 0 and !audio_is_playing(snd_bike){
	audio_play_sound(snd_bike, 1, false,0.3,0,0.9);
}
if (speed < 1 and audio_is_playing(snd_bike)) or audio_is_playing(snd_turbobike) {
	audio_stop_sound(snd_bike);
}


angulo_camera = lerp(angulo_camera, angulo_camera_ant, 0.06)
camera_set_view_angle(view_camera[0], angulo_camera);

image_angle = -angulo_camera;

//var altura = browser_height;
//var largura = browser_width;

camera_set_view_pos(view_camera[0], x - 320, y - 200);

//show_debug_message("Angulo do Player" + string(image_angle));
//show_debug_message("Angulo da camera" + string(angulo_camera));
//show_debug_message("Direction" + string(direction));