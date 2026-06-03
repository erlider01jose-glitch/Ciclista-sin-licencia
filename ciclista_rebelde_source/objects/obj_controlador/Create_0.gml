/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor

randomize();
global.pontos = 0;
global.voltas = 0;

num_bots = 36;
	// marcar pontos
_new_enemy_pos = random(1);
_pth_x = 1300;
_pth_y =3900;
global.mousenaDireita = false;


instance_create_layer(x, y, "Effects", obj_efeito_turbo);

instance_create_layer(x, y, "Effects", obj_marca_direita);

repeat(num_bots){
	randomize()
	instance_create_layer(1100+irandom_range(40,300), 4000+irandom_range(20,300), "Instances", obj_player2);
}

if audio_sound_is_playable(snd_menu) {
	audio_stop_sound(snd_menu);
}





