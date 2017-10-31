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

		export const getOpenData = (props) => {

			console.log(props, 'props');

			return function(dispatch) {
				return fetch("http://127.0.0.1:3001/user_profile_list_open?appCode=27&online=1", {
						method: 'GET',
						mode: 'cors',
						cache: 'default'

					})
					.then(res => res.json())
					.then(res => {
						if (res.status) {
							console.log(res.data);

							dispatch({
								type: "opendata",
								payload: res.data
							})

						}
						// else {
						// 	console.log(11);
						// 	if (res.msg == -1) {

						// 		// console.log(this.props.router.push('/login'));

						// 		// this.props.router.push('/login');
						// 	}
						// }
					});

			}
		};