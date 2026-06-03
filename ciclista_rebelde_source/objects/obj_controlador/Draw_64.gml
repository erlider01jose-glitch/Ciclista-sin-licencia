/// @description Insert description here
// You can write your code in this editor

if room == rm_jogo {
	draw_set_font(fnt_padrao);
	draw_text(40, 40, "PONTOS:" + string(global.pontos));
	draw_text(40, 70, "VOLTAS:" + string(global.voltas-1) + " de 3");
}
