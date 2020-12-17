## Test technique Cook it

**Mise en place**

- Clonez le repository `git clone cookit-front-end-test-{votre_nom_de_famille}`
- roulez `npm i` pour installer les modules node 
- roulez `npm start` pour démarrer le projet

**Technologies utilisées**

- React (https://reactjs.org/)
- Typescript (https://www.typescriptlang.org/)
- Axios (Validation code postal) (https://github.com/axios/axios)
- Jest (Tests unitaire) (https://jestjs.io/)
- Redux (Langue et Theme) (https://redux.js.org/)
- Styled component (Styling) (https://styled-components.com/)
- i18next (Localization) (https://www.i18next.com/)

---

**Test**

Pour completer le test vous devez terminer le formulaire d'abonnement selon les critères décrits dans la "User story" suivante:

ETQ utilisateur s'abonnant à Cook it:
- Je m'attend à fournir:
  - Mon courriel
  - Mon code postal
- Je souhaite voir un message d'erreur si mon courriel a un format invalide
- Je souhaite voir un message d'erreur si mon code postal a un format invalide
- Je souhaite voir un message d'erreur si mon code postal n'est pas présent dans la liste des codes postaux disponibles (API: `https://s9g64p6vzb.execute-api.us-east-1.amazonaws.com/default/interview-is-zip-valid`)
- Je souhaite pouvoir soumettre mes informations et être redirigé vers une page de confirmation
- Je souhaite voir mes informations soumises présentes sur la page page de confirmation

ETQ Code reviewer:
- Je souhaite voir une pull request compréhensible des changements apportés

ETQ Développeur travaillant sur ce projet après l'implémentation:
- je souhaite pouvoir rouler les tests unitaires (`npm run test`) pour savoir si mes changements ont causés une régression

---

API:

validation du code postal:

https://s9g64p6vzb.execute-api.us-east-1.amazonaws.com/default/interview-is-zip-valid

Parameters:

| parameter     | type          | required |
| ------------- |:-------------:| --------:|
| zip           | string        | false    |


Return:

{
    "is_deliverable": boolean,
    "has_error": boolean,
    "error_message": string
}
