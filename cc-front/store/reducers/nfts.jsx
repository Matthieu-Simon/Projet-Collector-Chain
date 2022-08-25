import { STORE_TEMP_PICTURE } from "../actions/createNft";

export const initialState = {
	list: [
		{
			id: 1,
			token: "0x555",
			name: "Oyster Perpetual",
			description:
				"La Rolex Oyster est un modèle de montre à mouvement automatique fabriquée par Rolex. Il s'agit de la toute première montre-bracelet étanche au monde, dont la fabrication remonte à 1926",
			price: 12.5,
			forSale: true,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m126000-0006_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 2,
			token: "0x666",
			name: "GMT Master",
			description: " Reconnue pour sa robustesse et sa polyvalence, cette montre Rolex affiche simultanément l'heure de deux fuseaux horaires.",
			price: 9,
			forSale: false,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m126710blro-0001_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 3,
			token: "0x777",
			name: "Submarine date",
			description: "L’Oyster Perpetual Submariner est une référence parmi les montres de plongée ; elle a donné une nouvelle dimension à la découverte sous marine.",
			price: 16,
			forSale: false,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m124060-0001_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 4,
			token: "0x777",
			name: "Day date",
			description:
				"Portée par des présidents, des dirigeants et des visionnaires du monde entier. Incarnation ultime du raffinement et du confort. Précision certifiée. Large gamme. Style intemporel. Prestige incomparable.",
			price: 25,
			forSale: true,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m228239-0033_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 5,
			token: "0x555",
			name: "Oyster Perpetual",
			description:
				"La Rolex Oyster est un modèle de montre à mouvement automatique fabriquée par Rolex. Il s'agit de la toute première montre-bracelet étanche au monde, dont la fabrication remonte à 1926",
			price: 12.5,
			forSale: true,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m126000-0006_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 6,
			token: "0x666",
			name: "GMT Master",
			description: " Reconnue pour sa robustesse et sa polyvalence, cette montre Rolex affiche simultanément l'heure de deux fuseaux horaires.",
			price: 9,
			forSale: false,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m126710blro-0001_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 7,
			token: "0x777",
			name: "Submarine date",
			description: "L’Oyster Perpetual Submariner est une référence parmi les montres de plongée ; elle a donné une nouvelle dimension à la découverte sous marine.",
			price: 16,
			forSale: false,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m124060-0001_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
		{
			id: 8,
			token: "0x777",
			name: "Day date",
			description:
				"Portée par des présidents, des dirigeants et des visionnaires du monde entier. Incarnation ultime du raffinement et du confort. Précision certifiée. Large gamme. Style intemporel. Prestige incomparable.",
			price: 25,
			forSale: true,
			media: "https://images.hbjo-online.com/images/rolex/detail2/watch_assets_front_facing/m228239-0033_modelpage_front_facing_landscape.png",
			collection_id: 1,
			user_id: "0x777",
		},
	],
	nftToCreate: {
		name: "",
		media: "",
		tempMedia: "",
	},
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case STORE_TEMP_PICTURE: {
			console.log("entrée dans storeTempPicture avec", action.payload);
			return {
				...state,
				nftToCreate: {
					...state.nftTocreate,
					tempMedia: action.payload,
				},
			};
		}

		default:
			return state;
	}
};

export default reducer;
