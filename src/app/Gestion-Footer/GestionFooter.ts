import { Routes } from "@angular/router";
import { ConditionsGeneralesVentes } from "./conditions-generales-ventes/conditions-generales-ventes";
import { PolitiqueRetour } from "./politique-retour/politique-retour";
import { PolitiqueConfidentialite } from "./politique-confidentialite/politique-confidentialite";
import { Apropos } from "./apropos/apropos";

export const GestionFooter: Routes =[
    { path: 'conditions-generales-ventes', component: ConditionsGeneralesVentes },
    { path: 'politique-retour', component: PolitiqueRetour },
    { path: 'politique-confidentialite', component: PolitiqueConfidentialite },
    { path: 'a-propos', component: Apropos}
]