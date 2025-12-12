export class Produit {
    id: number;
    code: string;
    nom: string;
    prix: number;
    devise: 'USD' | 'CDF';
    region: string;
    classement: string;
    categorie: string;
    type: string;
    taille: string[];
    couleur: string[];
    description: string;
    imagesParCouleur: { [couleur: string]: string }

    constructor(
        id: number, 
        code: string,
        nom: string,
        prix: number,
        devise: 'USD' | 'CDF',
        region: string,
        classement: string,
        categorie: string,
        type: string,
        taille: string[],
        couleur: string[], 
        description: string, 
        imagesParCouleur: { [couleur: string]: string }
    ) {
        this.id = id;
        this.code = code;
        this.nom = nom;
        this.prix = prix;
        this.devise = devise;
        this.region = region;
        this.classement = classement;
        this.categorie = categorie;
        this.type = type;
        this.taille = taille;
        this.couleur = couleur;
        this.description = description;
        this.imagesParCouleur = imagesParCouleur
    }
}