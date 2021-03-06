export function getPost() {
	return (dispath => {
		fetch('http://localhost:8000/news')
			.then(result => {
				return result.json();
			})
			.then(data => {
				dispath({
					type: "GET_NEWS",
					payload: data.articles
				});
			});
	});
}