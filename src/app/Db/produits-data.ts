import { Produit } from "../Models/produits";

export const PRODUITS: Produit[] = [
  { 
    id: 1, 
    nom: 'Body bébé coton', 
    description: 'Body confortable 100% coton pour bébé.', 
    prix: 9.99, 
    devise: 'USD',
    categorie: 'Vêtement',
    type: 'Body',
    taille: ['6-9 mois'],
    couleur: ['Blanc'],
    imageUrl: ['/assets/imagesProduits/001.jpeg']
  },
  { 
    id: 2, 
    nom: 'Pyjama bébé', 
    description: 'Pyjama doux et chaud en velours.', 
    prix: 12.99, 
    devise: 'USD',
    categorie: 'Vêtement',
    type: 'Pyjama',
    taille: ['12-18 mois'],
    couleur: ['Bleu ciel'],
    imageUrl: ['/assets/imagesProduits/002.jpeg']
  },
  { 
    id: 3, 
    nom: 'Chaussettes colorées', 
    description: 'Lot de 5 paires de chaussettes en coton.', 
    prix: 5.99, 
    devise: 'USD',
    categorie: 'Accessoire',
    type: 'Chaussette',
    taille: ['Taille unique'],
    couleur: ['Multicolore'],
    imageUrl: ['/assets/imagesProduits/003.png']
  },
  { 
    id: 4, 
    nom: 'Jouet en peluche', 
    description: 'Peluche douce en forme d\'ours pour câlins.', 
    prix: 15.99, 
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Peluche',
    taille: ['30 cm', '40 cm'], // en cm
    couleur: ['Marron'],
    imageUrl: ['/assets/imagesProduits/004.jpeg']
  }, 
  { 
    id: 5, 
    nom: 'Cube d’éveil', 
    description: 'Cube sensoriel avec couleurs, textures et sons.', 
    prix: 18.99, 
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Éveil',
    taille: ['15 cm', '20 cm'], // en cm
    couleur: ['Rouge', 'Jaune', 'Bleu'],
    imageUrl: ['/assets/imagesProduits/005.jpeg']
  },
  { 
    id: 6, 
    nom: 'Hochet', 
    description: 'Hochet facile à tenir, sans BPA.', 
    prix: 7.99, 
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Éveil',
    taille: ['10 cm'], // en cm
    couleur: ['Vert'],
    imageUrl: ['/assets/imagesProduits/006.jpeg']
  },
  { 
    id: 7, 
    nom: 'T-shirt enfant', 
    description: 'T-shirt coton avec motif dinosaure fun.', 
    prix: 8.99, 
    devise: 'USD',
    categorie: 'Vêtement',
    type: 'T-shirt',
    taille: ['2 ans'],
    couleur: ['Jaune'],
    imageUrl: ['/assets/imagesProduits/007.jpeg']
  },
  { 
    id: 8, 
    nom: 'Short bébé', 
    description: 'Short léger en coton idéal pour l\'été.', 
    prix: 6.99, 
    devise: 'USD',
    categorie: 'Vêtement',
    type: 'Short',
    taille: ['6 mois'],
    couleur: ['Gris'],
    imageUrl: ['/assets/imagesProduits/008.jpeg']
  },
  { 
    id: 9, 
    nom: 'Biberon', 
    description: 'Biberon en plastique sans BPA, anti-colique.', 
    prix: 7.99, 
    devise: 'USD',
    categorie: 'Alimentation',
    type: 'Biberon',
    taille: ['240 ml', '350 ml'], // en ml
    couleur: ['Transparent', 'Bleu'],
    imageUrl: ['/assets/imagesProduits/009.jpeg']
  },
  { 
    id: 10, 
    nom: 'Tasse apprentissage', 
    description: 'Tasse avec poignées pour apprendre à boire.', 
    prix: 4.99, 
    devise: 'USD',
    categorie: 'Alimentation',
    type: 'Tasse',
    taille: ['150 ml'], // en ml
    couleur: ['Rose'],
    imageUrl: ['/assets/imagesProduits/010.jpeg']
  },
  { 
    id: 11, 
    nom: 'Jouet à empiler', 
    description: 'Anneaux colorés en plastique résistant à empiler.', 
    prix: 9.99, 
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Construction',
    taille: ['20cm'],
    couleur: ['Multicolore'],
    imageUrl: ['/assets/imagesProduits/011.jpeg']
  },
  {
    id: 12, 
    nom: 'Puzzle en bois', 
    description: 'Puzzle éducatif en bois 12 pièces pour enfant.', 
    prix: 14.99,
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Puzzle',
    taille: ['20x20cm'],
    couleur: ['Bois', 'Couleurs'],
    imageUrl: ['/assets/imagesProduits/012.jpeg']
  },
  { 
    id: 13, 
    nom: 'Casquette enfant', 
    description: 'Casquette légère et colorée, protection UV.', 
    prix: 5.99, 
    devise: 'USD',
    categorie: 'Accessoire',
    type: 'Chapeau',
    taille: ['48 cm'], // tour de tête
    couleur: ['Rouge', 'Blanc'],
    imageUrl: ['/assets/imagesProduits/013.jpeg']
  },
  { 
    id: 14, 
    nom: 'Veste bébé', 
    description: 'Veste chaude en polaire, avec capuche.', 
    prix: 19.99, 
    devise: 'USD',
    categorie: 'Vêtement',
    type: 'Veste',
    taille: ['9-12 mois'],
    couleur: ['Gris anthracite'],
    imageUrl: ['/assets/imagesProduits/014.jpeg']
  },
  { 
    id: 15, 
    nom: 'Jouet musical', 
    description: 'Petit xylophone en bois pour débuter la musique.', 
    prix: 16.99, 
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Musical',
    taille: ['Taille unique'],
    couleur: ['Bois', 'Métal'],
    imageUrl: ['/assets/imagesProduits/015.jpeg']
  },
  { 
    id: 16, 
    nom: 'Doudou', 
    description: 'Doudou plat en forme de lapin, très doux.', 
    prix: 12.99,
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Doudou',
    taille: ['25x25cm'],
    couleur: ['Crème'],
    imageUrl: ['/assets/imagesProduits/016.jpeg']
  },
  { 
    id: 17, 
    nom: 'Balle sensorielle', 
    description: 'Balle colorée avec différentes textures pour la préhension.', 
    prix: 8.99,
    devise: 'USD',
    categorie: 'Jouet',
    type: 'Éveil',
    taille: ['10 cm', '15 cm'], // en cm
    couleur: ['Orange' ,'Bleu'],
    imageUrl: ['/assets/imagesProduits/017.jpeg']
  },
  { 
    id: 18, 
    nom: 'Tapis d’éveil', 
    description: 'Tapis d\'éveil rembourré avec arches et jouets amovibles.', 
    prix: 24.99,
    devise: 'USD',
    categorie: 'Équipement',
    type: 'Tapis',
    taille: ['80x80cm'],
    couleur: ['Motifs jungle'],
    imageUrl: ['/assets/imagesProduits/018.jpeg']
  }
];