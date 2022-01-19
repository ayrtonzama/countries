import axios from "axios";

/**
 * Get country details
 *
 * @export
 * @param {*} name
 * @return {*} Request promise
 */
export function getNamedCountries(name) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}name/${name}?fullText=true`
  );
}

/**
 * Get border countries 
 *
 * @export
 * @param {*} array
 * @return Request promise
 */
export function getBorderCountries(array) {
  return axios.get(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }alpha?codes=${array.toString()}&fields=name`
  );
}
