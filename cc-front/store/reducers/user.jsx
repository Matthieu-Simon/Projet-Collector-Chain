import { DELETE_MEDIA_URL, SET_MEDIA_URL, UPDATE_USER_FIELD, CHANGE_USER_FIELD, LOGOUT, SET_USER_DATA, IS_OPEN_TO_CONTACT, SET_SHOWCASE_NFT } from "../actions/user";

export const initialState = {
	id: 1,
	name: "COFFEY",
	firstname: "John",
	email: "user@user.com",
	nickname: "Green Mile",
	// token: null,
	// logged: false,
	password: "password",
	passwordConfirm: "password",
	wallet: 150,
	isAdmin: false,
	isOpenToContact: true,
	media: "",
	nftOwned: [
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
	],
	//NFT à afficher dans le showcase
	showcaseNftDisplayed: [],
	favorites: [
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
	],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_USER_FIELD:
			return {
				...state,
				// [ action.name ] permet d'utiliser une variable qui sera évaluer (on récupère la valeur de cette variable) pour définir le nom de la propriété
				[action.name]: action.value,
			};
		case UPDATE_USER_FIELD:
			return {
				...state,
				// [ action.name ] permet d'utiliser une variable qui sera évaluer (on récupère la valeur de cette variable) pour définir le nom de la propriété
				[action.name]: action.value,
			};
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};
		case LOGOUT:
			return {
				...state,
				logged: false,
				pseudo: null,
				token: null,
			};
		case IS_OPEN_TO_CONTACT:
			return {
				...state,
				isOpenToContact: action.value,
			};
		case SET_MEDIA_URL:
			return {
				...state,
				[action.name]: URL.createObjectURL(action.value),
			};
		case DELETE_MEDIA_URL:
			return {
				...state,
				[action.name]: null,
			};
		case SET_SHOWCASE_NFT:
			return {
				...state,
				showcaseNftDisplayed: [
					...state.showcaseNftDisplayed,
					{id:action.id, media:action.media}
				]
			};
		default:
			return state;
	}
};

export default reducer;
