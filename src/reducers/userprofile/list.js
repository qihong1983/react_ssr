 export const List = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			tableList: [],
 			os: 24
 		};
 	}

 	switch (action.type) {
 		case "tableList":
 			console.log(state, '&&&&&&');
 			console.log(action.type, '&&&&&action.type');
 			console.log(action.payload, '&&&&&action.payload');
 			console.log(Object.assign({}, state, {
 				tableList: action.payload
 			}));
 			return Object.assign({}, state, {
 				tableList: action.payload
 			});
 		case "os":
 			return '24';
 		default:
 			return state;
 	}
 }