// Agregar a la base

const URL_BASE = "http://localhost:3005/todos";

// Defaul headers for fetch
const defaultHeaders = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

// Error class for http
class HttpError extends Error {
	constructor(response) {
		super(`Http Error: ${response.statusText}`);
		this.response = response;
	}
}
