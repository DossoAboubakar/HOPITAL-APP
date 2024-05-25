import { Injectable } from '@angular/core';
import { Customer } from '../interface/cutomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  getCustomersLarge(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
      const data: Customer[] = [
        {
          id: 1000,
          name: 'Kone Emmanuel',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Benton, John B Jr',
          status: 'En examen',
          verified: true,
          activity: 17,
          representative: {
            name: 'Kone Emmanuel',
            image: 'amyelsner.png'
          },
          balance: 70663
        },
        {
          id: 1001,
          name: 'Dosso Aboubakar',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Chanay, Jeffrey A Esq',
          status: 'Traitement termniné',
          verified: false,
          activity: 0,
          representative: {
            name: 'Dosso Aboubakar',
            image: 'annafali.png'
          },
          balance: 82429
        },
        {
          id: 1002,
          name: 'Diarrassouba Ibrahim',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Chemel, James L Cpa',
          status: 'En consultation',
          verified: false,
          activity: 63,
          representative: {
            name: 'Diarrassouba Ibrahim',
            image: 'asiyajavayant.png'
          },
          balance: 28334
        },
        {
          id: 1003,
          name: 'Diarra Yaya',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Feltz Printing Service',
          status: 'En consultation',
          verified: true,
          activity: 37,
          representative: {
            name: 'Diarra Yaya',
            image: 'bernardodominic.png'
          },
          balance: 88521
        },
        {
          id: 1004,
          name: 'Kone Tokafolo',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Printing Dimensions',
          status: 'Traitement termniné',
          verified: true,
          activity: 33,
          representative: {
            name: 'Kone Tokafolo',
            image: 'elwinsharvill.png'
          },
          balance: 93905
        },
        {
          id: 1005,
          name: 'Rakistaba Adama',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Kenya Printing Ltd',
          status: 'Innactif',
          verified: true,
          activity: 50,
          representative: {
            name: 'Rakistaba Adama',
            image: 'ionibowcher.png'
          },
          balance: 65000
        },
        {
          id: 1006,
          name: 'Kobena Bio Paul',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Nigeria Publishing Co',
          status: 'Innactif',
          verified: false,
          activity: 20,
          representative: {
            name: 'Kobena Bio Paul',
            image: 'ivanmagalhaes.png'
          },
          balance: 80000
        },
        {
          id: 1007,
          name: 'Coulibaly Romaric',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Ghana Printers',
          status: 'Dossier en cours...',
          verified: true,
          activity: 45,
          representative: {
            name: 'Coulibaly Romaric',
            image: 'onyamalimba.png'
          },
          balance: 70000
        },
        {
          id: 1008,
          name: 'Tape Nancy',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Ivory Coast Paper Co',
          status: 'En attente',
          verified: false,
          activity: 30,
          representative: {
            name: 'Tape Nancy',
            image: 'stephenshaw.png'
          },
          balance: 72000
        },
        {
          id: 1009,
          name: 'Ncho Bony',
          country: {
            name: 'Ivoirienne',
            code: 'ci'
          },
          company: 'Senegal Printing Services',
          status: 'Innactif',
          verified: true,
          activity: 40,
          representative: {
            name: 'Ncho Bony',
            image: 'xuxuefeng.png'
          },
          balance: 68000
        }
      ];
      
      

      resolve(data);
    });
  }
}
  
  