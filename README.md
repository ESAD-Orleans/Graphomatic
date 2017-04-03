# Graphomatic

Générateur d’affiches *décallées* à partir d’une saisie de taxonomie et de mots-clés, 
accompagné d’un argumentaire généré en association à l’affiche. 

Projet faisant partie du projet plastique de DNSEP de Lucciano Espeso, en 2014. 
Programmation ÉSAD Orléans / Arthur Violy

## installation du projet

le projet requiert un environnement Apache/PHP, même si pas besoin de base de donnée.

- `WAMP` (sur Windows)
- `MAMP` (sur OSX)
- `Apache + PHP` ou `Nginx + PHP` (sur Linux) pour un serveur web publique, par exemple

### exemple sur MAMP (OSX)

Une installation rapide est de cloner le projet directement dans `/Application/MAMP/htdocs`
	
	cd /Application/MAMP/htdocs
	git clone https://github.com/ESAD-Orleans/Graphomatic.git


S’affiche alors ceci 

	Cloning into 'Graphomatic'...
	remote: Counting objects: 366, done.
	remote: Total 366 (delta 0), reused 0 (delta 0), pack-reused 366
	Receiving objects: 100% (366/366), 1.79 MiB | 483.00 KiB/s, done.
	Resolving deltas: 100% (226/226), done.
  
  
Il suffit d’ouvrir un navigateur web (attention au port configuré dans MAMP, par défaut 8080)

	http://localhost:8080/Graphomatic/
	
## fonts

Le dossier `fonts` a été ignoré du projet car les fonts avaient été publiées sur Github sans licence, puis retiré suite à une demande https://github.com/ESAD-Orleans/Graphomatic/issues/1 —
Il faut donc *ou bien* retrouver les fonts par vous même, *ou bien* me les demander en privé.

## démonstration

Le projet est visible à cette adresse
http://nterfaces.org/Graphitron3125/
