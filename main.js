const currency = "EUR";
const exact_date = "10.09.2024";

const url = new URL("https://bank.gov.ua/");
url.pathname = "NBU_ovdp";

url.searchParams.append("date", exact_date);
url.searchParams.append("val_code", currency);
url.searchParams.append("json", "");

console.log(url.toString());