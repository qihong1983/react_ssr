	function toQueryString(obj) {
		return obj ? Object.keys(obj).sort().map(function(key) {
			var val = obj[key];
			if (Array.isArray(val)) {
				return val.sort().map(function(val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}
			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	}


	export const ActionList = (token, props) => {

		console.log(props, 'props');

		return function(dispatch) {
			return fetch("http://127.0.0.1:3001/user_profile_list?appCode=" + props.os + "&online=1", {
					// return fetch("http://127.0.0.1:3001/user_profile_list?appCode=&online=1", {
					method: 'GET',
					mode: 'cors',
					cache: 'default',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization': 'Bearer ' + token
					}

				})
				.then(res => res.json())
				.then(res => {
					if (res.status) {

						var objectArr = [];
						var i = 0;
						res.data.map(function(v, k) {
							v.key = i++;
							objectArr.push(v);
						});

						console.log(objectArr, '#####');

						dispatch({
							type: "tableList",
							payload: objectArr
						})
					} else {
						if (res.msg == -1) {
							// alert(-1);
							// props.router.push('/login');
							// console.log(props);
							var nologin = [];
							nologin.push({
								login: -1
							});
							dispatch({
								type: "login",
								payload: false
							})
						}
					}
				});
		};
	};