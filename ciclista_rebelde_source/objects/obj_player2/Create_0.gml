/// @description Inserir descrição aqui
// Você pode escrever seu código neste editor
randomize();

//caminhos dos inimigos
path[0] = pth_raceline1;
path[1] = pth_raceline2;
path[2] = pth_raceline3;

inimigo_speed = random_range(3,5);

// iniciando o caminho
path_start(path[irandom(2)],0,1,1);
path_position = 0.9;
Checa_colisao = false;

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


// efeito visual turbo
efeitoturbo = false;

veloc = 3;
veloccurva = 2;
direction = 90;
cont = 0;

//controle automatico da IA
esquerda = false;
direita = false;


//show_debug_message("Angulo do Player" + string(image_angle));
//show_debug_message("Angulo da camera" + string(angulo_camera));
//show_debug_message("Direction" + string(direction));




