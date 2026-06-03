/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor

path_speed = lerp(inimigo_speed, path_speed, 0.1);
///Checando se esta em movimento
//speed = 4;
		

	
if sprite_index == spr_inimigo_caido{
	path_speed = 0;
	instance_destroy();
}else {
	path_speed = lerp(path_speed, 0, 0.03);
	//if speed < 4   image_index = 1;
}


////checando golpe com Pau pra direita
//if keyboard_check(ord("C")){
//	//speed = lerp(speed, 15, 0.05)
//}



angulo_camera = lerp(angulo_camera, angulo_camera_ant, 0.04)
//camera_set_view_angle(view_camera[0], angulo_camera);

image_angle = -angulo_camera;

//var altura = browser_height;
//var largura = browser_width;

//camera_set_view_pos(view_camera[0], x - 320, y - 200);









//show_debug_message("Angulo do Player" + string(image_angle));
//show_debug_message("Angulo da camera" + string(angulo_camera));
//show_debug_message("Direction" + string(direction));