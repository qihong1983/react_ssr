 export const OpenList = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			opendata: []
 		};
 	}

 	switch (action.type) {
 		case "opendata":
 			return Object.assign({}, state, {
 				opendata: action.payload
 			});
 		default:
 			return state;
 	}
 }