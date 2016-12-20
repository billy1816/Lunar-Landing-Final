# Lunar-Landing-Final
Projecte Lunar Landing Final (HTML, CSS i JS)
El projecte ha esta basat en l'exercici anteriorment fet d'HTML i CSS, però aquesta vegada afegint JS. L'objectiu era crear un moviment i que tengues coherencia amb els valors d'altura, velocitat i fuel. Personalment ha estat bastant complex, ja que els meus coneixements de javascript eren nuls, i la major part de les funcions eren desconegudes. 

Encara així, he aconseguit que el joc sigui funcional, i adaptable segons el tamany de pantalla. Al principi he tengut alguns problemes, perquè treballo amb una pantalla de 1440p junt amb una de 1080p, i comprovava el projecte a la segona. Quan he passat de 1080 a 1440, el fons i el joc s'ha deformat i no he sabut arreglar-ho fins al final. Per provar amb resolucions més petites he utilitzat l'eina "Inspeccionar" de Google Chrome, com va dir el professor al fòrum. La funcionalitat entre diferents tamanys de resolucions ha estat aconseguida gracies a crear dos .CSS diferents.

El funcionament és simple, res més es carrega la pàgina el joc comença. Pitjant qualsevol tecla, l'imatge canvia al mateix coet amb el motor encès. Cada segon que es pitja, es va gastant fuel i baixant la velocitat. Si arriba a 0 d'altura, que he intentat que coincideixi amb una posició coherent dins el fons, s'acaba el joc. Guanyes si has aterrat a menys de 5 m/s, perds si ho has fet a més velocitat.
Quan guanyes, surt un missatge de felicitació, i pots tornar a començar, o bé explorar el menu. 

A la pàgina "Instrucciones" ens explica el funcionament del joc descrit anteriorment. A la pàgina "Acerca de..." podem veure informació del creador així com els software que ha utilitzat. Passaré a llistar-lo aquí també: 
* Per les imatges, Adobe Photoshop CC
* Per CSS, HTML i JS, Visual Studio 2015.
* La font de les imatges és Freepik o de lliure distribució de la NASA

En general, l'estructura proporcionada no ha estat modificada, només alguns paràmetres del JS per quadrar l'altura amb l'imatge de fons.
També he afegit algunes variables aixi com la desactivació de les tecles després d'acabar el joc, això ha estat necessari perque si no el coet podia seguir encenguent-se.

Com l'anterior treball, aquest té dues veriants, la versió Indent i la Minify. 
