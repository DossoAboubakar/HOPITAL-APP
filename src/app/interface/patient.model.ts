export interface Patient {
  numero_dossier: number;
  nom: string;
  prenom: string;
  localisation: string;
  genre: string;
  date_naissance: Date | null;
  lieu_naissance: string;
  profession: string;
  contact: string;
  email: string;
  groupe_sanguin: string;
  antecedents: string;
}
