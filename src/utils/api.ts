const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getCategories(){
  await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩화면을 보여주기 위한 딜레이
  const response = await fetch(`${API_URL}/lists`);
  const data = await response.json();
  return data.results;
};

export const getBooks = async (categoryName:string) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩화면을 보여주기 위한 딜레이
  const response = await fetch(`${API_URL}/list?name=${categoryName}`)
  const data = await response.json();
  return data.results;
}
