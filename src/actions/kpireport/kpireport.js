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

		export const KpiListFn = (token, props) => {

			console.log(props, 'props');

			return function(dispatch) {
				return fetch("http://127.0.0.1:3001/user_kpireport_list", {
						method: 'POST',
						mode: 'cors',
						cache: 'default',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Authorization': 'Bearer ' + token
						},
						body: toQueryString({
							appCode: 27,
							secondParam: 'yourOtherValue'
						})
					})
					.then(res => res.json())
					.then(res => {
						if (res.status) {
							// console.log(res.data);

							// this.setState({
							// 	kpiReportData: res.data
							// });

							console.log(res.data, 'fetch');
							dispatch({
								type: "kpiList",
								payload: res.data
							})

						} else {
							if (res.msg == -1) {

								// console.log(this.props.router.push('/login'));

								// this.props.router.push('/login');
							}
						}

					})

			}
		};