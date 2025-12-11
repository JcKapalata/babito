export class Produit {
    id: number;
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
    imageUrl: string[];

    constructor(
        id: number, 
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
        imageUrl: string[]
    ) {
        this.id = id;
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
        this.imageUrl = imageUrl;
    }
}