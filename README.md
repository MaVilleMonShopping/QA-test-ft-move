# QA-test-ft-move

Socle pour la mise en place de tests Appiul
## Outils necessaires:
- NodeJS
- Android Studio
- Android SDK (via Android Studio)
- Un emulateur android avec les googles servcies et le play store (Par exemple: Pixel 4 Android 13)

## Ecrire les tests

Chaque scénario de tests doit se trouver dans le dossier appium/specs.

Un scénario doit être écrit en js, dans un fichier dont le nom se terminer par ```.e2e.js```.

L'ensemble des assertions doivent être réalisées via [Should.js](https://shouldjs.github.io/)

Les tests doivent utiliser [mocha-step](https://github.com/rprieto/mocha-steps) ```step()``` pour leur definition en lieu et place de ```test()```.

Un scenario d'exemple est disponible dans ```appium/specs/dumb.e2e.js```

Les tests appium reposent sur [webdriverio](https://webdriver.io/).

  
## Executer les tests


**NODEJS et Andoroid Studio + Android SDKdoit etre installé sur votre machine**

Pour lancer les tests, il suffit d'executer la commande suivante à la racine du projet:

```bash
./run.sh
```

Le fichier apk de l'application cible doit se trouver à la racine du projet et porter le nom ```android.apk```.

Vous pouvez télécharger l'apk en cliquant sur ce lien: https://github.com/MaVilleMonShopping/mobile-qa-test-case/releases/download/v1.0.0/android.apk

Il faut un emulateur android en cours d'execution.

Le script se charge d'installer l'ensemble des modules node necessaires, de lancer un serveur appium et d'executer les test dans l'emulateur.