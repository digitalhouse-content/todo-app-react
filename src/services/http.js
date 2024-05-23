// Agregar a la base

const URL_BASE = "http://localhost:8080/tasks"; // aws

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


function handleResponse(response) {
	if (!response.ok) {
		throw new HttpError(response);
	}

	return response.json();
}

export async function getTodos() {
	const response = await fetch(URL_BASE, {
		method: "GET",
		headers: defaultHeaders,
	})

	return handleResponse(response);
}

export async function addTodo({title}) {
	const response = await fetch(URL_BASE, {
		method: "POST",
		headers: defaultHeaders,
		body: JSON.stringify({ title }),
	})

	return handleResponse(response);
}

export async function updateTodo(todo) {
	const response = await fetch(URL_BASE, {
		method: "PUT",
		headers: defaultHeaders,
		body: JSON.stringify(todo),
	})

	return handleResponse(response);
}

export const deleteTodo = async (id) => {
	await fetch(`${URL_BASE}/${id}`, {
		method: "DELETE",
		headers: defaultHeaders,
	})

	// return handleResponse(response);
}