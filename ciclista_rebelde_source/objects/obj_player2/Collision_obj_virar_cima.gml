/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor
angulo_camera_ant = angulo_camera_nov;

var atual_id = instance_place(x, y, obj_curva_direita);
if atual_id == antiga_id exit;

direction = 90;
angulo_camera_nov = 0;
antiga_id = instance_place(x, y, obj_curva_direita);

//show_debug_message("Angulo do Player" + string(image_angle));
//show_debug_message("Angulo da camera" + string(angulo_camera));
//show_debug_message("Direction" + string(direction));