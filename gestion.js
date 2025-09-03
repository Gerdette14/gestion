//Récuperer les donnée par leur id depuis HTML
const formGestion = document.getElementById('formGestion')
const inputNom = document.getElementById('inputNom')
const inputEmail = document.getElementById('inputEmail')
const btnAjouter = document.getElementById('btnAjouter')
const ListUtilisateur = document.getElementById('ListUtilisateur')

let Utilisateurs = [
  { nom: "Aminata", email: "aminata@example.com" },
  { nom: "Jean", email: "jean@example.com" }
];

function afficherUtilisateurs(){
    ListUtilisateur.innerHTML = "";
     Utilisateurs.forEach((Utilisateur, index) =>{
       //créaction de li et affichage du nom et l'email
        let li = document.createElement('li')
        let texte = document.createElement('span')
        texte.textContent = " Nom:" + Utilisateur.nom + "     Email:" + Utilisateur.email
        
        //creation du Bouton modifer
        const btnModifier = document.createElement("button")
        btnModifier.textContent= "Modifier"
        btnModifier.dataset.index = index
        
        btnModifier.addEventListener('click', () =>{
           ModifierUtilisateur(index)
        })
    
        //creation du bouton supprimer
        const btnSupprimer = document.createElement("button")
        btnSupprimer.textContent = "Suprimer"
        btnSupprimer.dataset.index = index

        btnSupprimer.addEventListener('click', () =>{
            SuprimerUtilisateur(index)
        })
       
        // Assembler les éléments
        li.appendChild(texte);
        li.appendChild(btnModifier);
        li.appendChild(btnSupprimer);
        ListUtilisateur.appendChild(li);

     })
     
}

function SuprimerUtilisateur(index){
        Utilisateurs.splice( index,1 )
        afficherUtilisateurs()
     }
     
function ModifierUtilisateur(index){
       const nouveauNom = prompt("Nouveau nom :", Utilisateurs[index].nom);
       const nouvelEmail = prompt("Nouveau email:", Utilisateurs[index].email);

        if (nouveauNom && nouvelEmail) {
        Utilisateurs[index] = { nom: nouveauNom, email: nouvelEmail };
        afficherUtilisateurs();}
     }


function ajouterUtilisateurs(){
    const nom = inputNom.value;
    const email= inputEmail.value;
    
    //verification de l'email et du nom
    if(nom ===""){
        alert("le nom est obligatoire")
         return false;
    }
   

    if (email ===""){
        alert("l'email est obligatoire")
         return false;
    }
   

    //verification de l'email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert("l'email est invalide")
         return;
    }


    Utilisateurs.push({nom:nom , email: email})
   afficherUtilisateurs()
   
   inputNom.value="";
   inputEmail.value="";

}
  formGestion.addEventListener('submit', function(e){
        e.preventDefault() //pour empêcher les rechargement de la page
        ajouterUtilisateurs() 
    
    })
   afficherUtilisateurs()
/*li.className = "flex justify-between items-center bg-white p-2 rounded shadow";
btnModifier.className = "bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500";
btnSupprimer.className = "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2";
*/