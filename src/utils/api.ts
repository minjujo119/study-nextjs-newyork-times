const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getCategories(){
  const response = await fetch(`${API_URL}/lists`);
  const data = await response.json();
  return data.results;
};

export const getBooks = async (categoryName:string) => {
  const response = await fetch(`${API_URL}/list?name=${categoryName}`)
  const data = await response.json();
  return data.results;
}
