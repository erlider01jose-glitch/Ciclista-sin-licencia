/// @description Tempo do hitbox Bastão
// Você pode escrever seu código neste editor

//desenhando Golpe Pra Esquerda
if global.mousenaDireita == false{
	instance_create_layer(x, y, "Instances", obj_hitbox_esquerda);
}

//desenhando Golpe Pra Direita
if global.mousenaDireita == true{
	instance_create_layer(x, y, "Instances", obj_hitbox_direita);
}










