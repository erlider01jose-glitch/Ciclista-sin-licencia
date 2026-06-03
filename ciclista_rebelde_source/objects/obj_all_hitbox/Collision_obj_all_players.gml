/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor

var _x = other.x + lengthdir_x(-20, other.image_angle - 90);
var _y = other.y + lengthdir_y(-20, other.image_angle - 90);

if alarm[2] <= 0 {
	instance_create_layer(_x, _y, "Effects", obj_efeito_golpe);
	alarm[2] = 20
}




