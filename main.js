const currency = "UAH";
const exact_date = "2024-09-10";
const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/secondarymarket");
url.searchParams.append("currency", currency);
url.searchParams.append("date", exact_date);
console.log(url.toString());
