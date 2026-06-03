/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor
if image_index <= image_number and sprite_index == spr_player_macaco exit; 
if ModoInvencivel == true exit;

var atual_id = instance_place(x, y, obj_banana);
//if atual_id == id_banana exit;

sprite_index = spr_player_caindo;
image_index = 0;
if id_banana == atual_id exit;
instance_destroy(atual_id);
//id_banana = atual_id;

anima_fim = true;







