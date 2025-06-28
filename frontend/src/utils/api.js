import { APIkey, NEWSAPI_URL, BASE_URL } from "./constants";

// ✅ Checks API response and throws on error
export function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Error: ${res.status}`));
}

// ✅ Utility function for fetching
function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

// ✅ Checks JWT token for user
export const checkToken = (token) =>
  fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);

// ✅ NewsAPI request (no issues)
export function getNewsArticles(searchTerm) {
  console.log("Fetching from:", NEWSAPI_URL);
  console.log("API Key:", APIkey);

  return request(`${NEWSAPI_URL}/everything?q=${searchTerm}&apiKey=${APIkey}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIkey,
    },
  });
}

// ✅ Delete a saved article
export function deleteArticle(articleId, token) {
  console.log({ articleId, token });

  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

// ✅ Get all saved articles
export function getArticles(token) {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

// ✅ Save a news article
export function saveArticle(article, token) {
  console.log({ article, token });

  const { title, content, urlToImage, url, keyword } = article;

  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, content, urlToImage, url, keyword }),
  }).then(checkResponse);
}

export const loginUser = ({ email, password }) => {
  console.log("Logging in with:", { email, password });

  if (!email || !password) {
    return Promise.reject(new Error("Email and password are required"));
  }

  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

// ✅ Register user
export function registerUser(userData) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then(checkResponse);
}
