export class Produit {
    id: number;
    nom: string;
    description: string;
    prix: number;
    imageUrl: string;

    constructor(id: number, nom: string, description: string, prix: number, imageUrl: string) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.imageUrl = imageUrl;
    }
}