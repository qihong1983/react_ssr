 export const Login = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			login: true
 		};
 	}

 	switch (action.type) {
 		case "login":
 			return Object.assign({}, state, {
 				login: action.payload
 			});
 		default:
 			return state;
 	}
 }