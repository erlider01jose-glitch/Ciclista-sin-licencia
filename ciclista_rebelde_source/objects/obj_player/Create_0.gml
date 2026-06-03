/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor

angulo_camera = 0;
angulo_camera_ant = 0;
angulo_camera_nov = 0;

anima_fim = true;

///checar curva
antiga_id = instance_id;
id_banana = 0;
id_oleo = 0;

//tempo do alarm do Oleo
alarm[0] = 0;
// tempo do hitbox do Pau
tempohitbox = 15;


// efeito visual turbo
efeitoturbo = false;

veloc = 1.4;
veloccurva = 2;
direction = 90;

//Checar poderes
ModoInvencivel = false;

instance_create_layer(0,0, "instances", obj_controlador)

audio_play_sound(snd_musicajogo, 1, true);



//Teclas de controle do jogo
//Acelerar
BotAcelerar = ord("W");
//Direita
BotDireita = ord("D");
//Esquerda
BotEsquerda = ord("A");
//Ataque de Banana
AtaqBanana = ord("Q");
//Ataque de Oleo
AtaqOleo = vk_space;
//Motor
AtaqMotor = ord("E");

show_debug_message("Angulo do Player" + string(image_angle));
show_debug_message("Angulo da camera" + string(angulo_camera));
show_debug_message("Direction" + string(direction));




