export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.newsapp.home.kg"
    : "http://localhost:3001";

export const APIkey = "c200de4185fa465ca50a0a30109fa3dc";

export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  year: "numeric",
  day: "numeric",
});

const lastWeek = new Date();
export const getPreviousWeek = () => {
  lastWeek.setDate(new Date().getDate() - 7);
  return lastWeek.toLocaleString("default", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
};
