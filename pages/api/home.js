import axios from "axios";
/**
 * Get all countries
 *
 * @export
 * @return {*}  Request promise
 */
export function getAllCountries() {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}all?fields=name,population,region,capital,flag`
  );
}
/**
 * Get searched countries
 *
 * @export
 * @param {*} search
 * @return {*} Request promise
 */
export function getAllCountriesSearch(search) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}name/${search}?fields=name,population,region,capital,flag`
  );
}

/**
 * Get Countries in a region
 *
 * @export
 * @param {*} region
 * @return {*} Request promise
 */
export function getRegion(region) {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL_V3}region/${region}?fields=name,population,region,capital,flags`
  );
}
