import { defineStore } from 'pinia'

export const useDefaultStore = defineStore({
    id: 'default',
    state: () => ({
        "projets": [
            {
                "nom": "Pizzeria",
                "id": 1,
                "description": "Site d'une pizzeria avec un back-office pour gérer les opérations CRUD sur les entités.",
                "frameworks": [
                    "Symfony",
                    "VueJS"
                ],
                "images": [
                    { src: require('../../public/pizzeria1.png'), text: 'Photo Site Symfony/VueJS' },
                    { src: require('../../public/pizzeria2.png'), text: 'Photo Site Symfony/VueJS' },
                    { src: require('../../public/pizzeria3.png'), text: 'Photo Site Symfony/VueJS' },
                    { src: require('../../public/pizzeria4.png'), text: 'Photo Site Symfony/VueJS' }
                ]
            },
            {
                "nom": "PorteFolio",
                "id": 2,
                "description": "Mon portefolio, le site où vous êtes actuellement.",
                "frameworks": [
                    "VueJS"
                ],
                "images": [
                    { src: require('../../public/portefolio1.jpg'), text: 'Photo Site VueJS' },
                    { src: require('../../public/portefolio2.jpg'), text: 'Photo Site VueJS' },
                    { src: require('../../public/portefolio3.jpg'), text: 'Photo Site VueJS' }
                ]
            },
            
        ],
        "frameworks": [
            {
                "nom": "Symfony",
            },
            {
                "nom": "VueJS",
            }

        ]

    }),
    getters: {

    },
    actions: {
    }
})
