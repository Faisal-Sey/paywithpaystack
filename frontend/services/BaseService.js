import Axios from "axios";
import { ACCESS_TOKEN, BACKEND_DOMAIN } from "../utils/constants/systemSetting";

export class BaseService {

	ping = () => {
		return Axios({
			url: `${BACKEND_DOMAIN}/api/ping/`,
			method: "POST",
			data: "",
		});
	};

	get = (url, auth) => {
		if (auth) {
			return Axios({
				url: `${BACKEND_DOMAIN}/${url}`,
				method: "GET",
				headers: {
					Authorization: `Bearer ${this.getAccessToken()}`,
				},
			});
		}
		return Axios({
			url: `${BACKEND_DOMAIN}/${url}`,
			method: "GET",
		});
	};

	post = (url, model, auth) => {
		if (auth) {
			return Axios({
				url: `${BACKEND_DOMAIN}/${url}`,
				method: "POST",
				data: model,
				headers: {
					Authorization: `Bearer ${this.getAccessToken()}`,
				},
			});
		}
		return Axios({
			url: `${BACKEND_DOMAIN}/${url}`,
			method: "POST",
			data: model,
		});
	};

	put = (url, model, auth) => {
		if (auth) {
			return Axios({
				url: `${BACKEND_DOMAIN}/${url}`,
				method: "PUT",
				data: model,
				headers: {
					Authorization: `Bearer ${this.getAccessToken()}`,
				},
			});
		}
		return Axios({
			url: `${BACKEND_DOMAIN}/${url}`,
			method: "PUT",
			data: model,
		});
	};

	delete = (url) => {
		return Axios({
			url: `${BACKEND_DOMAIN}/${url}`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${this.getAccessToken()}`,
			},
		});
	};
}
