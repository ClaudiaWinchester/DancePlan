function funcCoreo(){
	var nivel1 = Array("Fly", "Fly con bulla", "Fly montañero", "Para abajo", "Enchufla", "Enchufla doble", "Enchufla triple",
						"Dame una", "Torniquete", "Para arriba", "La prima", "La mujer manda", "Cachito", "Cachito doble",
						"Cachito de jamón", "Traquetea", "Yogurt", "Yogurt invertido", "Cachito hasta la tuya", "Cachito de la mujer",
						"Cachito de jamón de la mujer", "Cachito hasta el tuyo", "Al centro, Mata la cucaracha, Quedó viva, A lo moderno, Era una rata", 
						"Saca agua del pozo", "El hombre orina", "La mujer orina", "Sombrero", "Vacuna");

	var nivel2 = Array("Prima con la hermana", "Enchufla y dame una", "Pelota 1", "Pelota 2", "Pelota 3", "Festival de pelotas",
						"Enchufla con Raulín", "Dame 2", "Dame 2 con 2", "Echavarría", "Yogurt desde abajo", "El dedo", "69",
						"Vacílala", "Congélate", "Vacila con ella", "Doble play", "Exhíbela", "Exhíbela 2 veces", "Exhíbela 3 veces",
						"Sombrero con derrumbe", "Enchufla con mambo", "70");

	var nivel3 = Array("Evelyn", "Montaña", "El 2", "Una para arriba", "70 pa' ti", "Prima con toda la familia", "Cadeneta", "El 7",
						"Tómale una foto", "Enchufla Evelyn al centro", "Machos", "3 pulpitos", "Carrusel", "Llévala al cielo", "La flor",
						"21", "84", "Enchufla con el cojo", "Enchufla con el poli");

	var nivel4 = Array("Dame una y no le llegues", "Enchufla a lo moderno", "Vacila y dame una", "Echavarría con giro", "33", "El 0",
						"El 8", "71", "Dedo con una mano", "Kentucky", "Enchufla con trompo", "Echavarría con 2 giros", "Cachito de mentiras",
						"Serrucho", "La mujer resuelve", "Enchufla con Coca Cola", "Enchufla y escóndela", "Abanico");

	var nivel5 = Array("Pelota loca", "Montaña rusa", "Dame una con Coca Cola", "Exhíbela con el 0", "Ruleta", "Ruleta invertida", "Besito",
						"Abrázala", "7 con Coca Cola", "Combo 1", "72", "Dame dos con Cuba", "Enchufla arriba", "Prima arriba",
						"Enchufla con Susie Q");

	var nivel6 = Array("7 moderno", "Dedo, guarapo y bota", "Balsero", "Pin pelota", "70 complicado", "Sombréala", "Exhíbela hasta afuera",
						"Brazalete", "Enchufla con Susie Q complicado", "Mimi Mimi", "Dame 2 tías", "Dámela por las manos", "Tranca",
						"Chica", "Enchufla con el Chavo", "Combo 2");

	var nivel7 = Array("La tralla", "Sambuca", "Enchufla y paséala", "Marrugo", "Enchufla y paséala por arriba",
						"Enchufla con Coca Cola por detrás", "Sombrero doble", "Consorte", "El 12", "Dámela directo",
						"Dámela directo y ruédala", "Enchufla con engaño", "Pásatela por el filo", "75 con engaño", "69 complicado",
						"7-70", "Dámela directo y bota", "Juana la cubana");

	var nivel8 = Array("El nudo", "Ponle sabor", "Enchufla con arrodillada", "Dedo saboreado", "Vacila y floréala", "Montaña doble",
						"Cun cun", "Enchufla, pasea y complícate", "Tornillo", "7 loco", "El Zorro");

	var nivel9 = Array("70 doble", "Vacila doble", "Dame 2 y la del medio", "Enchufla con bikini", "Tira la sábana", "Muñequito",
						"Dedo doble", "Sombrero nuevo", "Tirabuzón", "Pelotas revueltas", "Evelyn doble", "La Habana", "Sombrero de mami",
						"La Yuli", "Raulín doble", "El bebe", "Ni pa' ti ni pa' mí", "Caracas", "La propia", "La trenza", "Latin fest",
						"Remolino", "Susie Q doble");

	var nivel10 = Array("Titanic", "7 loco complicado", "No le llegues complicado", "Alcachofa", "Pivot", "Nudo complicado", "El reloj",
						"Abanico complicado", "La Jenny", "Desplazadas", "70 por las manos", "La cuadra", "Enchufla con pilón", 
						"3 Way Stop", "Nalgada", "Enchufla y saluda a lo moderno");
	
	switch (numNivel){
		default: console.log("Selecciona un nivel.");

		case 1: coreoAleatoria.length = nivel1.length;
		break;

		case 2: coreoAleatoria.length = nivel1.length + nivel2.length;
		break;

		case 3: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length;
		break;

		case 4: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length;
		break;

		case 5: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length;
		break;

		case 6: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length + nivel6.length;
		break;

		case 7: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length + nivel6.length
		+ nivel7.length;
		break;

		case 8: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length + nivel6.length
		+ nivel7.length + nivel8.length;
		break;

		case 9: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length + nivel6.length
		+ nivel7.length + nivel8.length + nivel9.length;
		break;

		case 10: coreoAleatoria.length = nivel1.length + nivel2.length + nivel3.length + nivel4.length + nivel5.length + nivel6.length
		+ nivel7.length + nivel8.length + nivel9.length + nivel10.length;
		break;
	}

	var pasosBaile = ["Fly", "Fly con bulla", "Fly montañero", "Para abajo", "Enchufla", "Enchufla doble", "Enchufla triple",
					"Dame una", "Torniquete", "Para arriba", "La prima", "La mujer manda", "Cachito", "Cachito doble",
					"Cachito de jamón", "Traquetea", "Yogurt", "Yogurt invertido", "Cachito hasta la tuya", "Cachito de la mujer",
					"Cachito de jamón de la mujer", "Cachito hasta el tuyo", "Al centro, Mata la cucaracha, Quedó viva, A lo moderno, Era una rata",
					"Saca agua del pozo", "El hombre orina", "La mujer orina", "Sombrero", "Vacuna", "Prima con la hermana",
					"Enchufla y dame una", "Pelota 1", "Pelota 2", "Pelota 3", "Festival de pelotas", "Enchufla con Raulín",
					"Dame 2", "Dame 2 con 2", "Echavarría", "Yogurt desde abajo", "El dedo", "69", "Vacílala", "Congélate",
					"Vacila con ella", "Doble play", "Exhíbela", "Exhíbela 2 veces", "Exhíbela 3 veces", "Sombrero con derrumbe",
					"Enchufla con mambo", "70", "Evelyn", "Montaña", "El 2", "Una para arriba", "70 pa' ti", "Prima con toda la familia",
					"Cadeneta", "El 7", "Tómale una foto", "Enchufla Evelyn al centro", "Machos", "3 pulpitos", "Carrusel",
					"Llévala al cielo", "La flor", "21", "84", "Enchufla con el cojo", "Enchufla con el poli", "Dame una y no le llegues",
					"Enchufla a lo moderno", "Vacila y dame una", "Echavarría con giro", "33", "El 0", "El 8", "71", "Dedo con una mano",
					"Kentucky", "Enchufla con trompo", "Echavarría con 2 giros", "Cachito de mentiras",	"Serrucho", "La mujer resuelve",
					"Enchufla con Coca Cola", "Enchufla y escóndela", "Abanico", "Pelota loca", "Montaña rusa", "Dame una con Coca Cola",
					"Exhíbela con el 0", "Ruleta", "Ruleta invertida", "Besito", "Abrázala", "7 con Coca Cola", "Combo 1", "72",
					"Dame dos con Cuba", "Enchufla arriba", "Prima arriba",	"Enchufla con Susie Q", "7 moderno", "Dedo, guarapo y bota",
					"Balsero", "Pin pelota", "70 complicado", "Sombréala", "Exhíbela hasta afuera", "Brazalete",
					"Enchufla con Susie Q complicado", "Mimi Mimi", "Dame 2 tías", "Dámela por las manos", "Tranca", "Chica",
					"Enchufla con el Chavo", "Combo 2", "La tralla", "Sambuca", "Enchufla y paséala", "Marrugo", 
					"Enchufla y paséala por arriba", "Enchufla con Coca Cola por detrás", "Sombrero doble", "Consorte", "El 12",
					"Dámela directo", "Dámela directo y ruédala", "Enchufla con engaño", "Pásatela por el filo", "75 con engaño",
					"69 complicado", "7-70", "Dámela directo y bota", "Juana la cubana", "El nudo", "Ponle sabor",
					"Enchufla con arrodillada", "Dedo saboreado", "Vacila y floréala", "Montaña doble", "Cun cun",
					"Enchufla, pasea y complícate", "Tornillo", "7 loco", "El Zorro", "70 doble", "Vacila doble", "Dame 2 y la del medio",
					"Enchufla con bikini", "Tira la sábana", "Muñequito", "Dedo doble", "Sombrero nuevo", "Tirabuzón", "Pelotas revueltas",
					"Evelyn doble", "La Habana", "Sombrero de mami", "La Yuli", "Raulín doble", "El bebe", "Ni pa' ti ni pa' mí", "Caracas",
					"La propia", "La trenza", "Latin fest", "Remolino", "Susie Q doble", "Titanic", "7 loco complicado",
					"No le llegues complicado", "Alcachofa", "Pivot", "Nudo complicado", "El reloj", "Abanico complicado", "La Jenny",
					"Desplazadas", "70 por las manos", "La cuadra", "Enchufla con pilón", "3 Way Stop", "Nalgada",
					"Enchufla y saluda a lo moderno"];

	var coreoRandom=[];
	var posicionesElegidas=[];
	var i,j,r,c;
	var text = "¡Bailemos!";

	for(i=0; i<20; i++){
		r = Math.floor(Math.random()*(pasosBaile.length-posicionesElegidas.length))+1;
		c = 0;
		j = 0;
		do if (posicionesElegidas.indexOf(j++)==-1) c++; while(c<r);
		j--;
		coreoRandom.push(pasosBaile[j]);
		posicionesElegidas.push(j);
		document.write(coreoRandom[i] + "<br/>");
	}
}