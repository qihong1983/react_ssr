 export const KpiList = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			KpiList: []
 		};
 	}

 	switch (action.type) {
 		case "kpiList":
 			console.log(state, '&&&&&&');
 			console.log(action.type, '&&&&&action.type');
 			console.log(action.payload, '&&&&&action.payload');

 			return Object.assign({}, state, {
 				KpiList: action.payload
 			});


 		default:
 			return state;
 	}
 }